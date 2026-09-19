import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) throw new Error("Supabase 서버 환경변수가 설정되지 않았습니다.");
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function GET() {
  try {
    const supabase = getAdminClient();
    const { data, error } = await supabase
      .from("business_registrations")
      .select("id,business_type,business_name,address,description,opening_hours,price_info,image_urls,approved_at")
      .eq("is_approved", true)
      .order("approved_at", { ascending: false });
    if (error) throw error;
    return NextResponse.json({ ok: true, data: data ?? [] });
  } catch (error) {
    console.error("공개 업체 목록 오류:", error);
    return NextResponse.json({ ok: false, message: "업체 정보를 불러오지 못했습니다." }, { status: 500 });
  }
}
