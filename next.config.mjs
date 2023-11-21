import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "mjs"],
    images: {
        domains: [
            "https://tailwindui.com",
            "img.freepik.com",
            "i.postimg.cc",
            "res.cloudinary.com",
        ],
    },
    env: {
        MONGODB_URI:
            process.env.NODE_ENV !== "production"
                ? "mongodb+srv://monir:monirhrabby@cluster0.9qmlsqw.mongodb.net/?retryWrites=true&w=majority"
                : "`mongodb+srv://saidurrahman:saidur@cluster0.qf4haff.mongodb.net/?retryWrites=true&w=majority`",

        baseURL:
            process.env.NODE_ENV !== "production"
                ? "http://localhost:3000"
                : "https://www.saidurrahman.org",
        MEASUREMENT_ID: "G-1YSD4PK63G",
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};

export default withPlaiceholder(nextConfig);

// baseUrl
