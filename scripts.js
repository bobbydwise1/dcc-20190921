/*
This problem was asked by Two Sigma.

Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a function rand5() that returns an integer from 1 to 5 (inclusive).
*/

const rand7 = () => {
  //Uniform probability of an integer between 1 & 7
  return Math.ceil(Math.random()*(7))
}

const testing7 = () => {
  let counter = [0,0,0,0,0,0,0]
  for ( i = 0; i < 100000; i++ ) {
    let temp = rand7()
    switch (temp) {
      case 1:
      counter[0]++;
      break;
      case 2:
      counter[1]++;
      break;
      case 3:
      counter[2]++;
      break;
      case 4:
      counter[3]++;
      break;
      case 5:
      counter[4]++;
      break;
      case 6:
      counter[5]++;
      break;
      case 7:
      counter[6]++;
      break;
      default:
    }
  }
  return counter
}

const rand5 = () => {
  let temp = Math.ceil(rand7())
  while (temp > 5) {
    temp = Math.ceil(rand7())
  }
  return temp
}

//function testing
const testing5 = () => {
  let counter = [0,0,0,0,0,0]
  for ( i = 0; i < 100000; i++ ) {
    let temp = rand5()
    switch (temp) {
      case 1:
      counter[0]++;
      break;
      case 2:
      counter[1]++;
      break;
      case 3:
      counter[2]++;
      break;
      case 4:
      counter[3]++;
      break;
      case 5:
      counter[4]++;
      break;
      default:
      counter[5]++;
    }
  }
  return counter
}


$(document).ready(function() {

  $('#form-1').submit(function(){
    event.preventDefault()
    let output1 = testing5()
    $('#output-1').text(output1[0])
    $('#output-2').text(output1[1])
    $('#output-3').text(output1[2])
    $('#output-4').text(output1[3])
    $('#output-5').text(output1[4])
    $('#output-6').text(output1[5])
  })

});
