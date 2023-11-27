import Chart from "./Chart";
import Results from "./Results";

function ResultsSection() {
    return (
        <section className="max-w-7xl mx-auto pb-20">
            <h1 className="text-3xl lg:text-3xl max-w-2xl mx-auto font-centraBold text-neutral-800 text-center mb-10">
                Your Results
            </h1>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 w-full justify-between px-5 lg:px-0">
                <Results />
                <Chart />
            </div>
        </section>
    );
}

export default ResultsSection;
