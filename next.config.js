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
        baseURL:
            process.env.NODE_ENV !== "production"
                ? "http://localhost:3000"
                : "https://www.saidurrahman.org",
        MONGODB_URI:
            process.env.NODE_ENV !== "production"
                ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9qmlsqw.mongodb.net/?retryWrites=true&w=majority`
                : `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qf4haff.mongodb.net/?retryWrites=true&w=majority`,
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};
module.exports = nextConfig;

// baseUrl
