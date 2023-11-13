"use client";
import CountUp from "react-countup";
import { usePredictionContext } from "@/app/context/PredictionContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "600" });

function Results() {
    const { modelResult } = usePredictionContext();

    return (
        <div className="flex flex-col justify-around bg-neutral-50 pl-3 pr-10 py-5 rounded-xl w-full md:w-fit">
            {modelResult
                .map((result) => Object.entries(result)[0])
                .map((result, index) => (
                    <div key={index} className="flex items-end">
                        <div className={`${inter.className} text-neutral-800 text-3xl ml-5`}>
                            <CountUp end={result[1]} />
                            <span className="text-lg">%</span>
                        </div>
                        <p className="font-centraMedium text-sm text-neutral-500 ml-5">{result[0]}</p>
                    </div>
                ))}
        </div>
    );
}

export default Results;
