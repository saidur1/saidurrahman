import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const Blur = async ({ src, className, title }) => {
    const buffer = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer());
    });
    const { base64 } = await getPlaiceholder(buffer);

    return (
        <div>
            <Image
                src={src}
                fill
                alt="image"
                placeholder="blur"
                blurDataURL={base64}
                className={className}
                title={title}
                priority
            />
        </div>
    );
};

export default Blur;
