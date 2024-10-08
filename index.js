  import express from "express";
  import bodyParser from "body-parser";
  import serverless from "serverless-http"
  import path from 'path';
  // import { __dirname } from './helpers.js'; // Import the helper function
  import { fileURLToPath } from 'url';
  import { dirname } from 'path';

  // Helper to get __dirname
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const app = express();


  

  let quiz = [
    { country: "Afghanistan", capital: "Kabul" },
    { country: "Aland Islands", capital: "Mariehamn" },
    { country: "Albania", capital: "Tirana" },
    { country: "Algeria", capital: "Algiers" },
    { country: "American Samoa", capital: "Pago Pago" },
    { country: "Andorra", capital: "Andorra la Vella" },
    { country: "Angola", capital: "Luanda" },
    { country: "Anguilla", capital: "The Valley" },
    { country: "Antarctica", capital: "" },
    { country: "Antigua And Barbuda", capital: "St. John's" },
    { country: "Argentina", capital: "Buenos Aires" },
    { country: "Armenia", capital: "Yerevan" },
    { country: "Aruba", capital: "Oranjestad" },
    { country: "Australia", capital: "Canberra" },
    { country: "Austria", capital: "Vienna" },
    { country: "Azerbaijan", capital: "Baku" },
    { country: "Bahrain", capital: "Manama" },
    { country: "Bangladesh", capital: "Dhaka" },
    { country: "Barbados", capital: "Bridgetown" },
    { country: "Belarus", capital: "Minsk" },
    { country: "Belgium", capital: "Brussels" },
    { country: "Belize", capital: "Belmopan" },
    { country: "Benin", capital: "Porto-Novo" },
    { country: "Bermuda", capital: "Hamilton" },
    { country: "Bhutan", capital: "Thimphu" },
    { country: "Bolivia", capital: "Sucre" },
    { country: "Bonaire, Sint Eustatius and Saba", capital: "Kralendijk" },
    { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
    { country: "Botswana", capital: "Gaborone" },
    { country: "Bouvet Island", capital: "" },
    { country: "Brazil", capital: "Brasilia" },
    { country: "British Indian Ocean Territory", capital: "Diego Garcia" },
    { country: "Brunei", capital: "Bandar Seri Begawan" },
    { country: "Bulgaria", capital: "Sofia" },
    { country: "Burkina Faso", capital: "Ouagadougou" },
    { country: "Burundi", capital: "Bujumbura" },
    { country: "Cambodia", capital: "Phnom Penh" },
    { country: "Cameroon", capital: "Yaounde" },
    { country: "Canada", capital: "Ottawa" },
    { country: "Cape Verde", capital: "Praia" },
    { country: "Cayman Islands", capital: "George Town" },
    { country: "Central African Republic", capital: "Bangui" },
    { country: "Chad", capital: "N'Djamena" },
    { country: "Chile", capital: "Santiago" },
    { country: "China", capital: "Beijing" },
    { country: "Christmas Island", capital: "Flying Fish Cove" },
    { country: "Cocos (Keeling) Islands", capital: "West Island" },
    { country: "Colombia", capital: "Bogotá" },
    { country: "Comoros", capital: "Moroni" },
    { country: "Congo", capital: "Brazzaville" },
    { country: "Cook Islands", capital: "Avarua" },
    { country: "Costa Rica", capital: "San Jose" },
    { country: "Cote D'Ivoire (Ivory Coast)", capital: "Yamoussoukro" },
    { country: "Croatia", capital: "Zagreb" },
    { country: "Cuba", capital: "Havana" },
    { country: "Curaçao", capital: "Willemstad" },
    { country: "Cyprus", capital: "Nicosia" },
    { country: "Czech Republic", capital: "Prague" },
    { country: "Democratic Republic of the Congo", capital: "Kinshasa" },
    { country: "Denmark", capital: "Copenhagen" },
    { country: "Djibouti", capital: "Djibouti" },
    { country: "Dominica", capital: "Roseau" },
    { country: "Dominican Republic", capital: "Santo Domingo" },
    { country: "East Timor", capital: "Dili" },
    { country: "Ecuador", capital: "Quito" },
    { country: "Egypt", capital: "Cairo" },
    { country: "El Salvador", capital: "San Salvador" },
    { country: "Equatorial Guinea", capital: "Malabo" },
    { country: "Eritrea", capital: "Asmara" },
    { country: "Estonia", capital: "Tallinn" },
    { country: "Ethiopia", capital: "Addis Ababa" },
    { country: "Falkland Islands", capital: "Stanley" },
    { country: "Faroe Islands", capital: "Torshavn" },
    { country: "Fiji Islands", capital: "Suva" },
    { country: "Finland", capital: "Helsinki" },
    { country: "France", capital: "Paris" },
    { country: "French Guiana", capital: "Cayenne" },
    { country: "French Polynesia", capital: "Papeete" },
    { country: "French Southern Territories", capital: "Port-aux-Francais" },
    { country: "Gabon", capital: "Libreville" },
    { country: "Gambia The", capital: "Banjul" },
    { country: "Georgia", capital: "Tbilisi" },
    { country: "Germany", capital: "Berlin" },
    { country: "Ghana", capital: "Accra" },
    { country: "Gibraltar", capital: "Gibraltar" },
    { country: "Greece", capital: "Athens" },
    { country: "Greenland", capital: "Nuuk" },
    { country: "Grenada", capital: "St. George's" },
    { country: "Guadeloupe", capital: "Basse-Terre" },
    { country: "Guam", capital: "Hagatna" },
    { country: "Guatemala", capital: "Guatemala City" },
    { country: "Guernsey and Alderney", capital: "St Peter Port" },
    { country: "Guinea", capital: "Conakry" },
    { country: "Guinea-Bissau", capital: "Bissau" },
    { country: "Guyana", capital: "Georgetown" },
    { country: "Haiti", capital: "Port-au-Prince" },
    { country: "Heard Island and McDonald Islands", capital: "" },
    { country: "Honduras", capital: "Tegucigalpa" },
    { country: "Hong Kong S.A.R.", capital: "Hong Kong" },
    { country: "Hungary", capital: "Budapest" },
    { country: "Iceland", capital: "Reykjavik" },
    { country: "India", capital: "New Delhi" },
    { country: "Indonesia", capital: "Jakarta" },
    { country: "Iran", capital: "Tehran" },
    { country: "Iraq", capital: "Baghdad" },
    { country: "Ireland", capital: "Dublin" },
    { country: "Israel", capital: "Jerusalem" },
    { country: "Italy", capital: "Rome" },
    { country: "Jamaica", capital: "Kingston" },
    { country: "Japan", capital: "Tokyo" },
    { country: "Jersey", capital: "Saint Helier" },
    { country: "Jordan", capital: "Amman" },
    { country: "Kazakhstan", capital: "Astana" },
    { country: "Kenya", capital: "Nairobi" },
    { country: "Kiribati", capital: "Tarawa" },
    { country: "Kosovo", capital: "Pristina" },
    { country: "Kuwait", capital: "Kuwait City" },
    { country: "Kyrgyzstan", capital: "Bishkek" },
    { country: "Laos", capital: "Vientiane" },
    { country: "Latvia", capital: "Riga" },
    { country: "Lebanon", capital: "Beirut" },
    { country: "Lesotho", capital: "Maseru" },
    { country: "Liberia", capital: "Monrovia" },
    { country: "Libya", capital: "Tripolis" },
    { country: "Liechtenstein", capital: "Vaduz" },
    { country: "Lithuania", capital: "Vilnius" },
    { country: "Luxembourg", capital: "Luxembourg" },
    { country: "Macau S.A.R.", capital: "Macao" },
    { country: "Madagascar", capital: "Antananarivo" },
    { country: "Malawi", capital: "Lilongwe" },
    { country: "Malaysia", capital: "Kuala Lumpur" },
    { country: "Maldives", capital: "Male" },
    { country: "Mali", capital: "Bamako" },
    { country: "Malta", capital: "Valletta" },
    { country: "Man (Isle of)", capital: "Douglas, Isle of Man" },
    { country: "Marshall Islands", capital: "Majuro" },
    { country: "Martinique", capital: "Fort-de-France" },
    { country: "Mauritania", capital: "Nouakchott" },
    { country: "Mauritius", capital: "Port Louis" },
    { country: "Mayotte", capital: "Mamoudzou" },
    { country: "Mexico", capital: "Ciudad de México" },
    { country: "Micronesia", capital: "Palikir" },
    { country: "Moldova", capital: "Chisinau" },
    { country: "Monaco", capital: "Monaco" },
    { country: "Mongolia", capital: "Ulan Bator" },
    { country: "Montenegro", capital: "Podgorica" },
    { country: "Montserrat", capital: "Plymouth" },
    { country: "Morocco", capital: "Rabat" },
    { country: "Mozambique", capital: "Maputo" },
    { country: "Myanmar", capital: "Nay Pyi Taw" },
    { country: "Namibia", capital: "Windhoek" },
    { country: "Nauru", capital: "Yaren" },
    { country: "Nepal", capital: "Kathmandu" },
    { country: "Netherlands", capital: "Amsterdam" },
    { country: "New Caledonia", capital: "Noumea" },
    { country: "New Zealand", capital: "Wellington" },
    { country: "Nicaragua", capital: "Managua" },
    { country: "Niger", capital: "Niamey" },
    { country: "Nigeria", capital: "Abuja" },
    { country: "Niue", capital: "Alofi" },
    { country: "Norfolk Island", capital: "Kingston" },
    { country: "North Korea", capital: "Pyongyang" },
    { country: "North Macedonia", capital: "Skopje" },
    { country: "Northern Mariana Islands", capital: "Saipan" },
    { country: "Norway", capital: "Oslo" },
    { country: "Oman", capital: "Muscat" },
    { country: "Pakistan", capital: "Islamabad" },
    { country: "Palau", capital: "Melekeok" },
    { country: "Palestinian Territory Occupied", capital: "East Jerusalem" },
    { country: "Panama", capital: "Panama City" },
    { country: "Papua new Guinea", capital: "Port Moresby" },
    { country: "Paraguay", capital: "Asuncion" },
    { country: "Peru", capital: "Lima" },
    { country: "Philippines", capital: "Manila" },
    { country: "Pitcairn Island", capital: "Adamstown" },
    { country: "Poland", capital: "Warsaw" },
    { country: "Portugal", capital: "Lisbon" },
    { country: "Puerto Rico", capital: "San Juan" },
    { country: "Qatar", capital: "Doha" },
    { country: "Reunion", capital: "Saint-Denis" },
    { country: "Romania", capital: "Bucharest" },
    { country: "Russia", capital: "Moscow" },
    { country: "Rwanda", capital: "Kigali" },
    { country: "Saint Helena", capital: "Jamestown" },
    { country: "Saint Kitts And Nevis", capital: "Basseterre" },
    { country: "Saint Lucia", capital: "Castries" },
    { country: "Saint Pierre and Miquelon", capital: "Saint-Pierre" },
    { country: "Saint Vincent And The Grenadines", capital: "Kingstown" },
    { country: "Saint-Barthelemy", capital: "Gustavia" },
    { country: "Saint-Martin (French part)", capital: "Marigot" },
    { country: "Samoa", capital: "Apia" },
    { country: "San Marino", capital: "San Marino" },
    { country: "Sao Tome and Principe", capital: "Sao Tome" },
    { country: "Saudi Arabia", capital: "Riyadh" },
    { country: "Senegal", capital: "Dakar" },
    { country: "Serbia", capital: "Belgrade" },
    { country: "Seychelles", capital: "Victoria" },
    { country: "Sierra Leone", capital: "Freetown" },
    { country: "Singapore", capital: "Singapur" },
    { country: "Sint Maarten (Dutch part)", capital: "Philipsburg" },
    { country: "Slovakia", capital: "Bratislava" },
    { country: "Slovenia", capital: "Ljubljana" },
    { country: "Solomon Islands", capital: "Honiara" },
    { country: "Somalia", capital: "Mogadishu" },
    { country: "South Africa", capital: "Pretoria" },
    { country: "South Georgia", capital: "Grytviken" },
    { country: "South Korea", capital: "Seoul" },
    { country: "South Sudan", capital: "Juba" },
    { country: "Spain", capital: "Madrid" },
    { country: "Sri Lanka", capital: "Colombo" },
    { country: "Sudan", capital: "Khartoum" },
    { country: "Suriname", capital: "Paramaribo" },
    { country: "Svalbard And Jan Mayen Islands", capital: "Longyearbyen" },
    { country: "Swaziland", capital: "Mbabane" },
    { country: "Sweden", capital: "Stockholm" },
    { country: "Switzerland", capital: "Bern" },
    { country: "Syria", capital: "Damascus" },
    { country: "Taiwan", capital: "Taipei" },
    { country: "Tajikistan", capital: "Dushanbe" },
    { country: "Tanzania", capital: "Dodoma" },
    { country: "Thailand", capital: "Bangkok" },
    { country: "The Bahamas", capital: "Nassau" },
    { country: "Togo", capital: "Lome" },
    { country: "Tokelau", capital: "" },
    { country: "Tonga", capital: "Nuku'alofa" },
    { country: "Trinidad And Tobago", capital: "Port of Spain" },
    { country: "Tunisia", capital: "Tunis" },
    { country: "Turkey", capital: "Ankara" },
    { country: "Turkmenistan", capital: "Ashgabat" },
    { country: "Turks And Caicos Islands", capital: "Cockburn Town" },
    { country: "Tuvalu", capital: "Funafuti" },
    { country: "Uganda", capital: "Kampala" },
    { country: "Ukraine", capital: "Kyiv" },
    { country: "United Arab Emirates", capital: "Abu Dhabi" },
    { country: "United Kingdom", capital: "London" },
    { country: "United States", capital: "Washington" },
    { country: "United States Minor Outlying Islands", capital: "" },
    { country: "Uruguay", capital: "Montevideo" },
    { country: "Uzbekistan", capital: "Tashkent" },
    { country: "Vanuatu", capital: "Port Vila" },
    { country: "Vatican City State (Holy See)", capital: "Vatican City" },
    { country: "Venezuela", capital: "Caracas" },
    { country: "Vietnam", capital: "Hanoi" },
    { country: "Virgin Islands (British)", capital: "Road Town" },
    { country: "Virgin Islands (US)", capital: "Charlotte Amalie" },
    { country: "Wallis And Futuna Islands", capital: "Mata Utu" },
    { country: "Western Sahara", capital: "El-Aaiun" },
    { country: "Yemen", capital: "Sanaa" },
    { country: "Zambia", capital: "Lusaka" },
    { country: "Zimbabwe", capital: "Harare" },
  ];
  

  let totalCorrect = 0;

  // Middleware
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"));

  // Middleware
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
 




  let currentQuestion = {};

  // GET home page
  app.get("/", async (req, res) => {
    totalCorrect = 0;
    await nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
  });

  // POST a new post
  app.post("/submit", (req, res) => {
    let answer = req.body.answer.trim();
    let isCorrect = false;
    if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
      totalCorrect++;
      console.log(totalCorrect);
      isCorrect = true;
    }

    nextQuestion();
    res.render("index.ejs", {
      question: currentQuestion,
      wasCorrect: isCorrect,
      totalScore: totalCorrect,
    });
  });

  async function nextQuestion() {
    const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

    currentQuestion = randomCountry;
  }

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  export default serverless(app);
