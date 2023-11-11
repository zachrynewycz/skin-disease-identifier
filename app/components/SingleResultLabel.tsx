import CountUp from "react-countup";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "500" });

function SingleResultLabel({ name, value, index }: { name: string; value: number; index: number }) {
    return (
        <div>
            {index === 0 ? (
                <div className="border-r-2 pr-20">
                    <span className={`${inter.className} text-blue-600 text-6xl`}>
                        <CountUp end={value} />%
                    </span>
                    <p className="text-neutral-500 mt-2">{name}</p>
                </div>
            ) : (
                <>
                    <span className={`${inter.className} text-blue-600 text-3xl`}>
                        <CountUp end={value} />%
                    </span>
                    <p className="text-neutral-500 mt-2">{name}</p>
                </>
            )}
        </div>
    );
}

export default SingleResultLabel;
