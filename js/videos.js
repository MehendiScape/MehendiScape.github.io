function Api()
{
    $.getJSON("https://noembed.com/embed?url=https://www.youtube.com/watch?v=JGeig0gc1LE&ab_channel=MehendiScape", function(data) {
    advid(data);
});
$.getJSON("https://noembed.com/embed?url=https://www.youtube.com/watch?v=HfUaZaCabtE&ab_channel=MehendiScape", function(data) {
    advid(data);
});
$.getJSON("https://noembed.com/embed?url=https://www.youtube.com/watch?v=JbYepAVafjQ", function(data) {
    advid(data);
});
$.getJSON("https://noembed.com/embed?url=https://www.youtube.com/watch?v=eqiytMhlFbY&ab_channel=MehendiScape", function(data) {
    advid(data);
});
$.getJSON("https://noembed.com/embed?url=https://www.youtube.com/watch?v=OkThP0fmEo8&ab_channel=MehendiScape", function(data) {
    advid(data);
});
//loadJson("https://www.youtube.com/watch?v=JGeig0gc1LE&ab_channel=MehendiScape",avid)
//advid('https://www.youtube.com/watch?v=JGeig0gc1LE&ab_channel=MehendiScape');
//advid("https://www.youtube.com/watch?v=HfUaZaCabtE&ab_channel=MehendiScape");
//advid("https://www.youtube.com/watch?v=JbYepAVafjQ");
//advid("https://www.youtube.com/watch?v=eqiytMhlFbY&ab_channel=MehendiScape");
//advid("https://www.youtube.com/watch?v=OkThP0fmEo8&ab_channel=MehendiScape");
}
function advid(data)
{
            console.log(data);

            col=document.createElement("div");
            contimg=document.createElement("div");
            link=document.createElement("a");
            img=document.createElement("img");
            imgoverlay=document.createElement("div");
            cap=document.createElement("div");
            titl=document.createElement("h4");
            brand=document.createElement("span");
            col.setAttribute("class","col-md-4 col-sm-6 col-xs-12 filtr-item");
            contimg.setAttribute("class","content-image");
            link.setAttribute("href",data.url);
            img.setAttribute("src",data.thumbnail_url);
            imgoverlay.setAttribute("class","image-overlay");
            cap.setAttribute("class","image-caption");
            titl.innerHTML=data.title;
            titl.id="title";
            brand.innerHTML=data.author_name;
            cap.appendChild(titl);
            cap.appendChild(brand);
            link.appendChild(img);
            link.appendChild(imgoverlay);
            link.appendChild(cap);
            contimg.appendChild(link);
            col.appendChild(contimg);
            k=document.getElementById("pass");
            k.appendChild(col);
}