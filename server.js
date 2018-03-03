var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var fs = require('fs');
var needle = require('needle');
var url = require('url');
var probe = require('probe-image-size');
app.use(express.static(__dirname));
var path    = require("path");

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/json', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    var options = {
        compressed: true, // sets 'Accept-Encoding' to 'gzip,deflate' 
        follow_max: 3, // follow up to 3 redirects 
        rejectUnauthorized: true // verify SSL certificate 
    }


    var url = req.query.url;
    needle.get(encodeURI(url), options, function(error, response) {

        if (!error) {
            var $ = cheerio.load(response.body);

            var json = {};

            var mtitle = $('meta[name="title"]').attr('content');
            var mkeywords = $('meta[name="keywords"]').attr('content');
            var mdescription = $('meta[name="description"]').attr('content');
            var mauthor = $('meta[name="author"]').attr('content');
            var lauthor = $('meta[property="author"]').attr('content');

            var pauthorurl = $('meta[property="article:author"]').attr('content');
            var nauthorurl = $('meta[name="article:author"]').attr('content');


            var otype = $('meta[property="og:type"]').attr('content');
            var otitle = $('meta[property="og:title"]').attr('content');
            var ovideourl = $('meta[property="og:video:url"]').attr('content');
            var ovideo = $('meta[property="og:video"]').attr('content');
            var oimage = $('meta[property="og:image"]').attr('content');
            var odescription = $('meta[property="og:description"]').attr('content');
            var osite = $('meta[property="og:site_name"]').attr('content');
            var odate = $('meta[property="article:published_time"]').attr('content');
            var gdate = $('meta[property="og:pubdate"]').attr('content');
            var mdate = $('meta[name="published_at"]').attr('content');
            var ndate = $('meta[name="date"]').attr('content');
            var ddate = $('meta[name="dc.date"]').attr('content');
            var fdate = $('meta[name="date"]').attr('content');
            var adate = $('meta[name="article.published"]').attr('content');
            var cdate = $('meta[name="article.created"]').attr('content');
            var ydate = $('meta[itemprop="datePublished"]').attr('content');

            var embeduri = $('link[itemprop="embedURL"]').attr('href');

            var platitude = $('meta[property="place:location:latitude"]').attr('content');
            var plongitude = $('meta[property="place:location:longitude"]').attr('content');
            var ilatitude = $('meta[itemprop="place:location:latitude"]').attr('content');
            var ilongitude = $('meta[itemprop="place:location:longitude"]').attr('content');



            var tsite = $('meta[name="twitter:site"]').attr('content');
            var ttitle = $('meta[name="twitter:title"]').attr('content');
            var tdescription = $('meta[name="twitter:description"]').attr('content');
            var timage = $('meta[name="twitter:image"]').attr('content');
            var tplayer = $('meta[name="twitter:player"]').attr('content');
            var tauthor = $('meta[name="twitter:creator"]').attr('content');


            var psite = $('meta[property="twitter:site"]').attr('content');
            var ptitle = $('meta[property="twitter:title"]').attr('content');
            var pdescription = $('meta[property="twitter:description"]').attr('content');
            var pimage = $('meta[property="twitter:image"]').attr('content');
            var pplayer = $('meta[property="twitter:player"]').attr('content');
            var pauthor = $('meta[property="twitter:creator"]').attr('content');


            var aoembed = $('link[type="application/json+oembed"]').attr('href');
            var toembed = $('link[type="text/json+oembed"]').attr('href');

            var canonical = $('link[rel="canonical"]').attr('href');

            if (canonical) {
                if (canonical.substring(0, 4) == "http") {
                    json.canonical = canonical;
                } else json.canonical = url;
            } else json.canonical = url;

            var domain = url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
            var favicon = $('link[rel="icon"]').attr('href');
            var shorticon = $('link[rel="shortcut icon"]').attr('href');
            if (favicon) {
                if (favicon.substring(0, 4) == "http") json.icon = favicon;
                else if (favicon.substring(0, 2) == "//") json.icon = favicon;
                else json.icon = domain + favicon;
            } else if (shorticon) {
                if (shorticon.substring(0, 4) == "http") json.icon = shorticon;
                else if (shorticon.substring(0, 2) == "//") json.icon = shorticon;
                else json.icon = domain + shorticon;
            } else json.icon = "http://" + domain + "/favicon.ico";

if (json.icon.substring(0,4) != "http") json.icon = "http://" + json.icon;


            if (osite) {
                json.site = osite;
            } else if (tsite) {
                json.site = tsite;
            } else if (psite) {
                json.site = psite;
            } else json.site = domain;

            if (ttitle) {
                json.title = ttitle;
            } else if (ptitle) {
                json.title = ptitle;
            } else if (otitle) {
                json.title = otitle;
            } else if (mtitle) {
                json.title = mtitle;
            }

            if (mkeywords) json.keywords = mkeywords;

            if (odate) {
                json.date = odate;
            } else if (gdate) {
                json.date = gdate;
            } else if (mdate) {
                json.date = mdate;
            } else if (ndate) {
                json.date = ndate;
            } else if (ddate) {
                json.date = ddate;
            } else if (fdate) {
                json.date = fdate;
            } else if (adate) {
                json.date = adate;
            } else if (cdate) {
                json.date = cdate;
            } else if (ydate) {
                json.date = ydate;
            }

            if (lauthor) {
                json.author = lauthor;
            } else if (tauthor) {
                json.author = tauthor;
            } else if (pauthor) {
                json.author = pauthor;
            } else if (mauthor) {
                json.author = mauthor;
            }

            if (pauthorurl) {
                json.author_url = pauthorurl;
            } else if (nauthorurl) {
                json.author_url = nauthorurl;
            }

            if (platitude) json.latitude = platitude;
            else if (ilatitude) json.latitude = ilatitude;

            if (plongitude) json.longitude = plongitude;
            else if (ilongitude) json.longitude = ilongitude;

            if (tdescription) {
                json.description = tdescription;
            } else if (pdescription) {
                json.description = pdescription;
            } else if (odescription) {
                json.description = odescription;
            } else if (mdescription) {
                json.description = mdescription;
            }

            if (timage) {
                json.image = timage;
            } else if (pimage) {
                json.image = pimage;
            } else if (oimage) {
                json.image = oimage;
            }

            if (tplayer) {
                json.player = tplayer;
            } else if (pplayer) {
                json.player = pplayer;
            } else if (ovideourl) {
                json.player = ovideourl;
            } else if (ovideo) {
                json.player = ovideo;
            } else if (embeduri) json.player = embeduri;
              else if ((url.indexOf("itunes.apple.com/") > -1) && (url.indexOf("/album/") > -1)){
                var itunesid = $('meta[name="apple:content_id"]').attr('content');
                json.html = "<iframe src=\'//tools.applemusic.com/embed/v1/album/" + itunesid + "\' style=\'border: 0; width: 400px; height: 400px;\' allowfullscreen></iframe>";
            } else if (url.indexOf("vine.co/v/") > -1) {
                json.player = canonical.replace(/\/+/g, '/') + "embed/simple";
            } else if (url.indexOf("500px.com/photo/") > -1) {
                json.html = "<div class='pixels-photo'><p><img src='" + json.image + "' alt='" + json.title + " | 500px'></p><a href='" + json.canonical + "' alt='" + json.title + " | 500px'></a></div><script type='text/javascript' src='https://500px.com/embed.js'></script>";
            } else if (url.indexOf("pinterest.com/pin/") > -1) {
                json.html = "<a data-pin-do='embedPin' data-pin-width='large' href='"+json.canonical+"'></a><script async type='text/javascript' src='https://assets.pinterest.com/js/pinit.js'></script>";
	    }

            var parsedResults = [];
            var oembed;
            if (aoembed) {
                oembed = aoembed;
            } else if (toembed) {
                oembed = toembed;
            } else if (url.indexOf("instagram.com/p/") > -1) {
                oembed = "https://api.instagram.com/oembed/?url=" + url;
            } else if ((url.indexOf("spotify.com/track/") > -1) || (url.indexOf("spotify.com/artist") > -1) || (url.indexOf("spotify.com/album") > -1)) {
                oembed = "https://open.spotify.com/oembed?format=json&url=" + url;
            } else if (url.indexOf("reddit.com/") > -1) {
                oembed = "https://www.reddit.com/oembed?url=" + url;
            } else if ((url.indexOf("rottentomatoes.com/m/") > -1 || url.indexOf("rottentomatoes.com/tv/") > -1)) {
                $('div.cast-item').each(function(i, element) {
                    var a = $(this).children().children();
                    var b = $(this).children().next().children().children();
                    var name = b.text().replace(/\n/gi, '');
                    var actors = {
                        name: name.trim(),
                        thumbnail: a.attr('src')
                    };
                    parsedResults.push(actors);
                    json.actors = parsedResults;
                });

                var score = $('span.meter-value');
                json.tomatometer = score.first().text();

                $('li.meta-row').each(function(i, element) {

                    if ($(this).children().first().text().trim() == "Rating:") {
                        var rating = $(this).children().next().text();
                        json.rating = rating.trim();
                    } else if ($(this).children().first().text().trim() == "Genre:") {
                        var genre = $(this).children().next().text();
                        json.genre = genre.replace(/\s+/g, ' ').trim();
                    } else if ($(this).children().first().text().trim() == "Directed By:") {
                        var director = $(this).children().next().text();
                        json.director = director.replace(/\s+/g, ' ').trim();
                    } else if ($(this).children().first().text().trim() == "Written By:") {
                        var writer = $(this).children().next().text();
                        json.writer = writer.replace(/\s+/g, ' ').trim();
                    } else if ($(this).children().first().text().trim() == "In Theaters:") {
                        var theaters = $(this).children().next().text();
                        json.theaters = theaters.replace(/\s+/g, ' ').trim();
                    } else if ($(this).children().first().text().trim() == "Studio:") {
                        var studio = $(this).children().next().text();
                        json.studio = studio.replace(/\s+/g, ' ').trim();
                    }
                });
            } else if (url.indexOf("imdb.com/title/") > -1) {
                var imdbrating = $('span[itemprop="ratingValue"]').text();
                var director = $('span[itemprop="director"]').text().trim().replace(/\n/gi, '').replace(/\s+/g, ' ').trim();
                var stars = $('span[itemprop="actors"]').text().trim().replace(/\n/gi, '').replace(/\s+/g, ' ').trim();
                var tab = [];
                $('div[class="rec_item"]').each(function(error, response) {
                    tab.push($(this).children().next().children().attr('title'));
                });
                json.rating = imdbrating;
                json.director = director;
                json.starring = stars;
                json.recommended = tab;
            } else if (url.indexOf("wikipedia.org/") > -1) {
                $('table.infobox').filter(function() {
                    var data = this;
                    var $ = cheerio.load(data);
                    $('th').each(function(i, element) {
                        var title = $(this).text().replace(/\s+/g, ' ').trim();
                        json[title] = $(this).next().text().trim().replace(/\n/g, ", ").replace(/\[(.+?)\]/g, "");
                    });
                });
            } else if (url.indexOf("genius.com/") > -1) {
                var lmth = $('meta[name="newrelic-resource-path"]').attr('content');
if(lmth) {
                var id = lmth.substring(lmth.lastIndexOf('/') + 1);
                json.html = "<div id=\'rg_embed_link_" + id + "\' class=\'rg_embed_link\' data-song-id=\'" + id + "\'></div><script async src=\'https://genius.com/songs/" + id + "/embed.js?dark=1\'></script>";
}
                var med = $('meta[itemprop="page_data"]').attr('content');
                var songs = JSON.parse(med);
                json.media = songs.song.media;
            }
            else if (url.indexOf("hotels.com/ho") > -1) {
					$('script').each(function(i, elem) {
				temp = $(this).html(); 
				if(temp.indexOf("var hcomClientData")>-1) {
				var data = temp.split('var hcomClientData = ')[1];
				var last = data.toString().replace(/;/g,'');
				var l = JSON.parse(last);
				json.hotels = l;
			}
		});
	}
                if(url.substring(url.lastIndexOf('.') + 1) =="pdf") {
json.html="<object data='"+url+"' width='100%' height='100%' type='application/pdf'><iframe style='position:absolute; border: 0; width: 100%; height: 100%;' src='https://docs.google.com/viewer?url="+url+"&embedded=true'></iframe></object>";
}

function getextract(callback) {
var canonical = url;
var uri = canonical.replace('en.wikipedia.org\/wiki\/', 'en.wikipedia.org\/w\/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=');
request(uri, function(error, response, html){

var jsa;
var jso = JSON.parse(html);
var pages = jso.query.pages;
var keys = Object.keys(pages);
for (var i = 0; i < keys.length; i++) {
jsa = pages[keys[i]];
}
callback(jsa);
});
}




function getdimensions(callback) {
var imgurl = json.image;
probe(imgurl).then(result => {
callback(result);
});

}

            if (oembed) {
				    function getoembed(callback) {
                    needle.get(oembed, function(error, response, html) {
                        callback(response.body);
                    });
                }

                getoembed(function(data) {
                    if (data) {
			if (data.provider_name =="Flickr")
				{data.html = "<a data-flickr-embed='true' href='"+json.canonical+"' title='"+json.title+"'><img src='"+data.url+"' width='100%' height='100%' alt='"+data.title+"'></a><script async src=\'https://embedr.flickr.com/assets/client-code.js\' charset=\'utf-8\'></script>";}
			else if (data.provider_name =="Vimeo")
				{data.html = "<iframe src='"+json.canonical+"' width='100%' height='100%' frameborder='0' title='"+json.title+"' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";}
console.log("oembed detected");
                        json.oembed = data;
if(json.image) {
getdimensions(function(data) {
json.width=data.width;
json.height=data.height;
send();
});
}
else			send();
                    }
                });

            } 
	else { 
if(json.image) {
	if(url.indexOf("en.wikipedia.org/wiki")>-1) {
getextract(function(data) {
json.title=data.title;
json.description=data.extract;
getdimensions(function(data) {
json.width=data.width;
json.height=data.height;
send();
});
});
}

else {
getdimensions(function(data) {
json.width=data.width;
json.height=data.height;
send();
});
}
}
else send();}

	function send() {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(json, null, 2));
            }

        }

    });
});

app.listen(process.env.PORT || 5011);
exports = module.exports = app;

