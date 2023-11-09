import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
} from "react-icons/ai";

const Contact = () => {
    return (
        <>
            <section className="bg-white min-h-[calc(100vh-129px)] mx-auto">
                <div className="w-full min-h-[30vh] bg-gray-300 flex items-center justify-center text-gray-800 font-bold text-[40px] md:text-[60px]">
                    Contact
                </div>
                <section className="py-[50px]">
                    <h2 className="mb-6 text-[32px] font-bold uppercase text-gray-800 sm:text-[40px] lg:text-[36px] xl:text-[40px] text-center">
                        GET IN TOUCH WITH US
                    </h2>
                    <p className="text-center leading-relaxed mb-9 text-body-color max-w-[650px] mx-auto dark:text-black">
                        Feel free to get in touch with me! I'm just a message
                        away, and you can reach out through my Facebook profile
                        or drop me an email. Here are the links to my Facebook
                        profile and my email address for your convenience. Don't
                        hesitate to reach out—I look forward to hearing from
                        you!
                    </p>
                    <h3 className="text-center text-gray-800 hover:text-gray-900 duration-200 font-medium">
                        support@saidurrahman.org
                    </h3>
                </section>
                <section className="max-w-[500px] mx-auto flex justify-center gap-[30px]">
                    <a href="#" className="group">
                        <AiFillFacebook className="text-[30px] group-hover:scale-125 duration-300" />
                    </a>
                    <a href="#" className="group">
                        <AiFillInstagram className="text-[30px] group-hover:scale-125 duration-300" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/saidurrahmanorg/"
                        className="group"
                        target="_linkedIN"
                    >
                        <AiFillLinkedin className="text-[30px] group-hover:scale-125 duration-300" />
                    </a>
                </section>
            </section>
        </>
    );
};

export default Contact;
