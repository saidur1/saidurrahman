import WebWrapper from "@/components/shared/WebWrapper/WebWrapper";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import About from "./(Website)/_sections/About";
import CompaniesSlider from "./(Website)/_sections/CompaniesSlider";
import Programms from "./(Website)/_sections/Programms";
import Reviews from "./(Website)/_sections/Reviews";

export default async function Home() {
    return (
        <WebWrapper>
            <main className="bg-[#DFE3E4]">
                <section className="bg-gray-100 h-auto py-[50px] md:min-h-[45vh]">
                    <div className="container flex flex-col gap-[30px] justify-center items-center h-full">
                        <h1 className="text-black/80 text-[50px] font-bold text-center">
                            Accountability coaching for <br /> entrepreneurs.
                        </h1>
                        <p className="text-black/80 text-[17px] font-medium text-center">
                            We help ENTREPRENEURS stay ACCOUNTABLE so they
                            achieve their financial goals
                        </p>
                        <PrimaryButton
                            href="/schedule"
                            title="Book A FREE Discovery Call"
                        />
                    </div>
                </section>
                <Programms />
                <About />
                <section className="py-[50px] md:py-[100px] container">
                    <h1 className="text-center text-[40px] md:text-[60px] font-semibold dark:text-black/80">
                        Here's What People <br /> Are Saying
                    </h1>
                    <div>
                        <Reviews />
                    </div>
                </section>
                <CompaniesSlider />
            </main>
        </WebWrapper>
    );
}
