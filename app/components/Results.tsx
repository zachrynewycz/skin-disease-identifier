"use client";
import { usePredictionContext } from "../context/PredictionContext";
import SingleResultLabel from "./SingleResultLabel";

function Results() {
    const { modelResult } = usePredictionContext();

    return (
        <section className="max-w-7xl mx-auto py-20 border border-gray-200 shadow-sm rounded-xl px-16 my-20">
            <div className="flex justify-between flex-wrap items-center">
                {modelResult.map((result, index) => {
                    const [name, value] = Object.entries(result)[0];
                    return <SingleResultLabel key={index} name={name} value={value} index={index} />;
                })}
            </div>
        </section>
    );
}

export default Results;
