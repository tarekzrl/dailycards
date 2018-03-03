#### installation
`git clone https://github.com/tarekzrl/dailycards.git`    
`cd dailycards`    
`npm install`    

#### docker
`docker build -t dailycards .`    
`docker run -p 5011:5011 -d dailycards`    

#### deploy on heroku
Assuming that you have a free Heroku account, and that you have Node.js and npm installed locally.    
`heroku create`    
`git push heroku master`    
`heroku open`  

#### usage example
`node server`    
then use your browser    
`http://localhost:5011/json?url=https://en.wikipedia.org/wiki/Tunisia`

#### output example
```{
  "icon": "en.wikipedia.org/static/favicon/wikipedia.ico",
  "canonical": "https://en.wikipedia.org/wiki/Tunisia",
  "site": "en.wikipedia.org",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png",
  "Republic of Tunisia الجمهورية التونسية (Arabic) al-Jumhūrīyah at-Tūnisīyah": "",
  "Capital and largest city": "Tunis, 36°50′N 10°9′E﻿ / ﻿36.833°N 10.150°E﻿ / 36.833; 10.150",
  "Official languages": "Arabic",
  "Spoken languages": "Tunisian Arabic, Tamazight (Berber), French (commercial and educational)",
  "Ethnic groups": "98% Arab, 1% European, 1% Jewish and other",
  "Religion": "Islam",
  "Demonym": "Tunisian",
  "Government": "Unitary semi-presidential republic",
  "• President": "Beji Caid Essebsi",
  "• Head of Government": "Youssef Chahed",
  "Legislature": "Assembly of the Representatives of the People",
  "Formation": "",
  "• Husainid Dynasty inaugurated": "15 July 1705",
  "• Independence from France": "20 March 1956",
  "• Republic declared": "25 July 1957",
  "• Revolution Day": "14 January 2011",
  "Area": "",
  "• Total": "$40.289 billion",
  "• Water (%)": "5.0",
  "Population": "",
  "• 2014 estimate": "10,982,754 (79th)",
  "• Density": "63/km2 (163.2/sq mi) (133rd)",
  "GDP (PPP)": "2017 estimate",
  "• Per capita": "$3,553",
  "GDP (nominal)": "2017 estimate",
  "Gini (2010)": "36.1, medium",
  "HDI (2016)": "0.725, high · 97th",
  "Currency": "Tunisian dinar (TND)",
  "Time zone": "CET (UTC+1)",
  "Drives on the": "right",
  "Calling code": "+216",
  "ISO 3166 code": "TN",
  "Internet TLD": ".tn, .تونس‎"
}
```

#### domains
###### all domains are supported though some urls output better results, start with these

<img width="24" src="http://assetcdn.500px.org/assets/favicon-7d8942fba5c5649f91a595d0fc749c83.ico"/> <img width="24" src="https://open.scdn.co/static/images/favicon.png"/> <img width="24" src="http://en.wikipedia.org/static/favicon/wikipedia.ico"/> <img width="24" src="http://genius.com/favicon.ico"/> <img width="24" src="http://www.youtube.com/yts/img/favicon_32-vfl8NGn4k.png"/> <img width="24" src="https://f.vimeocdn.com/images_v6/favicon.ico"/>
<img width="24" src="http://static1.dmcdn.net/images/neon/favicons/android-icon-36x36.png.vf806ca4ed0deed812"/> <img width="24" src="http://ia.media-imdb.com/images/G/01/imdb/images/safari-favicon-517611381._CB522736552_.svg"/> <img width="24" src="https://staticv2-4.rottentomatoes.com/static/images/icons/favicon.ico"/> <img width="24" src="https://v.cdn.vine.co/w/8d600eb8-assets/images/favicon.ico"/> <img width="24" src="https://static01.nyt.com/favicon.ico"/> <img width="24" src="https://pa.tedcdn.com/favicon.ico"/>
<img width="24" src="https://static.xx.fbcdn.net/rsrc.php/yV/r/hzMapiNYYpW.ico"/> <img width="24" src="http://abs.twimg.com/favicons/favicon.ico"/>
<img width="24" src="http://www.twitch.tv/favicon.ico"/> <img width="24" src="http://www.redditstatic.com/icon.png"/> <img width="24" src="http://instagram.com/static/images/ico/favicon-192.png/b407fa101800.png"/> <img width="24" src="http://itunes.apple.com/favicon.ico"/> <img width="24" src="https://giphy.com/static/img/favicon.png"/> <img width="24" src="https://a-v2.sndcdn.com/assets/images/sc-icons/favicon-2cadd14b.ico"/> <img width="24" src="https://www.mixcloud.com/media/images/www/global/favicon.ico"/> <img width="24" src="https://s.yimg.com/pw/favicon.ico"/> <img width="24" src="https://public.slidesharecdn.com/favicon.ico?d8e2a4ed15"/> <img width="24" src="http://media-channel.nationalgeographic.com/static-media/images/favicon.ico"/>

###### live version
https://dailycardsweb.herokuapp.com/json?url=
###### user interface
just put your url and witness the magic    
https://dailycardsweb.herokuapp.com
