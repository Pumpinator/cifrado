const Boton = ({ onClick, children }) => {
    return (
        <button
            className="flex items-center px-4 py-2 border rounded-md hover:shadow-md hover:scale-105 duration-300"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Boton;