
// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"64",
  "macros":[{
      "function":"__e"
    },{
      "function":"__j",
      "vtp_name":"window.ninjaPV.user_id"
    },{
      "function":"__j",
      "vtp_name":"categoryName"
    },{
      "function":"__j",
      "vtp_name":"regionName"
    },{
      "function":"__j",
      "vtp_name":"district_id"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_map":["list",["map","key","11094","value","Drumul Taberei"],["map","key","11220","value","Titan"],["map","key","11091","value","Dristor"],["map","key","11138","value","Militari"],["map","key","11079","value","Crangasi"],["map","key","11219","value","Tineretului"],["map","key","11047","value","Berceni"],["map","key","11051","value","Bucurestii Noi"],["map","key","11129","value","Lujerului"],["map","key","11048","value","Brancoveanu"],["map","key","11116","value","Iancului"],["map","key","11019","value","13 Septembrie"],["map","key","11032","value","Aviatiei"],["map","key","11191","value","Rahova"],["map","key","11074","value","Colentina"],["map","key","11183","value","Pipera"],["map","key","11226","value","Unirii"],["map","key","11101","value","Floreasca"],["map","key","11533","value","Piata Sudului"],["map","key","11028","value","Aparatorii Patriei"],["map","key","11218","value","Timpuri Noi"],["map","key","11071","value","Cismigiu"],["map","key","11038","value","Baneasa"],["map","key","11145","value","Nerva Traian"],["map","key","11148","value","Obor"],["map","key","11208","value","Stefan cel Mare"],["map","key","11227","value","Universitate"],["map","key","11017","value","1 Decembrie 1918"],["map","key","11238","value","Vitan"],["map","key","11078","value","Cotroceni"],["map","key","11239","value","Vitan Mall"],["map","key","11146","value","Nicolae Grigorescu"],["map","key","11161","value","Piata Muncii"],["map","key","11084","value","Decebal"],["map","key","11235","value","Victoriei"],["map","key","11023","value","Alba Iulia"],["map","key","11195","value","Romana"],["map","key","5","value","Sector 3"],["map","key","11","value","Sector 6"],["map","key","3","value","Sector 2"],["map","key","7","value","Sector 4"],["map","key","1","value","Sector 1"],["map","key","9","value","Sector 5"],["map","key","11531","value","Cluj  -Centru"],["map","key","10211","value","Tractorul"],["map","key","10181","value","Astra"],["map","key","10206","value","Racadau"],["map","key","10203","value","Noua"],["map","key","10184","value","Bartolomeu"],["map","key","10209","value","Scriitorilor"],["map","key","10193","value","Craiter"],["map","key","10194","value","Darste"],["map","key","10210","value","Stupini"],["map","key","10594","value","Copou"],["map","key","10641","value","Tatarasi"],["map","key","10626","value","Podu Ros"],["map","key","10617","value","Nicolina"],["map","key","10605","value","Gara - Iasi"],["map","key","10620","value","Pacurari"],["map","key","10596","value","CUG"],["map","key","10588","value","Bucium"],["map","key","10582","value","Alexandru cel Bun"],["map","key","10597","value","Dacia"],["map","key","10640","value","Targu Cucu"],["map","key","10616","value","Moara de Vant"],["map","key","10604","value","Galata"],["map","key","10579","value","Aeroport - Iasi"],["map","key","10591","value","Canta"],["map","key","10631","value","Sararaie"],["map","key","10590","value","Bularga"],["map","key","10603","value","Frumoasa"],["map","key","10584","value","Arcu"],["map","key","10613","value","Mircea cel Batran"],["map","key","10644","value","Tudor Vladimirescu"],["map","key","10611","value","Metalurgie"],["map","key","10585","value","Baza 3"],["map","key","10615","value","Moara de Foc"],["map","key","10828","value","Turnisor"],["map","key","10823","value","Terezian"],["map","key","10821","value","Strand - Sibiu"],["map","key","11528","value","Central - Sibiu"],["map","key","10830","value","Vasile Aaron"],["map","key","10829","value","Valea Aurie"],["map","key","10816","value","Mihai Viteazul"],["map","key","10803","value","Calea Dumbravii"],["map","key","10802","value","Broscarie"],["map","key","10819","value","Resita - Sibiu"],["map","key","10814","value","Lazaret"],["map","key","10806","value","Gusterita"],["map","key","10826","value","Tineretului - Sibiu"],["map","key","10827","value","Trei Stejari"],["map","key","10825","value","Tilisca"],["map","key","10915","value","Girocului"],["map","key","10895","value","Bucovina - Timis"],["map","key","10944","value","Soarelui"],["map","key","10901","value","Circumvalatiunii"],["map","key","10905","value","Dambovita - Timis"],["map","key","10894","value","Braytim"],["map","key","10952","value","Torontalului"],["map","key","10918","value","Iosefin"],["map","key","10907","value","Elisabetin"],["map","key","10001","value","Ampoi 1"],["map","key","10002","value","Ampoi 2"],["map","key","10003","value","Ampoi 3"],["map","key","10004","value","Barabant"],["map","key","10005","value","Caroline Apulum"],["map","key","10006","value","Caroline Gemina"],["map","key","10007","value","Central - Alba"],["map","key","10008","value","Cetate"],["map","key","10009","value","Industriala"],["map","key","10010","value","Lipoveni"],["map","key","10011","value","Maier"],["map","key","10012","value","Micesti"],["map","key","10013","value","Partos"],["map","key","10014","value","Tolstoi"],["map","key","10015","value","Banat"],["map","key","10016","value","Banat"],["map","key","10017","value","Bere"],["map","key","10018","value","Big Brasov"],["map","key","10019","value","Calea Bucuresti"],["map","key","10020","value","Campului"],["map","key","10021","value","Ceair"],["map","key","10022","value","Craiovei"],["map","key","10023","value","Dacia"],["map","key","10024","value","Eremia"],["map","key","10025","value","Exercitiu"],["map","key","10026","value","Fratii Golesti"],["map","key","10027","value","Gavana"],["map","key","10028","value","Gavana 2"],["map","key","10029","value","Gavana 3"],["map","key","10030","value","Gavana 3"],["map","key","10031","value","Gavana Platou"],["map","key","10032","value","Labusesti"],["map","key","10033","value","Marasesti"],["map","key","10034","value","Negru Voda"],["map","key","10035","value","Poiana Soarelui"],["map","key","10036","value","Popa Sapca"],["map","key","10037","value","Prelungirea Craiovei"],["map","key","10038","value","Prundu"],["map","key","10039","value","Razboieni"],["map","key","10040","value","Rolast"],["map","key","10041","value","Tancodrom"],["map","key","10042","value","Teilor"],["map","key","10043","value","Trivale"],["map","key","10044","value","Trivale Platou"],["map","key","10045","value","Tudor Vladimirescu"],["map","key","10046","value","3 Insule"],["map","key","10047","value","6 Vanatori"],["map","key","10048","value","Alfa"],["map","key","10049","value","Aradul Nou"],["map","key","10050","value","Aurel Vlaicu"],["map","key","10051","value","Bancilor"],["map","key","10052","value","Banu Maracine"],["map","key","10053","value","Boul Rosu"],["map","key","10054","value","Bujac"],["map","key","10055","value","Cadas"],["map","key","10056","value","Cartierul Verde"],["map","key","10057","value","Confectii"],["map","key","10058","value","Dragasani"],["map","key","10059","value","Fortuna"],["map","key","10060","value","Functionarilor"],["map","key","10061","value","Gai"],["map","key","10062","value","Gradiste"],["map","key","10063","value","Intim"],["map","key","10064","value","Malul Muresului"],["map","key","10065","value","Micalaca"],["map","key","10066","value","Miorita"],["map","key","10067","value","Miron Costin"],["map","key","10068","value","Muresel"],["map","key","10069","value","Piata Garii"],["map","key","10070","value","Piata Spitalului"],["map","key","10071","value","Parneava"],["map","key","10072","value","Podgoria"],["map","key","10073","value","Polivalenta"],["map","key","10074","value","Poltur"],["map","key","10075","value","Romanilor"],["map","key","10076","value","Sannicolau Mic"],["map","key","10077","value","Sega"],["map","key","10078","value","Sega.Zona 3"],["map","key","10079","value","Strand Neptun"],["map","key","10080","value","Subcetate"],["map","key","10081","value","UTA"],["map","key","10082","value","9 Mai"],["map","key","10083","value","Alecu Russo"],["map","key","10084","value","Alexandru cel Bun"],["map","key","10085","value","Aviatori"],["map","key","10086","value","Banca Nationala"],["map","key","10087","value","Bistrita Lac"],["map","key","10088","value","Calea Barladului"],["map","key","10089","value","Calea Moinesti"],["map","key","10090","value","Calea Moldovei"],["map","key","10091","value","Calea Romanului"],["map","key","10092","value","CFR"],["map","key","10093","value","Cornisa"],["map","key","10094","value","Energiei"],["map","key","10095","value","Gara"],["map","key","10096","value","George Bacovia"],["map","key","10097","value","Gheraiesti"],["map","key","10098","value","Izvoare"],["map","key","10099","value","Letea"],["map","key","10100","value","Metro"],["map","key","10101","value","Milcov"],["map","key","10102","value","Mioreni"],["map","key","10103","value","Mioritei"],["map","key","10104","value","Narcisa"],["map","key","10105","value","Orizont"],["map","key","10106","value","Republicii"],["map","key","10107","value","Serbanesti"],["map","key","10108","value","Stefan cel Mare"],["map","key","10109","value","Tache"],["map","key","10110","value","Unirii"],["map","key","10111","value","Zimbru"],["map","key","10112","value","Aeroport"],["map","key","10113","value","Calea Aradului"],["map","key","10114","value","Calea Clujului"],["map","key","10115","value","Cantemir"],["map","key","10116","value","Centru Civic"],["map","key","10117","value","Centura"],["map","key","10118","value","Cetatii"],["map","key","10119","value","Dacia"],["map","key","10120","value","Dealuri Oradea"],["map","key","10121","value","Decebal"],["map","key","10122","value","Dragos Voda"],["map","key","10123","value","Eminescu"],["map","key","10124","value","Episcopia Bihorului"],["map","key","10125","value","Europa"],["map","key","10126","value","Garii"],["map","key","10127","value","Iorga"],["map","key","10128","value","Iosia"],["map","key","10129","value","Iosia-Nord"],["map","key","10130","value","Lotus"],["map","key","10131","value","Nufarul"],["map","key","10132","value","Oncea"],["map","key","10133","value","Orasul Nou"],["map","key","10134","value","Podgoria"],["map","key","10135","value","Rogerius"],["map","key","10136","value","Salca"],["map","key","10137","value","Seleus"],["map","key","10138","value","Spitalul Judetean"],["map","key","10139","value","Tokai"],["map","key","10140","value","Valenta"],["map","key","10141","value","Calea Moldovei"],["map","key","10142","value","Centura"],["map","key","10143","value","Cetatii"],["map","key","10144","value","Decebal"],["map","key","10145","value","Independentei"],["map","key","10146","value","Industriala"],["map","key","10147","value","Stefan cel Mare"],["map","key","10148","value","Unirea"],["map","key","10149","value","Viisoara"],["map","key","10150","value","Apollo"],["map","key","10151","value","Bariera"],["map","key","10152","value","Brailita"],["map","key","10153","value","Buzaului"],["map","key","10154","value","Calarasi"],["map","key","10155","value","Calarasi 4"],["map","key","10156","value","Calea Galati"],["map","key","10157","value","Centura"],["map","key","10158","value","Chercea"],["map","key","10159","value","Dorobanti"],["map","key","10160","value","Falezei"],["map","key","10161","value","Garii"],["map","key","10162","value","Hipodrom"],["map","key","10163","value","Hristo Botev"],["map","key","10164","value","Independentei"],["map","key","10165","value","Lacu Dulce"],["map","key","10166","value","Marna"],["map","key","10167","value","Obor"],["map","key","10168","value","Pisc"],["map","key","10169","value","Plantelor"],["map","key","10170","value","Radu Negru"],["map","key","10171","value","Republicii"],["map","key","10172","value","Scolilor"],["map","key","10173","value","Tineretului"],["map","key","10174","value","Vidin-Progresul"],["map","key","10175","value","Viziru 1"],["map","key","10176","value","Viziru 2"],["map","key","10177","value","Viziru 3"],["map","key","10178","value","Dragos Voda"],["map","key","10179","value","13 Decembrie"],["map","key","10180","value","15 Noiembrie"],["map","key","10181","value","Astra"],["map","key","10182","value","Aurel Vlaicu"],["map","key","10183","value","Avantgarden"],["map","key","10184","value","Bartolomeu"],["map","key","10185","value","Blumana"],["map","key","10186","value","Brasovul Vechi"],["map","key","10187","value","Calea Bucuresti"],["map","key","10188","value","Carfil"],["map","key","10189","value","Carierei"],["map","key","10190","value","Centrul Civic"],["map","key","10191","value","Centrul Istoric"],["map","key","10192","value","Centura"],["map","key","10193","value","Craiter"],["map","key","10194","value","Darste"],["map","key","10195","value","Dealul Cetatii"],["map","key","10196","value","Drumul Poienii"],["map","key","10197","value","Florilor"],["map","key","10198","value","Garii"],["map","key","10199","value","Gemenii"],["map","key","10200","value","Grivitei"],["map","key","10201","value","Harmanului"],["map","key","10202","value","Judetean"],["map","key","10203","value","Noua"],["map","key","10204","value","Planete"],["map","key","10205","value","Poiana Brasov"],["map","key","10206","value","Racadau"],["map","key","10207","value","Rulmentul"],["map","key","10208","value","Schei"],["map","key","10209","value","Scriitorilor"],["map","key","10210","value","Stupini"],["map","key","10211","value","Tractorul"],["map","key","10212","value","Triaj"],["map","key","10213","value","Uzina 2"],["map","key","10214","value","Valea Cetatii"],["map","key","10215","value","Vlahuta"],["map","key","10216","value","Warthe"],["map","key","10217","value","1 Decembrie"],["map","key","10218","value","23 August"],["map","key","10219","value","Aleea Sporturilor"],["map","key","10220","value","Balcescu"],["map","key","10221","value","Bazalt"],["map","key","10222","value","Brosteni"],["map","key","10223","value","Chercea"],["map","key","10224","value","Contactoare"],["map","key","10225","value","Crig"],["map","key","10226","value","Dorobanti"],["map","key","10227","value","Dorobanti 1"],["map","key","10228","value","Dorobanti 2"],["map","key","10229","value","Hasdeu"],["map","key","10230","value","Hipodrom"],["map","key","10231","value","Industriala"],["map","key","10232","value","Lacul Dulce"],["map","key","10233","value","Marghiloman"],["map","key","10234","value","Micro 14"],["map","key","10235","value","Micro 3"],["map","key","10236","value","Micro 5"],["map","key","10237","value","Mihai Viteazu"],["map","key","10238","value","Obor"],["map","key","10239","value","Orizont"],["map","key","10240","value","Patriei"],["map","key","10241","value","Posta"],["map","key","10242","value","Radu Negru"],["map","key","10243","value","Transilvaniei"],["map","key","10244","value","Unirii Centru"],["map","key","10245","value","Unirii Nord"],["map","key","10246","value","Unirii Sud"],["map","key","10247","value","Viziru"],["map","key","10248","value","Aeroport"],["map","key","10249","value","Andrei Muresanu"],["map","key","10250","value","Apahida"],["map","key","10251","value","Aurel Vlaicu"],["map","key","10252","value","Baciu"],["map","key","10253","value","Becas"],["map","key","10254","value","Borhanci"],["map","key","10255","value","Bulgaria"],["map","key","10256","value","Buna Ziua"],["map","key","10257","value","Calea Turzii"],["map","key","10258","value","Campului"],["map","key","10259","value","Cordos"],["map","key","10260","value","Dambul Rotund"],["map","key","10261","value","Europa"],["map","key","10262","value","Faget"],["map","key","10263","value","Floresti"],["map","key","10264","value","Gara - Cluj"],["map","key","10265","value","Gheorgheni"],["map","key","10266","value","Grigorescu"],["map","key","10267","value","Gruia"],["map","key","10268","value","Hasdeu"],["map","key","10269","value","Horea"],["map","key","10270","value","Industrial"],["map","key","10271","value","Intre Lacuri"],["map","key","10272","value","Iris"],["map","key","10273","value","Manastur"],["map","key","10274","value","Marasti"],["map","key","10275","value","P-ta Mihai Viteazul"],["map","key","10276","value","Plopilor"],["map","key","10277","value","Semicentral"],["map","key","10278","value","Someseni"],["map","key","10279","value","Sopor"],["map","key","10280","value","Zorilor"],["map","key","10281","value","2 Moldoveni"],["map","key","10282","value","5 Calarasi"],["map","key","10283","value","Caramidari"],["map","key","10284","value","Centrul Vechi"],["map","key","10285","value","Ceremac"],["map","key","10286","value","Farfuria"],["map","key","10287","value","FNC"],["map","key","10288","value","Livada"],["map","key","10289","value","Magureni"],["map","key","10290","value","Mircea-Voda"],["map","key","10291","value","Obor"],["map","key","10292","value","Orizont"],["map","key","10293","value","Calea Caransebesului"],["map","key","10294","value","Calea Timisoarei"],["map","key","10295","value","Centrul Civic"],["map","key","10296","value","Dealu Mare"],["map","key","10297","value","Govandari"],["map","key","10298","value","Lendt"],["map","key","10299","value","Lunca"],["map","key","10300","value","Marginea"],["map","key","10301","value","Micro 1"],["map","key","10302","value","Micro 2"],["map","key","10303","value","Micro 3"],["map","key","10304","value","Micro 4"],["map","key","10305","value","Mociur"],["map","key","10306","value","Moroasa 1"],["map","key","10307","value","Moroasa 2"],["map","key","10308","value","Muncitoresc"],["map","key","10309","value","Stavila"],["map","key","10310","value","Triaj"],["map","key","10311","value","Victoriei"],["map","key","10312","value","Abator"],["map","key","10313","value","Anadolchioi"],["map","key","10314","value","Ancora"],["map","key","10315","value","Anda"],["map","key","10316","value","Aurel Vlaicu"],["map","key","10317","value","Balada"],["map","key","10318","value","Billa"],["map","key","10319","value","Boema"],["map","key","10320","value","Boreal"],["map","key","10321","value","Bratianu"],["map","key","10322","value","Brotacei"],["map","key","10323","value","Campului"],["map","key","10324","value","Campus"],["map","key","10325","value","Capitol"],["map","key","10326","value","Carrefour"],["map","key","10327","value","Casa de Cultura"],["map","key","10328","value","Cazino"],["map","key","10329","value","Ceair"],["map","key","10330","value","Centura"],["map","key","10331","value","CET"],["map","key","10332","value","City Park Mall"],["map","key","10333","value","Coiciu"],["map","key","10334","value","Dacia"],["map","key","10335","value","Delfinariu"],["map","key","10336","value","Elvila"],["map","key","10337","value","Energia"],["map","key","10338","value","Eremia"],["map","key","10339","value","Exterior Sud"],["map","key","10340","value","Faleza Nord"],["map","key","10341","value","Far"],["map","key","10342","value","Gara"],["map","key","10343","value","Gavana 2"],["map","key","10344","value","Grivitei"],["map","key","10345","value","Groapa"],["map","key","10346","value","Halta Traian"],["map","key","10347","value","I. C. Bratianu"],["map","key","10348","value","ICIL"],["map","key","10349","value","Inel I"],["map","key","10350","value","Inel II"],["map","key","10351","value","Kamsas"],["map","key","10352","value","Km 4"],["map","key","10353","value","Km 4-5"],["map","key","10354","value","Km 5"],["map","key","10355","value","Labusesti"],["map","key","10356","value","Mamaia Nord"],["map","key","10357","value","Mamaia Sat"],["map","key","10358","value","Medeea"],["map","key","10359","value","Metro 1"],["map","key","10360","value","Metro 2"],["map","key","10361","value","Miga"],["map","key","10362","value","Muncii"],["map","key","10363","value","Piata Ovidiu"],["map","key","10364","value","Palas"],["map","key","10365","value","Palazu Mare"],["map","key","10366","value","Peninsula"],["map","key","10367","value","Pescarie"],["map","key","10368","value","Poarta 6"],["map","key","10369","value","Pod Butelii"],["map","key","10370","value","Poiana Soarelui"],["map","key","10371","value","Prelungirea Craiovei"],["map","key","10372","value","Primo"],["map","key","10373","value","Razboieni"],["map","key","10374","value","Republica"],["map","key","10375","value","Rolast"],["map","key","10376","value","Sat Vacanta"],["map","key","10377","value","Stadion"],["map","key","10378","value","Statiunea Mamaia"],["map","key","10379","value","Tabacarie"],["map","key","10380","value","Tabara Navodari"],["map","key","10381","value","Tancodrom"],["map","key","10382","value","Tomis I"],["map","key","10383","value","Tomis II"],["map","key","10384","value","Tomis III"],["map","key","10385","value","Tomis IV"],["map","key","10386","value","Tomis Mall"],["map","key","10387","value","Tomis Nord"],["map","key","10388","value","Tomis Plus"],["map","key","10389","value","Trandafirul"],["map","key","10390","value","Trocadero"],["map","key","10391","value","Tudor Vladimirescu"],["map","key","10392","value","Universitate"],["map","key","10393","value","Veterani"],["map","key","10394","value","Victoria"],["map","key","10395","value","Viile Noi"],["map","key","10396","value","Zona Industriala"],["map","key","10397","value","Zorile"],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""],["map","key","","value",""]]
    },{
      "function":"__j",
      "vtp_name":"ad_title"
    },{
      "function":"__c",
      "vtp_value":"UA-79403851-1"
    },{
      "function":"__u"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT"
    },{
      "function":"__j",
      "vtp_name":"adID"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"seCkImovirtual"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"onap"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"platform"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",2],
      "vtp_map":["list",["map","key","Investitii","value","Investitii"],["map","key","Apartamente","value","Apartamente"],["map","key","Case","value","Case"],["map","key","Camere","value","Camere"],["map","key","Terenuri","value","Terenuri"],["map","key","Spatii Comerciale","value","Spatii Comerciale"],["map","key","Depozite si hale","value","Depozite si hale"],["map","key","Birouri","value","Birouri"]]
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",1]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",2]],["map","index","2","group",["macro",3]],["map","index","3","group",["macro",5]],["map","index","4","group",["macro",6]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",7],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"877009568",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",8],
      "tag_id":2
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ad Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Contact",
      "vtp_eventLabel":"Message_send (desktop)",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-79403851-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ad Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Contact",
      "vtp_eventLabel":"Phone topright (desktop)",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-79403851-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ad Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Contact",
      "vtp_eventLabel":"Phone mobile",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-79403851-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ad Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Contact",
      "vtp_eventLabel":"message_sent (mobile)",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-79403851-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ad Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Contact",
      "vtp_eventLabel":"Phone top right (mobile)",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-79403851-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ad Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Contact",
      "vtp_eventLabel":"Phone",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-79403851-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ad Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Contact",
      "vtp_eventLabel":"Message",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-79403851-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"877009568",
      "vtp_conversionLabel":"MtpyCMT68moQoLWYogM",
      "vtp_url":["macro",8],
      "vtp_enableReadGaCookie":false,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ad Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Call",
      "vtp_eventLabel":"Phone Call",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-79403851-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Investitii",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Vezi Pagina",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",7],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Business",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Creare cont",
      "vtp_eventLabel":"Agentie",
      "vtp_trackingId":["macro",7],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Business",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Creare cont",
      "vtp_eventLabel":"Dezvoltatori",
      "vtp_trackingId":["macro",7],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Lead",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Cont agentie",
      "vtp_eventLabel":"Agentii",
      "vtp_trackingId":["macro",7],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":35
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Lead",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Cont dezvoltatori",
      "vtp_eventLabel":"Dezvoltatori",
      "vtp_trackingId":["macro",7],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__cl",
      "tag_id":41
    },{
      "function":"__cl",
      "tag_id":42
    },{
      "function":"__cl",
      "tag_id":43
    },{
      "function":"__cl",
      "tag_id":44
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1587219628237649\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1587219628237649\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Clink rel=\"dns-prefetch\" href=\"\/\/app.omniconvert.com\"\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/cdn.omniconvert.com\/js\/h955811.js\"\u003E\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"\/\/creativecdn.com\/tags?id=pr_cNQaMBnXo7OtsUrPD0Cb_home\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Edocument.write('\\x3ciframe src\\x3d\"\/\/creativecdn.com\/tags?id\\x3dpr_cNQaMBnXo7OtsUrPD0Cb_category2_'+category_id+'\" width\\x3d\"1\" height\\x3d\"1\" scrolling\\x3d\"no\" frameBorder\\x3d\"0\" style\\x3d\"display: none;\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":19
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Edocument.write('\\x3ciframe src\\x3d\"\/\/creativecdn.com\/tags?id\\x3dpr_cNQaMBnXo7OtsUrPD0Cb_offer_'+adID+'\" width\\x3d\"1\" height\\x3d\"1\" scrolling\\x3d\"no\" frameBorder\\x3d\"0\" style\\x3d\"display: none;\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":20
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"\/\/creativecdn.com\/tags?id=pr_cNQaMBnXo7OtsUrPD0Cb_listing_{ID},{ID},{ID}\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":21
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/creativecdn.com\/tags?id=pr_cNQaMBnXo7OtsUrPD0Cb_orderclick_",["escape",["macro",14],12],"\u0026amp;cd=default\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3cimg src\\x3d\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/71406437\/DFPAudiencePixel;ord\\x3d'+a+';dc_seg\\x3d466061545?\" width\\x3d1 height\\x3d1 border\\x3d0\/\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu=\/71406437\/DFPAudiencePixel;ord=1;dc_seg=466061545?\" width=\"1\" height=\"1\" border=\"0\/\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3cimg src\\x3d\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu\\x3d\/71406437\/DFPAudiencePixel;ord\\x3d'+a+';dc_seg\\x3d468961701?\" width\\x3d1 height\\x3d1 border\\x3d0\/\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/pubads.g.doubleclick.net\/activity;dc_iu=\/71406437\/DFPAudiencePixel;ord=1;dc_seg=468961701?\" width=\"1\" height=\"1\" border=\"0\/\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction ckCounterSetCookie(b,c){var a=new Date;a.setTime(a.getTime()+18144E5);a=\"expires\\x3d\"+a.toUTCString();document.cookie=b+\"\\x3d\"+c+\";\"+a+\";domain\\x3d;path\\x3d\/\"}ckCounterSetCookie(\"seCkImovirtual\",\"sell\"+ninjaPV.user_id);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript data-gtmsrc=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/bootbox.js\/4.4.0\/bootbox.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cstyle type=\"text\/css\"\u003E\n.surveyMonkeyGTMPopup button.close{\nfloat:right;\nmargin:0px !important;\nfont-size: 22px;\nfont-weight: 700;\nopacity: 0.4;\ncursor:pointer;\n}\nimg#surveyMonkeyImageLogo{\nheight: 20%;\nwidth: 20%;\npadding-top: 10px;\n}\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar surveyMonkeyURLSellers;surveyMonkeyURLSellers=\"private\"!=ninjaPV.business_status?\"https:\/\/www.surveymonkey.com\/r\/RESellersB2CCEB-18Apr\":\"https:\/\/www.surveymonkey.com\/r\/RESellersC2CCEB-18Apr\";var surveyMonkeyNotShowSellers=\"REBuyersCEB-18Apr\",surveyMonkeyTopLogo=\"http:\/\/blog.olx.ro\/wp-content\/uploads\/2018\/04\/storia_logo_1.png\",surveyMonkeyCookieName=\"smCP\",surveyMonkeySurveyNameSellers=surveyMonkeyURLSellers.split(\"\/r\/\")[1],surveyMonkeyRandomizerNumberSellers=10;\nfunction surveyMonkeyRandomizer(b,c){return Math.floor(Math.random()*(1+c-b))+b}function surveyMonkeyReadCookie(b){b+=\"\\x3d\";for(var c=document.cookie.split(\";\"),a=0;a\u003Cc.length;a++){for(var d=c[a];\" \"==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(b))return d.substring(b.length,d.length)}return null}function surveyMonkeyCreateCookie(b,c){var a=new Date;a.setTime(a.getTime()+18144E5);a=\"; expires\\x3d\"+a.toUTCString();document.cookie=b+'\\x3d[\"'+c+'\"];'+a+\"; path\\x3d\/\"}\nfunction surveyMonkeyUpdateCookie(b,c){var a=new Date;a.setTime(a.getTime()+18144E5);a=\"; expires\\x3d\"+a.toUTCString();document.cookie=b+\"\\x3d\"+c+\";\"+a+\"; path\\x3d\/\"}function surveyMonkeyEraseCookie(b){surveyMonkeyCreateCookie(b,\"\",-1)}\nvar userIdSellers=parseInt(surveyMonkeyReadCookie(\"seCkImovirtual\").split(\"sell\")[1]),box=bootbox.dialog({message:'\\x3cimg src\\x3d\"'+surveyMonkeyTopLogo+'\" id\\x3d\"surveyMonkeyImageLogo\" \/\\x3e\\x3ciframe src\\x3d\"'+surveyMonkeyURLSellers+\"?user_id\\x3d\"+ninjaPV.user_id+\"\\x26platform\\x3d\"+ninjaPV.platform+'\" style\\x3d\"width:100%;height:420px\"\\x3e\\x3c\/iframe\\x3e',size:\"large\",closeButton:!0,className:\"surveyMonkeyGTMPopup\",show:!1});\nif(null!=surveyMonkeyReadCookie(surveyMonkeyCookieName)){var smCookieArray=JSON.parse(surveyMonkeyReadCookie(surveyMonkeyCookieName));-1===smCookieArray.indexOf(surveyMonkeySurveyNameSellers)\u0026\u0026-1===smCookieArray.indexOf(surveyMonkeyNotShowSellers)\u0026\u00261===surveyMonkeyRandomizer(1,surveyMonkeyRandomizerNumberSellers)\u0026\u0026(box.modal(\"show\"),smCookieArray.push(surveyMonkeySurveyNameSellers),surveyMonkeyUpdateCookie(surveyMonkeyCookieName,JSON.stringify(smCookieArray)))}else 1===surveyMonkeyRandomizer(1,surveyMonkeyRandomizerNumberSellers)\u0026\u0026\n(box.modal(\"show\"),surveyMonkeyCreateCookie(surveyMonkeyCookieName,surveyMonkeySurveyNameSellers));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/bootbox.js\/4.4.0\/bootbox.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cstyle type=\"text\/css\"\u003E\n.surveyMonkeyGTMPopup button.close{\nfloat:right;\nmargin:0px !important;\nfont-size: 22px;\nfont-weight: 700;\nopacity: 0.4;\ncursor:pointer;\n}\nimg#surveyMonkeyImageLogo{\nheight: 20%;\nwidth: 20%;\npadding-top: 10px;\n}\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar surveyMonkeyURL=\"https:\/\/www.surveymonkey.com\/r\/REBuyersCEB-18Apr\",surveyMonkeyTopLogo=\"http:\/\/blog.olx.ro\/wp-content\/uploads\/2018\/04\/storia_logo_1.png\",surveyMonkeyCookieName=\"smCP\",surveyMonkeySurveyName=surveyMonkeyURL.split(\"\/r\/\")[1],surveyMonkeyRandomizerNumber=10;function surveyMonkeyRandomizer(b,c){return Math.floor(Math.random()*(1+c-b))+b}\nfunction surveyMonkeyGetCookie(b){b+=\"\\x3d\";var c=decodeURIComponent(document.cookie);c=c.split(\";\");for(var a=0;a\u003Cc.length;a++){for(var d=c[a];\" \"==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(b))return d.substring(b.length,d.length)}return\"\"}function surveyMonkeySetCookie(b,c){var a=new Date;a.setTime(a.getTime()+18144E5);a=\"expires\\x3d\"+a.toUTCString();document.cookie=b+'\\x3d[\"'+c+'\"];'+a}\nfunction surveyMonkeyUpdateCookie(b,c){var a=new Date;a.setTime(a.getTime()+18144E5);a=\"expires\\x3d\"+a.toUTCString();document.cookie=b+\"\\x3d\"+c+\";\"+a}\nif(0\u003CsurveyMonkeyGetCookie(surveyMonkeyCookieName).length){var smCookieArray=JSON.parse(surveyMonkeyGetCookie(surveyMonkeyCookieName));-1===smCookieArray.indexOf(surveyMonkeySurveyName)\u0026\u00261===surveyMonkeyRandomizer(1,surveyMonkeyRandomizerNumber)\u0026\u0026(bootbox.dialog({message:'\\x3cimg src\\x3d\"'+surveyMonkeyTopLogo+'\" id\\x3d\"surveyMonkeyImageLogo\" \/\\x3e\\x3ciframe src\\x3d\"'+surveyMonkeyURL+\"?user_id\\x3d\"+ninjaPV.user_id+\"\\x26platform\\x3d\"+ninjaPV.platform+'\" style\\x3d\"width:100%;height:420px\"\\x3e\\x3c\/iframe\\x3e',\nsize:\"large\",closeButton:!0,className:\"surveyMonkeyGTMPopup\"}),smCookieArray.push(surveyMonkeySurveyName),surveyMonkeyUpdateCookie(surveyMonkeyCookieName,JSON.stringify(smCookieArray)))}else 1===surveyMonkeyRandomizer(1,surveyMonkeyRandomizerNumber)\u0026\u0026(bootbox.dialog({message:'\\x3cimg src\\x3d\"'+surveyMonkeyTopLogo+'\" id\\x3d\"surveyMonkeyImageLogo\" \/\\x3e\\x3ciframe src\\x3d\"'+surveyMonkeyURL+\"?user_id\\x3d\"+ninjaPV.user_id+\"\\x26platform\\x3d\"+ninjaPV.platform+'\" style\\x3d\"width:100%;height:420px\"\\x3e\\x3c\/iframe\\x3e',\nsize:\"large\",closeButton:!0,className:\"surveyMonkeyGTMPopup\"}),surveyMonkeySetCookie(surveyMonkeyCookieName,surveyMonkeySurveyName));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"message_send_d"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"showing_phone_d"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"showing_phone_m"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"message_sent_m"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"reply_phone_show"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"btn btn-action contact-button"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"Trimite mesajul"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"\/plata\/ok\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"reply_phone_call"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"Vezi pagina dezvoltatorului"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"\/cont\/checkemailafterpost\/?type=registerbusinesscustom"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"Schimba parola"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"cont\/checkemailafterpost\/?type=registerbusiness"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"my_messages_sent"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"\/cont\/beneficiile\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"agentii"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"dezvoltatori"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"https:\/\/www.storia.ro\/"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"\/apartament\/|\/casa\/|\/teren\/|\/spatiu-comercial\/|\/depozite-hale\/|\/birou\/|\/camera\/"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"\u0026search"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"\/oferta\/"
    },{
      "function":"_cn",
      "arg0":["macro",11],
      "arg1":"\/?search"
    },{
      "function":"_cn",
      "arg0":["macro",9],
      "arg1":"phone-spoiler phone-spoiler-button"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"multipay_page"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"sell"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"listing|my_ads_active|ad_page"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"http.*\\\/\\\/www\\.storia\\.ro\\\/(vanzare|inchiriat)\\\/.*"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":".*-1-.*-.*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ad_page"
    }],
  "rules":[
    [["if",0],["add",0,1,20,21,16,17,18,19]],
    [["if",1],["add",2]],
    [["if",2],["add",3]],
    [["if",3],["add",4,6]],
    [["if",4],["add",5]],
    [["if",5],["add",7,26,27]],
    [["if",6,7,8],["add",8,26,28]],
    [["if",0,9],["add",9,26]],
    [["if",10],["add",10,26]],
    [["if",8,11],["add",11]],
    [["if",0,12,13],["add",12]],
    [["if",14,15],["add",13]],
    [["if",0,16,17],["add",14]],
    [["if",0,16,18],["add",15]],
    [["if",0,19],["add",22]],
    [["if",0,20],["unless",21],["add",23]],
    [["if",0,22],["unless",23],["add",24]],
    [["if",0,21],["add",25]],
    [["if",8,24],["add",26]],
    [["if",25],["add",29]],
    [["if",26,27],["add",30]],
    [["if",28,30],["unless",29],["add",31]]]
},
"runtime":[
[],[]
]};

var aa=function(a,b){function c(){}c.prototype=b.prototype;a.pe=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ae=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var g=function(a,b){this.s=a;this.Pc=b};g.prototype.bd=function(){return this.s};g.prototype.getType=g.prototype.bd;g.prototype.getData=function(){return this.Pc};g.prototype.getData=g.prototype.getData;var ba=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ca=function(){this.Z={};this.oa=!1};ca.prototype.get=function(a){return this.Z["dust."+a]};ca.prototype.set=function(a,b){!this.oa&&(this.Z["dust."+a]=b)};ca.prototype.has=function(a){return this.Z.hasOwnProperty("dust."+a)};var da=function(a){var b=[],c;for(c in a.Z)a.Z.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ca.prototype.remove=function(a){!this.oa&&delete this.Z["dust."+a]};ca.prototype.D=function(){this.oa=!0};var t=function(a){this.ca=new ca;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ba(b)?this.h[Number(b)]=a[Number(b)]:this.ca.set(b,a[b]))};t.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};t.prototype.set=function(a,b){if("length"==a){if(!ba(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ba(a)?this.h[Number(a)]=b:this.ca.set(a,b)};
t.prototype.set=t.prototype.set;t.prototype.get=function(a){return"length"==a?this.length():ba(a)?this.h[Number(a)]:this.ca.get(a)};t.prototype.get=t.prototype.get;t.prototype.length=function(){return this.h.length};t.prototype.L=function(){for(var a=da(this.ca),b=0;b<this.h.length;b++)a.push(b+"");return new t(a)};t.prototype.getKeys=t.prototype.L;t.prototype.remove=function(a){ba(a)?delete this.h[Number(a)]:this.ca.remove(a)};t.prototype.remove=t.prototype.remove;t.prototype.pop=function(){return this.h.pop()};
t.prototype.pop=t.prototype.pop;t.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};t.prototype.push=t.prototype.push;t.prototype.shift=function(){return this.h.shift()};t.prototype.shift=t.prototype.shift;t.prototype.splice=function(a,b,c){return new t(this.h.splice.apply(this.h,arguments))};t.prototype.splice=t.prototype.splice;t.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
t.prototype.unshift=t.prototype.unshift;t.prototype.has=function(a){return ba(a)&&this.h.hasOwnProperty(a)||this.ca.has(a)};var ea=function(){function a(a,b){c[a]=b}function b(){c={}}var c={},d={add:a,reset:b,create:function(d){var e={add:a,request:function(a,b){return c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};e.add=e.add;e.request=e.request;e.reset=e.reset;return e}};d.add=d.add;d.reset=d.reset;return d};var fa=function(){function a(a,c){if(b[a]){if(b[a].Da+c>b[a].max)throw Error("Quota exceeded");b[a].Da+=c}}var b={},c=void 0,d=void 0,e={xd:function(a){c=a},Eb:function(){c&&a(c,1)},yd:function(a){d=a},O:function(b){d&&a(d,b)},Nd:function(a,c){b[a]=b[a]||{Da:0};b[a].max=c},ad:function(a){return b[a]&&b[a].Da||0},reset:function(){b={}},Jc:a};e.onFnConsume=e.xd;e.consumeFn=e.Eb;e.onStorageConsume=e.yd;e.consumeStorage=e.O;e.setMax=e.Nd;e.getConsumed=e.ad;e.reset=e.reset;e.consume=e.Jc;return e};var ha=function(a,b,c){this.F=a;this.T=b;this.S=c;this.h=new ca};ha.prototype.add=function(a,b){this.h.oa||(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};ha.prototype.add=ha.prototype.add;ha.prototype.set=function(a,b){this.h.oa||(this.S&&this.S.has(a)?this.S.set(a,b):(this.F.O(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};ha.prototype.set=ha.prototype.set;
ha.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.S?this.S.get(a):void 0};ha.prototype.get=ha.prototype.get;ha.prototype.has=function(a){return!!this.h.has(a)||!(!this.S||!this.S.has(a))};ha.prototype.has=ha.prototype.has;ha.prototype.C=function(){return this.F};ha.prototype.D=function(){this.h.D()};var ia=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ja=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var v=function(a,b){ca.call(this);this.Qb=a;this.Zc=b};aa(v,ca);var la=function(a,b){for(var c,d=0;d<b.length&&!(c=ka(a,b[d]),c instanceof g);d++);return c},ka=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof v))throw"Attempting to execute non-function "+b[0]+".";return c.i.apply(c,[a].concat(b.slice(1)))};v.prototype.toString=function(){return this.Qb};v.prototype.getName=function(){return this.Qb};v.prototype.getName=v.prototype.getName;v.prototype.L=function(){return new t(da(this))};
v.prototype.getKeys=v.prototype.L;v.prototype.i=function(a,b){var c,d={A:function(){return a},evaluate:function(b){var c=a;return ia(b)?ka(c,b):b},ja:function(b){return la(a,b)},C:function(){return a.C()},ee:function(){c||(c=a.T.create(d));return c}};a.C().Eb();return this.Zc.apply(d,Array.prototype.slice.call(arguments,1))};v.prototype.invoke=v.prototype.i;var x=function(){ca.call(this)};aa(x,ca);x.prototype.L=function(){return new t(da(this))};x.prototype.getKeys=x.prototype.L;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var na=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,oa=function(a){if(null==a)return String(a);var b=na.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},pa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},qa=function(a){if(!a||"object"!=oa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!pa(a,"constructor")&&!pa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||pa(a,b)},ra=function(a,b){var c=b||("array"==oa(a)?[]:{}),d;for(d in a)if(pa(a,d)){var e=a[d];"array"==oa(e)?("array"!=oa(c[d])&&(c[d]=[]),c[d]=ra(e,c[d])):qa(e)?(qa(c[d])||(c[d]={}),c[d]=ra(e,c[d])):c[d]=e}return c};var sa=function(a){if(a instanceof t){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=sa(a.get(d)));return b}if(a instanceof x){for(var e={},f=a.L(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=sa(a.get(f.get(k)));return e}return a instanceof v?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=ta(b[c]);var d=new ha(fa(),ea());return sa(a.i.apply(a,[d].concat(b)))}:a},ta=function(a){if(ia(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=ta(a[c]));return new t(b)}if(qa(a)){var d=
new x,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,ta(a[e]));return d}if("function"===typeof a)return new v("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=sa(this.evaluate(c[d]));return ta(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var ua={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.A(),e=this.evaluate(b);if(!(e instanceof t))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.C().O(a.length+f.length);return new v(a,function(){return function(a){for(var b=new ha(d.F,d.T,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new t(c));var q=la(b,f);if(q instanceof g)return"return"===q.s?q.getData():q}}())},list:function(a){var b=this.C();b.O(arguments.length);for(var c=new t,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.O(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.C(),c=new x,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.O(h);c.set(e,f)}return c},undefined:function(){}};var y=function(){this.F=fa();this.T=ea();this.la=new ha(this.F,this.T)};y.prototype.N=function(a,b){var c=new v(a,b);c.D();this.la.set(a,c)};y.prototype.addInstruction=y.prototype.N;y.prototype.Db=function(a,b){ua.hasOwnProperty(a)&&this.N(b||a,ua[a])};y.prototype.addNativeInstruction=y.prototype.Db;y.prototype.C=function(){return this.F};y.prototype.getQuota=y.prototype.C;y.prototype.Ka=function(){this.F=fa();this.la.F=this.F};y.prototype.resetQuota=y.prototype.Ka;
y.prototype.Jd=function(){this.T=ea();this.la.T=this.T};y.prototype.resetPermissions=y.prototype.Jd;y.prototype.I=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.ib(c)};y.prototype.execute=y.prototype.I;y.prototype.ib=function(a){for(var b,c=0;c<arguments.length;c++){var d=ka(this.la,arguments[c]);b=d instanceof g||d instanceof v||d instanceof t||d instanceof x||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
y.prototype.run=y.prototype.ib;y.prototype.D=function(){this.la.D()};y.prototype.makeImmutable=y.prototype.D;var va=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var xa={Qd:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof t)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new t(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new t(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new t(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=va(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new t(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=va(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.i(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var z={Ob:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},ya="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),za=new g("break"),Aa=new g("continue");z.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};z.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
z.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof t))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=ja(ya,b))return ta(a[b].apply(a,va(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof t){if(a.has(b)){var d=
a.get(b);if(d instanceof v){var e=va(c);e.unshift(this.A());return d.i.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=ja(xa.Qd,b))return e=va(c),e.unshift(this.A()),xa[b].apply(a,e)}if(a instanceof v||a instanceof x){if(a.has(b)){d=a.get(b);if(d instanceof v)return e=va(c),e.unshift(this.A()),d.i.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof v?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,va(c))}throw"TypeError: Object has no '"+
b+"' property.";};z.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.A();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};z["break"]=function(){return za};z["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};z["continue"]=function(){return Aa};
z.Qc=function(a,b,c){var d=new t;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[z.Ob.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.A().set(a,this.evaluate(f))};z.Tc=function(a,b){return this.evaluate(a)/this.evaluate(b)};z.Vc=function(a,b){return this.evaluate(a)==this.evaluate(b)};z.Xc=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
z.$c=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.A();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.ja(c);if(f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}else if(b instanceof x||b instanceof t||b instanceof v){var h=b.L(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.ja(c),f instanceof g){if("break"==f.s)break;if("return"==f.s)return f}}};z.get=function(a){return this.A().get(this.evaluate(a))};
z.Mb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof x||a instanceof t||a instanceof v?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ba(b)&&(c=a[b]));return c};z.cd=function(a,b){return this.evaluate(a)>this.evaluate(b)};z.dd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};z.hd=function(a,b){return this.evaluate(a)===this.evaluate(b)};z.jd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
z["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.ja(d);if(e instanceof g)return e};z.qd=function(a,b){return this.evaluate(a)<this.evaluate(b)};z.rd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};z.sd=function(a,b){return this.evaluate(a)%this.evaluate(b)};z.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};z.td=function(a){return-this.evaluate(a)};z.ud=function(a){return!this.evaluate(a)};
z.vd=function(a,b){return this.evaluate(a)!=this.evaluate(b)};z["null"]=function(){return null};z.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};z.Wb=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};z.Xb=function(a){return this.evaluate(a)};z.quote=function(a){return Array.prototype.slice.apply(arguments)};z["return"]=function(a){return new g("return",this.evaluate(a))};
z.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof v||a instanceof t||a instanceof x)&&a.set(b,c);return c};z.Pd=function(a,b){return this.evaluate(a)-this.evaluate(b)};
z["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!ia(b)||!ia(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.s;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.s||"continue"==d.s)))return d};
z.Rd=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};z["typeof"]=function(a){a=this.evaluate(a);return a instanceof v?"function":typeof a};z.undefined=function(){};z["var"]=function(a){for(var b=this.A(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
z["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.ja(f),e instanceof g)){if("break"==e.s)return;if("return"==e.s)return e}for(;this.evaluate(a);){e=this.ja(f);if(e instanceof g){if("break"==e.s)break;if("return"==e.s)return e}this.evaluate(b)}};var Ca=function(){this.Nb=!1;this.P=new y;Ba(this);this.Nb=!0};Ca.prototype.od=function(){return this.Nb};Ca.prototype.isInitialized=Ca.prototype.od;Ca.prototype.I=function(a){return this.P.ib(a)};Ca.prototype.execute=Ca.prototype.I;Ca.prototype.D=function(){this.P.D()};Ca.prototype.makeImmutable=Ca.prototype.D;
var Ba=function(a){function b(a,b){e.P.Db(a,String(b))}function c(a,b){e.P.N(String(d[a]),b)}var d=z.Ob,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",z.add);c("AND",z.and);c("APPLY",z.apply);c("ASSIGN",z.assign);c("BREAK",z["break"]);c("CASE",z["case"]);c("CONTINUE",z["continue"]);c("DEFAULT",z["case"]);c("DEFN",z.Qc);c("DIVIDE",z.Tc);c("EQUALS",z.Vc);c("EXPRESSION_LIST",z.Xc);c("FOR_IN",z.$c);c("GET",z.get);c("GET_INDEX",
z.Mb);c("GET_PROPERTY",z.Mb);c("GREATER_THAN",z.cd);c("GREATER_THAN_EQUALS",z.dd);c("IDENTITY_EQUALS",z.hd);c("IDENTITY_NOT_EQUALS",z.jd);c("IF",z["if"]);c("LESS_THAN",z.qd);c("LESS_THAN_EQUALS",z.rd);c("MODULUS",z.sd);c("MULTIPLY",z.multiply);c("NEGATE",z.td);c("NOT",z.ud);c("NOT_EQUALS",z.vd);c("NULL",z["null"]);c("OR",z.or);c("POST_DECREMENT",z.Wb);c("POST_INCREMENT",z.Wb);c("PRE_DECREMENT",z.Xb);c("PRE_INCREMENT",z.Xb);c("QUOTE",z.quote);c("RETURN",z["return"]);c("SET_PROPERTY",z.setProperty);
c("SUBTRACT",z.Pd);c("SWITCH",z["switch"]);c("TERNARY",z.Rd);c("TYPEOF",z["typeof"]);c("VAR",z["var"]);c("WHILE",z["while"])};Ca.prototype.N=function(a,b){this.P.N(a,b)};Ca.prototype.addInstruction=Ca.prototype.N;Ca.prototype.C=function(){return this.P.C()};Ca.prototype.getQuota=Ca.prototype.C;Ca.prototype.Ka=function(){this.P.Ka()};Ca.prototype.resetQuota=Ca.prototype.Ka;var Da=function(){this.Ha={}};Da.prototype.get=function(a){return this.Ha.hasOwnProperty(a)?this.Ha[a]:void 0};Da.prototype.add=function(a,b){if(this.Ha.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new v(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.D();this.Ha[a]=c};Da.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var B=window,C=document,Ea=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Fa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},F=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Fa(d,b);c&&(d.onerror=c);var e=C.getElementsByTagName("script")[0]||C.body||C.head;e.parentNode.insertBefore(d,e);return d},Ga=function(a,b){var c=C.createElement("iframe");
c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||C.body||C.head;d.parentNode.insertBefore(c,d);Fa(c,b);void 0!==a&&(c.src=a);return c},J=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Ha=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ia=function(a,b,c){a.removeEventListener?a.removeEventListener(b,
c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){B.setTimeout(a,0)},Ka=function(a){var b=C.getElementById(a);if(b&&Ja(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ja(document.all[a][c],"id")==a)return document.all[a][c];return b},Ja=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},La=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},
Ma=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c};var Na=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},P=function(a,b,c,d,e){var f,h=a.protocol||B.location.protocol;h=h.replace(":","").toLowerCase();b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=h;break;case "host":f=(a.hostname||B.location.hostname).split(":")[0].toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;
case "port":f=String(1*(a.hostname?a.port:B.location.port)||("http"==h?80:"https"==h?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=ja(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Na(f,e));break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Oa=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},R=function(a){var b=
C.createElement("a");a&&(b.href=a);return b};var Ra=function(){this.Vb=new Ca;var a=new Da;a.addAll(Pa());Qa(this,function(b){return a.get(b)})},Pa=function(){return{callInWindow:Sa,getCurrentUrl:Ta,getInWindow:Ua,getReferrer:Va,getUrlComponent:Wa,getUrlFragment:Xa,isPlainObject:Ya,loadIframe:Za,loadJavaScript:ab,removeUrlFragment:bb,replaceAll:cb,sendTrackingBeacon:db,setInWindow:eb}};Ra.prototype.I=function(a){return this.Vb.I(a)};Ra.prototype.execute=Ra.prototype.I;var Qa=function(a,b){a.Vb.N("require",b)};
function Sa(a,b){for(var c=a.split("."),d=B,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==oa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(sa(arguments[f]));e.apply(d,h)}}function Ta(){return B.location.href}function Ua(a,b,c){for(var d=a.split("."),e=B,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=sa(b));return ta(e[d[f]])}function Va(){return C.referrer}
function Wa(a,b,c,d,e){var f;if(d&&d instanceof t){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return P(R(a),b,c,f,e)}function Xa(a){return P(R(a),"fragment")}function Ya(a){return a instanceof x}function Za(a,b){var c=this.A();Ga(a,function(){b instanceof v&&b.i(c)})}var hb={};
function ab(a,b,c,d){var e=this.A(),f=function(){b instanceof v&&b.i(e)},h=function(){c instanceof v&&c.i(e)};d?hb[d]?(hb[d].onSuccess.push(f),hb[d].onFailure.push(h)):(hb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=hb[d].onSuccess,b=0;b<a.length;b++)O(a[b]);a.push=function(a){O(a);return 0}},h=function(){for(var a=hb[d].onFailure,b=0;b<a.length;b++)O(a[b]);hb[d]=null},F(a,f,h)):F(a,f,h)}function bb(a){return Oa(R(a))}function cb(a,b,c){return a.replace(new RegExp(b,"g"),c)}
function db(a,b,c){var d=this.A();J(a,function(){b instanceof v&&b.i(d)},function(){c instanceof v&&c.i(d)})}function eb(a,b,c){for(var d=a.split("."),e=B,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=sa(b),!0):!1};
var ib=[],jb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},kb=function(a){return jb[a]},lb=/[\x00\x22\x26\x27\x3c\x3e]/g;var pb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,qb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},rb=function(a){return qb[a]};
var yb=/['()]/g,zb=function(a){return"%"+a.charCodeAt(0).toString(16)};ib[12]=function(a){var b=
encodeURIComponent(String(a));yb.lastIndex=0;return yb.test(b)?b.replace(yb,zb):b};var Ab=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Bb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Cb=function(a){return Bb[a]};var Eb,Fb=[],Gb=[],Hb=[],Ib=[],Jb=[],Kb={},Lb,Mb,Nb,Sb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";if(Kb[b]){var c={},d;for(d in a)a.hasOwnProperty(d)&&0===d.indexOf("vtp_")&&(c[d]=a[d]);return Kb[b](c)}var e=new x,f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&e.set(f.substr(4),ta(a[f]));var h=Eb([b,e]);h instanceof g&&"return"===h.s&&(h=h.getData());return sa(h)},Ub=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=
Tb(a[e],b,c));return d},Tb=function(a,b,c){if(ia(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Tb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Fb[f];if(!h||b(h))return;c[f]=!0;try{var k=Ub(h,b,c);d=Sb(k);Nb&&(d=Nb.Lc(d,k))}catch(w){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Tb(a[l],b,c)]=Tb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Tb(a[n],b,c);Mb&&(m=m||p===
Mb.xa);d.push(p)}return Mb&&m?Mb.Mc(d):d.join("");case "escape":d=Tb(a[1],b,c);if(Mb&&ia(a[1])&&"macro"===a[1][0]&&Mb.pd(a))return Mb.Bd(d);d=String(d);for(var q=2;q<a.length;q++)ib[a[q]]&&(d=ib[a[q]](d));return d;case "tag":var u=a[1];if(!Ib[u])throw Error("Unable to resolve tag reference "+u+".");return d={Jb:a[2],index:u};case "zb":var r=Vb({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(r=!r);return r;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");
}}return a},Vb=function(a,b,c){try{return Lb(Ub(a,b,c))}catch(d){JSON.stringify(a)}return null};var Wb=null,Zb=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Wb=Xb(a);for(var e=0;e<Gb.length;e++){var f=Gb[e],h=Yb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<Ib.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Yb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Wb(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Wb(e[c]);if(null===d)return null;if(d)return!1}return!0};
var Xb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Vb(Hb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var $b,ac=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.vc&&(h["fix_"+k]=!0),h.Kb=h.Kb||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=p.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,w:b.w,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||f.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],w:d,va:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},q=function(){for(var b in l)if(l[b].test(a)){var c=p[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.Kb&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.Pb=function(){return this[this.length-1]};d.Za=function(a){var b=this.Pb();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.Kc=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.va=b.test(a.tagName)||a.va);return a},f=q,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.Za("TABLE")?(a="<TBODY>"+a,p()):h.de&&c.test(e)&&d.Kc(e)?d.Za(e)?k():(a="</"+b.tagName+">"+a,p()):b.va||d.push(b)},endTag:function(a){d.Pb()?h.Yc&&!d.Za(a.tagName)?k():d.pop():h.Yc&&(f(),p())}},p=function(){var b=a,c=e(f());a=b;if(c&&
l[c.type])l[c.type](c)};q=function(){p();return e(f())}}();return{append:function(b){a+=b},Fd:q,ke:function(a){for(var b;(b=q())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},me:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.qe="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.oe=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.se=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.w){var d=a.w[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.va?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.ce=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Ac=a.Ac||!b[h]&&h;$b=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function f(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(u){var b=[];c(a,function(a){b.push(a)});return b}}var k={nc:a,oc:a,qc:a,rc:a,wc:a,xc:function(a){return a},done:a,error:function(a){throw a;},Id:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function f(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,wa:d.defaultView||d.parentWindow,Y:d,Ja:$b("",{vc:!0}),Ra:[b],gb:"",hb:d.createElement(b.nodeName),ra:[],W:[]});a(this.hb,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.W,arguments);for(var a;!this.Fa&&this.W.length;)a=this.W.shift(),"function"===typeof a?this.Ec(a):this.pb(a)};f.prototype.Ec=function(a){var b={type:"function",value:a.name||a.toString()};this.cb(b);a.call(this.wa,this.Y);this.Sb(b)};
f.prototype.pb=function(a){this.Ja.append(a);for(var b,c=[],d,e;(b=this.Ja.Fd())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.Wd(c);d&&this.ed(b);e&&this.fd(b)};f.prototype.Wd=function(a){var b=this.Bc(a);b.Cb&&(b.Xa=this.gb+b.Cb,this.gb+=b.Ed,this.hb.innerHTML=b.Xa,this.Ud())};f.prototype.Bc=function(a){var b=this.Ra.length,d=[],e=[],f=[];c(a,function(a){d.push(a.text);if(a.w){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.w.id&&"ps-style"!==a.w.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.va?" />":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{te:a,raw:d.join(""),Cb:e.join(""),Ed:f.join("")}};f.prototype.Ud=function(){for(var c,d=[this.hb];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.Ra[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");
f&&this.Ra[f].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};f.prototype.ed=function(a){var b=this.Ja.clear();b&&this.W.unshift(b);a.src=a.w.src||a.w.Yd;a.src&&this.ra.length?this.Fa=a:this.cb(a);var c=this;this.Vd(a,function(){c.Sb(a)})};f.prototype.fd=function(a){var b=this.Ja.clear();b&&this.W.unshift(b);a.type=a.w.type||a.w.Zd||"text/css";this.Xd(a);b&&this.write()};f.prototype.Xd=function(a){var b=this.Dc(a);this.nd(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.Y.createTextNode(a.content)))};
f.prototype.Dc=function(a){var b=this.Y.createElement(a.tagName);b.setAttribute("type",a.type);d(a.w,function(a,c){b.setAttribute(a,c)});return b};f.prototype.nd=function(a){this.pb('<span id="ps-style"/>');var b=this.Y.getElementById("ps-style");b.parentNode.replaceChild(a,b)};f.prototype.cb=function(a){a.zd=this.W;this.W=[];this.ra.unshift(a)};f.prototype.Sb=function(a){a!==this.ra[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.ra.shift(),this.write.apply(this,
a.zd),!this.ra.length&&this.Fa&&(this.cb(this.Fa),this.Fa=null))};f.prototype.Vd=function(a,b){var c=this.Cc(a),d=this.Od(c),e=this.options.nc;a.src&&(c.src=a.src,this.Md(c,d?e:function(){b();e()}));try{this.md(c),a.src&&!d||b()}catch(A){this.options.error(A),b()}};f.prototype.Cc=function(a){var b=this.Y.createElement(a.tagName);d(a.w,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};f.prototype.md=function(a){this.pb('<span id="ps-script"/>');var b=this.Y.getElementById("ps-script");
b.parentNode.replaceChild(a,b)};f.prototype.Md=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};f.prototype.Od=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.Id&&a.src&&a.hasAttribute("async"))};return f}();l.postscribe=function(){function b(){var a=
m.shift(),b;a&&(b=a[a.length-1],b.oc(),a.stream=c.apply(null,a),b.qc())}function c(c,f,k){function l(a){a=k.xc(a);w.write(a);k.rc(a)}w=new n(c,k);w.id=d++;w.name=k.name||w.id;var m=c.ownerDocument,p={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var q=w.wa.onerror||a;w.wa.onerror=function(a,b,c){k.error({he:a+" - "+b+":"+c});q.apply(w.wa,arguments)};w.write(f,
function(){e(m,p);w.wa.onerror=q;k.done();w=null;b()});return w}var d=0,m=[],w=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=f(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.fe?c[0]:c;var h=[c,d,e];c.Ad={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.wc(h);m.push(h);w||b();return c.Ad},{streams:{},je:m,$d:n})}();ac=l.postscribe}})();var bc={},cc=null;bc.m="GTM-M9JNVG";var dc=null,ec="//www.googletagmanager.com/a?id="+bc.m+"&cv=64",fc={},gc={};var hc=function(){},ic=function(a){return"function"==typeof a},jc=function(a){return"string"==oa(a)},kc=function(a){return"number"==oa(a)&&!isNaN(a)},lc=function(a){return Math.round(Number(a))||0},mc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},nc=function(a){var b=[];if(ia(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},oc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},pc=function(a,b){if(!kc(a)||!kc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},qc=function(){this.prefix="gtm.";this.values={}};qc.prototype.set=function(a,b){this.values[this.prefix+a]=b};qc.prototype.get=function(a){return this.values[this.prefix+a]};qc.prototype.contains=function(a){return void 0!==this.get(a)};var rc=function(){var a=cc.sequence||0;cc.sequence=a+1;return a},sc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},tc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var T=function(){var a=function(a){return{toString:function(){return a}}};return{sb:a("convert_case_to"),tb:a("convert_false_to"),ub:a("convert_null_to"),vb:a("convert_true_to"),wb:a("convert_undefined_to"),G:a("function"),cc:a("instance_name"),ec:a("live_only"),fc:a("malware_disabled"),gc:a("once_per_event"),yb:a("once_per_load"),zb:a("setup_tags"),hc:a("tag_id"),Ab:a("teardown_tags")}}();var uc=new qc,vc={},yc={set:function(a,b){ra(wc(a,b),vc)},get:function(a){return xc(a,2)},reset:function(){uc=new qc;vc={}}},xc=function(a,b){return 2!=b?uc.get(a):zc(a)},zc=function(a,b,c){var d=a.split(".");return Bc(d)},Bc=function(a){for(var b=vc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Fc=function(a,b){uc.set(a,b);ra(wc(a,b),vc)},wc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Gc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Hc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ic={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Jc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Kc=function(a){var b=xc("gtm.whitelist");var c=b&&Jc(nc(b),Hc),d=xc("gtm.blacklist")||
xc("tagTypeBlacklist")||[];Gc.test(B.location&&B.location.hostname)&&(d=nc(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Jc(nc(d),Ic),f={};return function(h){var k=h&&h[T.G];if(!k||"string"!=typeof k)return!0;k=k.replace(/_/g,"");if(void 0!==f[k])return f[k];var l=gc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ja(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
ja(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var u;if(!(u=0<=ja(e,k)))a:{for(var r=l||[],w=new qc,E=0;E<e.length;E++)w.set(e[E],!0);for(E=0;E<r.length;E++)if(w.get(r[E])){u=!0;break a}u=!1}q=u}return f[k]=!m||q}};var Lc={Lc:function(a,b){b[T.sb]&&"string"===typeof a&&(a=1==b[T.sb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(T.ub)&&null===a&&(a=b[T.ub]);b.hasOwnProperty(T.wb)&&void 0===a&&(a=b[T.wb]);b.hasOwnProperty(T.vb)&&!0===a&&(a=b[T.vb]);b.hasOwnProperty(T.tb)&&!1===a&&(a=b[T.tb]);return a}};var Mc=function(a){var b=cc.zones;!b&&a&&(b=cc.zones=a());return b},Nc={active:!0,isWhitelisted:function(){return!0}};var Oc=!1,Pc=0,Qc=[];function Rc(a){if(!Oc){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Oc=!0;for(var e=0;e<Qc.length;e++)O(Qc[e])}Qc.push=function(){for(var a=0;a<arguments.length;a++)O(arguments[a]);return 0}}}function Sc(){if(!Oc&&140>Pc){Pc++;try{C.documentElement.doScroll("left"),Rc()}catch(a){B.setTimeout(Sc,50)}}}var Tc=function(a){Oc?a():Qc.push(a)};var Uc=!1,Vc=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]};var Wc=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(!B[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}return B[b]},Xc=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Vc();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ad=function(){return"&tc="+Ib.filter(function(a){return a}).length},bd="0.005000">Math.random(),cd="",dd=function(){cd=[ec,"&v=3&t=t","&pid="+pc(),"&rv=4s"].join("")},ed={},fd="",gd=void 0,hd={},id={},jd=void 0,kd=2,ld=1E3,md=function(){kd=2},nd=function(){var a=gd;return void 0===a?"":[cd,ed[a]?"":"&es=1",hd[a],ad(),fd,"&z=0"].join("")},od=function(){jd&&(B.clearTimeout(jd),jd=void 0);void 0===gd||ed[gd]&&!fd||(id[gd]||0>=kd--||0>=ld--?id[gd]=!0:(J(nd()),ed[gd]=
!0,fd=""))},pd=function(a,b,c){if(bd&&!id[a]&&b){a!==gd&&(od(),gd=a);var d=c+String(b[T.G]||"").replace(/_/g,"");fd=fd?fd+"."+d:"&tr="+d;jd||(jd=B.setTimeout(od,500));2022<=nd().length&&od()}};function qd(a,b,c,d,e,f){var h=Ib[a],k=rd(a,b,c,d,e,f);if(!k)return null;var l=Tb(h[T.zb],f.R,[]);if(l&&l.length){var m=l[0];k=qd(m.index,b,k,1===m.Jb?e:k,e,f)}return k}
function rd(a,b,c,d,e,f){function h(){var b=Ub(k,f.R);b.vtp_gtmOnSuccess=function(){pd(f.id,Ib[a],"5");c()};b.vtp_gtmOnFailure=function(){pd(f.id,Ib[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[T.fc])d();else{pd(f.id,k,"1");try{Sb(b)}catch(E){pd(f.id,
k,"7");e()}}}var k=Ib[a];if(f.R(k))return null;var l=Tb(k[T.Ab],f.R,[]);if(l&&l.length){var m=l[0],n=qd(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.Jb?e:n}if(k[T.yb]||k[T.gc]){var p=k[T.yb]?Jb:b,q=c,u=d;if(!p[a]){h=tc(h);var r=sd(a,p,h);c=r.M;d=r.aa}return function(){p[a](q,u)}}return h}function sd(a,b,c){var d=[],e=[];b[a]=td(d,e,c);return{M:function(){b[a]=ud;for(var c=0;c<d.length;c++)d[c]()},aa:function(){b[a]=vd;for(var c=0;c<e.length;c++)e[c]()}}}
function td(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ud(a){a()}function vd(a,b){b()};function wd(a){var b=0,c=0,d=!1;return{add:function(){c++;return tc(function(){b++;d&&b>=c&&a()})},sc:function(){d=!0;b>=c&&a()}}}function xd(a,b){if(!bd)return;var c=function(a){var d=b.R(Ib[a])?"3":"4",f=Tb(Ib[a][T.zb],b.R,[]);f&&f.length&&c(f[0].index);pd(b.id,Ib[a],d);var h=Tb(Ib[a][T.Ab],b.R,[]);h&&h.length&&c(h[0].index)};c(a);}var yd=!1;var zd=function(a,b){var c={};c[T.G]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Ib.push(c);return Ib.length-1};var Ad=/[A-Z]+/,Bd=/\s/,Cd=function(a){if(jc(a)&&(a=a.trim(),!Bd.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ad.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],na:d}}}}};var Dd=null,Ed={},Fd={},Gd;function Hd(){Dd=Dd||!cc.gtagRegistered;cc.gtagRegistered=!0;return Dd}var Id=function(a,b){var c={event:a};b&&(c.eventModel=ra(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function Jd(a){if(void 0===Fd[a.id]){var b;if("UA"==a.prefix)b=zd("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=zd("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=zd("gtagfl",{targetId:a.id});else return;if(!Gd){var c={name:"send_to",dataLayerVersion:2},d={};d[T.G]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Fb.push(d);Gd=["macro",Fb.length-1]}var f={arg0:Gd,arg1:a.id,ignore_case:!1};f[T.G]="_lc";Hb.push(f);var h={"if":[Hb.length-1],add:[b]};h["if"]&&(h.add||h.block)&&
Gb.push(h);Fd[a.id]=b}}
var Sd={event:function(a){var b=a[1];if(jc(b)&&!(3<a.length)){var c;if(2<a.length){if(!qa(a[2]))return;c=a[2]}var d=Id(b,c);return d}},set:function(a){var b;2==a.length&&qa(a[1])?
b=ra(a[1],void 0):3==a.length&&jc(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=ra(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},Rd=tc(function(){});var Td=!1,Ud=[];function Vd(){if(!Td){Td=!0;for(var a=0;a<Ud.length;a++)O(Ud[a])}};var Wd=[],Xd=!1,Yd=function(a){var b=a.eventCallback,c=tc(function(){ic(b)&&O(function(){b(bc.m)})}),d=a.eventTimeout;d&&B.setTimeout(c,Number(d));return c},Zd=function(){for(var a=!1;!Xd&&0<Wd.length;){Xd=!0;delete vc.eventModel;var b=Wd.shift();if(ic(b))try{b.call(yc)}catch(Kd){}else if(ia(b)){var c=b;if(jc(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=xc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(Kd){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&jc(l[0])){var m=Sd[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){Xd=!1;continue}}var n;var p=void 0,q=b,u=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(u&&Fc(p,void 0),Fc(p,q[p]));var r=q.event;if(r){var w=q["gtm.uniqueEventId"];w||(w=rc(),q["gtm.uniqueEventId"]=w,Fc("gtm.uniqueEventId",w));dc=r;var E;var Q,A,M=q,D=M.event,N=M["gtm.uniqueEventId"],I=cc.zones;A=I?I.checkState(bc.m,N):Nc;if(A.active){var K=Yd(M);c:{var G=
A.isWhitelisted;if("gtm.js"==D){if(yd){Q=!1;break c}yd=!0}var L=N,H=D;if(bd&&!(0>=ld)&&gd!==L){od();gd=L;fd="";var S=hd,Z=L,ma,wa=H;ma=0===wa.indexOf("gtm.")?encodeURIComponent(wa):"*";S[Z]="&e="+ma+"&eid="+L;jd||(jd=B.setTimeout(od,500))}var fb=Kc(G),$a={id:N,name:D,Fc:K||hc,R:fb,La:Zb(fb)};for(var Cc,Pb=$a,Nd=wd(Pb.Fc),kf=[],Qb=[],gb=0;gb<Ib.length;gb++)if(Pb.La[gb]){var lf=Ib[gb];var ub=Nd.add();try{var Od=qd(gb,kf,ub,ub,ub,Pb);Od?Qb.push(Od):(xd(gb,Pb),ub())}catch(Kd){ub()}}Nd.sc();for(var Dc=0;Dc<Qb.length;Dc++)Qb[Dc]();Cc=0<Qb.length;if("gtm.js"===D||"gtm.sync"===D)d:{}if(Cc){for(var mf={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Rb=0;Rb<$a.La.length;Rb++)if($a.La[Rb]){var Qd=Ib[Rb];if(Qd&&!mf[Qd[T.G]]){Q=!0;break c}}Q=!1}else Q=Cc}E=Q?!0:!1}else E=!1;dc=null;n=E}else n=!1;a=n||a}Xd=!1}return!a},$d=function(){var a=Zd();try{var b=B["dataLayer"].hide;if(b&&void 0!==b[bc.m]&&b.end){b[bc.m]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},ae=function(){var a=Ea("dataLayer",[]),b=Ea("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Qc.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ud.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(Wd.push.apply(Wd,b);300<this.length;)this.shift();return Zd()};Wd.push.apply(Wd,a.slice(0));
O($d)};var be={};be.xa=new String("undefined");be.Pa={};var ce=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===be.xa?b:a[d]);return c.join("")}};ce.prototype.toString=function(){return this.resolve("undefined")};ce.prototype.valueOf=ce.prototype.toString;be.Mc=function(a){return new ce(a)};var de={};be.Hd=function(a,b){var c=rc();de[c]=[a,b];return c};be.Fb=function(a){var b=a?0:1;return function(a){var c=de[a];if(c&&"function"===typeof c[b])c[b]();de[a]=void 0}};
be.pd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};be.Bd=function(a){if(a===be.xa)return a;var b=rc();be.Pa[b]=a;return'google_tag_manager["'+bc.m+'"].macro('+b+")"};be.ic=ce;var ee=new qc,fe=function(a,b){function c(a){var b=R(a),c=P(b,"protocol"),d=P(b,"host",!0),e=P(b,"port"),f=P(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function ge(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(r){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=ja(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,u=ee.get(q);u||(u=new RegExp(c,p),ee.set(q,u));n=u.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return fe(b,c)}return!1};function he(a,b,c,d){return(d||"https:"==B.location.protocol?a:b)+c}function ie(a,b){for(var c=b||(a instanceof t?new t:new x),d=a.L(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof t?(c.get(f)instanceof t||c.set(f,new t),ie(h,c.get(f))):h instanceof x?(c.get(f)instanceof x||c.set(f,new x),ie(h,c.get(f))):c.set(f,h)}}return c}function je(){return bc.m}function ke(){return(new Date).getTime()}function le(a,b){return ta(xc(a,b||2))}function me(){return dc}
function ne(a){return Ma('<a href="'+a+'"></a>')[0].href}function oe(a){return lc(sa(a))}function pe(a){return null===a?"null":void 0===a?"undefined":a.toString()}function qe(a,b){return pc(a,b)}function re(a,b,c){if(!(a instanceof t))return null;for(var d=new x,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof x&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var se=function(){var a=new Da;a.addAll(Pa());a.addAll({buildSafeUrl:he,decodeHtmlUrl:ne,copy:ie,generateUniqueNumber:rc,getContainerId:je,getCurrentTime:ke,getDataLayerValue:le,getEventName:me,makeInteger:oe,makeString:pe,randomInteger:qe,tableToMap:re});return function(b){return a.get(b)}};var te=new Ra,ue=function(){var a=data.runtime||[];Eb=function(a){return te.I(a)};Lb=ge;Qa(te,se());for(var b=0;b<a.length;b++){var c=a[b];if(!ia(c)||3>c.length){if(0==c.length)continue;break}te.I(c)}};var ve=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var we=function(a){return encodeURIComponent(a)},xe=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=P(R(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var U=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},ye=function(a,b){ra(a,b)},ze=function(a){return lc(a)},Ae=function(a,b){return ja(a,b)};var Be=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ja(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Ce=function(a){cc.hasOwnProperty("autoEventsSettings")||(cc.autoEventsSettings={});var b=cc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},De=function(a,b,c,d){var e=Ce(a),f=sc(e,b,d);e[b]=
c(f)},Ee=function(a,b,c){var d=Ce(a);return sc(d,b,c)};var Fe=/(^|\.)doubleclick\.net$/i,Ge=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,He=function(a,b,c){for(var d=String(b||C.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=oc(h[0]);if(k&&k==a){var l=oc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Ie=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=P(B.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=C.cookie,u=0;u<k.length;u++){var r=h,w=k[u],E=c;if(Fe.test(B.location.hostname)||"/"==E&&Ge.test(w))break;"none"!=k[u]&&(r+="domain="+k[u]+";");C.cookie=r;if(q!=C.cookie||0<=ja(He(a),b))break}};var Je=!1;if(C.querySelectorAll)try{var Ke=C.querySelectorAll(":root");Ke&&1==Ke.length&&Ke[0]==C.documentElement&&(Je=!0)}catch(a){}var Le=Je;var Me=function(a){for(var b=[],c=C.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var Ne=/^\w+$/,Oe=/^[\w-]+$/,Pe=/^\d+\.fls\.doubleclick\.net$/;function Qe(a){return a&&"string"==typeof a&&a.match(Ne)?a:"_gcl"}function Re(a){if(a){if("string"==typeof a){var b=Qe(a);return{ia:b,ha:b}}if(a&&"object"==typeof a)return{ia:Qe(a.dc),ha:Qe(a.aw)}}return{ia:"_gcl",ha:"_gcl"}}function Se(a){var b=R(B.location.href),c=P(b,"host",!1);if(c&&c.match(Pe)){var d=P(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Te(a){return a.filter(function(a){return Oe.test(a)})}var Ve=function(a){var b=Se("gclaw");if(b)return b.split(".");var c=Re(a);if("_gcl"==c.ha){var d=Ue();if(d&&(null==d.K||"aw.ds"==d.K))return[d.ka]}return Te(Me(c.ha+"_aw"))},We=function(a){var b=Se("gcldc");if(b)return b.split(".");var c=Re(a);if("_gcl"==c.ia){var d=Ue();if(d&&("ds"==d.K||"aw.ds"==d.K))return[d.ka]}return Te(Me(c.ia+"_dc"))};
function Ue(){var a=R(B.location.href),b=P(a,"query",!1,void 0,"gclid"),c=P(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=P(a,"fragment");b=b||Na(d,"gclid");c=c||Na(d,"gclsrc")}return void 0!==b&&b.match(Oe)?{ka:b,K:c}:null}
var Xe=function(a,b,c){var d=Re(a);c=c||"auto";b=b||"/";var e=Ue();if(null!=e){var f=(new Date).getTime(),h=new Date(f+7776E6),k=["GCL",Math.round(f/1E3),e.ka].join(".");e.K&&"aw.ds"!=e.K||Ie(d.ha+"_aw",k,b,c,h,!0);"aw.ds"!=e.K&&"ds"!=e.K||Ie(d.ia+"_dc",k,b,c,h,!0)}},Ye=function(){var a=Se("gac");if(a)return decodeURIComponent(a);for(var b=[],c=C.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({lb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=
0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].lb]||(h[b[k].lb]=[]),h[b[k].lb].push({timestamp:l[1],ka:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],u=0;u<q.length;u++)p.push(q[u].ka);p=Te(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")};var Ze;a:{Ze="G"}var $e={"":"n",UA:"u",AW:"a",DC:"d",GTM:Ze},af=function(a){var b=bc.m.split("-"),c=b[0].toUpperCase();return($e[c]||"i")+"4s"+(a&&"GTM"===c?b[1]:"")};var ff=!!B.MutationObserver,gf=void 0,hf=function(a){if(!gf){var b=function(){var a=C.body;if(a)if(ff)(new MutationObserver(function(){for(var a=0;a<gf.length;a++)O(gf[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Ha(a,"DOMNodeInserted",function(){b||(b=!0,O(function(){b=!1;for(var a=0;a<gf.length;a++)O(gf[a])}))})}};gf=[];C.body?b():O(b)}gf.push(a)};var wf="www.googletagmanager.com/gtm.js";
var xf=wf,yf=function(a,b,c,d){Ha(a,b,c,d)},zf=function(a,b){return B.setTimeout(a,b)},Af=function(a,b,c){F(a,b,c)},Bf={},Cf=function(a,b,c){var d=Bf[a];if(void 0===d){var e=function(a,b){return function(){a.status=b;for(var c=2==b?a.ac:a.Ib,d=0;d<c.length;d++)B.setTimeout(c[d],0)}};d={status:1,ac:[],Ib:[],Ld:void 0};d.ne=F(a,e(d,2),e(d,3));Bf[a]=d}0===d.status&&(d.Ld(),d.status=2);2===d.status?b&&b():3===d.status?c&&c():1===d.status&&(b&&d.ac.push(b),c&&d.Ib.push(c))},Df=function(){return B.location.href},
Ef=function(a){return P(R(a),"fragment")},V=function(a,b){return xc(a,b||2)},Ff=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return B["dataLayer"].push(a)},Gf=function(a,b){B[a]=b},W=function(a,b,c){b&&(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Hf=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},X=function(a,b,c,d){var e=!d&&"http:"==
B.location.protocol;e&&(e=2!==If());return(e?b:a)+c};
var Jf=function(a){var b=0;return b},Kf=function(a){},Lf=function(a){var b=!1;return b},Mf=function(a,b){var c;a:{if(a&&
ia(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},Nf=function(a,b,c,d){De(a,b,c,d)},Of=function(a,b,c){return Ee(a,b,c)},Pf=function(a){return!!Ee(a,"init",!1)},Qf=function(a){Ce(a).init=!0};
var If=function(){var a=xf;a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=C.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};
var Tf=function(a){var b=xf+"?id="+encodeURIComponent(a)+"&l=dataLayer",c=X("https://","http://",b);F(c,void 0,void 0)};var Vf=function(a,b,c){a instanceof be.ic&&(a=a.resolve(be.Hd(b,c)),b=hc);return{Xa:a,M:b}};var Y={a:{}};Y.a.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.b="ctv";Y.__ctv.g=!0})(function(){return"64"})}();

Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.b="sp";Y.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;Af("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=W("google_trackConversion");if(ic(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=U(a.vtp_customParams,"key","value"));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_remarketing_only:!0,
onload_callback:a.vtp_gtmOnSuccess,google_gtm:af(void 0)})||b()}else b()},b)})}();Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.b="c";Y.__c.g=!0})(function(a){return a.vtp_value})}();

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0})(function(){return dc})}();Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0})(function(a){var b=V("gtm.referrer",1)||C.referrer,c;if(b){var d;if(a.vtp_component&&"URL"!=a.vtp_component){var e=R(String(b));d=P(e,a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey)}else d=Oa(R(String(b)));c=d}else c=String(b);return c})}();
Y.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=Be(b);d.event="gtm.click";Ff(d)}}(function(a){Y.__cl=a;Y.__cl.b="cl";Y.__cl.g=!0})(function(b){if(!Pf("cl")){var c=W("document");Ha(c,"click",a,!0);Qf("cl");var d=Ee("cl","legacyTeardown",void 0);d&&d()}O(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0})(function(a){var b=V("gtm.cookie",1);return He(a.vtp_name,b,!!a.vtp_decodeCookie)[0]})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.b="r";Y.__r.g=!0})(function(a){return pc(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){(function(a){Y.__u=a;Y.__u.b="u";Y.__u.g=!0})(function(a){var b;b=(b=a.vtp_customUrlSource?a.vtp_customUrlSource:V("gtm.url",1))||Df();var c=a.vtp_component,d;if(c&&"URL"!=c){var e=R(String(b));d=P(e,c,"HOST"==c?a.vtp_stripWww:void 0,"PATH"==c?a.vtp_defaultPages:void 0,"QUERY"==c?a.vtp_queryKey:void 0)}else d=Oa(R(String(b)));return d})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0})(function(a){var b=V(a.vtp_name.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==b?b:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a;(function(a){Y.__ua=a;Y.__ua.b="ua";Y.__ua.g=!0})(function(b){var c={},d={},e={},f={},h={};if(b.vtp_gaSettings){var k=b.vtp_gaSettings;ye(U(k.vtp_fieldsToSet,"fieldName","value"),d);ye(U(k.vtp_contentGroup,"index","group"),e);ye(U(k.vtp_dimension,"index","dimension"),f);ye(U(k.vtp_metric,"index","metric"),h);b.vtp_gaSettings=null;k.vtp_fieldsToSet=void 0;k.vtp_contentGroup=void 0;k.vtp_dimension=void 0;k.vtp_metric=void 0;var l=ra(k,void 0);b=ra(b,l)}ye(U(b.vtp_fieldsToSet,
"fieldName","value"),d);ye(U(b.vtp_contentGroup,"index","group"),e);ye(U(b.vtp_dimension,"index","dimension"),f);ye(U(b.vtp_metric,"index","metric"),h);var m=Wc(b.vtp_functionName),n="",p="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(p=b.vtp_trackerName,n=p+"."):(p="gtm"+rc(),n=p+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,
cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},r=function(a){var b=[].slice.call(arguments,0);b[0]=n+b[0];m.apply(window,b)},w=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&r("set",a+c,
b[c])},Q=function(){},A=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&q[e]||!c&&void 0===q[e])){var f=u[e]?
mc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},M={name:p};A(d,M,!0);m("create",b.vtp_trackingId||c.trackingId,M);r("set","&gtm",af(!0));(function(a,c){void 0!==b[c]&&r("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",e);E("dimension",f);E("metric",h);var D={};A(d,D,!1)&&r("set",D);var N;
b.vtp_enableLinkId&&r("require","linkid","linkid.js");r("set","hitCallback",function(){var a=d&&d.hitCallback;ic(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(r("require","ec","ec.js"),Q());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:w(String,b.vtp_eventLabel||c.label),eventValue:w(ze,b.vtp_eventValue||
c.value)};A(N,I,!1);r("send",I);}else if("TRACK_SOCIAL"==b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==
b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==b.vtp_trackType){}else{b.vtp_enableEcommerce&&(r("require","ec","ec.js"),Q());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");r("require","displayfeatures",void 0,{cookieName:ma})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&(ma="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),r("require","adfeatures",{cookieName:ma}));N?r("send","pageview",N):r("send","pageview");}if(!a){var wa=
b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&(wa="internal/"+wa);a=!0;Cf(X("https:","http:","//www.google-analytics.com/"+wa,d&&d.forceSSL),function(){var a=Vc();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}})}();Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.b="cid";Y.__cid.g=!0})(function(){return bc.m})}();
Y.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=V(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue};(function(a){Y.__aev=
a;Y.__aev.b="aev";Y.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TEXT":var h,l=V("gtm.element",1),m=V("event",1),n=Number(new Date);a===l&&b===m&&c>n-250?h=d:(d=h=l?La(l):"",a=l,b=m);c=n;return h||e.vtp_defaultValue;case "URL":var p=String(V("gtm.elementUrl",1)||e.vtp_defaultValue||""),q=R(p);return e.vtp_component&&"URL"!=e.vtp_component?P(q,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey):p;case "ATTRIBUTE":var u;if(void 0===e.vtp_attribute)u=f(e);else{var r=V("gtm.element",
1);u=Ja(r,e.vtp_attribute)||e.vtp_defaultValue||""}return u;default:return f(e)}})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=W("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(b){return function(){d();a=!1;var c=Bf[b];c&&3==c.status&&(Bf[b]=void 0)}},f=function(){return function(){d();b={push:c};}};(function(a){Y.__awct=a;Y.__awct.b="awct";Y.__awct.g=!0})(function(c){var d={google_conversion_domain:"",
google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:af(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?
(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,Cf("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))})}();
Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0})(function(a){var b=a.vtp_input,c=U(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();


Y.a.hid=["google"],function(){(function(a){Y.__hid=a;Y.__hid.b="hid";Y.__hid.g=!0})(function(){return be.xa})}();
Y.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Fa(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){O(h)}}};var b=function(a,b,c){Tc(function(){var d,e=cc;e.postscribe||(e.postscribe=ac);d=e.postscribe;var f={done:b},m=C.createElement("div");m.style.display="none";m.style.visibility="hidden";C.body.appendChild(m);try{d(m,a,f)}catch(n){O(c)}})};var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,f=Vf(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Xa,k=f.M;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Ma(h),k,e)()}else zf(function(){c(d)},200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0}();

Y.a.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.b="dbg";Y.__dbg.g=!0})(function(){return!1})}();



var Wf={macro:function(a){if(be.Pa.hasOwnProperty(a))return be.Pa[a]}};Wf.dataLayer=yc;Wf.onHtmlSuccess=be.Fb(!0);Wf.onHtmlFailure=be.Fb(!1);Wf.callback=function(a){fc.hasOwnProperty(a)&&ic(fc[a])&&fc[a]();delete fc[a]};Wf.yc=function(){cc[bc.m]=Wf;gc=Y.a;Mb=Mb||be;Nb=Lc};
Wf.ld=function(){cc=B.google_tag_manager=B.google_tag_manager||{};if(cc[bc.m]){var a=cc.zones;a&&a.unregisterChild(bc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Fb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Ib.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Hb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Gb.push(p)}Kb=Y;ue();Wf.yc();ae();Oc=!1;Pc=0;if("interactive"==
C.readyState&&!C.createEventObject||"complete"==C.readyState)Rc();else{Ha(C,"DOMContentLoaded",Rc);Ha(C,"readystatechange",Rc);if(C.createEventObject&&C.documentElement.doScroll){var u=!0;try{u=!B.frameElement}catch(w){}u&&Sc()}Ha(B,"load",Rc)}Td=!1;"complete"===C.readyState?Vd():Ha(B,"load",Vd);a:{
if(!bd)break a;dd();kd=2;gd=void 0;hd={};ed={};jd=void 0;id={};fd="";B.setInterval(dd,864E5);B.setInterval(md,1E3);}}};Wf.ld();

})()
