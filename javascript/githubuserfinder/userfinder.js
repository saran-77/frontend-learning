const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
const userProfile = document.getElementById("userProfile");
const userName = document.getElementById("userName");
const accInfo = document.getElementById("accInfo");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const rep = document.getElementById("rep");


const apiurl ="https://api.github.com/users/";

async function github(user) {
  const response =await fetch(apiurl + user);
  if(response.status === 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".info").style.display ="none";
        document.querySelector(".stats").style.display ="none";

        return;
      }

  document.querySelector(".error").style.display = "none";
  document.querySelector(".info").style.display ="flex";
  document.querySelector(".stats").style.display ="grid";


  const data = await response.json();


  userProfile.src=data.avatar_url;
  userName.innerHTML=data.login;
  followers.innerHTML=data.followers;
  following.innerHTML=data.following;
  rep.innerHTML=data.public_repos;
  const createdDate = new Date(data.created_at);
  accInfo.innerHTML = createdDate.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric"
});

document.querySelector(".info").classList.add("show");
document.querySelector(".stats").classList.add("show");



}



searchButton.addEventListener("click",() =>{
github(searchBox.value);


})










