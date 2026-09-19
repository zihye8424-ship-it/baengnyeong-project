import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getAdminClient() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.SUPABASE_URL;

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase 관리자 환경변수가 설정되지 않았습니다.");
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function isValidAdminPassword(password: unknown) {
  const expected =
    process.env.ADMIN_PASSWORD ||
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  return Boolean(
    expected &&
      typeof password === "string" &&
      password === expected
  );
}

function storagePathFromPublicUrl(url: string) {
  const marker = "/storage/v1/object/public/stay-images/";
  const index = url.indexOf(marker);
  if (index === -1) return null;
  return decodeURIComponent(url.slice(index + marker.length));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, action, id, image_urls } = body ?? {};

    if (!isValidAdminPassword(password)) {
      return NextResponse.json(
        { ok: false, message: "관리자 인증에 실패했어요." },
        { status: 401 }
      );
    }

    const supabase = getAdminClient();

    if (action === "list") {
      const { data, error } = await supabase
        .from("business_registrations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      return NextResponse.json({ ok: true, data: data ?? [] });
    }

    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { ok: false, message: "업체 등록 ID가 없습니다." },
        { status: 400 }
      );
    }

    if (action === "approve") {
      const { error } = await supabase
        .from("business_registrations")
        .update({
          is_approved: true,
          approved_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (error) throw error;

      return NextResponse.json({ ok: true });
    }

    if (action === "delete") {
      const paths = Array.isArray(image_urls)
        ? image_urls
            .filter((url): url is string => typeof url === "string")
            .map(storagePathFromPublicUrl)
            .filter((path): path is string => Boolean(path))
        : [];

      if (paths.length > 0) {
        const { error: storageError } = await supabase.storage
          .from("stay-images")
          .remove(paths);

        if (storageError) throw storageError;
      }

      const { error } = await supabase
        .from("business_registrations")
        .delete()
        .eq("id", id);

      if (error) throw error;

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, message: "지원하지 않는 관리자 작업입니다." },
      { status: 400 }
    );
  } catch (error) {
    console.error("business registrations admin error:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "관리자 요청 처리 중 오류가 발생했어요.",
      },
      { status: 500 }
    );
  }
}
