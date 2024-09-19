
//Crea  nombres al azar
export function listNameUser() {
    const nombres = [
        "Juan Carlos", "Yan Harold", "Maria Jose", "Luis Miguel", "Ana Maria",
        "Carlos Andres", "Laura Sofia", "Diego Alejandro", "Paula Andrea", "Jose Luis",
        "Camila Fernanda", "Andres Felipe", "Valentina Isabel", "Pedro Antonio", "Daniela Alejandra",
        "Javier Eduardo", "Sara Daniela", "Felipe Ignacio", "Natalia Patricia", "Juan Sebastián",
        "Marcela Beatriz", "Mateo Esteban", "Monica Marcela", "Julio Cesar", "Carolina Andrea",
        "Miguel Angel", "Isabela Sofia", "Germán Alonso", "Verónica Lucia", "Gabriel Alejandro",
        "Adriana Carolina", "Hernando Jose", "Diana Marcela", "Manuel Jose", "Erika Paola",
        "Jorge Ivan", "Fabiola Patricia", "Ricardo Antonio", "Lina Maria", "Mario Alberto",
        "Lucia Fernanda", "Santiago Andres", "Martha Elena", "Cesar Augusto", "Clara Isabel",
        "Fernando Jose", "Paulina Andrea", "Alberto Enrique", "Estefania Alejandra", "Cristian David"
    ];

    const randomName = nombres[Math.floor(Math.random() * nombres.length)];
    const randomNameUser = randomName;
    return randomNameUser;
}


//Crea apellidos al azar
export function listLastnameUser() {
    const apellidos = [
        "Garcia Lopez", "Rodriguez Martinez", "Fernandez Perez", "Gonzalez Sanchez", "Martinez Lopez",
    "Sanchez Perez", "Perez Gomez", "Lopez Martinez", "Martin Sanchez", "Serrano Gutierrez",
    "Romero Alonso", "Suarez Diaz", "Torres Ramos", "Diaz Ruiz", "Perez Muñoz",
    "Gil Romero", "Jimenez Navarro", "Ruiz Vazquez", "Vazquez Guerrero", "Santos Castillo",
    "Castro Rubio", "Herrera Molina", "Molina Gomez", "Ortega Delgado", "Reyes Romero",
    "Ramirez Medina", "Navarro Prieto", "Gutierrez Ruiz", "Vidal Cabrera", "Cabrera Cruz",
    "Cruz Santos", "Sanchez Navarro", "Prieto Ortega", "Iglesias Vidal", "Cabrera Diaz",
    "Delgado Serrano", "Reyes Lopez", "Gomez Ramirez", "Cruz Castro", "Blanco Herrera",
    "Mendez Castro", "Vazquez Jimenez", "Flores Iglesias", "Pascual Mendez", "Vega Blanco",
    "Soto Flores", "Hernandez Vega", "Muñoz Pascual", "Fuentes Soto"
    ];
    const randomLastname = apellidos[Math.floor(Math.random() * apellidos.length)]
    const randomLastnameUser = randomLastname;
    return randomLastnameUser;
}
export function rollUserRandom(){
    const listRollUser = ['Profesional EAT','Coordinador EAT','Revisor subdirección','Subdirector','Administrador','Coordinador DNP','Profesional DNP','Profesional DNP']
    const rollUser = listLastnameUser[Math.floor(Math.random() * listRollUser.length)]
    const randomRoll = rollUser;
    return randomRoll
}

export function numeroAleatorio10Digitos (){
    const numeros = Math.floor(Math.random() * 9000000000) + 1000000000;
    const numerosrandom = numeros
    return numerosrandom.toString()}

////Seleccionar Orientado ha.. al azar de la lista desplegable
export function selectOrientedTo() {
    const listOrientedTo = ['Derechos humanos', 'Género', 'Orientaciones sexuales e identidad de género diversas',
        'Curso de la vida', 'Diferencial', 'Étnico', 'Interseccionalidad', 'Territorial', 'Fronterizo y migratorio', 'Criminológico']
    const indexOriented = listOrientedTo[Math.floor(Math.random() * listOrientedTo.length)];
    const randomOriented = indexOriented;
    return randomOriented;
}
//Seleccionar tipo de victimario al azar de la lista desplegable
export function selectTipeVictimary() {
    const listTypeVictimary = ['Persona', 'Organización', 'Red']
    const indexTypeVictymary = listTypeVictimary[Math.floor(Math.random() * listTypeVictimary.length)];
    const randomTypeVictimary = indexTypeVictymary;
    return randomTypeVictimary;
}

//Seleccionar medio de traslado al azar

export function selectTraslateMedium(){
    const listMediumTraslate = ['Terrestre', 'Aérea', 'Marítima', 'Fluvial', 'Caminata' ];
    const indexTraslateMedium = listMediumTraslate[Math.floor(Math.random() * listMediumTraslate.length)];
    const randomTraslateMedium = indexTraslateMedium;
    return randomTraslateMedium
}
//Seleccionar servicios al azar de la lista desplegable
export function selectTipeServices() {
    const listTypeServices = ['Protección', 'Regulación - documentación', 'Repatriación', 'Comunicación (llamadas)', 'Traslado (transporte)',
        'Alojamiento', 'Kit de aseo', 'Kit de vestuario', 'Atención médica', 'Asistencia psicosocial',
        'Asistencia legal', 'Asistencia seguridad social', 'Programa de inclusión sobrevivientes'];
    const indexTypeServices = listTypeServices[Math.floor(Math.random() * listTypeServices.length)];
    const randomTypeServices = indexTypeServices;
    return randomTypeServices;
}

//Seleccionar instituciones al azar de la lista desplegable
export function selectInstitutes(){
    const listInstitutes = ['Ministerio del trabajo', 'Consejería presidencial para la equidad de la mujer', 
        'Empresa privada - particular', 'Fundacion - ongs','Comité departamental de lucha contra la trata', 'Sijin', 
        'Secretaria de salud', 'Defensoría del pueblo', 'Instituto colombiano de bienestar familiar', 
        'Comité municipal de lucha contra la trata', 'Ministerio de educación nacional', 'Procuraduría general de la nación', 
        'Ministerio de justicia y del derecho', 
        'Consulado', 'Ministerio del interior', 'Unidad de información y análisis financiero - uiaf', 
        'Interpol', 'Ministerio de defensa nacional', 'Migración colombia', 'Dijin', 'Polícia nacional',
        'Fiscalía general de la nación', 
        'Consejería presidencial para los derechos humanos y asuntos internacionales', 
        'Ministerio de comercio, industria y turismo', 'Ministerio de relaciones exteriores']
    const indexInstitutes = listInstitutes [Math.floor(Math.random() * listInstitutes.length)];
    const randomInstitutes = indexInstitutes;
    return randomInstitutes;
}

//Seleccionar tipo de documento al azar de la lista desplegable
export function selectTypeDocument() {
    const listTypeDocument = ['Cédula de Ciudadanía - CC',
        'Cédula de extranjería - CE',
        'Número Único de Identificación - NUIP',
        'Pasaporte - PAS',
        'Salvoconducto para refugiados - SVC',
        'Permiso Especial de Permanencia - PEP',
        'Permiso por Protección Temporal - PPT',
        'Sin documento - SD'];
    const indexTypeDocument = listTypeDocument[Math.floor(Math.random() * listTypeDocument.length)];
    const randomTypeDocumet = indexTypeDocument;
    return randomTypeDocumet;

}

//Seleccionar rango de edades al azar de la lista desplegable
export function selectRangeAllAges() {
    const listRangeAge = [
        '0-4', '5-9', '10-14', '15-19', '20-24',
        '25-29', '30-34', '35-39', '40-44', '45-49',
        '50-54', '55-59', '60-64', '65-69', '70-74',
        '75-79', '80-84', '85-89', '90-94', '95-99',
        '100+'
    ];
    const indexRangeAge = listRangeAge[Math.floor(Math.random() * listRangeAge.length)];
    const randomRangeAge = indexRangeAge;
    return randomRangeAge;
}

//Seleccionar fecha de nacimiento
export function selectBirthDay() {
    const years = [
        '2024', '2023', '2022', '2021', '2020',
        '2019', '2018', '2017', '2016', '2015',
        '2014', '2013', '2012', '2011', '2010',
        '2009', '2008', '2007', '2006', '2005',
        '2004', '2003', '2002', '2001', '2000',
        '1999', '1998', '1997', '1996', '1995',
        '1994', '1993', '1992', '1991', '1990',
        '1989', '1988', '1987', '1986', '1985',
        '1984', '1983', '1982', '1981', '1980',
        '1979', '1978', '1977', '1976', '1975',
        '1974', '1973', '1972', '1971', '1970',
        '1969', '1968', '1967', '1966', '1965',
        '1964', '1963', '1962', '1961', '1960'
    ];
    const indexYear = years[Math.floor(Math.random() * years.length)]
    const ramdomyear = indexYear;
    const days = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28'
    ];
    const indexDays = days[Math.floor(Math.random() * days.length)]
    const randomDays = indexDays;

    const months = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12'
    ];
    const indexMonths = months[Math.floor(Math.random() * months.length)]
    const randomMonths = indexMonths;

    const randomDate = ramdomyear + '-' + randomMonths + '-' + randomDays;
    return randomDate
}
//Seleccionar estado civil al azar de la lista desplegable
export function selectCivilState() {
    const listCivilStates = ['Soltero(a)', 'Casado(a)', 'Pareja de hecho', 'Divorciado(a)', 'Viudo(a)'];
    const indexState = listCivilStates[Math.floor(Math.random() * listCivilStates.length)];
    const ramdomState = indexState;
    return ramdomState;

}

//Seleccionar identidad de genero al azar de la lista desplegable
export function selectIndentityGender() {
    const listIndentityGender = ['Femenino', 'Masculino', 'Cisgénero'];
    const indexGender = listIndentityGender[Math.floor(Math.random() * listIndentityGender.length)];
    const ramdomGender = indexGender;
    return ramdomGender;
}

//Seleccionar orientacion sexual al azar de la lista desplegable
export function selectSexualorientation() {
    const listSexualOrientation = ['Heterosexual', 'Gay', 'Otro'];
    const indexOrientation = listSexualOrientation[Math.floor(Math.random() * listSexualOrientation.length)];
    const ramdomorientation = indexOrientation;
    return ramdomorientation;
}

//Seleccionar Discapacidad al azar de la lista desplegable
export function selectDisability() {
    const listDisabylity = ['Auditiva', 'Visual', 'Motora', 'Cognitiva', 'Múltiple', 'Ninguna'];
    const indexDisabilyty = listDisabylity[Math.floor(Math.random() * listDisabylity.length)];
    const randomDisability = indexDisabilyty;
    return randomDisability;
}

//Seleccionar lenguaje al azar de la lista desplegable
export function selectLanguage() {
    const listLanguage = [
        "Afrikáans", "Aimara", "Akan", "Albanés", "Alemán", "Amárico", "Árabe", "Armenio", "Asamés", "Azerbaiyano", "Bambara", "Bengalí", "Bhoyapurí", "Bielorruso", "Birmano", "Bosnio", "Búlgaro", "Canarés", "Catalán", "Cebuano", "Checo", "Chino", "Cingalés", "Coreano", "Corso", "Criollo haitiano", "Croata", "Danés", "Divehi", "Dogri", "Eslovaco", "Esloveno", "Español", "Esperanto", "Estonio", "Euskera", "Ewé", "Finés", "Francés", "Frisón occidental", "Gaélico escocés", "Galés", "Gallego", "Ganda", "Georgiano", "Goan Konkani", "Griego", "Guaraní", "Guyaratí", "Hausa", "Hawaiano", "Hebreo", "Hindi", "Hmong", "Húngaro", "Igbo", "Ilocano", "Indonesio", "Inglés", "Irlandés", "Islandés", "Italiano", "Japonés", "Javanés", "Jemer", "Kazajo", "Kinyarwanda", "Kirguís", "Krio", "Kurdo", "Kurdo sorani", "Lao", "Latín", "Letón", "Lingala", "Lituano", "Luxemburgués", "Macedonio", "Maithili", "Malayálam", "Malayo", "Malgache", "Maltés", "Manipurí (meitei)", "Maorí", "Maratí", "Mizo", "Mongol", "Neerlandés", "Nepalí", "Noruego", "Nyanja", "Oriya", "Oromo", "Pastún", "Persa", "Polaco", "Portugués", "Punyabí", "Quechua", "Rumano", "Ruso", "Samoano", "Sánscrito", "Serbio", "Shona", "Sindi", "Somalí", "Sotho meridional", "Sotho septentrional", "Suajili", "Sueco", "Sundanés", "Tagalo", "Tailandés", "Tamil", "Tártaro", "Tayiko", "Telugu", "Tigriña", "Tsonga", "Turco", "Turcomano", "Ucraniano", "Uigur", "Urdu", "Uzbeko", "Vietnamita", "Xhosa", "Yidis", "Yoruba", "Zulú"
    ]
    const indexLaguage = listLanguage[Math.floor(Math.random() * listLanguage.length)];
    const randomLanguage = indexLaguage;
    return randomLanguage;
}

//Seleccionar medio de contacto al azar
 export function selectContactMedium(){
    const listContactMedium = ['Establecimiento comercial', 'Centro de enseñanza', 'En el trabajo', 'Redes sociales', 
    'Anuncio', 'En línea - WhatsApp', 'Televisión', 'Periódico', 'Familiares', 'Amigos']
    const indexContactMedium = listContactMedium[Math.floor(Math.random()*listContactMedium.length)];
    const randomContactMedium = indexContactMedium;
    return randomContactMedium;
 }

 export function selectTypeEspotacion (){
    const listTypeEsplotation = ['Explotación de la prostitución ajena u otras formas de explotación sexual',
    'Trabajos o servicios forzados',
    'Esclavitud o las prácticas análogas a la esclavitud',
    'Servidumbre',
    'Mendicidad ajena',
    'Matrimonio servil',
    'Extracción de órganos',
    'Turismo sexual u otras formas de explotación']
    const indexExplotation = listTypeEsplotation[Math.floor(Math.random()*listTypeEsplotation.length)];
    const randomExplotation = indexExplotation;
    return randomExplotation;
}

export function selectTypePlaces(){
    const listTypePlaces = ['Casa',
        'Discoteca - Bar - Club - Cantina',
        'Hogar',
        'Inquilinato',
        'Bodega',
        'Fabrica',
        'Granja',
        'Almacén',
        'Mina o cantera',
        'Barco',
        'Obras',
        'Tienda',
        'Residencia privada',
        'Hotel-Motel',
        'Burdel con fachada comercial',
        'Burdel legal',
        'Estudio de grabación',
        'En la calle',
        'Otro'];
    const indexTypePlaces = listTypePlaces[Math.floor(Math.random()*listTypePlaces.length)];
    const randomPlaces = indexTypePlaces;
    return randomPlaces;
}

export function selectMediumControl(){
    const listMediumControl = ['Amenazado(a)','Forzado(a) por el uso de la fuerza', 'Coaccionado(a)' , 'Raptado(a)' , 
    'Engañado(a)' , 'Sometido(a) por abuso de poder' ,'Secuestrado(a)']
    const indexMediumContrl = listMediumControl [Math.floor(Math.random()*listMediumControl.length)];
    const randomMediumContrl = indexMediumContrl;
    return randomMediumContrl;
}

export function selectTypeVulnerability (){
    const listTypeVulnerability = [ 'Persona desaparecida', 'Migrante' , 'Persona LGBTI' , 'Discapacidad física o mental' ,
     'Desplazado(a) por la violencia' , 'Situación de pobreza' , 'Refugiado(a)' , 
    'Enfermo(a)' , 'Dificultades económicas' ,'Excombatiente'];
    const indexTypeVulnerability = listTypeVulnerability[Math.floor(Math.random()*listTypeVulnerability.length)];
    const randomTypeVulnerability = indexTypeVulnerability;
    return randomTypeVulnerability;
}