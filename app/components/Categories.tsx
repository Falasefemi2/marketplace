"use client";

import { Cable, Camera, Car, Dog, Goal, Guitar, Heart, HomeIcon, Shirt, Shovel, Tag, Tent, ToyBrick } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "./CategoryBox";


export const categories = [
    {
        label: 'Vehicles',
        icon: Car
    },
    {
        label: 'Property Rentals',
        icon: Tent
    },
    {
        label: 'Apparel',
        icon: Shirt
    },
    {
        label: 'Classifieds',
        icon: Tag
    },
    {
        label: 'Electronics',
        icon: Cable
    },
    {
        label: 'Entertainment',
        icon: Camera
    },
    {
        label: 'Family',
        icon: Heart
    },
    {
        label: 'Garden & Outdoor',
        icon: Shovel
    },
    {
        label: 'Home Sales',
        icon: HomeIcon
    },
    {
        label: 'Musical Instruments',
        icon: Guitar
    },
    {
        label: 'Pet Supplies',
        icon: Dog
    },
    {
        label: 'Sporting Goods',
        icon: Goal
    },
    {
        label: 'Toys & Games',
        icon: ToyBrick
    }
]

const Categories = () => {
    const params = useSearchParams()
    const category = params.get('category')
    const pathName = usePathname()

    const isMainPage = pathName === '/dashboard';

    if (!isMainPage) {
        return null
    }


    return (
        <div className="pt-4">
            <p>Categories</p>
            <div className="flex flex-col items-start justify-start">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        Icon={item.icon}
                        selected={category === item.label}
                    />
                ))}
            </div>
        </div>
    );
}

export default Categories;