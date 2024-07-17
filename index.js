const accessKey = "6WY5PMvzcgA9zdM5fm6b-FDUsw1Smd3jd41APz8d1cY";
const form = document.querySelector("#img_serach"); // Correcting the selector to select the form
const search_btn = document.getElementById("serach_btn"); //serach button
const img_results = document.querySelector(".img_results");
const show_more = document.getElementById("show_more_img"); // show more button
const search_img = document.getElementById("search_img"); //search_img input box

let page = 1;
async function Images_search() {
  const searchTerm = search_img.value;
  // dynamic url
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchTerm}&client_id=${accessKey}`;
  try {
    const response = await fetch(url); //fetching data
    const data = await response.json(); //convert data into json
    const results = data.results;
    // this is hide when page is eq 1
    if (page === 1) {
      img_results.innerHTML = "";
    }
    //  create new div
    results.forEach((result) => {
      const new_images = document.createElement("div");
      new_images.classList.add("img_result");
      const img = document.createElement("img");
      img.src = result.urls.small;

      new_images.appendChild(img);
      // new_images.appendChild(download_btn);
      img_results.appendChild(new_images);
    });
    page++;
    if (page > 1) {
      show_more.style.display = "block";
    }
  } catch (e) {
    console.log(e);
  }
}

//  search images
search_btn.addEventListener("click", function (e) {
  e.preventDefault();
  page = 1;
  Images_search();
});

show_more.addEventListener("click", (e) => {
  Images_search();
});
