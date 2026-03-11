const stories = [

{
title:"The Haunted House",
category:"horror",
content:"Rahul enters a haunted mansion where strange sounds echo through the dark halls."
},

{
title:"Love in the Rain",
category:"romance",
content:"Arjun meets Ananya during a rainy evening and their love story begins."
},

{
title:"Journey to Mars",
category:"scifi",
content:"In 2050 humanity creates its first colony on Mars."
},

{
title:"Never Give Up",
category:"motivation",
content:"Success comes to those who continue trying despite failure."
}

];


let currentStories = stories;



function displayStories(list){

const container=document.getElementById("storyContainer");

container.innerHTML="";


list.forEach(story=>{

const div=document.createElement("div");

div.className="story";


div.innerHTML=`

<div class="flip-card">

<div class="flip-inner">

<div class="flip-front">

<h3>${story.title}</h3>

<p>${story.category}</p>

</div>


<div class="flip-back">

<p>${story.content}</p>

<button class="bookmark" onclick="bookmarkStory('${story.title}')">
Bookmark
</button>

</div>

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
