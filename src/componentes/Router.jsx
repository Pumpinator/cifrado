import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import App from "./App.jsx";
import CifradoAESyDES from "./CifradoAESyDES.jsx";
import CifradoRSA from "./CifradoRSA.jsx";
import Layout from "./Layout.jsx";
import CifradoHash from "./CifradoHash.jsx";
import CifradoSustitucion from "./CifradoSustitucion.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route
                        path="aesydes"
                        element={<CifradoAESyDES />}
                    />
                    <Route
                        path="rsa"
                        element={<CifradoRSA />}
                    />
                    <Route
                        path="hash"
                        element={<CifradoHash />}
                    />
                    <Route
                        path="sustitucion"
                        element={<CifradoSustitucion />}
                    />
                    <Route
                        path="*"
                        element={
                            <h1 className="text-xl font-thin m-16">
                                404 No encontrado. 😅
                            </h1>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
