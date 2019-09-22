/*
 This problem was asked by Microsoft.

A number is considered perfect if its digits sum up to exactly 10.

Given a positive integer n, return the n-th perfect number.

For example, given 1, you should return 19. Given 2, you should return 28.
*/

const findTen = (yourNumber) => {
  let output = 10 - yourNumber
  return yourNumber + output
}

$(document).ready(function() {

  $('#form-1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    console.log(input1)
    $('#output-1').text(findTen(input1))
  })

});
