import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, carBrand, carModel, carYear, serviceId, date, time } = body;

    if (!name || !phone || !carBrand || !carModel || !carYear || !serviceId || !date || !time) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const booking = await db.booking.create({
      data: {
        name,
        phone,
        carBrand,
        carModel,
        carYear,
        serviceId,
        date,
        time,
        status: 'confirmed',
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const bookings = await db.booking.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}
