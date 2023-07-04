let key = "NNmD29M4";

function loaddArt(){
    let name = $("#Art").val();
    let type = $("#Type").val();
    let material = $("#Material").val();
    let encode = encodeURIComponent(material);
    

    document.getElementById("Result").innerHTML = "";
    let link = "https://www.rijksmuseum.nl/api/nl/collection?key="+ key +"&involvedMaker=" + name + "&type=" + type + "&f.normalized32Colors.hex=" + encode;

    console.log(link);
    $.ajax({
        type: "GET",
        url: link,
        dataType: "JSON",
        success: function (artinfo) 
        { 
            console.log(artinfo);
            console.log(artinfo.artObjects.length); 
            for(let i = 0; i < artinfo.artObjects.length; i++){
                let div = document.createElement("div");
                div.className = "ArtObject";
                div.addEventListener('click', (e) => {window.open("detail.html?ArtId=" + artinfo.artObjects[i].objectNumber + "&Img=" + artinfo.artObjects[i].headerImage.url)})

                // image kunst
                let image = document.createElement("img");
                image.src = artinfo.artObjects[i].webImage.url;
                
                // title kunst
                let title = document.createElement("h2");
                title.innerHTML = artinfo.artObjects[i].title;

                // kunstenaar
                let kunstenaar = document.createElement("h2");
                kunstenaar.innerHTML = "Kunstenaar: " + artinfo.artObjects[i].principalOrFirstMaker;

                let link = document.createElement("a");
                link.className = "link";
                link.href = "detail.html?ArtId=" + artinfo.artObjects[i].objectNumber + "&Img=" + artinfo.artObjects[i].headerImage.url;
                link.innerHTML = "Read more";
                
                

                div.append(image, title, kunstenaar, link);
                document.getElementById('Result').appendChild(div);
                
            }
        } 
    }); 
}
