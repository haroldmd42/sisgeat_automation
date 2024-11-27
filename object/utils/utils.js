
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
export function rollUserRandom() {
    const listRollUser = ['Profesional EAT', 'Coordinador EAT', 'Revisor subdirección', 'Subdirector', 'Administrador', 'Coordinador DNP', 'Profesional DNP', 'Profesional DNP']
    const rollUser = listLastnameUser[Math.floor(Math.random() * listRollUser.length)]
    const randomRoll = rollUser;
    return randomRoll
}

export function numeroAleatorio10Digitos() {
    const numeros = Math.floor(Math.random() * 9000000000) + 1000000000;
    const numerosrandom = numeros
    return numerosrandom.toString()
}

export function numeroAleatorio8Digitos() {
    const numeros = Math.floor(Math.random() * 90000000) + 10000000;
    const numerosrandom = numeros
    return numerosrandom.toString()
}
export function numeroAleatorio4Digitos() {
    const numeros = Math.floor(Math.random() * 9000) + 1000;
    const numerosrandom = numeros
    return numerosrandom.toString()
}



//Seleccionar fecha de nacimiento
export function selectBirthDay() {
    const years = [
        '2000',
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


export function selectTypeDirection(){
    const listTypeDirection = [
        'Vía',
        'Transversal',
        'Manzana',
        'Diagonal',
        'Circunvalar',
        'Circular',
        'Avenida',];
    const indexTypeDirection = listTypeDirection[Math.floor(Math.random()* listTypeDirection.length)]
    const randomTypeDirection = indexTypeDirection
    return randomTypeDirection;
}
export function selectTypeDocuments(){
    const listTypeDocument = [
        'Cédula',
        'Cédula de extranjería'];
    const indexTypeDocument = listTypeDocument[Math.floor(Math.random()* listTypeDocument.length)]
    const randomTypeDocument = indexTypeDocument
    return randomTypeDocument;
}

export function selectMunicipalityAmazonas(){
    const listMunicipality = ['El encanto',
        'La chorrera',
        'La pedrera',
        'La victoria',
        'Leticia',
        'Mirití - paraná',
        'Puerto alegría',
        'Puerto arica',
        'Puerto nariño',
        'Puerto santander',
        'Tarapacá']
    const indexMunicipality = listMunicipality[Math.floor(Math.random()* listMunicipality.length)]
    const randomMunicipality = indexMunicipality
    return randomMunicipality;
}
export function selectMunicipalityArauca(){
    const listMunicipality = [
        'Arauquita',
        'Cravo norte',
        'Fortul',
        'Puerto rondón',
        'Saravena',]
    const indexMunicipality = listMunicipality[Math.floor(Math.random()* listMunicipality.length)]
    const randomMunicipality = indexMunicipality
    return randomMunicipality;
}


export function selectEscolarity(){
    const listEscolarity = [
        'Doctorado',
        'Especialización',
        'Maestría',
        'Preescolar',
        'Pregrado',
        'Primaria',
        'Postdoctorado',
        'Secundaria',
        'Técnica',
        'Tecnológia']
    const indexEscolarity = listEscolarity[Math.floor(Math.random()* listEscolarity.length)]
    const randomEscolarity = indexEscolarity
    return randomEscolarity;
}

export function selectGender(){
    const listGender = ['Masculino',
        'Femenino',
        'Prefiero no decirlo']
    const indexGender = listGender[Math.floor(Math.random()* listGender.length)]
    const randomGender = indexGender
    return randomGender;
}

export function selectChargeEAT(){
    const listCharge = ['Contratista',
        'Empleado de planta',
        'Gerente',
        'Otro']
    const indexCharge = listCharge[Math.floor(Math.random()* listCharge.length)]
    const randomCharge = indexCharge
    return randomCharge;
}

export function numeroAleatorioEntre0y20() {
    return Math.floor(Math.random() * 21);
}

export function nombreSolicitudAleaotrio(){
    const ENTIDADES_TERRITORIALES = [
        "Amazonas - Región selvática al sur de Colombia, conocida por su biodiversidad",
        "Antioquia - Departamento montañoso del noroeste, famoso por su cultura paisa",
        "Arauca - Región del oriente colombiano, rica en ganadería y recursos petroleros",
        "Atlántico - Departamento ubicado en la costa caribeña, con una gran riqueza cultural",
        "Bolívar - Hogar de Cartagena, ciudad histórica y patrimonio de la humanidad",
        "Boyacá - Región central conocida por sus paisajes, cultura colonial y el Puente de Boyacá",
        "Caldas - Parte del Eje Cafetero, famoso por la producción de café",
        "Caquetá - Departamento amazónico, rico en biodiversidad y cultura indígena",
        "Casanare - Región del oriente colombiano, conocida por sus llanuras y fauna silvestre",
        "Cauca - Región del suroccidente, con gran diversidad cultural e indígena",
        "Cesar - Conocido por el vallenato y sus fértiles tierras para la agricultura",
        "Chocó - Departamento en la costa pacífica, conocido por su selva y comunidades afrodescendientes",
        "Córdoba - Región del Caribe colombiano, famosa por sus festivales y tradiciones ganaderas",
        "Cundinamarca - Ubicado en el centro del país, rodeando a la capital, Bogotá",
        "Guainía - Territorio selvático al este de Colombia, con abundantes ríos y cultura indígena",
        "Guaviare - Región amazónica con paisajes únicos y biodiversidad",
        "Huila - Departamento del suroccidente conocido por el Parque Arqueológico de San Agustín",
        "La Guajira - Tierra del desierto, el mar y la cultura Wayúu",
        "Magdalena - Región caribeña con playas y sitios históricos como Santa Marta",
        "Meta - Corazón de los llanos orientales, conocido por su ganadería y paisajes",
        "Nariño - Región del suroccidente, con paisajes andinos y acceso al Pacífico",
        "Norte de Santander - Departamento fronterizo con Venezuela, rico en cultura e historia",
        "Putumayo - Región amazónica con paisajes naturales y riqueza cultural indígena",
        "Quindío - Parte del Eje Cafetero, conocido por sus cafetales y parques temáticos",
        "Risaralda - Región cafetera, destacada por su arquitectura y turismo ecológico",
        "San Andrés y Providencia - Archipiélago caribeño con playas paradisíacas",
        "Santander - Región montañosa famosa por su gastronomía y deportes extremos",
        "Sucre - Departamento caribeño con tradiciones folclóricas y playas",
        "Tolima - Ubicado en el centro del país, famoso por el volcán Nevado del Tolima",
        "Valle del Cauca - Departamento del suroccidente con Cali como capital, cuna de la salsa",
        "Vaupés - Región selvática con biodiversidad y comunidades indígenas",
        "Vichada - Departamento en los llanos orientales, conocido por su tranquilidad y paisajes"
      ];
      const indexNameRequest = ENTIDADES_TERRITORIALES[Math.floor(Math.random() * ENTIDADES_TERRITORIALES.length)]
      const randomNameRequest = indexNameRequest
      return randomNameRequest
      
}
