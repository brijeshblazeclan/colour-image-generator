const getColors = () => {
  let colorList = [],
    value = 8;
  for (let red = 0; red < 1 << 5; red++) {
    // Loop iterate for 32 times
    for (let green = 0; green < 1 << 5; green++) {
      for (let blue = 0; blue < 1 << 5; blue++) {
        colorList.push(`rgb(${red * value},${green * value},${blue * value})`);
      }
    }
  }
  return colorList;
};

export default {
  getColors,
};
