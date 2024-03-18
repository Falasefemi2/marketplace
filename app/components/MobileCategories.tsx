"use client";

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react";
import MobileCategoriesBox from "./MobileCategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { categories } from "./Categories";
import { Breakpoint, BreakpointProvider } from 'react-socks';


const MobileCategories = () => {
    const params = useSearchParams()
    const category = params.get('category')
    const pathName = usePathname()

    const isMainPage = pathName === '/dashboard';

    if (!isMainPage) {
        return null
    }
    return (
        <>
            <Breakpoint small down>

                <Sheet>
                    <SheetTrigger className="flex items-center justify-center"><AlignJustify className="mr-2" /> Categories</SheetTrigger>
                    <SheetContent>
                        <SheetTitle>Top Categories</SheetTitle>
                        {categories.map((item) => (
                            <MobileCategoriesBox
                                key={item.label}
                                label={item.label}
                                Icon={item.icon}
                                selected={category === item.label}
                            />
                        ))}
                    </SheetContent>
                </Sheet>
            </Breakpoint>
        </>
    );
}

export default MobileCategories;