import PrimaryButton from "../buttons/PrimaryButton";

const CallBookHighLight = ({ title, href }) => {
    return (
        <div>
            <h3 className="text-[24px] text-gray-800 font-medium text-center">
                {title}
            </h3>
            <div className="w-full flex justify-center mt-[15px]">
                <PrimaryButton href={href} title="Book A Call" />
            </div>
        </div>
    );
};

export default CallBookHighLight;
