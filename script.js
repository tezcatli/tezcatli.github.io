document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

var countDownDate = new Date("Dec 24, 2021 21:00:00").getTime();

//var countDownDate = new Date( new Date().getTime() + 5000)


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
    //document.getElementById("countdown").style.visibility = 'hidden'
    //document.getElementById("countdown").remove()
    fetch(
      "https://api.opensea.io/api/v1/asset/0x495f947276749ce646f68ac8c248420045cb7b5e/95035838694622143585208030138072912698626519418871291432449268801756054159361/"
    )
      .then((response) => response.json())
      .then((response) => {
        dom = document.getElementById("content");
        dom.innerHTML = ""

        //const image = document.createElement("img");
        //image.src = response.image_url;
        //image.id = "image"
        //dom.replaceWith(image);
        //dom.appendChild(image)

        div = document.createElement("div")

        div.innerHTML = `
        <img src="${response.image_url}" id='image'>
        
        `
        div.id='divid'
        dom.appendChild(div)

        div = document.createElement("div")

        div.innerHTML = `
        <h2>Available on opensea. <br> Send your wallet id to your beloved brother to claim this unique NFT.  </h3><p>

    
          
          <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/95035838694622143585208030138072912698626519418871291432449268801756054159361/" > 
          <img src="https://storage.googleapis.com/opensea-static/Logomark/Badge%20-%20Available%20On%20-%20Light.png" style="width:220px; border-radius:5px; box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);">
          
          </a>`

        dom.appendChild(div)

        //alert(JSON.stringify(response.image_url));
      })
      .catch((error) => alert("Erreur : " + error));
  }
}, 1000);

