import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const { password, action, id, image_url } = await request.json();

    if (
      !process.env.ADMIN_PASSWORD ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        {
          ok: false,
          message: "관리자 인증에 실패했습니다.",
        },
        { status: 401 }
      );
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceRoleKey) {
      throw new Error(
        "Supabase 관리자 환경변수가 설정되지 않았습니다."
      );
    }

    const supabase = createClient(url, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    if (action === "list") {
      const { data, error } = await supabase
        .from("traveler_footprints")
        .select(
          "id, nickname, island, place_name, story, image_url, is_approved, created_at"
        )
        .order("created_at", { ascending: false });

      if (error) throw error;

      return NextResponse.json({
        ok: true,
        data: data || [],
      });
    }

    if (!id) {
      return NextResponse.json(
        {
          ok: false,
          message: "게시물 ID가 없습니다.",
        },
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
      const { error } = await supabase
        .from("traveler_footprints")
        .delete()
        .eq("id", id);

      if (error) throw error;

      if (image_url && typeof image_url === "string") {
        try {
          const marker =
            "/storage/v1/object/public/traveler-footprints/";

          if (image_url.includes(marker)) {
            const imagePath = decodeURIComponent(
              image_url.split(marker)[1]
            );

            await supabase.storage
              .from("traveler-footprints")
              .remove([imagePath]);
          }
        } catch (storageError) {
          console.error("사진 파일 삭제 오류:", storageError);
        }
      }

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      {
        ok: false,
        message: "지원하지 않는 요청입니다.",
      },
      { status: 400 }
    );
  } catch (error) {
    console.error("섬 발자국 관리자 API 오류:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "섬 발자국 관리자 요청 처리 중 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}