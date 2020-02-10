console.log('virtual machine');


// var firstHr = document.getElementById("hoursOne").value;
// var secHr = document.getElementById("hoursTwo").value;
// var thirdHr = document.getElementById("hoursThree").value;
// var fourHr = document.getElementById("hoursFour").value;
// var fifthHr = document.getElementById("hoursFive").value;
// var sixHr = document.getElementById("hoursSix").value;
//
// console.log(firstHr);

document.getElementById("totalHours").addEventListener("click", function() {

  var firstHr = parseInt(document.getElementById("hoursOne").value);
  var secHr = parseInt(document.getElementById("hoursTwo").value);
  var thirdHr = parseInt(document.getElementById("hoursThree").value);
  var fourHr = parseInt(document.getElementById("hoursFour").value);
  var fifthHr = parseInt(document.getElementById("hoursFive").value);
  var sixHr = parseInt(document.getElementById("hoursSix").value);
  console.log(firstHr + secHr + thirdHr + fourHr + fifthHr + sixHr);

  var total = firstHr + secHr + thirdHr + fourHr + fifthHr + sixHr;

    document.getElementById("total").innerHTML = total + ' hours in total';
    console.log(total);
});
//
// function calcTotal() {
//
//   var total = firstHr + secHr + thirdHr + fourHr + fifthHr + sixHr;
//
//     document.getElementById("total").innerHTML = total;
//     console.log(total);
// }

document.getElementById("totalActs").addEventListener("click", function() {

  var acOne = document.getElementById("acOne").value;
  var acTwo = document.getElementById("acTwo").value;
  var acThree = document.getElementById("acThree").value;
  var acFour = document.getElementById("acFour").value;
  var acFive = document.getElementById("acFive").value;
  var acSix = document.getElementById("acSix").value;
  console.log(acOne + acTwo + acThree + acFour + acFive + acSix);

  var acts = acOne + acTwo + acThree + acFour + acFive + acSix;

    document.getElementById("acts").innerHTML = acts;
    console.log(total);
});
