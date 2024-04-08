/**
* Data Catalog Project Starter Code - SEA Stage 2
*
* This file is where you should be doing most of your work. You should
* also make changes to the HTML and CSS files, but we want you to prioritize
* demonstrating your understanding of data structures, and you'll do that
* with the JavaScript code you write in this file.
*
* The comments in this file are only to help you learn how the starter code
* works. The instructions for the project are in the README. That said, here
* are the three things you should do first to learn about the starter code:
* - 1 - Change something small in index.html or style.css, then reload your
* browser and make sure you can see that change.
* - 2 - On your browser, right click anywhere on the page and select
* "Inspect" to open the browser developer tools. Then, go to the "console"
* tab in the new window that opened up. This console is where you will see
* JavaScript errors and logs, which is extremely helpful for debugging.
* (These instructions assume you're using Chrome, opening developer tools
* may be different on other browsers. We suggest using Chrome.)
* - 3 - Add another string to the titles array a few lines down. Reload your
* browser and observe what happens. You should see a fourth "card" appear
* with the string you added to the array, but a broken image.
*
*/


const FINAL_FANTASY_URL = "https://square-enix-games.com/ffxiv-origami/images/logo.png";
const GENSHIN_IMPACT_URL = "https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact_logo.svg";
const LEAGUE_OF_LEGENDS_URL = "https://upload.wikimedia.org/wikipedia/tr/7/77/League_of_Legends_logo.png";

const FINAL_FANTASY_IMAGES =
[
"https://forums.homecomingservers.com/uploads/monthly_2020_04/20200110135835_1.jpg.6e8b6d415e5c268a4bd4115802d7611b.jpg",
"https://www.gamespot.com/a/uploads/original/1574/15747411/3720322-vlcsnap-2020-08-13-09h12m02s249.png",
"https://www.icy-veins.com/forums/uploads/monthly_2024_01/904910143_TorgalFF14.jpg.56f6d9dbb57ff998fc8823d9caa6fc0c.jpg",
"https://square-enix-games.com/ffxiv-origami/images/logo.png"
];

const GENSHIN_IMPACT_IMAGES =
[
"https://media.npr.org/assets/img/2020/11/25/genshin_wide-59ae4e3c66176e7b048f5c7dbf2abd4b136cbe00.jpg",
"https://mmos.com/wp-content/gallery/genshin-impact-game/Genshin-Impact-dash.jpg",
"https://www.heypoorplayer.com/wp-content/uploads/2021/06/genshinayakaleakmain.jpg",
"https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact_logo.svg"
];

const LEAGUE_OF_LEGENDS_IMAGES =
[
"https://lutris.net/media/games/screenshots/2019-02-22-102334_1920x1080_scrot.png",
"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDyRw1CX4oS0oqc-0_igLm9W3uq-5YT3BwcDKEq5AJJJ8xVQ53DqvtjQX9Zw9iEn8yZ2S3uvRXnbhTwJJ8L8xYlpo63xYcy2vEYc_sb2vFtxUZqe-9A7Tbtf7DPpv56dbSyZhAJdbPs6y9/s1600/Screen13.png",
"https://i.pinimg.com/736x/05/89/5f/05895f2cc32d4af1a14e51e94e5d0730.jpg",
"https://upload.wikimedia.org/wikipedia/tr/7/77/League_of_Legends_logo.png"
];

let titlesData =
[
{
title: "Final Fantasy XIV",
imageURL: FINAL_FANTASY_URL,
images: FINAL_FANTASY_IMAGES,
bulletPoints:
[
"From Square Enix",
"Critically Acclaimed MMO",
"Fun Gameplay and great community"
]
},
{
title: "Genshin Impact",
imageURL: GENSHIN_IMPACT_URL,
images: GENSHIN_IMPACT_IMAGES,
bulletPoints:
[
"From Hoyoverse",
"Beautiful open-world RPG",
"Fun play-style and lovable characters with immersive story line"
]
},
{
title: "League of Legends",
imageURL: LEAGUE_OF_LEGENDS_URL,
images: LEAGUE_OF_LEGENDS_IMAGES,
bulletPoints:
[
"From Riot Games",
"Top MOBA game in the world",
"Over 150 different champions to play from"
]
}
];

function showCards()
{
const cardContainer = document.getElementById("card-container");
cardContainer.innerHTML = "";

titlesData.forEach(titleData => {
const nextCard = createCard(titleData);
cardContainer.appendChild(nextCard);
});

}
function createCard(titleData)
{
const templateCard = document.querySelector(".card");
const nextCard = templateCard.cloneNode(true);

editCardContent(nextCard, titleData.title, titleData.imageURL, titleData.images, titleData.bulletPoints);

if (titleData.title === "Home")
{
nextCard.classList.add("home-card");
}
return nextCard;
}

function editCardContent(card, newTitle, newImageURL, images, bulletPoints)
{
card.style.display = "block";

const cardHeader = card.querySelector("h2");
cardHeader.textContent = newTitle;

const cardImage = card.querySelector("img");
cardImage.src = newImageURL;
cardImage.alt = newTitle + "Poster";

const bulletPointList = card.querySelector("ul");
bulletPoints.forEach((bulletPoint, index) => {
const listItem = bulletPointList.querySelector(`li:nth-child(${index + 1})`);
listItem.textContent = bulletPoint;
});

const prevButton = card.querySelector(".prev-button");
const nextButton = card.querySelector(".next-button");

prevButton.addEventListener("click", () => navigateImage(-1, cardImage, images));
nextButton.addEventListener("click", () => navigateImage(1, cardImage, images));
}

function getImageFileName(url)
{
return url.substring(url.lastIndexOf('/') + 1);
}

function navigateImage(direction, imageElement, images)
{
const currentFileName = getImageFileName(imageElement.src);
const currentIndex = images.findIndex(url => getImageFileName(url) === currentFileName);
const nextIndex = (currentIndex + direction + images.length) % images.length;
const nextImageURL = images[nextIndex];

imageElement.src = nextImageURL;
}

document.addEventListener("DOMContentLoaded", function() {
showCards();
dropDownMenu();
popUpMenu();
dropDownItems();
filterCards("Home");
});

function filterCards(gameTitle)
{
const cardContainer = document.getElementById("card-container");
const cards = cardContainer.querySelectorAll(".card");

cards.forEach(card => {
const cardTitle = card.querySelector("h2").textContent.trim();
if (gameTitle === "Home")
{
card.style.display = "block";
}
else if (cardTitle === gameTitle)
{
card.style.display = "block";
}
else
{
card.style.display = "none";
}
});
}

function dropDownItems()
{
const dropdownItems = document.querySelectorAll(".dropdown__menu a");
dropdownItems.forEach(item => {
item.addEventListener("click", function(event){
event.preventDefault();

const gameTitle = this.textContent.trim();
const hash = `#/${gameTitle.replace(/\s+/g, '')}`;

window.location.hash = hash;

filterCards(gameTitle);
});
});
}

function dropDownMenu()
{
const dropDownBtn = document.querySelector(".dropdown__button");
const dropDownMenu = document.querySelector(".dropdown__menu");

dropDownBtn.addEventListener("click", () => {
dropDownMenu.classList.toggle("hide");
});
}

function popUpMenu()
{
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

const randomContent =
[
{
text: "Don't be afraid to make mistakes. It's all part of the learning process. -Tighnari (from Genshin Impact)",
imageURL: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/genshin-impact/0/01/Genshin-impact-tighnari.jpg"
},
{
text: "A smile better suits a hero. -Haurchefant (from Final Fantasy XIV)",
imageURL: "https://images.adagio.com/images2/custom_blends/114888.jpg"
},
{
text: "The strongest light is the one within. -Lux (from League of Legends)",
imageURL: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg"
}
];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal()
{
const randomIndex = Math.floor(Math.random() * 3);

const randomQuote = randomContent[randomIndex];
const { text, imageURL } = randomQuote;

const modalContent = document.querySelector('.modal-content');
modalContent.querySelector('.modal-body p').textContent = text;
modalContent.querySelector('.modal-body img').src = imageURL;

modal.style.display = 'block';
}

function closeModal()
{
modal.style.display = 'none';
}

function clickOutside(e)
{
if(e.target == modal){
modal.style.display = 'none';
}
}
}
