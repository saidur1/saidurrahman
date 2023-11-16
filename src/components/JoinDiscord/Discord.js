import Link from "next/link";

const Discord = () => {
    return (
        <div>
            <Link
                href="/accountability-community/request"
                className="bg-black/70 hover:bg-black/90 text-white/80 rounded-sm px-10 py-2 duration-200 "
            >
                Join Now
            </Link>
        </div>
    );
};

export default Discord;
