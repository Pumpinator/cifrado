import { useState, useEffect } from "react";

const CifradoSustitucion = () => {
    const [text, setText] = useState("");
    const [key, setKey] = useState(0);
    const [resultText, setResultText] = useState("");
    const [error, setError] = useState("");

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    useEffect(() => {
        if (key < 0 || key > 25) {
            setError(
                "La clave debe ser un número entre 0 y 25."
            );
            return;
        }
        setError("");
    }, [key]);

    const handleEncrypt = () => {
        const textArray = text.toUpperCase().split("");
        const resultArray = textArray.map((letter) => {
            if (alphabet.includes(letter)) {
                const index = alphabet.indexOf(letter);
                const newIndex = (index + key) % 26;
                return alphabet[newIndex];
            }
            return letter;
        });
        setResultText(resultArray.join(""));
    };

    const handleDecrypt = () => {
        const textArray = text.toUpperCase().split("");
        const resultArray = textArray.map((letter) => {
            if (alphabet.includes(letter)) {
                const index = alphabet.indexOf(letter);
                const newIndex = (index - key + 26) % 26;
                return alphabet[newIndex];
            }
            return letter;
        });
        setResultText(resultArray.join(""));
    };

    return (
        <>
            <h1 className="text-3xl mb-8 text-center">
                Sustitución (propio)
            </h1>
            <div className="w-full max-w-md mb-8">
                <p className="text-lg font-thin text-center">
                    El cifrado por sustitución es un método
                    de cifrado en el que cada letra del
                    texto original es desplazada en el
                    alfabeto según una clave numérica. Para
                    cifrar un mensaje, se suma la clave a la
                    posición de cada letra en el alfabeto.
                    Para descifrar, se resta la clave de la
                    posición de cada letra. La clave debe
                    ser un número entre 0 y 25.
                </p>
            </div>
            <div className="w-full max-w-md">
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
                <div className="mb-4">
                    <label className="block text-lg font-thin mb-2">
                        Clave numérica
                    </label>
                    <input
                        type="number"
                        min={0}
                        max={25}
                        className="w-full px-3 py-2 border rounded-md"
                        value={key}
                        onChange={(e) =>
                            setKey(
                                parseInt(e.target.value, 10)
                            )
                        }
                    />
                </div>
                {error && (
                    <div className="mb-4 text-red-500">
                        {error}
                    </div>
                )}
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
                        setKey(0);
                        setResultText("");
                        setError("");
                    }}
                >
                    Limpiar
                </button>
            </div>
        </>
    );
};

export default CifradoSustitucion;
