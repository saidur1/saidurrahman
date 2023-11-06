const { cookies } = require("next/headers");

export const isFreeTrainingAccess = () => {
    const access = cookies().get("prospect");
    return access;
};
