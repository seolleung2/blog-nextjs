import { prisma } from '@service/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const JSON_RESPONSE = {
    status: 'success',
    statusCode: 200,
    total: messages.length,
    messages,
  };
  return NextResponse.json(JSON_RESPONSE);
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();

    const feedback = await prisma.message.create({
      data: json,
    });

    const JSON_RESPONSE = {
      status: 'success',
      data: {
        feedback,
      },
    };

    return new NextResponse(JSON.stringify(JSON_RESPONSE), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    const ERROR_RESPONSE = {
      status: 'error',
      message: error.message,
    };

    return new NextResponse(JSON.stringify(ERROR_RESPONSE), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
