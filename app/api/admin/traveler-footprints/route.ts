import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Supabase 관리자 환경변수가 설정되지 않았어요. NEXT_PUBLIC_SUPABASE_URL과 SUPABASE_SERVICE_ROLE_KEY를 확인해주세요."
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = typeof body?.password === "string" ? body.password : "";
    const action = typeof body?.action === "string" ? body.action : "";

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { ok: false, message: "ADMIN_PASSWORD 환경변수를 확인해주세요." },
        { status: 500 }
      );
    }

    if (!password || password !== adminPassword) {
      return NextResponse.json(
        { ok: false, message: "관리자 인증이 필요해요." },
        { status: 401 }
      );
    }

    const supabase = getAdminClient();

    if (action === "list") {
      const { data, error } = await supabase
        .from("traveler_footprints")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      return NextResponse.json({ ok: true, data: data ?? [] });
    }

    const id = Number(body?.id);

    if (!Number.isFinite(id)) {
      return NextResponse.json(
        { ok: false, message: "사진 번호가 올바르지 않아요." },
        { status: 400 }
      );
    }

    if (action === "approve") {
      const { error } = await supabase
        .from("traveler_footprints")
        .update({ is_approved: true })
        .eq("id", id);

      if (error) throw error;

      return NextResponse.json({ ok: true });
    }

    if (action === "delete") {
      const imageUrl =
        typeof body?.image_url === "string" ? body.image_url : "";

      const { error: deleteRowError } = await supabase
        .from("traveler_footprints")
        .delete()
        .eq("id", id);

      if (deleteRowError) throw deleteRowError;

      if (imageUrl) {
        const marker = "/traveler-footprints/";
        const markerIndex = imageUrl.indexOf(marker);

        if (markerIndex >= 0) {
          const encodedPath = imageUrl.slice(markerIndex + marker.length);
          const storagePath = decodeURIComponent(encodedPath);

          const { error: storageError } = await supabase.storage
            .from("traveler-footprints")
            .remove([storagePath]);

          if (storageError) {
            console.error("섬 발자국 Storage 삭제 오류:", storageError);
          }
        }
      }

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, message: "지원하지 않는 관리자 작업이에요." },
      { status: 400 }
    );
  } catch (error) {
    console.error("traveler-footprints admin API error:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "섬 발자국 관리자 요청을 처리하지 못했어요.",
      },
      { status: 500 }
    );
  }
}
