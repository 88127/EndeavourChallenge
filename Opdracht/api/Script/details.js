const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const ID = urlParams.get('ArtId');

const urlImage = urlParams.get('Img');

console.log(ID);

let key = "NNmD29M4";
let link = "https://www.rijksmuseum.nl/api/nl/collection/" + ID + "?key=" + key;

$.ajax({
  type: "GET",
  url: link,
  dataType: "JSON",
  success: function (artinfo) 
  { 
                console.log(artinfo);
                let image = document.createElement("img");
                image.src = urlImage;
                image.className = "header";

                document.getElementById('head').appendChild(image); 

                let div = document.createElement("div");
                div.className = "Show";
                
                // title kunst
                console.log(artinfo.artObject)
                let title = document.createElement("h4");
                title.innerHTML = artinfo.artObject.title;

                // kunstenaar
                let kunstenaar = document.createElement("h4");
                kunstenaar.innerHTML = "Kunstenaar: " + artinfo.artObject.principalOrFirstMaker;
                
                let date = document.createElement("h4");
                date.innerHTML = "Datering: " + artinfo.artObject.dating.presentingDate;

                let type = document.createElement("ul");
                type.innerHTML = "<li> Type: " + artinfo.artObject.objectTypes + "</li>";

                type.innerHTML += "<li> Materiaal: " + artinfo.artObject.materials + "</li>";
                type.innerHTML += "<li> Afmeting: " +
                artinfo.artObject.dimensions[0].type + " " + artinfo.artObject.dimensions[0].value + " " + artinfo.artObject.dimensions[0].unit + 
                " x " + artinfo.artObject.dimensions[1].type + " " + artinfo.artObject.dimensions[1].value + " " + artinfo.artObject.dimensions[1].unit + "</li>";
                type.innerHTML += "<li> Objectnummer: " + artinfo.artObject.objectNumber + "</li>";
                type.innerHTML += "<li> Omschrijving: " + artinfo.artObject.description + "</li>";

                let aankoop = "";
                for( let i = 0; i <= 3; i++)
                {
                  aankoop += artinfo.artObject.acquisition.date[i];
                }
                
                type.innerHTML += "<li> Verwerving: " + aankoop + "</li>";

                

                div.append(title, kunstenaar, date, type);
                document.getElementById('detailen').appendChild(div); 
  }          
});