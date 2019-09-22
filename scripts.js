/*
This problem was asked by Two Sigma.

Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a function rand5() that returns an integer from 1 to 5 (inclusive).
*/

const rand7 = () => {
  return Math.round(Math.random()*(7-1)+1)
}

const rand5 = () => {
  let temp = rand7()
  //console.log(temp)
  return Math.round(temp*5/7)
}

//function testing
let counter = [0,0,0,0,0]
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
  }
}
console.log(counter)

$(document).ready(function() {

  $('#form-1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    console.log(input1)
    $('#output-1').text(findTen(input1))
  })

});
