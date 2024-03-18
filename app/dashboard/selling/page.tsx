"use client";

import { Button } from "@/components/ui/button";
import { Plus, Send } from "lucide-react";
import Link from "next/link";

const SellingPage = () => {
    return (
        <section className="flex items-center justify-center min-h-[70vh]">
            <div className="max-w-3xl text-center">
                <div>
                    <span className="inline-block w-auto px-6 py-3">
                        <Send size={64} />
                    </span>
                    <h1 className="mt-8 text-2xl font-bold tracking-tight">When you start selling, your listings will appear here.</h1>
                </div>

                <div className="mt-8">
                    <Link href="/dashboard/selling/create">
                        <Button size="lg" className="flex items-center justify-center max-w-sm mx-auto mt-18">
                            <Plus className="mr-2" />
                            Create Listing
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default SellingPage;
