import React from "react";
import { Card, Spinner, useThemeMode } from "flowbite-react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import SideBar from "../components/SideBar";
import { useUser } from "../context/UserContext";
import { formatUserLevel } from "../helper/LevelFormatter";

const Progress = () => {
    const { userData } = useUser();

    if (!userData) return <Spinner />;

    return (
        <SideBar>
            <>
                <span className="flex mb-10 text-4xl font-bold justify-center">Your Progress</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-4 gap-10">
                    <Card className="border-2 hover:border-2 hover:border-blue-800">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-xl font-normal text-gray-500">Estimated Level</h5>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-row justify-center gap-2">
                            <div className="text-4xl font-bold tracking-tight text-gray-900">
                                {formatUserLevel(userData.user_lang_level.english)}
                            </div>
                        </div>
                    </Card>
                    <Card className="border-2 hover:border-2 hover:border-blue-800">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-xl font-normal text-gray-500">Current Streak</h5>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-row justify-center gap-2">
                            <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">3</div>
                            <div className="text-xl pt-2.5 font-normal text-gray-500">days</div>
                        </div>
                    </Card>
                    <Card className="border-2 hover:border-2 hover:border-blue-800">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-xl font-normal text-gray-500">Total Practiced</h5>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-row justify-center gap-2">
                            <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">8</div>
                            <div className="text-xl pt-2.5 font-normal text-gray-500">days</div>
                        </div>
                    </Card>
                    <Card className="border-2 hover:border-2 hover:border-blue-800">
                        <div className="flex flex-row justify-between">
                            <h5 className="text-xl font-normal text-gray-500">Total Lessons</h5>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-row justify-center gap-2">
                            <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">20</div>
                            <div className="text-xl pt-2.5 font-normal text-gray-500">learned</div>
                        </div>
                    </Card>
                </div>

                <div className="my-10">
                    <SalesThisWeek />
                </div>
            </>
        </SideBar>
    );
};

export default Progress;

const SalesThisWeek = () => {
    return (
        <Card className="border-2 hover:border-2 hover:border-blue-800">
            <div className="mb-4 flex items-center justify-between">
                <div className="shrink-0">
                    <span className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
                        20
                    </span>
                    <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">Total Lessons</h3>
                </div>
                <div className="flex flex-1 items-center justify-end text-base font-bold text-green-600">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-xl">3</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="green"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <SalesChart />
        </Card>
    );
};

const SalesChart = () => {
    const { mode } = useThemeMode();
    const isDarkTheme = mode === "dark";

    const borderColor = isDarkTheme ? "#374151" : "#F3F4F6";
    const labelColor = isDarkTheme ? "#93ACAF" : "#6B7280";
    const opacityFrom = isDarkTheme ? 0 : 1;
    const opacityTo = isDarkTheme ? 0 : 1;

    const options: ApexCharts.ApexOptions = {
        stroke: {
            curve: "smooth",
        },
        chart: {
            type: "area",
            fontFamily: "Inter, sans-serif",
            foreColor: labelColor,
            toolbar: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom,
                opacityTo,
                type: "vertical",
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            style: {
                fontSize: "14px",
                fontFamily: "Inter, sans-serif",
            },
        },
        grid: {
            show: true,
            borderColor: borderColor,
            strokeDashArray: 1,
            padding: {
                left: 35,
                bottom: 15,
            },
        },
        markers: {
            size: 5,
            strokeColors: "#ffffff",
            hover: {
                size: undefined,
                sizeOffset: 3,
            },
        },
        xaxis: {
            categories: ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
            labels: {
                style: {
                    colors: [labelColor],
                    fontSize: "14px",
                    fontWeight: 500,
                },
            },
            axisBorder: {
                color: borderColor,
            },
            axisTicks: {
                color: borderColor,
            },
            crosshairs: {
                show: true,
                position: "back",
                stroke: {
                    color: borderColor,
                    width: 1,
                    dashArray: 10,
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: [labelColor],
                    fontSize: "14px",
                    fontWeight: 500,
                },
            },
        },
        legend: {
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "Inter, sans-serif",
            labels: {
                colors: [labelColor],
            },
            itemMargin: {
                horizontal: 10,
            },
        },
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    xaxis: {
                        labels: {
                            show: false,
                        },
                    },
                },
            },
        ],
    };
    const series = [
        {
            name: "Total Lessons",
            data: [2, 6, 10, 14, 14, 14, 20],
            color: "#1A56DB",
        },
    ];

    return <Chart height={420} options={options} series={series} type="area" />;
};
