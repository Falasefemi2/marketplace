"use client";

import { LucideIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from 'query-string'
import { usePathname } from "next/navigation";



const MobileCategoriesBox = (
    {
        Icon,
        label,
        selected = false
    }: {
        Icon: LucideIcon
        label: string
        selected?: boolean
    }) => {
    const router = useRouter();
    const params = useSearchParams();
    const pathName = usePathname();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category
        }

        const url = qs.stringifyUrl({
            url: '/dashboard',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router])

    return (
        <div>
            <>
                <span className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground" onClick={handleClick}>
                    <Icon size={26} className="mr-2 h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">
                        {label}
                    </span>
                </span>
            </>
        </div>
    );
}

export default MobileCategoriesBox;