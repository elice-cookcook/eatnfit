import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

type FoodChartType = {
  description: number[];
};
export default function FoodChart({ description }: FoodChartType) {
  ChartJS.register(ArcElement, Tooltip);
  const data = {
    labels: ["탄수화물", "단백질", "지방"],
    datasets: [
      {
        data: description,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(71, 200, 62, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(71, 200, 62, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Pie data={data} options={{ responsive: false }} width={110} height={110} />
  );
}
