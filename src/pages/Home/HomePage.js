import { Hero , FeatureProduct, Testimonials, Faq } from "./components";
import {  useTitle } from "../../hooks";



export const HomePage = ({ title }) => {
    useTitle(title);

    return (
        <main>
            <Hero/>
            <FeatureProduct/>
            <Testimonials/>
            <Faq/>
        </main>
    );
};