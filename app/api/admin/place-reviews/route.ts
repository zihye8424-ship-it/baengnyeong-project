import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const { password, action, id } = await request.json();

    if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ ok: false, message: "관리자 인증에 실패했습니다." }, { status: 401 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceRoleKey) {
      throw new Error("Supabase 관리자 환경변수가 설정되지 않았습니다.");
    }

    const supabase = createClient(url, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    if (action === "list") {
      const { data, error } = await supabase
        .from("place_reviews")
        .select("id, place_slug, nickname, rating, content, status, created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return NextResponse.json({ ok: true, data: data || [] });
    }

    if (!id) {
      return NextResponse.json({ ok: false, message: "리뷰 ID가 없습니다." }, { status: 400 });
    }

    if (action === "approve") {
      const { error } = await supabase.from("place_reviews").update({ status: "approved" }).eq("id", id);
      if (error) throw error;
      return NextResponse.json({ ok: true });
    }

    if (action === "delete") {
      const { error } = await supabase.from("place_reviews").delete().eq("id", id);
      if (error) throw error;
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false, message: "지원하지 않는 요청입니다." }, { status: 400 });
  } catch (error) {
    console.error("리뷰 관리자 API 오류:", error);
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : "리뷰 관리자 요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
