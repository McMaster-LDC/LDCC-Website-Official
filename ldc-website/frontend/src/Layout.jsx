import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <main key={location.pathname} className="page-shell">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;