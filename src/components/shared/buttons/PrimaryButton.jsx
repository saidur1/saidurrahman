import Link from "next/link";

const PrimaryButton = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="py-[14px] px-[56px] bg-black/70 text-white font-semibold text-[16px] leading-[26px] text-center hover:bg-black/80 duration-200"
        >
            {title}
        </Link>
    );
};

export default PrimaryButton;
