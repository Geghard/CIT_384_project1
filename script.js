// async function start () {
//     const response = await fetch("https://dog.ceo/api/breeds/list/all")
//     const data = await response.json()
//     createBreedList(data.message)
// }

// start()

// function createBreedList(breedList) {
//     document.getElementById("breed").innerHTML = `
//         <select onchange="loadByBreed(this.value)">
//             <option>Choose a dog breed</option>
//             ${Object.keys(breedList).map(function (breed) {
//                 return `<option>${breed}</option>`
//             }).join('')} 
//         </select>
//     `
// }

// async function loadByBreed(breed) {
//     if (breed != "Choose a dog breed") {
//         const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
//         const data = await response.json()
//         console.log(data)
//     }
// }
document.addEventListener("DOMContentLoaded", function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "40px Arial";
    ctx.fillStyle = "#ffa200";
    ctx.fillText("OPPENHEIMER", 10, 40);
});

// Get cast list element
const castList = document.getElementById('castList');

// Fetch data 
fetch('../files/cast.txt')
  .then(res => res.text())
  .then(text => {

    // Split into lines
    const lines = text.split('\n');

    // Create list
    const ul = document.createElement('ul');
    
    // Loop through lines
    lines.forEach(line => {
    
      // Create cast item div
      const div = document.createElement('div');
      div.classList.add('castItem');
      div.classList.add('whiteFont');
      
      // Create image
      const img = document.createElement('img');
      img.src = '/files/profile-icon-9.png';
      
      // Create paragraph
      const p = document.createElement('p');
      p.textContent = line;
      
      // Add image and paragraph to cast item
      div.append(img, p);
      
      // Add cast item to list
      ul.appendChild(div);
      
    });

    // Add list to page
    castList.appendChild(ul);

  });

// Select review list container
const reviewList = document.getElementById('reviewsList');

// Fetch review data 
fetch('../files/reviews.txt')
  .then(res => res.text())
  .then(data => {

    // Split reviews into array
    const reviews = data.split('\n');

    // Create review HTML elements
    reviews.forEach(review => {
      
      // Create review item container
      const div = document.createElement('div');
      div.classList.add('reviewItem');
      div.classList.add('whiteFont');
      
      // Create paragraph for review text
      const para = document.createElement('p');
      para.textContent = review;
      
      // Add review text to item
      div.appendChild(para);

      // Add item to list
      reviewList.appendChild(div);

    });

  });

// Get video list element
const videoList = document.getElementById('videosList');

// Fetch links 
fetch('../files/videos.txt')
  .then(res => res.text())
  .then(data => {

    // Split links
    const links = data.split('\n');

    // Loop through links
    links.forEach(link => {

      // Create div
      const div = document.createElement('div');
      div.classList.add('videoItem');

      // Create iframe 
      const iframe = document.createElement('iframe');
      
      // Set iframe attributes
      iframe.src = link;
    //   iframe.width = '560';
    //   iframe.height = '315';
      iframe.allowFullscreen = true;

      // Add iframe to div
      div.appendChild(iframe);

      // Add div to list
      videoList.appendChild(div);

    });

  });