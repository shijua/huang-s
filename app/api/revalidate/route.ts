import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { locales } from "@/lib/i18n/config";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const expected = process.env.REVALIDATE_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  for (const locale of locales) {
    revalidatePath(`/${locale}`);
  }

  return NextResponse.json({
    ok: true,
    revalidated: locales.map((l) => `/${l}`),
    at: new Date().toISOString(),
  });
}
