import { decodeToken, isExpired } from "react-jwt";

export const getAdminInfoFromCookie = (token) => {
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);

    return {
        _id: myDecodedToken["_id"],
        profilePhoto: myDecodedToken["profilePhoto"],
    };
};
