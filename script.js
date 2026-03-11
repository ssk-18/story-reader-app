const stories=[

{
title:"Love in the Rain",
category:"romance",
image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
content:"Arjun meets Ananya during a rainy evening and their love story begins."
},

{
title:"Haunted Mansion",
category:"horror",
image:"https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
content:"Rahul enters a mansion where strange whispers echo in the dark halls."
},

{
title:"Journey to Mars",
category:"scifi",
image:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
content:"In 2050 humans build their first colony on Mars."
},

{
title:"Never Give Up",
category:"motivation",
image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
content:"Success belongs to those who never stop trying."
}

];

let currentStories=stories;



function displayStories(list){

const container=document.getElementById("storyContainer");

container.innerHTML="";


list.forEach(story=>{

const div=document.createElement("div");

div.innerHTML=`

<div class="book">

<div class="cover" style="background-image:url('${story.image}')"></div>

<div class="pages"></div>

<div class="content">

<p>${story.content}</p>

<button onclick="bookmarkStory('${story.title}')">
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

alert("Bookmarked!");

}

}



document.getElementById("darkToggle").onclick=function(){

document.body.classList.toggle("dark");

};



displayStories(stories);
