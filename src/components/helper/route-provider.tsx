import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const RouteProvider = (props: any) => {
    const { component: Component, routeType, ...rest } = props;

    const { currentUser } = useAuth();

    return routeType === "public" ? (
        !currentUser ? (
            <Component {...props} />
        ) : (
            <Navigate to="/" />
        )
    ) : currentUser ? (
        <Component {...props} />
    ) : (
        <Navigate to="/login" />
    );
};

export default RouteProvider;
