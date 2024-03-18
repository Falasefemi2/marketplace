import { NextResponse } from "next/server";

import prisma from "@/app/libs/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(request: Request) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return NextResponse.error();
    }

    const body = await request.json();
    const { title, description, imageSrc, category, condition, price } = body;

    const listing = await prisma.listing.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            condition,
            price: parseInt(price, 10),
            userId: user.id,
        },
    });

    return NextResponse.json(listing);
}
