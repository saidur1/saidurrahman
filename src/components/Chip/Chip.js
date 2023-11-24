"use client";

const Chip = ({ title, size }) => {
    return (
        <Chip size={size}>
            <p className="text-[10px]">{title}</p>
        </Chip>
    );
};

export default Chip;
