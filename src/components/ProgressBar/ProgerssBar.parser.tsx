export const getBarColor = (percent: number) => {
  if (percent < 40) {
    return "#ce4c00";
  } else if (percent >= 40 && percent <= 70) {
    return "#0000FF";
  } else {
    return "#00c972";
  }
};
