import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { UserButton } from "@clerk/nextjs"
import { LayoutGrid, Menu, Settings, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { auth, currentUser } from "@clerk/nextjs/server"
import { db } from "@/app/db"
import { users } from "@/app/db/schema"
import { sql } from "drizzle-orm"


export default async function Header() {
    const { userId } = auth();

    const user = await currentUser();

    if (user && userId) {

        try {
            const newUser = await db.insert(users).values({
                email: user.emailAddresses[0]?.emailAddress || "",
                profileImageUrl: user.imageUrl || "",
                firstName: user.firstName || "",
                lastName: user.lastName || "",
            })
                .onConflictDoUpdate({
                    target: users.id,
                    set: {
                        email: sql`${user.emailAddresses[0]?.emailAddress}`,
                        profileImageUrl: sql`${user.imageUrl}`,
                        firstName: sql`${user.firstName}`,
                        lastName: sql`${user.lastName}`,
                        updatedAt: sql`CURRENT_TIMESTAMP`,
                    },
                })
                .returning();

            console.log("User created or updated:", newUser[0]);
        } catch (error) {
            console.error("Error creating user in database:", error);
        }
    }

    return (
        <>
            <header className="flex items-center justify-between p-4 bg-background border-b">
                <div className="flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col space-y-4 mt-4">
                                <Button asChild variant="ghost" className="justify-start">
                                    <Link href="/dashboard">
                                        <span className="flex items-center">
                                            <LayoutGrid className="mr-2 h-4 w-4" />
                                            Dashboard
                                        </span>
                                    </Link>
                                </Button>
                                <Button asChild variant="ghost" className="justify-start">
                                    <Link href="/product">
                                        <span className="flex items-center">
                                            <ShoppingBag className="mr-2 h-4 w-4" />
                                            Products
                                        </span>
                                    </Link>
                                </Button>
                                <Button asChild variant="ghost" className="justify-start">
                                    <Link href="/setting">
                                        <span className="flex items-center">
                                            <Settings className="mr-2 h-4 w-4" />
                                            Settings
                                        </span>
                                    </Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h1 className="text-xl font-bold ml-2 lg:ml-0">AI Marketplace</h1>
                </div>
                {user ? (
                    <>
                        <UserButton />
                    </>
                ) : (
                    <></>
                )}
            </header>
        </>

    )
}