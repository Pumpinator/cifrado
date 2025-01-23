// filepath: /Users/alejandro/Developer/utl/seguridad en el desarrollo de aplicaciones/cifrado/src/componentes/App.jsx
import { useNavigate } from "react-router-dom";
import Flecha from "../assets/Flecha";
import Boton from "../assets/Boton";

function App() {
    const navigate = useNavigate();

    return (
        <>
            <h1 className="text-4xl mb-8 text-center">
                Aplicación de Prueba de Algoritmos de
                Encriptación
            </h1>
            <h2 className="text-xl font-thin mb-12 text-center">
                Hecho por{" "}
                <a
                    href="https://alejandrodcardona.com"
                    target="_noblank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-2xl animate-bounce duration-300"
                >
                    Alejandro Delgado Cardona
                </a>
            </h2>
            <div className="w-full max-w-md">
                <p className="text-lg font-thin text-pretty text-center">
                    Esta actividad consiste en desarrollar
                    una aplicación que pueda cifrar mensajes
                    de texto utilizando varios algoritmos de
                    cifrado. Las opciones que debes incluir
                    son:
                </p>
                <div className="flex flex-col font-thin justify-center pt-8 gap-8">
                    <Boton
                        onClick={() => navigate("/aesydes")}
                    >
                        AES, DES y Triple DES
                        <Flecha />
                    </Boton>
                    <Boton
                        onClick={() => navigate("/rsa")}
                    >
                        RSA
                        <Flecha />
                    </Boton>
                    <Boton
                        onClick={() => navigate("/hash")}
                    >
                        Hash
                        <Flecha />
                    </Boton>
                    <Boton
                        onClick={() =>
                            navigate("/sustitucion")
                        }
                    >
                        Sustitución (propio)
                        <Flecha />
                    </Boton>
                </div>
            </div>
        </>
    );
}

export default App;
