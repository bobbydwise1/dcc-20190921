/*
This problem was asked by Two Sigma.

Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a function rand5() that returns an integer from 1 to 5 (inclusive).
*/

const rand7 = () => {
  return Math.round(Math.random()*(7-1)+1)
}



$(document).ready(function() {

  $('#form-1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    console.log(input1)
    $('#output-1').text(findTen(input1))
  })

});
