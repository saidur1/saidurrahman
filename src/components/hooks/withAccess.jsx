import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const withAccess = (WrappedComponent) => {
    const WithAccess = (props) => {
        const router = useRouter();

        // Your authentication logic here (e.g., checking if the user is authenticated)
        const authenticated = Cookies.get("prospectAccess");

        if (!authenticated) {
            router.push("/free_training");
        }

        return <WrappedComponent {...props} />;
    };

    // Add a displayName to the HOC
    WithAccess.displayName = `withAccess(${getDisplayName(WrappedComponent)})`;

    return WithAccess;
};

// A utility function to get the display name of a component
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAccess;
