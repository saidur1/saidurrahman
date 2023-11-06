import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full bg-gray-800 py-[20px] h-[65px]">
            <section className="container flex justify-center gap-[30px]">
                <Link href="/privacy" className="text-white">
                    Privacy
                </Link>
                <Link href="/" className="text-white">
                    Terms
                </Link>
                <a
                    href="https://www.youtube.com/saidurrahmanTV?sub_confirmation=1"
                    target="_youtube"
                    className="text-white"
                >
                    YouTube
                </a>
                <Link href="/" className="text-white">
                    NewsLetter
                </Link>
            </section>
        </div>
    );
};

export default Footer;
