import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const password =
      typeof body?.password === "string" ? body.password : "";

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "관리자 비밀번호가 서버에 설정되지 않았어요. ADMIN_PASSWORD 환경변수를 확인해주세요.",
        },
        { status: 500 }
      );
    }

    if (password !== adminPassword) {
      return NextResponse.json(
        {
          ok: false,
          message: "비밀번호가 틀렸어요.",
        },
        { status: 401 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("admin-login error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "로그인 요청을 처리하지 못했어요.",
      },
      { status: 400 }
    );
  }
}