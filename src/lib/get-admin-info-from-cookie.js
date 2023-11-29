import { decodeToken, isExpired } from "react-jwt";

export const getAdminInfoFromCookie = (token, cookies) => {
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);

    if (!myDecodedToken) {
        return null;
    } else if (isMyTokenExpired) {
        return null;
    }

    return {
        _id: myDecodedToken["_id"],
        profilePhoto: myDecodedToken["profilePhoto"],
    };
};
