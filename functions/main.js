window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

$('.navbar a').on('click', function (e) {
   if (this.hash !== '') {
     e.preventDefault();

     const hash = this.hash;

     $('html, body')
       .animate({
         scrollTop: $(hash).offset().top
       },800);
   }
 });

 $(function(){
  var flag=0;

  $('.share').on('click',function(){
   if(flag == 0)
    {
      $(this).siblings('.one').animate({
      top:'160px',
      left:'50%',
    },200);

     $(this).siblings('.two').delay(200).animate({
      top:'260px',
      left:'40%'
    },200);

     $(this).siblings('.three').delay(300).animate({
      top:'260px',
      left:'60%'
    },200);

    $('.one i,.two i, .three i').delay(500).fadeIn(200);
      flag = 1;
    }

  else{
    $('.one, .two, .three').animate({
        top:'300px',
        left:'50%'
      },200);

  $('.one i,.two i, .three i').delay(500).fadeOut(200);
      flag = 0;
    }
  });
});

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

var countries = "Afghanistan;Akrotiri;Albania;Algeria;American Samoa;Andorra;Angola;Anguilla;Antarctica;Antigua and Barbuda;Argentina;Armenia;Aruba;Ashmore and Cartier Islands;Australia;Austria;Azerbaijan;Bahamas, The;Bahrain;Bangladesh;Barbados;Bassas da India;Belarus;Belgium;Belize;Benin;Bermuda;Bhutan;Bolivia;Bosnia and Herzegovina;Botswana;Bouvet Island;Brazil;British Indian Ocean Territory;British Virgin Islands;Brunei;Bulgaria;Burkina Faso;Burma;Burundi;Cambodia;Cameroon;Canada;Cape Verde;Cayman Islands;Central African Republic;Chad;Chile;China;Christmas Island;Clipperton Island;Cocos (Keeling) Islands;Colombia;Comoros;Congo, Democratic Republic of the;Congo, Republic of the;Cook Islands;Coral Sea Islands;Costa Rica;Cote d'Ivoire;Croatia;Cuba;Cyprus;Czech Republic;Denmark;Dhekelia;Djibouti;Dominica;Dominican Republic;Ecuador;Egypt;El Salvador;Equatorial Guinea;Eritrea;Estonia;Ethiopia;Europa Island;Falkland Islands (Islas Malvinas);Faroe Islands;Fiji;Finland;France;French Guiana;French Polynesia;French Southern and Antarctic Lands;Gabon;Gambia, The;Gaza Strip;Georgia;Germany;Ghana;Gibraltar;Glorioso Islands;Greece;Greenland;Grenada;Guadeloupe;Guam;Guatemala;Guernsey;Guinea;Guinea-Bissau;Guyana;Haiti;Heard Island and McDonald Islands;Holy See (Vatican City);Honduras;Hong Kong;Hungary;Iceland;India;Indonesia;Iran;Iraq;Ireland;Isle of Man;Israel;Italy;Jamaica;Jan Mayen;Japan;Jersey;Jordan;Juan de Nova Island;Kazakhstan;Kenya;Kiribati;Korea, North;Korea, South;Kuwait;Kyrgyzstan;Laos;Latvia;Lebanon;Lesotho;Liberia;Libya;Liechtenstein;Lithuania;Luxembourg;Macau;Macedonia;Madagascar;Malawi;Malaysia;Maldives;Mali;Malta;Marshall Islands;Martinique;Mauritania;Mauritius;Mayotte;Mexico;Micronesia, Federated States of;Moldova;Monaco;Mongolia;Montserrat;Morocco;Mozambique;Namibia;Nauru;Navassa Island;Nepal;Netherlands;Netherlands Antilles;New Caledonia;New Zealand;Nicaragua;Niger;Nigeria;Niue;Norfolk Island;Northern Mariana Islands;Norway;Oman;Pakistan;Palau;Panama;Papua New Guinea;Paracel Islands;Paraguay;Peru;Philippines;Pitcairn Islands;Poland;Portugal;Puerto Rico;Qatar;Reunion;Romania;Russia;Rwanda;Saint Helena;Saint Kitts and Nevis;Saint Lucia;Saint Pierre and Miquelon;Saint Vincent and the Grenadines;Samoa;San Marino;Sao Tome and Principe;Saudi Arabia;Senegal;Serbia and Montenegro;Seychelles;Sierra Leone;Singapore;Slovakia;Slovenia;Solomon Islands;Somalia;South Africa;South Georgia and the South Sandwich Islands;Spain;Spratly Islands;Sri Lanka;Sudan;Suriname;Svalbard;Swaziland;Sweden;Switzerland;Syria;Taiwan;Tajikistan;Tanzania;Thailand;Timor-Leste;Togo;Tokelau;Tonga;Trinidad and Tobago;Tromelin Island;Tunisia;Turkey;Turkmenistan;Turks and Caicos Islands;Tuvalu;Uganda;Ukraine;United Arab Emirates;United Kingdom;United States;Uruguay;Uzbekistan;Vanuatu;Venezuela;Vietnam;Virgin Islands;Wake Island;Wallis and Futuna;West Bank;Western Sahara;Yemen;Zambia;Zimbabwe";
var target = document.getElementById('country');
countries.split(';').forEach((country) => {
    target.innerHTML += `<option value="${country}">${country}</option>`;
});
