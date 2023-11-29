"use client";

import { useCookies } from "next-client-cookies";

export const getCookie = (cookiesName) => {
    const cookies = useCookies();
    return cookies.get(cookiesName);
};
