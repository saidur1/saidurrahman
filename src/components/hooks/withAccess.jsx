import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const withAccess = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();

        // Your authentication logic here (e.g., checking if the user is authenticated)
        const authenticated = Cookies.get("prospectAccess");

        if (!authenticated) {
            router.push("/free_training");
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAccess;
