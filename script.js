const requestUrl ="https://restcountries.com/v3.1/all";
const card = document.getElementById("card");
const card2 = document.getElementById("card2");
const flag = document.getElementById("flags");
const country = document.getElementById("country");
const population = document.getElementById("population");
const region = document.getElementById("region");
const capital = document.getElementById("capital");
const cardsWrapper = document.getElementById("cardsWrapper");
const cardsWrapper2 = document.getElementById("cardsWrapper2");
const searchInput = document.getElementById("searchInput");
const glassIcon = document.getElementById("glassIcon");
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionList = document.querySelectorAll(".options");
let loader = document.querySelector("#preLoader");
const searchFilter = document.querySelector("#search_filter");
const button = document.querySelector("#btn");
let my_url = "/info.html";


selected.addEventListener("click", ()=>{
    optionsContainer.classList.toggle("active");
})

optionList.forEach((o) =>{
    o.addEventListener("click", ()=>{
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    filteredRegion(o);
  })
    
})


   
const theme = document.getElementById("theme")
theme.onclick=() =>{
document.body.classList.toggle("darkTheme");
   
}



    window.addEventListener("load", ()=>{
      loader.classList.add("preLoader-hidden");

      loader.addEventListener("transitionend",()=>{
        document.body.removeChild("loader")
      })
  })

  

const filteredRegion = (o) =>{
    let  Label = selected.innerHTML = o.querySelector("label").innerHTML;
        let filteredCountries = data.filter(countries =>{
            return (
              countries.region.includes(Label)
            );
          });
          displayCountries(filteredCountries)
    
};



const loadCountries =async () => {
    try {
        const response = await fetch(requestUrl);
        data = await response.json();
        const objectValues = Object.values(data);
        displayCountries(objectValues);
    } catch (error) {
        console.log(error);
    }

};

loadCountries()


   
   const displayCountries =(countries) => {
        const htmlString = countries
        .map((countries)=>{
            return`


            <div id="card" >
            <img src="${countries.flags.png}" alt="" id="flags">
            <div id="countryInfo" class="countryInfo">
                <h3 id="country">${countries.name.common}</h3>
                <p>Population: <span id="population">${countries.population}</span></p>
                <p>Region: <span id="region">${countries.region}</span></p>
                <p>Capital: <span id="capital">${countries.capital}</span></p>
            </div>
            </div>
            
        
            `;
        })
        .join(" ");
        cardsWrapper.innerHTML = htmlString;
   };




searchInput.addEventListener("keyup",(e) =>{
    let searchQuery =(e.target.value.toLowerCase());
   let filteredCountries = data.filter(countries =>{
      return (
        countries.name.common.toLowerCase().includes(searchQuery)
      );
    
    });
    displayCountries(filteredCountries)
    glassIcon.addEventListener("click",()=>{
        displayInfo(filteredCountries)
        searchFilter.style.display="none";
        button.style.display="block";
        cardsWrapper.style.display="none";
        cardsWrapper2.style.display="block";
    })
    
});


    const displayInfo =(countries) =>{
        const htmlString = countries
        .map((countries)=>{
            return`
            <div id="card2" >
    <img src="${countries.flags.png}" alt="" id="flags">
    <div id="countryInfo" class="countryInfo">
        <h3 id="country">${countries.name.common}</h3>
        <p>Native Name: <span>${countries.nativeNames}</span></p>
        <p>Population: <span id="population">${countries.population}</span></p>
        <p>Region: <span id="region">${countries.region}</span></p>
        <p>Sub Region: <span>${countries.subregion}</span></p>
        <p>Capital: <span id="capital">${countries.capital}</span></p>
        <p class="para">Top Level Domain: <span>b${countries.tld}</span></p>
        <p>Currencies: <span>${countries.currencies}</span> <span>${countries.currencies.symbol}</span></p>
        <p>Languages: <span>${countries.languages}</span></p>
        <h4>Border Countries:</h4>
        <div  class="borders">
            <div>${countries.borders[0]}</div>
            <div>${countries.borders[1]}</div>
            <div>${countries.borders[2]}</div>
        </div>
    </div>
</div>

            `;
        })
        .join(" ");
        cardsWrapper2.innerHTML = htmlString;
   };







/*cardGenerator = (d) =>{
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
}*/





