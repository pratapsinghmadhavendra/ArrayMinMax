function findMin(array) {
  let arrInput = array;
  sortArr = arrInput.sort();
  let min = 0;
  for (let i = 0; i < sortArr.length - 1; i++) {
    min = min + sortArr[i];
  }
  console.log(min);
}

function findMax(array) {
  let arrInput = array;
  sortArr = arrInput.sort();
  let max = 0;
  for (let i = sortArr.length - 1; i >= 1; i--) {
    max = max + sortArr[i];
  }
  console.log(max);
}

let givenArray = [50,30,10,60,80]
if(givenArray.length ===5)
{
findMin(givenArray);
findMax(givenArray);
}
else console.log("Plese Enter Valid Input. Array Length Should be 5!");