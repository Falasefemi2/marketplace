

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



const Navbar = async () => {
    const { isAuthenticated } = getKindeServerSession();
    return (
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold md:text-3xl hidden md:block">Market<span className=" text-blue-700">Place</span></h1>
                </Link>
                <div className="flex items-center gap-x-5">
                    {(await isAuthenticated()) ? (
                        <LogoutLink>
                            <Button>Log out</Button>
                        </LogoutLink>
                    ) : (
                        <div className="flex items-center gap-x-5">
                            <LoginLink>
                                <Button>Sign In</Button>
                            </LoginLink>

                            <RegisterLink>
                                <Button variant="secondary">Sign Up</Button>
                            </RegisterLink>
                        </div>
                    )}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;