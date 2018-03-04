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
  "canonical": "https://en.wikipedia.org/wiki/Tunisia",
  "icon": "http://en.wikipedia.org/static/favicon/wikipedia.ico",
  "site": "en.wikipedia.org",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png",
  "Republic of Tunisia الجمهورية التونسية (Arabic) al-Jumhūrīyah at-Tūnisīyah": "",
  "Capital and largest city": "Tunis, 36°49′N 10°11′E﻿ / ﻿36.817°N 10.183°E﻿ / 36.817; 10.183",
  "Official languages": "Arabic",
  "Spoken languages": "Tunisian Arabic, Berber, French (commercial and educational)",
  "Ethnic groups": "Arab (<40% – 98%), Berber (1% – >60%), European (1%), Turkish, Jewish and other (1%)",
  "Religion": "Islam (state religion; 99.1% Sunni, others (1%; including Christian, Jewish, Shia, Bahai)",
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
  "• 2016 estimate": "11,304,482 (79th)",
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
  "Internet TLD": ".tn, .تونس‎",
  "title": "Tunisia",
  "description": "Tunisia (; Arabic: تونس‎  Tūnis; Berber: Tunes, ⵜⵓⵏⴻⵙ; French: Tunisie), officially the Republic of Tunisia, (Arabic: الجمهورية التونسية‎  al-Jumhūrīya at-Tūnisīya) is a sovereign state in North Africa, covering 165,000 square kilometres (64,000 square miles). Its northernmost point, Cape Angela, is the northernmost point on the African continent. It is bordered by Algeria to the west and southwest, Libya to the southeast, and the Mediterranean Sea to the north and east. Tunisia's population was estimated to be just under 11.93 million in 2016. Tunisia's name is derived from its capital city, Tunis, which is located on its northeast coast.\nGeographically, Tunisia contains the eastern end of the Atlas Mountains and the northern reaches of the Sahara desert. Much of the rest of the country's land is fertile soil. Its 1,300 kilometres (810 miles) of coastline include the African conjunction of the western and eastern parts of the Mediterranean Basin and, by means of the Sicilian Strait and Sardinian Channel, feature the African mainland's second and third nearest points to Europe after Gibraltar.\nTunisia is a unitary semi-presidential representative democratic republic. It is considered to be the only full democracy in the Arab World. It has a high human development index. It has an association agreement with the European Union; is a member of La Francophonie, the Union for the Mediterranean, the Arab Maghreb Union, the Arab League, the OIC, the Greater Arab Free Trade Area, the Community of Sahel-Saharan States, the African Union, the Non-Aligned Movement, the Group of 77; and has obtained the status of major non-NATO ally of the United States. In addition, Tunisia is also a member state of the United Nations and a state party to the Rome Statute of the International Criminal Court. Close relations with Europe –  in particular with France and with Italy –  have been forged through economic cooperation, privatisation and industrial modernization.\nIn ancient times, Tunisia was primarily inhabited by Berbers. Phoenician immigration began in the 12th century BC; these immigrants founded Carthage. A major mercantile power and a military rival of the Roman Republic, Carthage was defeated by the Romans in 146 BC. The Romans, who would occupy Tunisia for most of the next eight hundred years, introduced Christianity and left architectural legacies like the El Djem amphitheater. After several attempts starting in 647, the Arabs conquered the whole of Tunisia by 697, followed by the Ottomans between 1534 and 1574. The Ottomans held sway for over three hundred years. The French colonization of Tunisia occurred in 1881. Tunisia gained independence with Habib Bourguiba and declared the Tunisian Republic in 1957. In 2011, the Tunisian Revolution resulted in the overthrow of President Zine El Abidine Ben Ali, followed by parliamentary elections. The country voted for parliament again on 26 October 2014, and for President on 23 November 2014.",
  "width": 1200,
  "height": 800
}
```


###### user interface
just put your url and witness the magic    
https://dailycards.herokuapp.com

###### raw data
https://dailycards.herokuapp.com/json?url=

###### all domains are supported though some urls output better results.
