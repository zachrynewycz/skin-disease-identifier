"use client";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function StatisticsChart() {
    const option = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        xaxis: {
            categories: [
                "Cellulitis",
                "Impetigo",
                "Athlete Foot",
                "Nail Fungus",
                "Ringworm",
                "Cutaneous Larva Migrans",
                "Chickenpox",
                "Shingles",
            ],
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
                style: {
                    colors: "#a3a3a3",
                    fontSize: "14px",
                    fontWeight: 400,
                },
                offsetX: -2,
            },
        },
        yaxis: {
            labels: {
                align: "left",
                minWidth: 0,
                maxWidth: 140,
                style: {
                    colors: "#a3a3a3",
                    fontSize: "13px",
                    fontWeight: 400,
                },
            },
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "70%",
                borderRadius: 15,
                borderRadiusApplication: "end",
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#a3a3a3", "#2563eb"],
        fill: {
            opacity: 1,
        },
        grid: {
            borderColor: "#e5e7eb",
        },
    };

    const series = [
        {
            name: "1900s",
            data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
        {
            name: "Today",
            data: [14000000, 40, 35, 50, 49, 60, 70, 91],
        },
    ];

    return (
        <section className="flex justify-center">
            <ApexChart type="bar" options={option} series={series} height={450} width={800} />
        </section>
    );
}

export default StatisticsChart;
