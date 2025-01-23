import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center">
            <button
                onClick={() => {
                    navigate("/");
                }}
                className="cursor-pointer"
            >
                <img
                    className="w-40 pt-10"
                    src="https://www.leonforumvocacional.com.mx/media/images/schools/logo_1.jpg"
                    alt="logo"
                />
            </button>
            <div className="flex flex-col items-center justify-center min-h-screen mx-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
