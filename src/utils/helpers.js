const getColors = () => {
  let colorList = [],
    iteration = 32,
    value = 8;
  // All Loop will iterate for 32 times
  // Used bitwise operator which is fast compare to other operators
  for (let red = 0; red < iteration; red++) {
    for (let green = 0; green < iteration; green++) {
      for (let blue = 0; blue < iteration; blue++) {
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
