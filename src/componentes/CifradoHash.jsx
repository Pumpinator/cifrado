import { useState } from "react";
import CryptoJS from "crypto-js";

const CifradoHash = () => {
    const [text, setText] = useState("");
    const [algorithm, setAlgorithm] = useState("SHA256");
    const [hash, setHash] = useState("");
    const [isMatch, setIsMatch] = useState(null);

    const handleHash = () => {
        let hashed;
        switch (algorithm) {
            case "SHA1":
                hashed = CryptoJS.SHA1(text).toString(
                    CryptoJS.enc.Hex
                );
                break;
            case "SHA256":
            default:
                hashed = CryptoJS.SHA256(text).toString(
                    CryptoJS.enc.Hex
                );
                break;
        }
        setHash(hashed);
    };

    const handleVerify = () => {
        let hashed;
        switch (algorithm) {
            case "SHA1":
                hashed = CryptoJS.SHA1(text).toString(
                    CryptoJS.enc.Hex
                );
                break;
            case "SHA256":
            default:
                hashed = CryptoJS.SHA256(text).toString(
                    CryptoJS.enc.Hex
                );
                break;
        }
        setIsMatch(hash === hashed);
    };

    return (
        <>
            <h1 className="text-3xl mb-8 text-center">
                SHA1 - SHA256
            </h1>
            <div className="w-full max-w-md mb-8">
                <p className="text-lg font-thin text-center">
                    El cifrado hash es un método de cifrado
                    que toma un texto y lo convierte en una
                    cadena de caracteres de longitud fija.
                    El hash se utiliza para verificar la
                    integridad de los datos, ya que
                    cualquier cambio en el texto original
                    resultará en un hash completamente
                    diferente.
                </p>
            </div>
            <div className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-lg font-thin mb-2">
                        Algoritmo
                    </label>
                    <select
                        className="w-full px-3 py-2 border rounded-md"
                        value={algorithm}
                        onChange={(e) =>
                            setAlgorithm(e.target.value)
                        }
                    >
                        <option value="SHA256">
                            SHA256
                        </option>
                        <option value="SHA1">SHA1</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-thin mb-2">
                        Texto
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        value={text}
                        onChange={(e) =>
                            setText(e.target.value)
                        }
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-lg font-thin mb-2">
                        Hash
                    </label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-md"
                        value={hash}
                        onChange={(e) => {
                            setHash(e.target.value);
                            setIsMatch(null);
                        }}
                    />
                </div>
                <div className="flex gap-4 mt-4">
                    <button
                        className="w-full px-4 py-2 border rounded-md"
                        onClick={handleHash}
                    >
                        Cifrar
                    </button>
                    <button
                        className="w-full px-4 py-2 border rounded-md"
                        onClick={handleVerify}
                    >
                        Verificar
                    </button>
                </div>
                {isMatch !== null && (
                    <div className="mt-4">
                        <p
                            className={`text-lg font-thin ${
                                isMatch
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            {isMatch
                                ? "El hash coincide"
                                : "El hash no coincide"}
                        </p>
                    </div>
                )}
                <button
                    className="w-full px-4 py-2 border rounded-md mt-4"
                    onClick={() => {
                        setText("");
                        setAlgorithm("SHA256");
                        setHash("");
                        setIsMatch(null);
                    }}
                >
                    Limpiar
                </button>
            </div>
        </>
    );
};

export default CifradoHash;
