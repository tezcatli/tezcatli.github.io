document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

var countDownDate = new Date("Dec 23, 2021 21:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown_clock").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").style.visibility = 'hidden'
    fetch(
      "https://api.opensea.io/api/v1/asset/0x495f947276749ce646f68ac8c248420045cb7b5e/95035838694622143585208030138072912698626519418871291432449268800656542531585"
    )
      .then((response) => response.json())
      .then((response) => {
        dom = document.getElementById("expired");

        const image = document.createElement("img");
        image.src = response.image_url;
        //dom.replaceWith(image);
        dom.appendChild(image)

        div = document.createElement("div")

        div.innerHTML = "Claim your unique NFT"

        dom.appendChild(div)

        //alert(JSON.stringify(response.image_url));
      })
      .catch((error) => alert("Erreur : " + error));
  }
}, 1000);

