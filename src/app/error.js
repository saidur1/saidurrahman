import { useEffect } from "react";

const Error = ({ error }) => {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return <div>error</div>;
};

export default Error;
