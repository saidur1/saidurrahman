/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "https://tailwindui.com",
            "img.freepik.com",
            "i.postimg.cc",
            "res.cloudinary.com",
        ],
    },
    env: {
        MONGODB_URI: `mongodb+srv://saidurrahman:saidur@cluster0.qf4haff.mongodb.net/?retryWrites=true&w=majority`,
        baseURL:
            process.env.NODE_ENV !== "production"
                ? "http://localhost:3000"
                : "https://www.saidurrahman.org",
        MEASUREMENT_ID: "G-1YSD4PK63G",
    },
};

module.exports = nextConfig;

// baseUrl
