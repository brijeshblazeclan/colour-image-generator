const getColors = () => {
  let colorList = [],
    value = 8;
  // All Loop will iterate for 32 times
  // Used bitwise operator which is fast compare to other operators
  for (let red = 0; red < 1 << 5; red++) {
    for (let green = 0; green < 1 << 5; green++) {
      for (let blue = 0; blue < 1 << 5; blue++) {
        colorList.push(`rgb(${red * value},${green * value},${blue * value})`);
        // adding colour value in multiply of 8 in array i.e "rgb(8,8,8)"
      }
    }
  }
  return colorList; // return array after all loop
};

export default {
  getColors,
};
