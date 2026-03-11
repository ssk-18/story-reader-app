const stories = [

{
title:"The Haunted House",
category:"horror",
content:"One night Rahul entered an abandoned house. Suddenly the door slammed..."
},

{
title:"Love in the Rain",
category:"romance",
content:"Ananya met Arjun during a rainy evening and their journey started..."
},

{
title:"Journey to Mars",
category:"scifi",
content:"In 2050 humans finally built a colony on Mars..."
},

{
title:"Never Give Up",
category:"motivation",
content:"Success belongs to those who never stop trying."
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

<h3>${story.title}</h3>

<p>${story.content}</p>

<button class="bookmark" onclick="bookmarkStory('${story.title}')">
Bookmark
</button>

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

const keyword=document.getElementById("searchBar").value.toLowerCase();

const filtered=currentStories.filter(story =>
story.title.toLowerCase().includes(keyword)
);

displayStories(filtered);

}


function bookmarkStory(title){

let bookmarks=JSON.parse(localStorage.getItem("bookmarks"))||[];

if(!bookmarks.includes(title)){

bookmarks.push(title);

localStorage.setItem("bookmarks",JSON.stringify(bookmarks));

alert("Story Bookmarked!");

}

}


document.getElementById("darkToggle").onclick=function(){

document.body.classList.toggle("dark");

};

displayStories(stories);
