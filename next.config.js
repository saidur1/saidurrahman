/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["https://tailwindui.com", "img.freepik.com"],
    },
    env: {
        MONGO: `mongodb+srv://saidur:xI1gm3qFbzdzsJVp@saidur.2jjypfv.mongodb.net/?retryWrites=true&w=majority`,
    },
};

module.exports = nextConfig;
