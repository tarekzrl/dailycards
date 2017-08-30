function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                vars[key] = value;
        });
        return vars;
}
var qGet = getUrlVars()["q"];
var q = decodeURI(getUrlVars()["q"]);

if (q != "undefined" && q != "") {
        document.body.className+=" results";
}

$(function () {

        if (q != "undefined" && q != "") {
                $("#search_box").attr("value",q);
                var uri = "https://stark-scrubland-57180.herokuapp.com/json?url="  + qGet;
                sendAjax(uri);
        }

       	$("#search_box").keypress(function(e){
                if(e.keyCode == 13) {
                        $("#search_button").click();
                }
        });

	$("#search_button").click(function(){
                if ($("#search_box").val() == "") {
                        $("body").removeClass("results");
                } else {
                       	window.location.search = "?q=" + $("#search_box").val();
                }
        });

});

function sendAjax(uri) {
        $.ajax({
               	url: uri,
                dataType: "json",
                success: function(data) {
var resultItem;
                                                if (data.player)
                                                {
							if(data.site=="Instagram")
                                                                resultItem= "<div class='item'>"+data.oembed.html+"</div>";
							else
                                                	resultItem= "<div class='player'><iframe style='position:absolute; border: 0; width: 100%; height: 100%;' allowfullscreen src='"+data.player+"'></iframe></div>";
                             	$("#results-block").append(resultItem);
						}
                                                else if (data.html)
                                                {
                                                                resultItem= "<div class='item'>"+data.html+"</div>";
                             	$("#results-block").append(resultItem);
                                                }
                                                else if (data.oembed)
	                                        {        if (data.oembed.html)
        	                                        {
                                                                if ((data.oembed.html).substring(10, 26)=="twitter-timeline")
                                                                {
                                                                resultItem= "<div class='item'><a class='twitter-timeline' data-tweet-limit=1 href='"+data.canonical+"'></a><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></div>";
                             	$("#results-block").append(resultItem);
                                                                }
                                                                else if (data.oembed.type=='video')
								{
                                                                resultItem= "<div class='player'>"+data.oembed.html+"</div>";
                             	$("#results-block").append(resultItem);
								}
                                                                else
								{		
                                                                resultItem= "<div class='item'>"+data.oembed.html+"</div>";
                             	$("#results-block").append(resultItem);
								}
                	                                }
						}
                                                else if (data.image)
                                                {

                                                        var imag=new Image();
                                                        imag.src=data.image;
                                                        $(imag).load(function() {
                                                                if(imag.width>399)
                                                                {
resultItem= "<div class='item'><div class='article'><a class='l' title='"+data.title+"' href='"+data.canonical+"' style='background-image: url("+data.image+");'></a><div class='o'><header class='h'><h1 class='t' title='"+data.title+"'>"+data.title+"</h1><p class='m'><img style='width:16px;height:16px;margin-right:.125em;vertical-align:middle;' src='"+data.icon+"'><a href='"+data.canonical+"' target='_blank'>"+data.site+"</a></p></header></div></div></div>";
                             	$("#results-block").append(resultItem);
								}
                                                        });
                                                }
var text = JSON.stringify(data,null, "  ");
var resultJson = "<xmp>" + text + "</xmp>";
                             	$("#results-block").append(resultJson);
               	}
        });
}
