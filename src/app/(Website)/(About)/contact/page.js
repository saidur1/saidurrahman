import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";
import Link from "next/link";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <WebWrapper>
      <section className="bg-white min-h-[calc(100vh-129px)] mx-auto">
        <div className="w-full min-h-[30vh] bg-gray-300 flex items-center justify-center text-gray-800 font-bold text-[40px] md:text-[60px]">
          Contact
        </div>
        <section className="py-[50px]">
          <h2 className="mb-6 text-[32px] font-bold uppercase text-gray-800 sm:text-[40px] lg:text-[36px] xl:text-[40px] text-center">
            Want to get in touch? Let's talk!
          </h2>
          <p className="text-center leading-relaxed mb-9 text-body-color max-w-[650px] mx-auto dark:text-black">
            To contact Saidur or his staff please use the following information.
            Saidur Rahman and his staff operate Monday – Friday. To contact
            Saidur Rahman or his team please use the information below
          </p>
          {/* <h3 className="text-center text-gray-800 hover:text-gray-900 duration-200 font-medium">
            Email: saidur@saidurrahman.org
          </h3> */}
          <h3 className="text-center text-gray-800 hover:text-gray-900 duration-200 font-medium">
            Book a free discovery call:{" "}
            <Link href="/schedule" className="font-semibold hover:underline">
              Click here
            </Link>
          </h3>
          {/* <h3 className="text-center text-gray-800 hover:text-gray-900 duration-200 font-medium">
                        Whatsapp: ‭+44 (0) 7904 226135‬
                    </h3> */}
        </section>
        <section className="max-w-[500px] mx-auto py-[30px] flex justify-center gap-[30px]">
          <a
            href="https://www.facebook.com/saidurrahmanfb"
            target="_facebook"
            className="group"
          >
            <AiFillFacebook className="text-[30px] group-hover:scale-125 duration-300" />
          </a>
          {/* <a
            href="https://www.instagram.com/saidurrahmanorg/"
            target="_blank"
            className="group"
          >
            <AiFillInstagram className="text-[30px] group-hover:scale-125 duration-300" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/saidurrahmanorg/"
            className="group"
            target="_linkedIN"
          >
            <AiFillLinkedin className="text-[30px] group-hover:scale-125 duration-300" />
          </a>
        </section>
      </section>
    </WebWrapper>
  );
};

export default Contact;
