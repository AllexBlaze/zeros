module.exports = function getZerosCount(number) {
  let ourNumber = number, zCounter = 0;
  while( ourNumber > 0){
    ourNumber = ~~ourNumber/5;
    zCounter += ourNumber;
  };
  return zCounter;
}
