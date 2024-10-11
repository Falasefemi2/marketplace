import { Button } from "@/components/ui/button"
import { LayoutGrid, Settings, ShoppingBag } from "lucide-react"
import Link from "next/link"


export default function Sidebar() {
    return (
        <>

            <aside className="hidden lg:flex w-64 flex-col bg-background border-r p-4">
                <nav className="space-y-2">
                    <Button asChild variant="ghost" className="w-full justify-start">
                        <Link href='/dashboard'>
                            <span className="flex items-center">
                                <LayoutGrid className="mr-2 h-4 w-4" />
                                Dashboard
                            </span>
                        </Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full justify-start">
                        <Link href="/product">
                            <span className="flex items-center">
                                <ShoppingBag className="mr-2 h-4 w-4" />
                                Products
                            </span>
                        </Link>
                    </Button>
                    <Button asChild variant="ghost" className="w-full justify-start">
                        <Link href="/setting">
                            <span className="flex items-center">
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </span>
                        </Link>
                    </Button>
                </nav>
            </aside></>
    )
}