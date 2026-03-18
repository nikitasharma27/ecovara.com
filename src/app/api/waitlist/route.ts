import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
    /*
    try {
        const { email } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 });
        }

        const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
        if (!scriptUrl) {
            console.error('GOOGLE_SCRIPT_URL environment variable is not set');
            return NextResponse.json({ success: false, error: 'Service not configured' }, { status: 500 });
        }

        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error(`Apps Script responded with status: ${response.status}`);
        }

        const result = await response.json();

        if (!result.success) {
            throw new Error(result.error || 'Apps Script returned failure');
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Waitlist submission error:', error);
        return NextResponse.json({ success: false, error: 'Failed to process submission' }, { status: 500 });
    }
    */
    return NextResponse.json({ success: true, message: 'Waitlist is currently inactive. Please email ecovara.co@gmail.com' });
}
