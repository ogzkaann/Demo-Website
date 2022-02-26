document.querySelector('#showPost').addEventListener('click', loadPost)

function loadPost(){

    const xhr = new XMLHttpRequest();
    xhr.open('GET','data.json',true);

    xhr.onload = function(){
        if(this.status === 200){
            let demoWebsite = JSON.parse(this.responseText);
            console.log(demoWebsite);
            
            let blogHtml = 
                `<h1 class = "mt-5 mb-5 display-4"><strong>${demoWebsite.tumblelog.title}</strong></h1>
                <div style = "position: absolute; width: 170px; text-align: right; right: 400px; padding: 10px;" class = "container col-xs-6">${demoWebsite.tumblelog.description}</div>
                <div>Total Posts: ${demoWebsite["posts-total"]}</div>
                `;
                document.querySelector("#blog").innerHTML = blogHtml;


            let postHtml = 
            `<div class = "date mt-5"><i class="bi bi-calendar"></i> ${"" + demoWebsite.posts[0]["date-gmt"].slice(8,10) + "-" + demoWebsite.posts[0]["date-gmt"].slice(5,7)  + "-" +  demoWebsite.posts[0]["date-gmt"].slice(0,4)}</div>
            <div style = "text-align:left;" class="content">
                <blockquote class = "blockquote" >
                    <p>${demoWebsite.posts[0]["quote-text"]}</p>
                </blockquote >
                <figcaption class="blockquote-footer">
                    ${demoWebsite.posts[0]["quote-source"]}
                </figcaption>
            </div>

            <div class = "date mt-5"><i class="bi bi-calendar"></i> ${"" + demoWebsite.posts[1]["date-gmt"].slice(8,10) + "-" + demoWebsite.posts[1]["date-gmt"].slice(5,7)  + "-" +  demoWebsite.posts[1]["date-gmt"].slice(0,4)}</div>
            <div style = "text-align:left;">
                <img src = "${demoWebsite.posts[1]["photo-url-400"]}" class = "img-fluid" alt = "Responsive image">
                <figcaption class="blockquote-footer">
                    ${demoWebsite.posts[1]["photo-caption"]}
                </figcaption>
            </div>

            <div class = "date mt-5"><i class="bi bi-calendar"></i> ${"" + demoWebsite.posts[2]["date-gmt"].slice(8,10) + "-" + demoWebsite.posts[2]["date-gmt"].slice(5,7)  + "-" +  demoWebsite.posts[2]["date-gmt"].slice(0,4)}</div>
            <div style = "text-align:left;">
                <div>
                    <p>${demoWebsite.posts[2]["link-text"]}</p>
                </div >
                <div>
                    <p>${demoWebsite.posts[2]["link-description"]}</p>
                </div >
                
            </div>

            <div class = "date mt-5"><i class="bi bi-calendar"></i> ${"" + demoWebsite.posts[3]["date-gmt"].slice(8,10) + "-" + demoWebsite.posts[3]["date-gmt"].slice(5,7)  + "-" +  demoWebsite.posts[3]["date-gmt"].slice(0,4)}</div>
            <div style = "text-align:left;">
                <ul class="list-group">
                    <li class="list-group-item">${demoWebsite.posts[3].conversation[0].label + demoWebsite.posts[3].conversation[0].phrase}</li>
                    <li class="list-group-item">${demoWebsite.posts[3].conversation[1].label + demoWebsite.posts[3].conversation[1].phrase}</li>
                    <li class="list-group-item">${demoWebsite.posts[3].conversation[2].label + demoWebsite.posts[3].conversation[2].phrase}</li>
                    <li class="list-group-item">${demoWebsite.posts[3].conversation[3].label + demoWebsite.posts[3].conversation[3].phrase}</li>
                    <li class="list-group-item">${demoWebsite.posts[3].conversation[4].label + demoWebsite.posts[3].conversation[4].phrase}</li>
                    <li class="list-group-item">${demoWebsite.posts[3].conversation[5].label + demoWebsite.posts[3].conversation[5].phrase}</li>
                </ul >
            </div>

            <div class = "date mt-5"><i class="bi bi-calendar"></i> ${"" + demoWebsite.posts[4]["date-gmt"].slice(8,10) + "-" + demoWebsite.posts[4]["date-gmt"].slice(5,7)  + "-" +  demoWebsite.posts[4]["date-gmt"].slice(0,4)}</div>
            <div style = "text-align:left;">
                <blockquote class = "blockquote" >
                    <p>${demoWebsite.posts[4]["id3-album"]}</p>
                </blockquote >
                <div>
                    <p>${demoWebsite.posts[4]["id3-artist"]}</p>
                    <p>${demoWebsite.posts[4]["id3-title"]}</p>
                </div>
            </div>

            <div class = "date mt-5"><i class="bi bi-calendar"></i> ${"" + demoWebsite.posts[5]["date-gmt"].slice(8,10) + "-" + demoWebsite.posts[5]["date-gmt"].slice(5,7)  + "-" +  demoWebsite.posts[5]["date-gmt"].slice(0,4)}</div>
            <div style = "text-align:left;">
                <a href="${demoWebsite.posts[5].url}" style = "text-decoration: none;" class="link-primary">${demoWebsite.posts[5]["regular-title"]}</a>
            </div>
            <div style = "text-align:left;">
                <p>${demoWebsite.posts[5]["regular-body"]}</a>
            </div>

            <div class = "date mt-5"><i class="bi bi-calendar"></i> ${"" + demoWebsite.posts[6]["date-gmt"].slice(8,10) + "-" + demoWebsite.posts[6]["date-gmt"].slice(5,7)  + "-" +  demoWebsite.posts[6]["date-gmt"].slice(0,4)}</div>
            <a style = "text-align:left;">
                <div style = "text-align:left;">
                    <p>${demoWebsite.posts[6]["regular-body"]}</a>
                </div>
            </div>            
            `;
                
                document.querySelector("#post").innerHTML = postHtml;
        }
    }
    xhr.send();
}