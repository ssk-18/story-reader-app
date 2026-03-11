const stories = [

{
title:"The Haunted House",
category:"horror",
content:"Rahul enters an abandoned mansion where strange whispers echo through the halls."
},

{
title:"Love in the Rain",
category:"romance",
content:"Arjun meets Ananya on a rainy evening and their story begins with a shared umbrella."
},

{
title:"Journey to Mars",
category:"scifi",
content:"In the year 2050, humans build the first colony on Mars."
},

{
title:"Never Give Up",
category:"motivation",
content:"Success comes to those who keep trying even after failure."
}

];


let currentStories = stories;



function displayStories(list){

const container = document.getElementById("storyContainer");

container.innerHTML = "";


list.forEach(story => {

const div = document.createElement("div");

div.innerHTML = `

<div class="book">

<div class="book-cover">

📖

<h3>${story.title}</h3>

</div>

<div class="book-content">

<p>${story.content}</p>

<button class="bookmark" onclick="bookmarkStory('${story.title}')">
Bookmark
</button>

</div>

</div>

`;

container.appendChild(div);

});

}



function filterStories(category){

if(category==="all"){

currentStories=stories;

}

else{

currentStories=stories.filter(s=>s.category===category);

}

displayStories(currentStories);

}



function searchStories(){

const keyword=document
.getElementById("searchBar")
.value
.toLowerCase();

const filtered=currentStories.filter(story =>
story.title.toLowerCase().includes(keyword)
);

displayStories(filtered);

}



function bookmarkStory(title){

let bookmarks=
JSON.parse(localStorage.getItem("bookmarks")) || [];

if(!bookmarks.includes(title)){

bookmarks.push(title);

localStorage.setItem(
"bookmarks",
JSON.stringify(bookmarks)
);

alert("Story Bookmarked!");

}

}



document.getElementById("darkToggle").onclick=function(){

document.body.classList.toggle("dark");

};



displayStories(stories);
