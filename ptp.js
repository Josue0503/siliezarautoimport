// ptp.js - Tarifas Port to Port International (100% de datos)
const CONFIG_PTP = {
    bl: 23.00, //
    tramitador: 100.00,
    pe: 43.00
};

const fleteMatrizPTP = {
    "Texas": {
        pequeno: 1050,  // Sedan Hasta 15'
        especial: 1075, // Sedan Excep. 16' / SUV 15'
        mediano: 1335,  // SUV Excep. 16' / Pickup Sencillo 16'
        grande: 1405,   // Pickup Xcab/Mini Van 17'
        extra: 1525,    // 17'1" a 17'3"
        extra2: 1680,   // 17'4" a 18'11"
        moto: 475       // Moto en Piso Hasta 7'
    },
    "Florida": {
        pequeno: 830,   // Sedan Hasta 15'2
        especial: 905,  // Sedan Excep. 16'
        mediano: 995,   // SUV 16' / Pickup Sencillo 16'
        grande: 1325,   // Pickup Xcab/Mini Van 17'
        extra: 1415,    // Pickup Xcab/Double Cab 18'
        extra2: 1850,   // Pickup Full Size 20'
        moto: 475       //
    },
    "Delaware": {
        pequeno: 875,   // Sedan Hasta 15'
        especial: 975,  // Pequeños 15'1" - 15'6"
        mediano: 1100,  // Medianos 15'7" - 16'6"
        grande: 1295,   // Grandes 16'7" - 16'11"
        extra: 1445,    // Grandes 17' - 17'6"
        extra2: 1550,   // Extragrandes 17'7" - 18'11"
        moto: 650       //
    }
};

const gruasPTP = {
    "Alabama": { "AL - Birmingham": 500, "AL - Dothan": 475, "AL - Mobile": 475, "AL - Montgomery": 470, "AL - Tanner": 500 }, //
    "Georgia": { "GA - Atlanta": 375, "GA - Loganville": 365, "GA - Savannah": 335, "GA - Tifton": 360, "GA - Augusta": 400, "GA - Macon": 365 }, //
    "Arkansas": { "AR - Fayetteville": 475, "AR - Little Rock": 400 }, //
    "Colorado": { "CO - Colorado Springs": 670, "CO - Denver": 645, "CO - Brighton": 645 }, //
    "Florida": { "FL - Miami": 90, "FL - Orlando": 220, "FL - Tampa": 230, "FL - Jacksonville": 250, "FL - West Palm Beach": 125, "FL - Tallahassee": 350 }, //
    "Texas": { "TX - Houston": 145, "TX - Dallas": 250, "TX - San Antonio": 245, "TX - Austin": 265, "TX - Amarillo": 420, "TX - El Paso": 400, "TX - McAllen": 0 }, // McAllen: A Cotizar
    "New Jersey": { "NJ - Avenel": 170, "NJ - Morganville": 170, "NJ - Glassboro": 135, "NJ - Somerville": 165, "NJ - Trenton": 225 }, //
    "New York": { "NY - Albany": 320, "NY - Buffalo": 575, "NY - Long Island": 290, "NY - Newburgh": 255, "NY - Rochester": 410, "NY - Syracuse": 360 }, //
    "Maryland": { "MD - Baltimore": 210, "MD - Elkton": 185, "MD - Washington DC": 210 }, //
    "Pennsylvania": { "PA - Philadelphia": 175, "PA - Pittsburgh": 370, "PA - York": 175, "PA - Scranton": 205, "PA - Harrisburg": 190, "PA - Altoona": 345 }, //
    "Virginia": { "VA - Fredericksburg": 315, "VA - Richmond": 290, "VA - Suffolk": 465, "VA - Tidewater": 365, "VA - Culpeper": 295 }, //
    "Illinois": { "IL - Chicago": 610, "IL - Southern Illinois": 600, "IL - St. Louis": 650 }, //
    "Oklahoma": { "OK - Oklahoma City": 450, "OK - Tulsa": 450 }, //
    "California": { "CA - Todas las ciudades": 0 }, // A Cotizar
    "Arizona": { "AZ - Phoenix": 800, "AZ - Tucson": 950 }, //
    "Mississippi": { "MS - Todas las ciudades": 0 }, // A Cotizar
    "Iowa": { "IA - Todas las ciudades": 0 }, // A Cotizar
    "Montana": { "MT - Todas las ciudades": 0 }, // A Cotizar
    "Nevada": { "NV - Todas las ciudades": 0 }, // A Cotizar
    "Utah": { "UT - Todas las ciudades": 0 }, // A Cotizar
    "Wyoming": { "WY - Todas las ciudades": 0 } // A Cotizar
};

// Mapeo por zonas (Imagen 13)
const puertoMappingPTP = {
    "Texas": "Texas", "Louisiana": "Texas", "Arkansas": "Texas", "Missouri": "Texas", "Oklahoma": "Texas", "Kansas": "Texas", "Colorado": "Texas", "New Mexico": "Texas", "Wyoming": "Texas", "Montana": "Texas", "Idaho": "Texas", "Utah": "Texas", "Arizona": "Texas", "Nevada": "Texas", "California": "Texas", "Oregon": "Texas", "Washington": "Texas", "Nebraska": "Texas", "North Dakota": "Texas", "South Dakota": "Texas", "Iowa": "Texas",
    "Florida": "Florida", "Alabama": "Florida", "Georgia": "Florida", "Tennessee": "Florida", "Mississippi": "Florida", "North Carolina": "Florida", "South Carolina": "Florida",
    "Delaware": "Delaware", "New Jersey": "Delaware", "New York": "Delaware", "Maryland": "Delaware", "Pennsylvania": "Delaware", "Virginia": "Delaware", "West Virginia": "Delaware", "Illinois": "Delaware", "New Hampshire": "Delaware", "Connecticut": "Delaware", "Maine": "Delaware", "Massachusetts": "Delaware", "Rhode Island": "Delaware", "Vermont": "Delaware", "Michigan": "Delaware", "Wisconsin": "Delaware", "Minnesota": "Delaware", "Ohio": "Delaware"
};