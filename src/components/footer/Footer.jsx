import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full bg-black/80 py-[20px] h-[65px]">
            <section className="container flex justify-center gap-[30px]">
                <Link
                    href="/privacy"
                    className="text-white/70 hover:text-white/90"
                >
                    Privacy
                </Link>
                <Link
                    href="/terms"
                    className="text-white/70 hover:text-white/90"
                >
                    Terms
                </Link>
                <a
                    href="https://www.youtube.com/saidurrahmanTV?sub_confirmation=1"
                    target="_youtube"
                    className="text-white/70 hover:text-white/90"
                >
                    YouTube
                </a>
                <Link
                    href="/newsletter"
                    className="text-white/70 hover:text-white/90"
                >
                    NewsLetter
                </Link>
            </section>
        </div>
    );
};

export default Footer;
