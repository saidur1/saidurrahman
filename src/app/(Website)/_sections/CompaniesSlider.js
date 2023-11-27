import Image from "next/image";
import georgia from "../../../../public/companies/GeorgiaTech.svg";
import amazon from "../../../../public/companies/amazon.svg";
import california from "../../../../public/companies/california.svg";
import google from "../../../../public/companies/google.svg";
import harvard from "../../../../public/companies/harbard.svg";
import microsoft from "../../../../public/companies/microsoft.svg";
import styles from "./css/companiesSlider.module.css";

const CompaniesSlider = () => {
    return (
        <section className="bg-white">
            <div className="py-[50px] md:py-[100px] container ">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[#1C1F35] font-bold  text-[30px] md:text-[50px] leading-[133.2%]">
                        I Guided
                    </h1>
                    <p>
                        Professionals from World-Class Universities and Leading
                        Companies
                    </p>
                </div>
                <div className={styles.slider}>
                    <div className={styles.slideTrack}>
                        {/* 6 slides */}
                        <div className={styles.slide}>
                            <Image
                                src={google}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={amazon}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={georgia}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={harvard}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={california}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={microsoft}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>

                        {/* copies 6 slides */}

                        <div className={styles.slide}>
                            <Image
                                src={google}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={amazon}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={georgia}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={harvard}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={california}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                        <div className={styles.slide}>
                            <Image
                                src={microsoft}
                                width={100}
                                height={100}
                                alt="logo"
                                className="aspect-video"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompaniesSlider;
