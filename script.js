const stories = [

{
title:"The Haunted House",
category:"horror",
content:"One night, Rahul entered an old haunted house. Suddenly he heard footsteps behind him..."
},

{
title:"Love in the Rain",
category:"romance",
content:"Ananya met Arjun on a rainy evening. Their story began with a simple umbrella..."
},

{
title:"Journey to Mars",
category:"scifi",
content:"In the year 2050 humans finally landed on Mars to build their first colony..."
},

{
title:"Never Give Up",
category:"motivation",
content:"Success doesn't come overnight. Hard work and patience lead to greatness..."
}

];

function displayStories(list){

const container = document.getElementById("storyContainer");
container.innerHTML="";

list.forEach(story => {

const div = document.createElement("div");
div.className="story";

div.innerHTML = `
<h3>${story.title}</h3>
<p>${story.content}</p>
`;

container.appendChild(div);

});

}

function filterStories(category){

if(category==="all"){
displayStories(stories);
}
else{

const filtered = stories.filter(s => s.category===category);

displayStories(filtered);

}

}

displayStories(stories);