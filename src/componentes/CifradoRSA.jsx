import { useState } from "react";
import { JSEncrypt } from "jsencrypt";

const CifradoRSA = () => {
    const [text, setText] = useState("");
    const [publicKey, setPublicKey] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [keySize, setKeySize] = useState(512);
    const [encryptedText, setEncryptedText] = useState("");
    const [decryptedText, setDecryptedText] = useState("");

    const generateKeys = () => {
        const encrypt = new JSEncrypt({
            default_key_size: keySize,
        });
        setPublicKey(encrypt.getPublicKey());
        setPrivateKey(encrypt.getPrivateKey());
    };

    const handleEncrypt = () => {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);
        const encrypted = encrypt.encrypt(text);
        setEncryptedText(encrypted);
    };

    const handleDecrypt = () => {
        const decrypt = new JSEncrypt();
        decrypt.setPrivateKey(privateKey);
        const decrypted = decrypt.decrypt(text);
        setDecryptedText(decrypted);
    };

    return (
        <>
            <h1 className="text-3xl mb-8 text-center">RSA</h1>
            <div className="w-full max-w-md mb-8">
                <p className="text-lg font-thin text-center">
                    El cifrado RSA es un algoritmo de cifrado asimétrico que utiliza un par de claves para cifrar y descifrar mensajes. Una clave es pública y se utiliza para cifrar el mensaje, mientras que la otra clave es privada y se utiliza para descifrar el mensaje.
                </p>
            </div>
            <div className="w-full max-w-md">
                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <label className="mr-2">Tamaño de la clave</label>
                        <select
                            className="px-3 py-2 border rounded-md w-full"
                            value={keySize}
                            onChange={(e) => setKeySize(parseInt(e.target.value))}
                        >
                            <option value={512}>512 bits</option>
                            <option value={1024}>1024 bits</option>
                            <option value={2048}>2048 bits</option>
                        </select>
                    </div>
                    <div className="flex mb-4">
                        <button
                            className="px-4 py-2 rounded-md border mr-2"
                            onClick={generateKeys}
                        >
                            Generar Claves
                        </button>
                        <textarea
                            className="w-full px-3 py-2 border rounded-md"
                            value={publicKey}
                            placeholder="Clave Pública"
                            onChange={(e) => setPublicKey(e.target.value)}
                        />
                        <textarea
                            className="w-full px-3 py-2 border rounded-md ml-2"
                            value={privateKey}
                            placeholder="Clave Privada"
                            onChange={(e) => setPrivateKey(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-thin mb-2">Texto</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        className="w-full px-4 py-2 border rounded-md mr-2"
                        onClick={handleEncrypt}
                        disabled={(publicKey && privateKey && text) === ""}
                    >
                        Cifrar
                    </button>
                    <button
                        className="w-full px-4 py-2 border rounded-md ml-2"
                        onClick={handleDecrypt}
                        disabled={(publicKey && privateKey && text) === ""}
                    >
                        Descifrar
                    </button>
                </div>
                {encryptedText && (
                    <div className="mt-4">
                        <label className="block text-lg font-thin mb-2">Texto Cifrado</label>
                        <textarea
                            className="w-full px-4 py-2 border rounded-md"
                            readOnly
                            value={encryptedText}
                        />
                    </div>
                )}
                {decryptedText && (
                    <div className="mt-4">
                        <label className="block text-lg font-thin mb-2">Texto Descifrado</label>
                        <textarea
                            className="w-full px-4 py-2 border rounded-md"
                            readOnly
                            value={decryptedText}
                        />
                    </div>
                )}
                <button
                    className="w-full px-4 py-2 border rounded-md mt-4"
                    onClick={() => {
                        setText("");
                        setPublicKey("");
                        setPrivateKey("");
                        setEncryptedText("");
                        setDecryptedText("");
                    }}
                >
                    Limpiar
                </button>
            </div>
        </>
    );
};

export default CifradoRSA;