const cssColor = [
  "primary",
  "accent",
  "info",
  "success",
  "warning",
  "danger",
  "neutral",
];

const color = {};
function makeColor(colors) {
  colors.forEach((category) => {
    for (let i = 100; i <= 900; i += 100) {
      // text color generation
      const textClassName = `.text-${category}-${i}`;
      const textColorValue = `tc-[${category}-${i}]`;
      color[textClassName] = textColorValue;
      // button background color generation
      const bgClassName = `.bg-${category}-${i}`;
      const bgColorValue = `back-c-[${category}-${i}]`;
      color[bgClassName] = bgColorValue;
      // button background color generation
      const btnClassName = `.btn-${category}-${i}`;
      const btnColorValue = `back-c-[${category}-${i}]`;
      color[btnClassName] = btnColorValue;
    }
  });
  makeStyles(color);
}
// console.log(color);
makeColor(cssColor);
