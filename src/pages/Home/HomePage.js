import {  useTitle } from "../../hooks";

export const HomePage = ({ title }) => {
    useTitle(title);

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">

                <p class="capitalize hover:uppercase">
                    HomePage
                </p>


                </div>
            </section>
        </main>
    );
};