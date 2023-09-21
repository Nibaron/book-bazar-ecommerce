import { Link } from "react-router-dom";
import heroImg from "../../../assets/images/Hero.jpg";
export const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
            <div className="text my-5">
                <h1 className="text-5xl font-bold">The Ultimate eBook Store</h1>
                <p className="text-2xl text-justify my-7 px-2 dark:text-slate-300">
                    The CodeBook is the world's most popular and authoritative
                    source for computer science ebooks. Find ratings and also
                    access to the newest books digitally.
                </p>
                <Link
                    to="/products"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Explore eBooks
                </Link>
            </div>
            <div className="visual my-5 mx-1 lg:max-w-xl">
                <img
                    className="rounded-lg max-h-full"
                    src={heroImg}
                    alt="CodeBook Hero Section"
                />
            </div>
        </section>
    );
};
