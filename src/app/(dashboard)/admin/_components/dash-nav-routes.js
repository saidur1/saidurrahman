"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAdminInfoFromCookie } from "@/lib/get-admin-info-from-cookie";
import { LogOut, User } from "lucide-react";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashNavRoutes = () => {
    const [profile, setProfile] = useState("");
    const [currentUserId, setCurrentuserId] = useState("");
    const cookies = useCookies();
    const router = useRouter();

    useEffect(() => {
        const { _id, profilePhoto } = getAdminInfoFromCookie(
            cookies.get("authToken")
        );
        // set info to the state
        setProfile(profilePhoto);
        setCurrentuserId(_id);
    }, []);

    const logouthandler = () => {
        cookies.remove("authToken");
        router.replace("/auth");
    };
    return (
        <div className="ml-auto">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarImage src={profile} alt="@shadcn" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36" side="bottom">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logouthandler}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default DashNavRoutes;
