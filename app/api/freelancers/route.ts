import { NextResponse } from "next/server";
import freelancersData from "./data.json";

export async function GET() {
  return NextResponse.json(freelancersData);
}
