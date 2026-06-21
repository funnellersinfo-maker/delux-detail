import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

const ALL_SLOTS = [
  '08:00', '09:00', '10:00', '11:00',
  '13:00', '14:00', '15:00', '16:00', '17:00'
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json({ error: 'Date is required' }, { status: 400 });
    }

    const bookings = await db.booking.findMany({
      where: { date },
      select: { time: true },
    });

    const bookedTimes = bookings.map(b => b.time);
    const availableSlots = ALL_SLOTS.filter(slot => !bookedTimes.includes(slot));

    return NextResponse.json({ availableSlots, allSlots: ALL_SLOTS });
  } catch (error) {
    console.error('Error fetching available slots:', error);
    return NextResponse.json({ error: 'Failed to fetch available slots' }, { status: 500 });
  }
}
