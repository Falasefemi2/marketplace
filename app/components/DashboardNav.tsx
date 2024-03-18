"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./UserNav";
import Categories from "./Categories";



const DashbaordNav = () => {
    const pathName = usePathname()


    return (
        <nav className="grid items-center gap-2">
            {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                    <span className={cn(
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground", pathName === item.href ? "bg-accent" : "bg-transparent"
                    )}>
                        <item.icon className="mr-2 h-4 w-4 text-primary" />
                        <span>{item.name}</span>
                    </span>
                </Link>
            ))}
            <Separator />
            <Categories />
        </nav>
    );
}

export default DashbaordNav;