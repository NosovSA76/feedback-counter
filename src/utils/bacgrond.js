export function getBackgroundColor(percentage, total) {
  if (percentage === 0 && total === 0) {
    return "white";
  } else if (percentage === 100) {
    return "green";
  } else {
    const hue = (percentage / 100) * 120;
    return `hsl(${hue}, 100%, 50%)`;
  }
}
