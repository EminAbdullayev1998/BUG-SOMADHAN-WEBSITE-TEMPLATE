

// =================================== AYRI - AYRI  ARRAYLAR ILE =======================================================

const langNav = document.querySelectorAll("a");
const langH3 = document.querySelector("h3");
const langSec1P1 = document.querySelector('.sec1p1');
const langSec1P2 = document.querySelector('.sec1p2');
const langBox1P1 = document.querySelector('.box1p');
const langBox1H5 = document.querySelector('.box1h5');
const langBox2P2 = document.querySelector('.box2p');
const langBox3P3 = document.querySelector('.box3p');
const langBox4P4 = document.querySelector('.box4p');
const langBox5P5 = document.querySelector('.box5p');
const langBox6P6 = document.querySelector('.box6p');
const langSec3P1 = document.querySelector('.sec3p');
const langSec3H1 = document.querySelector('.sec3h');
const langSec3H3 = document.querySelector('.sec3h3');
const langSec3Span = document.querySelector('.sec3span');
const langSec3Btn = document.querySelector('.sec3btn');
const langFooterP1 = document.querySelector('.footerp');
const langFootBox2H4 = document.querySelector('.footbox2H4');
const langFootBox2A = document.querySelectorAll('.navlink');
const langFootBox3H4 = document.querySelector('.footbox3h4');
const langFootBox3A = document.querySelector('.footbox3A');
const langFootBox3A1 = document.querySelector('.footbox3A1');
const langFootBox3A2 = document.querySelector('.footbox3A2');
const langFootBox4H4 = document.querySelector('.footbox4h4');
const langFootAltP = document.querySelector('.footAltP');
const langBtn = document.querySelector(".langBtn");


let az = ["Ev","Sehifeler","Haqqimizda","Xidmetler","Meqale","Komanda","Elaqe"];
let en = ["Home","Pages","About","Services","Blog","Team","Contact"];

let secOneH3Az = ["BIZIM XIDMETLER"];
let secOneH3En = ["OUR SERVICES"];

let sec1P1Az = ["Ev"];
let sec1P1En = ["HOME"];

let sec1P2Az = ["Xidmetler"];
let sec1P2En = ["SERVICES"];

let box1P1Az = ["Here işin bir qulpundan tutanda baxirsan ki, həqiqətən ortaya nese çixir."];
let box1P1En = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."];

let box1H5Az = ["Biznes Məsləhətçisi"];
let box1H5En = ["Business Consultant"];

let box2P2Az = ["Here işin bir qulpundan tutanda baxirsan ki, həqiqətən ortaya nese çixir."];
let box2P2En = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."];

let box3P3Az = ["Here işin bir qulpundan tutanda baxirsan ki, həqiqətən ortaya nese çixir."];
let box3P3En = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."];

let box4P4Az = ["Here işin bir qulpundan tutanda baxirsan ki, həqiqətən ortaya nese çixir."];
let box4P4En = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."];

let box5P5Az = ["Here işin bir qulpundan tutanda baxirsan ki, həqiqətən ortaya nese çixir."];
let box5P5En = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."];

let box6P6Az = ["Here işin bir qulpundan tutanda baxirsan ki, həqiqətən ortaya nese çixir."];
let box6P6En = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe."];

let sec3P1Az = ["Here işin bir qulpundan tutanda baxirsan ki, həqiqətən ortaya nese çixir."];
let sec3P1En = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti commodi ab, ex inventore unde."];

let sec3H1Az = ["Xeberler ve Yenilenme alin"];
let sec3H1En = ["GET NEWS AND UPDATE"];

let sec3H3Az = ["BURADAN ABUNE OL "];
let sec3H3En = ["SUBSCRIBE HERE"];

let sec3BtnAz = ["ABUNE OL"];
let sec3BtnEn = ["SUBSCRIBE"];

let footerP1Az = ["Here işin bir qulpundan tutanda baxirsan ki, həqiqətən ortaya nese çixir"];
let footerP1En = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis ab iure nihil quidem. Aperiam nobis rerum facere illo asperiores."];

let footBox2H4Az = ["Tez Keçidler"];
let footBox2H4En = ["QUICK LINK"];

let footBox2AAz = ["Seo Xidmetleri","Virtual Marketinq","Mezmun Meneceri","Sosyal Medya","Qara papaq seo"];
let footBox2AEn = ["Seo Services","Virtual Marketing","Content Manage","Social Media","Black hat Seo"];

let footBox3H4Az = ["SON YAZILAR"];
let footBox3H4En = ["RECENT POSTS"];

let footBox3AAz = ["Başqa bir heyrətamiz blog yazısı"];
let footBox3AEn = ["Just another amazing blog post"];

let footBox3A1Az = ["Başqa bir heyrətamiz blog yazısı"];
let footBox3A1En = ["Just another amazing blog post"];

let footBox3A2Az = ["Başqa bir heyrətamiz blog yazısı"];
let footBox3A2En = ["Just another amazing blog post"];

let footBox4H4Az = ["Instagram Yazilari"];
let footBox4H4En = ["Instagram Posts"];

let footAltPAz = ["Bug somadhan © 2022. Tüm hüquqlar qorunur"];
let footAltPEn = ["Bug somadhan © 2022. All rights reserved"];



const multiNav = ()=>{
    if (langBtn.innerHTML == "AZ") {
        for (let index = 0; index < az.length; index++) {
            langNav[index].innerHTML = az[index];
            langBtn.innerHTML = "EN";
        }
        langH3.innerHTML = secOneH3Az;
        langSec1P1.innerHTML = sec1P1Az;
        langSec1P2.innerHTML = sec1P2Az;
        langBox1P1.innerHTML = box1P1Az;
        langBox1H5.innerHTML = box1H5Az;
        langBox2P2.innerHTML = box2P2Az;
        langBox3P3.innerHTML = box3P3Az;
        langBox4P4.innerHTML = box4P4Az;
        langBox5P5.innerHTML = box5P5Az;
        langBox6P6.innerHTML = box6P6Az;
        langSec3P1.innerHTML = sec3P1Az;
        langSec3H1.innerHTML = sec3H1Az;
        langSec3H3.innerHTML = sec3H3Az;
        langSec3Btn.innerHTML = sec3BtnAz;
        langFooterP1.innerHTML = footerP1Az;
        langFootBox2H4.innerHTML = footBox2H4Az;
        langFootBox3H4.innerHTML = footBox3H4Az;
        langFootBox3A.innerHTML = footBox3AAz;
        langFootBox3A1.innerHTML = footBox3A1Az;
        langFootBox3A2.innerHTML = footBox3A2Az;
        langFootBox4H4.innerHTML = footBox4H4Az;
        langFootAltP.innerHTML = footAltPAz;
        for (let index = 0; index < footBox2AAz.length; index++) {
            langFootBox2A[index].innerHTML = footBox2AAz[index];
            langBtn.innerHTML = "EN";
        }
    }else{
        for (let index = 0; index < en.length; index++) {
            langNav[index].innerHTML = en[index];
            langBtn.innerHTML = "AZ";        
        }
        langH3.innerHTML = secOneH3En;
        langSec1P1.innerHTML = sec1P1En;
        langSec1P2.innerHTML = sec1P2En;
        langBox1P1.innerHTML = box1P1En;
        langBox1H5.innerHTML = box1H5En;
        langBox2P2.innerHTML = box2P2En;
        langBox3P3.innerHTML = box3P3En;
        langBox4P4.innerHTML = box4P4En;
        langBox5P5.innerHTML = box5P5En;
        langBox6P6.innerHTML = box6P6En;
        langSec3P1.innerHTML = sec3P1En;
        langSec3H1.innerHTML = sec3H1En;
        langSec3H3.innerHTML = sec3H3En;
        langSec3Btn.innerHTML = sec3BtnEn;
        langFooterP1.innerHTML = footerP1En;
        langFootBox2H4.innerHTML = footBox2H4En;
        langFootBox3H4.innerHTML = footBox3H4En;
        langFootBox3A.innerHTML = footBox3AEn;
        langFootBox3A1.innerHTML = footBox3A1En;
        langFootBox3A2.innerHTML = footBox3A2En;
        langFootBox4H4.innerHTML = footBox4H4En;
        langFootAltP.innerHTML = footAltPEn;
        for (let index = 0; index < footBox2AEn.length; index++) {
            langFootBox2A[index].innerHTML = footBox2AEn[index];
            langBtn.innerHTML = "AZ";
        }
    }
};



langBtn.onclick = multiNav;
























// =====================================  BIR DEFELIK ARRAYLAR ILE =============================================================



// const langNav = document.querySelectorAll("a");
// const langP = document.querySelectorAll('.multiLangP');
// const langH1 = document.querySelector('h1');
// const langH3 = document.querySelectorAll('h3')[1];
// const langBtn = document.querySelector(".langBtn");



// let az = ["Ev","Sehifeler","Haqqimizda","Xidmetler","Meqale","Komanda","Elaqe","Seo Xidmetleri","Virtual Marketinq","Mezmun Meneceri","Sosyal Medya","Qara papaq seo","Başqa bir heyrətamiz blog yazısı","Başqa bir heyrətamiz blog yazısı","Başqa bir heyrətamiz blog yazısı"];
// let en = ["Home","Pages","About","Services","Blog","Team","Contact","Seo Services","Virtual Marketing","Content Manage","Social Media","Black hat Seo","Just another amazing blog post","Just another amazing blog post","Just another amazing blog post"];


// let langAllPAz = ["Here işin bir qulpundan tutanda baxirsan ki, həqiqətən ortaya nese çixir.",
//                    "Azərbaycan sözünün mənşəyi mövzusunda fərqli tarixi mənbələrlərdən əldə olunmuş müxtəlif məlumatlar var.",
//                    "Azərbaycan xalqı təqribən 5 min illik dövlətçilik tarixinə malikdir.",
//                    "Nadir şahın ölümündən sonra onun idarə etdiyi geniş ərazili imperiya süquta uğradı.",
//                    "Azərbaycan xırda dövlətlərə — xanlıqlara və sultanlıqlara parçalandı.",
//                    "Hələ Nadir şahın sağlığında ikən azadlıq mübarizəsinə qalxan və müstəqilliyə can atan.",
//                    "Azərbaycan iki böyük dövlət arasında qanlı müharibələr meydanına çevrildi.",
//                    "Bununla, Azərbaycan torpaqlarında gələcək erməni dövlətinin əsası qoyuldu.",
//                    "Bug somadhan © 2022. Tüm hüquqlar qorunur",
//                 ];
// let langAllPEn = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.",
//                   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.",
//                   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe",
//                   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.",
//                   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.",
//                   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, saepe.",
//                   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti commodi ab, ex inventore unde.",
//                   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis ab iure nihil quidem. Aperiam nobis rerum facere illo asperiores.",
//                   "Bug somadhan © 2022. All rights reserved",
//                 ];


// let langH1Az = ["XƏBƏRLƏR VƏ YENİLƏNMƏLƏR HAQQINDA MƏLUMAT AL"];
// let langH1En = ["GET NEWS AND UPDATE"];

// let langH3Az = ["Buradan Abunə olun"];
// let langH3En = ["Subscribe Here"];



// const multiLang = ()=>{
//     if (langBtn.innerHTML == "AZ") {
//         for (let index = 0; index < az.length; index++) {
//             langNav[index].innerHTML = az[index];
//             langBtn.innerHTML = "EN";
//         };
        
//         for (let index = 0; index < langAllPAz.length; index++) {
//             langP[index].innerHTML = langAllPAz[index];
//         };

//         langH1.innerHTML = langH1Az;
//         langH3.innerHTML = langH3Az;
//     }else{
//         for (let index = 0; index < en.length; index++) {
//             langNav[index].innerHTML = en[index];
//             langBtn.innerHTML = "AZ";
//         };

//         for (let index = 0; index < langAllPEn.length; index++) {
//             langP[index].innerHTML = langAllPEn[index];
//         };

//         langH1.innerHTML = langH1En;
//         langH3.innerHTML = langH3En;
//     }
// }


// langBtn.onclick = multiLang;






