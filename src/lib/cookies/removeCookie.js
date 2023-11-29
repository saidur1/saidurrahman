"use client";

import { useCookies } from "next-client-cookies";

const removeCookie = (cookiesName) => {
    const cookies = useCookies();

    cookies.remove(cookiesName);
    return true;
};

export default removeCookie;
