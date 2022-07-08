import { Outlet, Navigate } from "react-router-dom";
import UseAuth from './UseAuth';

const PrivateRouter = () => {
    const auth = UseAuth();
    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    )
}
export default PrivateRouter