"use client"

import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"



const Header = () => {
    const navItems = [
        { href: "#", label: "About" },
        { href: "#", label: "Features" },
        { href: "#", label: "Pricing" },
    ]

    const [isOpen, setIsOpen] = useState(false)


    return (
        <header className="container mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-primary">AIMarket</h1>
                <div className="hidden md:flex space-x-4">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href} className="text-primary hover:text-primary/80">
                            {item.label}
                        </a>
                    ))}
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className=' bg-gradient-to-b from-blue-50 to-white'>
                        <SheetHeader>
                            <SheetTitle className="text-primary">AIMarket</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col space-y-4 mt-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-primary hover:text-primary/80"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}

export default Header;
