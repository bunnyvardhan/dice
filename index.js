
// setting first image:
var random_1 = Math.random() * 6;

random_1 = Math.floor(random_1) + 1;


var imag_1 = "images/dice" +  random_1 + ".png";

var set_image1 = document.querySelectorAll("img")[0];

set_image1.setAttribute("src",imag_1);


// setting image 2;

var random_2 = Math.random() * 6;

random_2 = Math.floor(random_2) + 1;

var imag_2 = "images/dice" + random_2 + ".png";

var set_image2 = document.querySelectorAll("img")[1];

set_image2.setAttribute("src",imag_2);

// who won


if(random_1 > random_2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(random_1 < random_2)
{
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else
{
  document.querySelector("h1").innerHTML = "Draw";
}
