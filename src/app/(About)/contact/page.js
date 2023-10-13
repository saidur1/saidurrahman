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
                    <p className="text-center leading-relaxed mb-9 text-body-color max-w-[650px] mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eius tempor incididunt ut labore e dolore magna
                        aliqua. Ut enim adiqua minim veniam quis nostrud
                        exercitation ullamco
                    </p>
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
