"use client";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    User,
} from "@nextui-org/react";
const DashBoardNavbar = () => {
    const items = [
        {
            id: 1,
            name: "My Settings",
            href: "/my-settings",
        },
        {
            id: 2,
            name: "Team Settings",
            href: "/team-settings",
        },
    ];
    return (
        <div className="w-full h-full flex items-center justify-end pr-20">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <User
                        name="Saidur"
                        description="admin"
                        avatarProps={{
                            src: "https://res.cloudinary.com/dzlrpspps/image/upload/v1699577047/Projects/Saidur/said_afxj8v.png",
                        }}
                    />
                </DropdownTrigger>
                <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                >
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">saidur.rahman@live.com</p>
                    </DropdownItem>
                    {items?.map(({ href, id, name }) => (
                        <DropdownItem key={id} color="danger">
                            {name}
                        </DropdownItem>
                    ))}
                    <DropdownItem key="logout" color="danger">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default DashBoardNavbar;
