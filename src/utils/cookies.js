import Cookies from "js-cookie";

export const setCookie = (name, value) => {
    Cookies.set(name, value);
};
