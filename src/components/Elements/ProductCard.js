import { Link } from "react-router-dom";

export const ProductCard = () => {
    return (
        <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to="/products" className="relative">
                <img
                    className="rounded-t-lg w-full h-64"
                    src="../../assets/images/10001.avif"
                    alt="Book"
                />
            </Link>
            <div className="p-5">
                <Link to="/products/101">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Automate the Boring Stuff with Python Programming
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    A practical programming course for office workers,
                    academics, and administrators who want to improve their
                    productivity.
                </p>

                <div className="flex items-center my-2">
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                    <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                </div>

                <p className="flex justify-between items-center">
                    <span className="text-2xl dark:text-gray-200">
                        <span>$</span>
                        <span>99</span>
                    </span>
                    <Link
                        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        to="/"
                    >
                        <p>Add to cart</p>
                    </Link>
                </p>
            </div>
        </div>
    );
};
