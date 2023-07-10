import { prisma } from '@service/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const messages = await prisma.message.findMany();

  const JSON_RESPONSE = {
    status: 'success',
    statusCode: 200,
    total: messages.length,
    messages,
  };
  return NextResponse.json(JSON_RESPONSE);
}
