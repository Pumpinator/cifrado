import { useState } from "react";
import CryptoJS from "crypto-js";

const CifradoAESyDES = () => {
    const [text, setText] = useState("");
    const [key, setKey] = useState("");
    const [algorithm, setAlgorithm] = useState("AES");
    const [resultText, setResultText] = useState("");

    const handleEncrypt = () => {
        let encrypted;
        switch (algorithm) {
            case "DES":
                encrypted = CryptoJS.DES.encrypt(text, key).toString();
                break;
            case "TripleDES":
                encrypted = CryptoJS.TripleDES.encrypt(text, key).toString();
                break;
            case "AES":
            default:
                encrypted = CryptoJS.AES.encrypt(text, key).toString();
                break;
        }
        setResultText(encrypted);
    };

    const handleDecrypt = () => {
        let decrypted;
        switch (algorithm) {
            case "DES":
                decrypted = CryptoJS.DES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
                break;
            case "TripleDES":
                decrypted = CryptoJS.TripleDES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
                break;
            case "AES":
            default:
                decrypted = CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
                break;
        }
        setResultText(decrypted);
    };

    return (
        <>
            <h1 className="text-3xl mb-8 text-center">DES - TRIPLE DES - AES</h1>
            <div className="w-full max-w-md mb-8">
                <p className="text-lg font-thin text-center">
                    El cifrado simétrico es un método de cifrado en el que se utiliza la misma clave para cifrar y descifrar un mensaje. Los algoritmos de cifrado simétrico más comunes son DES, Triple DES y AES. Para cifrar un mensaje, se utiliza una clave que debe ser compartida entre el emisor y el receptor. En esta actividad, puedes cifrar y descifrar mensajes de texto utilizando estos algoritmos.
                </p>
            </div>
            <div className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-lg font-thin mb-2">Texto</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-thin mb-2">Clave</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-thin mb-2">Algoritmo</label>
                    <select
                        className="w-full px-3 py-2 border rounded-md"
                        value={algorithm}
                        onChange={(e) => setAlgorithm(e.target.value)}
                    >
                        <option value="AES">AES</option>
                        <option value="DES">DES</option>
                        <option value="TripleDES">Triple DES</option>
                    </select>
                </div>
                <div className="flex gap-4">
                    <button
                        className="w-full px-4 py-2 border rounded-md"
                        onClick={handleEncrypt}
                    >
                        Cifrar
                    </button>
                    <button
                        className="w-full px-4 py-2 border rounded-md"
                        onClick={handleDecrypt}
                    >
                        Descifrar
                    </button>
                </div>
                {resultText && (
                    <div className="mt-4">
                        <textarea
                            className="w-full px-4 py-2 border rounded-md"
                            readOnly
                            value={resultText}
                        />
                    </div>
                )}
                <button
                    className="w-full px-4 py-2 border rounded-md mt-4"
                    onClick={() => {
                        setText("");
                        setKey("");
                        setAlgorithm("AES");
                        setResultText("");
                    }}
                >
                    Limpiar
                </button>
            </div>
        </>
    );
};

export default CifradoAESyDES;