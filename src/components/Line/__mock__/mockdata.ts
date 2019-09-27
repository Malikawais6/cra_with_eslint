export const dataSeriesOne = [
  { x: "Jan", y: 1, label: "$2.3" },
  { x: "Feb", y: 2, label: "$2.6" },
  { x: "Mar", y: 4, label: "$2.9" },
  { x: "Apr", y: 4, label: "$2.2" },
  { x: "May", y: 6, label: "$2.5" },
  { x: "Jun", y: 6.5, label: "$2.5" },
  { x: "Jul", y: 7.5, label: "$2.5" },
  { x: "Aug", y: 8, label: "$2.5" },
  { x: "Sep", y: 9, label: "$2.5" },
  { x: "Oct", y: 9.5, label: "$2.5" },
  { x: "Nov", y: 10.5, label: "$2.5" },
  { x: "Dec", y: 11, label: "$2.5" }
];

export const dataSeriesTwo = [
  { x: "Jan", y: 1.5, label: "$2.4" },
  { x: "Feb", y: 2.8, label: "$2.5" },
  { x: "Mar", y: 3.5, label: "$2.2" },
  { x: "Apr", y: 4.6, label: "$2.8" },
  { x: "May", y: 5.5, label: "$2.1" },
  { x: "Jun", y: 6.5, label: "$2.1" },
  { x: "Jul", y: 7.5, label: "$2.1" },
  { x: "Aug", y: 8, label: "$2.3" },
  { x: "Sep", y: 9.5, label: "$2.5" },
  { x: "Oct", y: 10, label: "$2.7" },
  { x: "Nov", y: 10.5, label: "$2.2" },
  { x: "Dec", y: 11.5, label: "$2.8" }
];

export const LegendSeriesData = (isGradient?: boolean) => [
  {
    title: "Actual",
    data: dataSeriesOne,
    color: isGradient ? "url(#CoolGradient)" : "#40d1e7",
    disabled: false
  },
  {
    title: "Goal",
    data: dataSeriesTwo,
    disabled: false,
    color: "#a7a7bb",
    style: {
      strokeDasharray: "2 2"
    }
  }
];
