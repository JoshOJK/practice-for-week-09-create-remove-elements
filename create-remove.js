/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
         const breed = url.split('/')[4]

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
           const newDog =  document.createElement('li')
           let fig = document.createElement("figure")
           let dogImg = document.createElement("img")
           dogImg.src = url
           let dogBreed = document.createElement("figcaption")
           dogBreed.innerText = breed

           fig.appendChild(dogImg)
           fig.appendChild(dogBreed)
           newDog.appendChild(fig)

           let addDog = document.getElementsByTagName("ul")[0]
           addDog.appendChild(newDog)





    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const firstDog = document.querySelector(".gallery li").remove()


    /*-------------------- Remove the first dog card --------------------- */
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const lastDog = document.querySelector(".gallery li:last-child").remove()

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
