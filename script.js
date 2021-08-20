window.onload = function () {

    var memeForm = document.getElementById("newMemeForm");
    var memeGallery = document.querySelector(".gallery");
    // retrieve from localStorage
    var savedMemes = JSON.parse(localStorage.getItem("memes")) || []
    for (var i = 0; i < savedMemes.length; i++) {
        var meme = document.createElement("div");
        meme.classList.add("meme");

        var memeImage = document.createElement("img");
        memeImage.classList.add("meme_image");

        var topText = document.createElement("div");
        topText.classList.add("text","top");

        var bottomText = document.createElement("div");
        bottomText.classList.add("text","bottom");

        topText.innerText = savedMemes[i].topText;
        bottomText.innerText = savedMemes[i].bottomText;
        memeImage.src = savedMemes[i].src;
        
        meme.appendChild(memeImage);
        meme.appendChild(topText);
        meme.appendChild(bottomText);
        memeGallery.appendChild(meme);
    }
    memeForm.addEventListener("submit", function () {
        event.preventDefault();

        if (document.getElementById("image_url").value == "" || document.getElementById("top_text").value == "" || document.getElementById("bottom_text").value == "") {
            alert("Please add a valid input")
        }
        
        else {
        var meme = document.createElement("div");
        meme.classList.add("meme");

        var memeImage = document.createElement("img");
        memeImage.src = document.getElementById("image_url").value;
        memeImage.classList.add("meme_image");

        var topText = document.createElement("div");
        topText.innerText = document.getElementById("top_text").value;
        topText.classList.add("text","top");

        var bottomText = document.createElement("div");
        bottomText.innerText = document.getElementById("bottom_text").value;
        bottomText.classList.add("text","bottom");

        meme.appendChild(memeImage);
        meme.appendChild(topText);
        meme.appendChild(bottomText);
        memeGallery.appendChild(meme);

        memeForm.reset();

        // save to localStorage
        savedMemes.push({ src: memeImage.src, topText: topText.innerText, bottomText: bottomText.innerText });
        localStorage.setItem("memes", JSON.stringify(savedMemes));
    }})
      
      memeGallery.addEventListener('click', function(event) {
            event.target.parentNode.remove();

          }
      )
};
