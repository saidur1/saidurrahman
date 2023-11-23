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
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
};
module.exports = nextConfig;

// baseUrl
