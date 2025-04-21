// app/api/send-leads/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log("Incoming request:", body);

  const { firstName, lastName, email, phone, message , project } = body;

  const payload = {
    notes: message || 'I am Interested in this project.Please call me',
    f_name: firstName || '',
    email: email || '',
    phonefax: phone || '',
    project: 'Infranium',
  };

  const apiKey = 'zD10E4ptFMHuuJz63pKFuBHM1E';
  const appName = 'L51yC';
  const url = 'https://cloud.paramantra.com/paramantra/api/data/new/format/json';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-API-KEY': apiKey,
        'ACTION-ON': appName,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(
        Object.entries(payload).reduce((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {} as Record<string, string>)
      ).toString(),
    });

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send lead' }, { status: 500 });
  }
}
