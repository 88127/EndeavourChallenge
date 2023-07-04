let oldInput = 4;

$(document).ready(function() {
    $('.search').select2();

    let link = "https://www.rijksmuseum.nl/api/nl/collection?key=NNmD29M4&ps=1";

    $.ajax({
        type: "GET",
        url: link,
        dataType: "JSON",
        success: function (artinfo) 
        { 
            console.log(artinfo);
            $(".search").each(function() { 
            let Select = $(this);
            let add = Select.attr("value");
            let lijst = artinfo.facets[add].facets;

            for (let i = 0; i < lijst.length; i++)
            {
                Select.append('<option value="'+ lijst[i].key +'">' + lijst[i].key + '</option>');
            }
        });   
    }
});
    
    
    $(".search").on('select2:select', function (e) {   
        let input = $(this).val();

        if($(this).attr("value") != 6){
            Color(input);
        } else 
        {
            $("#Memo").css("background-color", input);
        }
    });
});




function Color(input)
{
    let link = "https://www.rijksmuseum.nl/api/nl/collection?key=NNmD29M4&ps=1&q="+input;

    $.ajax({
        type: "GET",
        url: link,
        dataType: "JSON",
        success: function (artinfo) 
        { 
            let Select = $("#Material");
            let colors = artinfo.facets[6].facets;
            console.log(colors);
            
            Select.empty();
            Select.append('<option value=""></option>');
            for (let i = 0; i < colors.length; i++)
            {
                let style = $('<option value="'+ colors[i].key +'">' + colors[i].key + '</option>');
                style.css("color", colors[i].key);
                Select.append(style);
            }
        }
    });
}