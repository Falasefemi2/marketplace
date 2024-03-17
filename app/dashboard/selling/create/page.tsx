
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserRound } from "lucide-react";
import CreateList from "@/app/components/CreateList";




const Create = async () => {

    const { isAuthenticated, getUser } = getKindeServerSession();

    const user = await getUser();


    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                {(await isAuthenticated()) ? (
                    <div className="flex items-center gap-x-5">
                        <Image src={user?.picture as string} alt="img" width={50} height={50} style={{ borderRadius: '50%' }} />
                        <div>
                            <p className="capitalize">{`${user?.given_name} ${user?.family_name}`}</p>
                            <p className="text-muted-foreground text-sm">Listening to Marketplace</p>
                        </div>
                    </div>
                ) : (
                    <Avatar>
                        <AvatarFallback>
                            <UserRound />
                        </AvatarFallback>
                    </Avatar>
                )}
            </div>

            <CreateList />


        </div>
    );
}

export default Create;