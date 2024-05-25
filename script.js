const requestUrl ="https://restcountries.com/v3.1/all";
const card = document.getElementById("card");
const flag = document.getElementById("flags");
const country = document.getElementById("country");
const population = document.getElementById("population");
const region = document.getElementById("region");
const capital = document.getElementById("capital");
const cardsWrapper = document.getElementById("cardsWrapper");


/*const Data= fetch(requestUrl)
.then(response => response.json())  
.then(data =>{
    data.forEach((d) => {
        cardGenerator(d);
    })
});*/

fetch(requestUrl)
.then(response => response.json())  
.then(  (data) =>{
    data.forEach((d) => {
        cardGenerator(d);
    })

    searchInput.addEventListener("keyup", (e) =>{
        const searchQuery = e.target.value;
        filtered =data.filter(countries =>{
          return  countries.contains(searchQuery);
        });
        console.log(filtered)
     })

});

const theme = document.getElementById("theme")

theme.onclick=() =>{
document.body.classList.toggle("darkTheme");

}

const searchInput = document.getElementById("searchInput");
const glassIcon = document.getElementById("glassIcon");


cardGenerator = (d) =>{
const card2 = document.createElement("div");
const image =document.createElement("img");
const Info =document.createElement("div");
const H3=document.createElement("h3");
const span=document.createElement("span");
const span2=document.createElement("span");
const span3=document.createElement("span");
const text=document.createElement("p");
const text2=document.createElement("p");
const text3=document.createElement("p");
span.innerText=(d.population);
span2.innerText=(d.region);
span3.innerText=(d.capital);
H3.classList.add("H3");
H3.innerText=(d.name.common);
text.innerText="Population: ";
text2.innerText="Region: ";
text3.innerText="Capital: ";
text.append(span);
text2.append(span2);
text3.append(span3);
Info.append(H3);
Info.append(text);
Info.append(text2);
Info.append(text3);
Info.classList.add("countryInfo");
image.src=(d.flags.png);
card2.append(image)
card2.append(Info);
card2.classList.add("cards");
cardsWrapper.append(card2);
}





