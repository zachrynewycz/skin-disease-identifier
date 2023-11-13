"use client";
import dynamic from "next/dynamic";
import { usePredictionContext } from "../../context/PredictionContext";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function Chart() {
    const { modelResult } = usePredictionContext();
    const series = [{ data: modelResult.map((result) => Object.values(result)[0]) }];

    const options = {
        chart: {
            fontFamily: "Centra-Medium",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        xaxis: {
            categories: modelResult.map((result) => Object.keys(result)[0]),
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
            labels: {
                trim: true,
                rotate: 0,
                style: {
                    colors: "#a3a3a3",
                    fontSize: "14px",
                },
                offsetX: -2,
                formatter: function (value: any) {
                    return value.length > 10 ? value.slice(0, 10) + "..." : value;
                },
            },
        },
        yaxis: {
            max: 100,
            labels: {
                align: "left",
                maxWidth: 150,
                style: {
                    colors: "#a3a3a3",
                    fontSize: "15px",
                },
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "25%",
                borderRadius: 10,
                borderRadiusApplication: "end",
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#2563eb"],
        fill: {
            opacity: 1,
        },
        grid: {
            borderColor: "#e5e7eb",
            strokeDashArray: 10,
        },
    };

    return (
        <div className="border border-gray-200 shadow-sm rounded-xl px-5 py-5 w-fit">
            <ApexChart type="bar" options={options} series={series} height={400} width={800} />
        </div>
    );
}

export default Chart;
