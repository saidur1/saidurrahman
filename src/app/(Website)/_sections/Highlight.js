"use client";
import styles from "@/app/(Website)/_sections/css/highlight.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Highlight = ({ highlightData }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
    });
    return (
        <div className="flex flex-col md:flex-row items-center" ref={ref}>
            {highlightData?.map(({ id, number, text, text2 }) => {
                return (
                    <div
                        className={`${styles.highlight} flex-1 h-auto py-8 md:h-[143px] flex items-center justify-around md:justify-center`}
                        key={id}
                    >
                        <div className="flex items-center gap-[16px]">
                            <h1 className="text-[#1C1F35] font-bold  text-[30px] md:text-[50px] leading-[133.2%]">
                                {inView ? (
                                    <CountUp
                                        start={0}
                                        end={number}
                                        duration={3}
                                    />
                                ) : null}
                                {"+"}
                            </h1>
                            <div className="linear h-[17px] w-[17px]"></div>
                            <div>
                                <h6 className="text-[#1C1F35] font-normal text-[20px] leading-[129.7%]">
                                    {text}
                                </h6>
                                <p className="text-[#666C89] font-normal text-[16px] leading-[151.5%]">
                                    {text2}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Highlight;
