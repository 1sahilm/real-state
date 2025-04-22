import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { firstName, lastName, email, phone, message, project , channel_id , subject , rep_id } = body;

  const payload: Record<string, string> = {
    channel_id: channel_id || 'Contact_Us',
    subject: subject || 'Lead from Contact_Us',
    rep_id: rep_id || 'rohit@infranium.in',
    notes: message || 'I am Interested in this project. Please call me',
    f_name: firstName || '',
    // l_name: lastName || '',
    email: email || '',
    phonefax: phone || '',
    project: project || 'Infranium',
    alert_client: '0',
    alert_rep: '0',
    USOURCE: 'GSource',
    UMEDIUM: 'GMedium',
    utm_campaign: 'Google',
    utm_ad_group: 'GGroup',
    utm_term: 'Gterm',
    utm_device: 'GDevice',
    utm_gclid: 'Glid',
    utm_placement: 'GPlacement',
    utm_ad_name: 'GAdname',
  };

  console.log("Payload sent to Paramanta:", payload);

  const apiKey = 'M56FGBJ6rDADGsMxwKKD6oHuNA';
  const appName = 'GB0oN';
  const url = 'https://cloud.paramantra.com/paramantra/api/data/new/format/json';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-API-KEY': apiKey,
        'ACTION-ON': appName,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(apiKey + ':').toString('base64'),
      },
      body: new URLSearchParams(payload).toString(),
    });

    const data = await response.json();
    console.log("Response from Paramanta API:", data);

    console.log("API Key:", apiKey);
console.log("App Name:", appName);

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: data?.error || 'Unknown error' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send lead' },
      { status: 500 }
    );
  }
}
