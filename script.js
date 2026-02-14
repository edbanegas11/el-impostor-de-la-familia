if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(() => console.log("Modo Offline Activo"))
    .catch((err) => console.log("Error registrando Offline", err));
}

const database = {
    comida: [
        {w: "Pizza", h: "Triángulo"},
        {w: "Tenedor", h: "Puntas"},
        {w: "Cuchillo", h: "Filo"},
        {w: "Sartén", h: "Mango"},
        {w: "Licuadora", h: "Aspas"},
        {w: "Microondas", h: "Botón"},
        {w: "Tostadora", h: "Salto"},
        {w: "Rodillo", h: "Masa"},
        {w: "Batidora", h: "Mezcla"},
        {w: "Colador", h: "Agujeros"},
        {w: "Rallador", h: "Queso"},
        {w: "Olla", h: "Tapa"},
        {w: "Delantal", h: "Manchas"},
        {w: "Sacacorchos", h: "Corcho"},
        {w: "Abridor", h: "Lata"},
        {w: "Espátula", h: "Voltear"},
        {w: "Embudos", h: "Cuello"},
        {w: "Mesa", h: "Patas"},
        {w: "Plato", h: "Círculo"},
        {w: "Servilleta", h: "Boca"},
        {w: "Salero", h: "Granos"},
        {w: "Parrilla", h: "Carbón"},
        {w: "Horno", h: "Calor"},
        {w: "Nevera", h: "Puerta"},
        {w: "Congelador", h: "Nieve"},
        {w: "Tabla", h: "Picar"},
        {w: "Molinillo", h: "Pimienta"},
        {w: "Pelador", h: "Piel"},
        {w: "Termo", h: "Temperatura"},
        {w: "Jarra", h: "Pico"},
        {w: "Cucharón", h: "Hondo"},
        {w: "Salchicha", h: "Tripa"},
        {w: "Mermelada", h: "Frasco"},
        {w: "Aceituna", h: "Huesito"},
        {w: "Camarón", h: "Cola"},
        {w: "Langosta", h: "Pinzas"},
        {w: "Ajo", h: "Diente"},
        {w: "Limón", h: "Ácido"},
        {w: "Pimiento", h: "Color"},
        {w: "Zanahoria", h: "Conejo"},
        {w: "Champiñón", h: "Hongo"},
        {w: "Maíz", h: "Granos"},
        {w: "Frijoles", h: "Vaina"},
        {w: "Lentejas", h: "Pequeñas"},
        {w: "Garbanzos", h: "Hummus"},
        {w: "Nuez", h: "Cerebro"},
        {w: "Almendra", h: "Dura"},
        {w: "Pistacho", h: "Verde"},
        {w: "Cereza", h: "Pareja"},
        {w: "Piña", h: "Corona"},
        {w: "Mango", h: "Dulzor"}, // <-- AQUÍ FALTABA UNA COMA
        {w: "Hamburguesa", h: "Torre"},
        {w: "Sushi", h: "Palillos"},
        {w: "Taco", h: "Picante"},
        {w: "Espagueti", h: "Enredado"},
        {w: "Helado", h: "Frío"},
        {w: "Chocolate", h: "Dulce"},
        {w: "Palomitas", h: "Cine"},
        {w: "Huevo", h: "Cáscara"},
        {w: "Pollo frito", h: "Balde"},
        {w: "Papas fritas", h: "Sal"},
        {w: "Ensalada", h: "Verde"},
        {w: "Sopa", h: "Cuchara"},
        {w: "Arroz", h: "Blanco"},
        {w: "Pan", h: "Trigo"},
        {w: "Queso", h: "Ratón"},
        {w: "Sandwich", h: "Capas"},
        {w: "Donas", h: "Agujero"},
        {w: "Lasaña", h: "Láminas"},
        {w: "Pescado", h: "Escamas"},
        {w: "Bistec", h: "Vaca"},
        {w: "Hot Dog", h: "Perro"},
        {w: "Galletas", h: "Leche"},
        {w: "Pastel", h: "Vela"},
        {w: "Café", h: "Taza"},
        {w: "Cereal", h: "Desayuno"},
        {w: "Manzana", h: "Gusano"},
        {w: "Plátano", h: "Mono"},
        {w: "Uvas", h: "Racimo"},
        {w: "Tocino", h: "Cerdo"},
        {w: "Burrito", h: "Rollo"},
        {w: "Paella", h: "Sartén"},
        {w: "Nuggets", h: "Caja"},
        {w: "Pancakes", h: "Miel"},
        {w: "Waffles", h: "Cuadros"},
        {w: "Churros", h: "Azúcar"},
        {w: "Gelatina", h: "Movimiento"},
        {w: "Yogur", h: "Bacteria"},
        {w: "Puré", h: "Aplastar"},
        {w: "Nachos", h: "Triángulos"},
        {w: "Alitas", h: "Hueso"},
        {w: "Brocheta", h: "Palito"},
        {w: "Empanada", h: "Relleno"},
        {w: "Ravioles", h: "Pasta"},
        {w: "Pavo", h: "Navidad"},
        {w: "Sandía", h: "Pepitas"},
        {w: "Chicle", h: "Bomba"},
        {w: "Paleta", h: "Lengua"},
        {w: "Mantequilla", h: "Untar"},
        {w: "Cebolla", h: "Lágrima"}
    ],
    profesiones: [
        {w: "Bombero", h: "Agua"},
        {w: "Ingeniero", h: "Casco"},
        {w: "Esteticista", h: "Piel"},
        {w: "Diseñador", h: "Logo"},
        {w: "Psicólogo", h: "Diván"},
        {w: "Programador", h: "Código"},
        {w: "Maquillador", h: "Sombras"},
        {w: "Locutor", h: "Micrófono"},
        {w: "Enfermera", h: "Inyección"},
        {w: "Azafata", h: "Pasillo"},
        {w: "Barista", h: "Grano"},
        {w: "Sommelier", h: "Copa"},
        {w: "Artesano", h: "Barro"},
        {w: "Joyero", h: "Pinzas"},
        {w: "Relojero", h: "Engranaje"},
        {w: "Topógrafo", h: "Trípode"},
        {w: "Biólogo", h: "Microscopio"},
        {w: "Geólogo", h: "Roca"},
        {w: "Meteorólogo", h: "Mapa"},
        {w: "Entrenador", h: "Cronómetro"},
        {w: "Árbitro", h: "Tarjeta"},
        {w: "Coreógrafo", h: "Paso"},
        {w: "Modista", h: "Maniquí"},
        {w: "Tapicero", h: "Grapas"},
        {w: "Soldador", h: "Chispa"},
        {w: "Cerrajero", h: "Llave"},
        {w: "Vidriero", h: "Ventana"},
        {w: "Editor", h: "Corte"},
        {w: "Contador", h: "Calculadora"},
        {w: "Economista", h: "Gráfica"},
        {w: "Diputado", h: "Voto"},
        {w: "Juez", h: "Mazo"},
        {w: "Notario", h: "Sello"},
        {w: "Aduanero", h: "Maleta"},
        {w: "Fumigador", h: "Veneno"},
        {w: "Exterminador", h: "Rata"},
        {w: "Socorrista", h: "Flotador"},
        {w: "Escolta", h: "Auricular"},
        {w: "Afilador", h: "Piedra"},
        {w: "Deshollinador", h: "Hollín"},
        {w: "Cabrero", h: "Bastón"},
        {w: "Pastor", h: "Rebaño"},
        {w: "Apicultor", h: "Panal"},
        {w: "Leñador", h: "Hacha"},
        {w: "Minero", h: "Pico"},
        {w: "Peleador", h: "Guantes"},
        {w: "Torero", h: "Capote"},
        {w: "Astrónomo", h: "Telescopio"},
        {w: "Óptico", h: "Gafas"},
        {w: "Farmacéutico", h: "Receta"},
        {w: "Traductor", h: "Diccionario"}, // <-- AQUÍ FALTABA UNA COMA
        {w: "Médico", h: "Salud"},
        {w: "Policía", h: "Orden"},
        {w: "Profesor", h: "Tablero"},
        {w: "Cocinero", h: "Sartén"},
        {w: "Astronauta", h: "Estrellas"},
        {w: "Peluquero", h: "Tijeras"},
        {w: "Mecánico", h: "Tuerca"},
        {w: "Carpintero", h: "Madera"},
        {w: "Pintor", h: "Brocha"},
        {w: "Fotógrafo", h: "Lente"},
        {w: "Cantante", h: "Voz"},
        {w: "Cartero", h: "Sobre"},
        {w: "Veterinario", h: "Mascotas"},
        {w: "Dentista", h: "Muela"},
        {w: "Arquitecto", h: "Plano"},
        {w: "Granjero", h: "Tractor"},
        {w: "Científico", h: "Tubo"},
        {w: "Piloto", h: "Nube"},
        {w: "Jardinero", h: "Pala"},
        {w: "Abogado", h: "Leyes"},
        {w: "Periodista", h: "Noticia"},
        {w: "Mesero", h: "Bandeja"},
        {w: "Panadero", h: "Harina"},
        {w: "Costurera", h: "Aguja"},
        {w: "Salvavidas", h: "Silbato"},
        {w: "Electricista", h: "Cable"},
        {w: "Plomero", h: "Tubo"},
        {w: "Barrendero", h: "Escoba"},
        {w: "Cajero", h: "Dinero"},
        {w: "Actor", h: "Guion"},
        {w: "Bailarina", h: "Puntas"},
        {w: "Bibliotecario", h: "Silencio"},
        {w: "Zapatero", h: "Suela"},
        {w: "Albañil", h: "Ladrillo"},
        {w: "Arqueólogo", h: "Huesos"},
        {w: "Detective", h: "Lupa"},
        {w: "Escultor", h: "Cincel"},
        {w: "Payaso", h: "Nariz"},
        {w: "Joyero", h: "Anillo"},
        {w: "Pescador", h: "Red"},
        {w: "Escritor", h: "Pluma"},
        {w: "Deportista", h: "Medalla"},
        {w: "Buzo", h: "Oxígeno"},
        {w: "Mago", h: "Varita"},
        {w: "Soldado", h: "Casco"},
        {w: "Chofer", h: "Volante"},
        {w: "Sastre", h: "Medida"},
        {w: "Cuerpo de baile", h: "Escenario"},
        {w: "Guardia", h: "Garita"}
    ],
    objetos: [
        {w: "Sombrilla", h: "Lluvia"},
        {w: "Marimba", h: "Teclado"},
        {w: "Caracol", h: "Sopa"},
        {w: "Comal", h: "Tortilla"},
        {w: "Machete", h: "Campo"},
        {w: "Hamaca", h: "Nudos"},
        {w: "Poncho", h: "Frío"},
        {w: "Sombrero de Junco", h: "Santa Bárbara"},
        {w: "Cayuco", h: "Remo"},
        {w: "Guacal", h: "Cuchara"},
        {w: "Petate", h: "Suelo"},
        {w: "Jarrón de Barro", h: "Lenca"},
        {w: "Tunante", h: "Baile"},
        {w: "Pito de Barro", h: "Silbido"},
        {w: "Ancla", h: "Barco"},
        {w: "Brújula", h: "Norte"},
        {w: "Escalera", h: "Peldaño"},
        {w: "Extintor", h: "Fuego"},
        {w: "Binoculares", h: "Lejos"},
        {w: "Mapa", h: "País"},
        {w: "Estufa", h: "Llama"},
        {w: "Taladro", h: "Agujero"},
        {w: "Grapa", h: "Papeles"},
        {w: "Cinta Métrica", h: "Centímetro"},
        {w: "Destornillador", h: "Tornillo"},
        {w: "Alicate", h: "Presión"},
        {w: "Serrucho", h: "Dientes"},
        {w: "Embudo", h: "Líquido"},
        {w: "Periódico", h: "Noticia"},
        {w: "Sobre", h: "Carta"},
        {w: "Sello", h: "Tinta"},
        {w: "Gis", h: "Pizarra"},
        {w: "Borrador", h: "Error"},
        {w: "Pincel", h: "Acuarela"},
        {w: "Caballete", h: "Cuadro"},
        {w: "Guitarra", h: "Cuerdas"},
        {w: "Tambor", h: "Cuero"},
        {w: "Flauta", h: "Viento"},
        {w: "Megáfono", h: "Grito"},
        {w: "Micrófono", h: "Escenario"},
        {w: "Audífonos", h: "Oreja"},
        {w: "Teclado", h: "Letras"},
        {w: "Mouse", h: "Flecha"},
        {w: "Monitor", h: "Pantalla"},
        {w: "Impresora", h: "Tinta"},
        {w: "Escáner", h: "Copia"},
        {w: "Enchufe", h: "Pared"},
        {w: "Bombillo", h: "Rosca"},
        {w: "Fusible", h: "Corte"},
        {w: "Imán", h: "Atracción"},
        {w: "Termómetro", h: "Fiebre"}, // <-- AQUÍ FALTABA UNA COMA
        {w: "Reloj", h: "Tiempo"},
        {w: "Espejo", h: "Reflejo"},
        {w: "Llave", h: "Cerradura"},
        {w: "Cámara", h: "Foto"},
        {w: "Lentes", h: "Ojos"},
        {w: "Martillo", h: "Clavo"},
        {w: "Cepillo", h: "Dientes"},
        {w: "Almohada", h: "Sueño"},
        {w: "Libro", h: "Hojas"},
        {w: "Tijeras", h: "Corte"},
        {w: "Lámpara", h: "Luz"},
        {w: "Celular", h: "Llamada"},
        {w: "Bicicleta", h: "Pedal"},
        {w: "Maleta", h: "Viaje"},
        {w: "Escoba", h: "Piso"},
        {w: "Plancha", h: "Ropa"},
        {w: "Control", h: "Botón"},
        {w: "Vaso", h: "Vidrio"},
        {w: "Silla", h: "Patas"},
        {w: "Cuchara", h: "Boca"},
        {w: "Toalla", h: "Secar"},
        {w: "Peine", h: "Cabello"},
        {w: "Botella", h: "Tapa"},
        {w: "Cartera", h: "Billetes"},
        {w: "Cinturón", h: "Cintura"},
        {w: "Jabón", h: "Burbuja"},
        {w: "Zapatos", h: "Pies"},
        {w: "Globo", h: "Aire"},
        {w: "Paraguas", h: "Nube"},
        {w: "Lápiz", h: "Goma"},
        {w: "Calculadora", h: "Números"},
        {w: "Bolsa", h: "Plástico"},
        {w: "Ventilador", h: "Viento"},
        {w: "Radio", h: "Sonido"},
        {w: "Candado", h: "Hierro"},
        {w: "Anillo", h: "Dedo"},
        {w: "Encendedor", h: "Chispa"},
        {w: "Sábana", h: "Cama"},
        {w: "Cuchillo", h: "Filo"},
        {w: "Mochila", h: "Espalda"},
        {w: "Regla", h: "Medida"},
        {w: "Papel", h: "Blanco"},
        {w: "Clavo", h: "Punta"},
        {w: "Moneda", h: "Metal"},
        {w: "Brocha", h: "Pared"},
        {w: "Cuerda", h: "Nudo"},
        {w: "Pila", h: "Energía"},
        {w: "Basurero", h: "Desecho"},
        {w: "Taza", h: "Asa"}
    ],
    celebridades: [
    // --- LEYENDAS DEL FÚTBOL (Los 10 más grandes) ---
    {w: "Lionel Messi", h: "Pulga"},
    {w: "Cristiano Ronaldo", h: "Siuuu"},
    {w: "Pelé", h: "Rey"},
    {w: "Diego Maradona", h: "Pibe"},
    {w: "Zinedine Zidane", h: "Cabezazo"},
    {w: "Ronaldinho", h: "Sonrisa"},
    {w: "Johan Cruyff", h: "Naranja"},
    {w: "Neymar Jr", h: "Santos"},
    {w: "Kylian Mbappé", h: "Tortuga"},
    {w: "Ronaldo Nazário", h: "Fenómeno"},

    // --- CIENTÍFICOS VERDADERAMENTE FAMOSOS ---
    {w: "Albert Einstein", h: "Relatividad"},
    {w: "Isaac Newton", h: "Manzana"},
    {w: "Nikola Tesla", h: "Rayo"},
    {w: "Marie Curie", h: "Radio"},
    {w: "Charles Darwin", h: "Mono"},
    {w: "Stephen Hawking", h: "Universo"},
    {w: "Galileo Galilei", h: "Telescopio"},
    {w: "Thomas Edison", h: "Bombilla"},
    {w: "Alexander Fleming", h: "Hongo"},
    {w: "Louis Pasteur", h: "Leche"},

    // --- POLÍTICA Y LIDERAZGO ---
    {w: "Nelson Mandela", h: "Libertad"},
    {w: "Abraham Lincoln", h: "Esclavitud"},
    {w: "Barack Obama", h: "Yes"},
    {w: "Donald Trump", h: "Muro"},
    {w: "Vladimir Putin", h: "KGB"},
    {w: "Julio César", h: "Emperador"},
    {w: "Napoleón Bonaparte", h: "Bicornio"},
    {w: "Cleopatra", h: "Nilo"},
    {w: "Angela Merkel", h: "Kanzler"},
    {w: "Winston Churchill", h: "Victoria"},
    {w: "Reina Isabel II", h: "Londres"},
    {w: "Nayib Bukele", h: "Bitcóin"},
    {w: "Joe Biden", h: "Demócrata"},
    {w: "Dalai Lama", h: "Monje"},
    {w: "Mahatma Gandhi", h: "Ayuno"},
    {w: "John F. Kennedy", h: "Dallas"},
    {w: "Simón Bolívar", h: "Caballo"},
    {w: "Fidel Castro", h: "Habano"},
    {w: "Martin Luther King", h: "Discurso"},
    {w: "George Washington", h: "Fundador"},

    // --- EMPRESARIOS Y NEGOCIOS ---
    {w: "Steve Jobs", h: "iPhone"},
    {w: "Bill Gates", h: "Windows"},
    {w: "Elon Musk", h: "Tesla"},
    {w: "Mark Zuckerberg", h: "Facebook"},
    {w: "Jeff Bezos", h: "Amazon"},
    {w: "Walt Disney", h: "Mickey"},
    {w: "Henry Ford", h: "Fábrica"},
    {w: "Mark Zuckerberg", h: "Meta"},
    {w: "Oprah Winfrey", h: "Talkshow"},
    {w: "Enzo Ferrari", h: "Rojo"},

    // --- ACTORES DE ÉLITE (Solo los más conocidos) ---
    {w: "Will Smith", h: "Bel-Air"},
    {w: "Angelina Jolie", h: "Lara Croft"},
    {w: "Brad Pitt", h: "Troya"},
    {w: "Arnold Schwarzenegger", h: "Terminator"},
    {w: "Jackie Chan", h: "Kung-Fu"},
    {w: "Bruce Lee", h: "Dragón"},
    {w: "Tom Cruise", h: "TopGun"},
    {w: "Johnny Depp", h: "Sparrow"},
    {w: "Marilyn Monroe", h: "Lunar"},
    {w: "Charles Chaplin", h: "Cine mudo"},
    {w: "Leonardo DiCaprio", h: "Titanic"},
    {w: "Robert Downey Jr", h: "Ironman"},
    {w: "Scarlett Johansson", h: "Natasha"},
    {w: "Keanu Reeves", h: "John Wick"},
    {w: "Sylvester Stallone", h: "Rocky"},
    {w: "Harrison Ford", h: "Indiana"},
    {w: "Jim Carrey", h: "Máscara"},
    {w: "Morgan Freeman", h: "Dios"},
    {w: "Dwayne Johnson", h: "Lucha"},
    {w: "Tom Hanks", h: "Forrest"},
    {w: "Al Pacino", h: "Scarface"},
    {w: "Robert De Niro", h: "Toro"},
    {w: "Antonio Banderas", h: "Zorro"},
    {w: "Vin Diesel", h: "Toretto"},
    {w: "Jennifer Aniston", h: "Rachel"},
    {w: "Margot Robbie", h: "Harley"},
    {w: "Heath Ledger", h: "Joker"},
    {w: "Emma Watson", h: "Hermione"},
    {w: "Daniel Radcliffe", h: "Potter"},
    {w: "Samuel L. Jackson", h: "Furia"},
    {w: "Rowan Atkinson", h: "Mr. Bean"},
    {w: "Hugh Jackman", h: "Lobezno"},
    {w: "Chris Hemsworth", h: "Thor"},
    {w: "Chris Evans", h: "Capitán"},
    {w: "Anthony Hopkins", h: "Lecter"},
    {w: "Nicolas Cage", h: "Ghost Rider"},
    {w: "Clint Eastwood", h: "Vaquero"},
    {w: "Jason Momoa", h: "Aquaman"},
    {w: "Gal Gadot", h: "Wonder"},
    {w: "Zendaya", h: "Euphoria"},
    {w: "Ryan Gosling", h: "Driver"},
    {w: "Meryl Streep", h: "Prada"},
    {w: "Whoopi Goldberg", h: "Ghost"},
    {w: "Danny DeVito", h: "Pingüino"},
    {w: "Ben Affleck", h: "Batman"},
    {w: "Adam Sandler", h: "Comedia"},
    {w: "Julia Roberts", h: "Pretty Woman"},
    {w: "John Travolta", h: "Grease"},
    {w: "Eddie Murphy", h: "Burro"},
    {w: "George Clooney", h: "Nespresso"}
],
    cine: [
    // --- 80 PELÍCULAS LEGENDARIAS ---
    {w: "Titanic", h: "Iceberg"},
    {w: "El Rey León", h: "Ciclo"},
    {w: "Avatar", h: "Azul"},
    {w: "Harry Potter", h: "Mago"},
    {w: "Star Wars", h: "Fuerza"},
    {w: "Batman", h: "Murciélago"},
    {w: "Spider-Man", h: "Telaraña"},
    {w: "Toy Story", h: "Vaquero"},
    {w: "Shrek", h: "Ogro"},
    {w: "Jurassic Park", h: "Dinosaurio"},
    {w: "Jaws", h: "Tiburón"},
    {w: "El Padrino", h: "Mafia"},
    {w: "Matrix", h: "Código"},
    {w: "Indiana Jones", h: "Arca"},
    {w: "Coco", h: "Muertos"},
    {w: "Frozen", h: "Libre"},
    {w: "Buscando a Nemo", h: "Pez"},
    {w: "Misión Imposible", h: "Espía"},
    {w: "El Joker", h: "Maquillaje"},
    {w: "Los Increíbles", h: "Súper"},
    {w: "Ratatouille", h: "Rata"},
    {w: "Up", h: "Casa"},
    {w: "La Bella y la Bestia", h: "Hechizo"},
    {w: "Cenicienta", h: "Hada"},
    {w: "Los Vengadores", h: "Gema"},
    {w: "Mi Pobre Angelito", h: "Navidad"},
    {w: "Grease", h: "Baile"},
    {w: "El Resplandor", h: "Hotel"},
    {w: "It", h: "Payaso"},
    {w: "Rocky", h: "Ring"},
    {w: "Rambo", h: "Guerra"},
    {w: "Terminator", h: "Futuro"},
    {w: "El Señor de los Anillos", h: "Anillo"},
    {w: "Piratas del Caribe", h: "Perla"},
    {w: "Cars", h: "Copa"},
    {w: "Madagascar", h: "Selva"},
    {w: "La Purga", h: "Máscaras"},
    {w: "Black Panther", h: "Pantera"},
    {w: "Braveheart", h: "Escocia"},
    {w: "Gladiador", h: "Coliseo"},
    {w: "King Kong", h: "Gorila"},
    {w: "Godzilla", h: "Monstruo"},
    {w: "Barbie", h: "Plástico"},
    {w: "Intensa-Mente", h: "Alegría"},
    {w: "Mi Villano Favorito", h: "Gru"},
    {w: "John Wick", h: "Venganza"},
    {w: "Saw", h: "Juego"},
    {w: "El Exorcista", h: "Posesión"},
    {w: "Pulp Fiction", h: "Hamburgesa"},
    {w: "Inception", h: "Sueño"},
    {w: "El Lobo de Wall Street", h: "Dinero"},
    {w: "Forrest Gump", h: "Caja"},
    {w: "Top Gun", h: "Aviones"},
    {w: "La La Land", h: "Piano"},
    {w: "Moana", h: "Isla"},
    {w: "Encanto", h: "Familia"},
    {w: "Kung Fu Panda", h: "Guerrero"},
    {w: "E.T.", h: "Bicicleta"},
    {w: "Back to the Future", h: "Auto"},
    {w: "El Grinch", h: "Verde"},
    {w: "Dune", h: "Especia"},
    {w: "Oppenheimer", h: "Átomo"},
    {w: "Interstellar", h: "Espacio"},
    {w: "Deadpool", h: "Rojo"},
    {w: "Iron Man", h: "Vuelo"},
    {w: "Super Mario Bros", h: "Princesa"},
    {w: "Sonic", h: "Veloz"},
    {w: "A Quiet Place", h: "Oreja"},
    {w: "Garfield", h: "Lunes"},
    {w: "Sing", h: "Canto"},
    {w: "Minions", h: "Amarillos"},
    {w: "The Flash", h: "Correr"},
    {w: "Aquaman", h: "Agua"},
    {w: "Psicosis", h: "Ducha"},
    {w: "El Silencio de los Inocentes", h: "Cena"},
    {w: "Sexto Sentido", h: "Fantasmas"},
    {w: "El Rey Escorpión", h: "Desierto"},
    {w: "Halloween", h: "Cuchillo"},
    {w: "Alien", h: "Nave"},
    {w: "Rápido y Furioso", h: "Carreras"},

    // --- 30 SERIES MUNDIALMENTE FAMOSAS ---
    {w: "Juego de Tronos", h: "Trono"},
    {w: "La Casa de Papel", h: "Atraco"},
    {w: "Stranger Things", h: "Once"},
    {w: "Los Simpson", h: "Dona"},
    {w: "Breaking Bad", h: "Química"},
    {w: "Better Call Saul", h: "Abogado"},
    {w: "The Walking Dead", h: "Zombi"},
    {w: "Grey's Anatomy", h: "Hospital"},
    {w: "Friends", h: "Sofá"},
    {w: "The Office", h: "Papel"},
    {w: "El Chavo del 8", h: "Vecindad"},
    {w: "Squid Game", h: "Muñeca"},
    {w: "Wednesday", h: "Manos"},
    {w: "The Mandalorian", h: "Bebé"},
    {w: "One Piece", h: "Piratas"},
    {w: "Naruto", h: "Ninja"},
    {w: "Dragon Ball Z", h: "Pelea"},
    {w: "The Crown", h: "Realeza"},
    {w: "Peaky Blinders", h: "Mafia"},
    {w: "Dark", h: "Tiempo"},
    {w: "The Boys", h: "Héroes"},
    {w: "The Last of Us", h: "Virus"},
    {w: "Cobra Kai", h: "Karate"},
    {w: "The Umbrella Academy", h: "Hermanos"},
    {w: "Euphoria", h: "Brillos"},
    {w: "Bridgerton", h: "Cartas"},
    {w: "Black Mirror", h: "Pantalla"},
    {w: "South Park", h: "Nieve"},
    {w: "Pokemon", h: "Esfera"},
    {w: "Dr. House", h: "Bastón"}
],
    marcas: [
        {w: "Nike", h: "Gancho"},
        {w: "Tigo", h: "Celular"},
        {w: "Claro", h: "Círculo"},
        {w: "Bancatlán", h: "Honduras"},
        {w: "Ficohsa", h: "Banco"},
        {w: "Diana", h: "Boquitas"},
        {w: "Zambos", h: "Tajaditas"},
        {w: "Leyde", h: "Leche"},
        {w: "Sula", h: "Jugo"},
        {w: "Salva Vida", h: "Cerveza"},
        {w: "Barena", h: "Dorada"},
        {w: "Hyundai", h: "H"},
        {w: "Nissan", h: "Japón"},
        {w: "Kia", h: "Corea"},
        {w: "Jeep", h: "Montaña"},
        {w: "Harley-Davidson", h: "Moto"},
        {w: "Yamaha", h: "Diapasones"},
        {w: "Shell", h: "Concha"},
        {w: "Texaco", h: "Estrella"},
        {w: "Pampers", h: "Bebé"},
        {w: "Huggies", h: "Pañal"},
        {w: "Barbie", h: "Muñeca"},
        {w: "Hot Wheels", h: "Carritos"},
        {w: "PlayStation", h: "Control"},
        {w: "Xbox", h: "X"},
        {w: "Intel", h: "Chip"},
        {w: "HP", h: "Computadora"},
        {w: "Dell", h: "Letra"},
        {w: "Canon", h: "Lente"},
        {w: "Nikon", h: "Foto"},
        {w: "Xiaomi", h: "China"},
        {w: "Huawei", h: "Flor"},
        {w: "Uber", h: "Viaje"},
        {w: "Airbnb", h: "Casa"},
        {w: "FedEx", h: "Caja"},
        {w: "DHL", h: "Amarillo"},
        {w: "Heineken", h: "Verde"},
        {w: "Corona", h: "México"},
        {w: "Nivea", h: "Crema"},
        {w: "Pantene", h: "Pelo"},
        {w: "Head & Shoulders", h: "Caspa"},
        {w: "Victoria's Secret", h: "Ángel"},
        {w: "Gucci", h: "G"},
        {w: "Prada", h: "Triángulo"},
        {w: "Hermès", h: "Carruaje"},
        {w: "Cartier", h: "Joyas"},
        {w: "Lacoste", h: "Cocodrilo"},
        {w: "Under Armour", h: "U"},
        {w: "Reebok", h: "Delta"},
        {w: "Converse", h: "Estrella"},
        {w: "Vans", h: "Patineta"}, // <-- AQUÍ FALTABA UNA COMA
        {w: "Coca-Cola", h: "Rojo"},
        {w: "Apple", h: "Mordisco"},
        {w: "McDonald's", h: "Arcos"},
        {w: "Google", h: "Colores"},
        {w: "Amazon", h: "Flecha"},
        {w: "Netflix", h: "N"},
        {w: "Facebook", h: "Azul"},
        {w: "Instagram", h: "Cámara"},
        {w: "WhatsApp", h: "Verde"},
        {w: "YouTube", h: "Botón"},
        {w: "Adidas", h: "Rayas"},
        {w: "Starbucks", h: "Sirena"},
        {w: "Disney", h: "Castillo"},
        {w: "Ferrari", h: "Caballo"},
        {w: "Pepsi", h: "Círculo"},
        {w: "Samsung", h: "Corea"},
        {w: "Toyota", h: "Óvalos"},
        {w: "Mercedes-Benz", h: "Estrella"},
        {w: "Microsoft", h: "Ventana"},
        {w: "Sony", h: "Japón"},
        {w: "Nintendo", h: "Consola"},
        {w: "Puma", h: "Felino"},
        {w: "Lego", h: "Bloque"},
        {w: "IKEA", h: "Mueble"},
        {w: "Rolex", h: "Corona"},
        {w: "Louis Vuitton", h: "Bolso"},
        {w: "Chanel", h: "Perfume"},
        {w: "Zara", h: "Moda"},
        {w: "H&M", h: "Ropa"},
        {w: "Burger King", h: "Corona"},
        {w: "KFC", h: "Coronel"},
        {w: "Subway", h: "Metro"},
        {w: "Pizza Hut", h: "Techo"},
        {w: "Ford", h: "Carro"},
        {w: "Audi", h: "Aros"},
        {w: "Tesla", h: "Rayo"},
        {w: "Twitter", h: "Pájaro"},
        {w: "TikTok", h: "Nota"},
        {w: "Spotify", h: "Ondas"},
        {w: "PayPal", h: "Pago"},
        {w: "Visa", h: "Tarjeta"},
        {w: "Mastercard", h: "Círculos"},
        {w: "Dove", h: "Paloma"},
        {w: "Colgate", h: "Dientes"},
        {w: "Red Bull", h: "Toro"},
        {w: "Monster", h: "Garra"},
        {w: "Gillette", h: "Navaja"},
        {w: "Nestlé", h: "Nido"},
        {w: "Nutella", h: "Avellana"}
    ],
    geografia: [
    {w: "París", h: "Torre Eiffel"},
    {w: "Egipto", h: "Pirámides"},
    {w: "Nueva York", h: "Estatua Libertad"},
    {w: "Roma", h: "Coliseo"},
    {w: "China", h: "Gran Muralla"},
    {w: "Londres", h: "Big Ben"},
    {w: "India", h: "Taj Mahal"},
    {w: "Brasil", h: "Cristo Redentor"},
    {w: "Machu Picchu", h: "Incas"},
    {w: "Pisa", h: "Torre Inclinada"},
    {w: "Japón", h: "Monte Fuji"},
    {w: "Venecia", h: "Góndolas"},
    {w: "Grecia", h: "Partenón"},
    {w: "Dubái", h: "Burj Khalifa"},
    {w: "México", h: "Chichén Itzá"},
    {w: "Australia", h: "Ópera de Sídney"},
    {w: "Moscú", h: "Plaza Roja"},
    {w: "Las Vegas", h: "Casinos"},
    {w: "Hollywood", h: "Letrero Blanco"},
    {w: "Barcelona", h: "Sagrada Familia"},
    {w: "Jerusalén", h: "Tierra Santa"},
    {w: "El Vaticano", h: "Papa"},
    {w: "San Francisco", h: "Golden Gate"},
    {w: "Ámsterdam", h: "Canales y Bicis"},
    {w: "Suiza", h: "Alpes"},
    {w: "Tailandia", h: "Templos y Elefantes"},
    {w: "Cataratas del Niágara", h: "Frontera Agua"},
    {w: "Gran Cañón", h: "Abismo Rojo"},
    {w: "Petra", h: "Ciudad de Piedra"},
    {w: "Pekín", h: "Ciudad Prohibida"},
    {w: "Berlín", h: "Puerta de Brandeburgo"},
    {w: "Atenas", h: "Acrópolis"},
    {w: "Turquía", h: "Globos Capadocia"},
    {w: "Hawái", h: "Volcanes y Hula"},
    {w: "Islandia", h: "Auroras Boreales"},
    {w: "Marruecos", h: "Desierto Sahara"},
    {w: "Argentina", h: "Cataratas Iguazú"},
    {w: "Canadá", h: "Montañas Rocosas"},
    {w: "Río de Janeiro", h: "Pan de Azúcar"},
    {w: "Singapur", h: "Hotel Marina Bay"},
    {w: "Pascua", h: "Estatuas Moái"},
    {w: "África", h: "Safari"},
    {w: "Corea del Sur", h: "Seúl"},
    {w: "Portugal", h: "Torre de Belém"},
    {w: "Estambul", h: "Santa Sofía"},
    {w: "Copenhague", h: "Sirenita"},
    {w: "Panamá", h: "Canal"},
    {w: "Everest", h: "Montaña Más Alta"},
    {w: "Amazonas", h: "Pulmón del Mundo"},
    {w: "Antártida", h: "Hielo y Pingüinos"}
]
};

// --- EL RESTO DEL CÓDIGO ---

let players = [], selectedCategory = '', secretWord = '', currentHint = '', impostors = [], currentPlayerIndex = 0, isWordRevealed = false, timerInterval = null;
let cfgImpostors = 1, cfgMinutes = 3;

function addPlayer() {
    const input = document.getElementById('playerNameInput');
    if (input.value.trim()) {
        players.push(input.value.trim());
        input.value = "";
        renderPlayers();
    }
}

function renderPlayers() {
    document.getElementById('namesList').innerHTML = players.map((p, i) => `
        <div class="stack-item"><span>${p}</span><button onclick="removePlayer(${i})" style="color:var(--danger); background:none; border:none; font-weight:800;">X</button></div>
    `).join('');
    document.getElementById('toStep2').classList.toggle('hidden', players.length < 3);
    document.getElementById('clearListBtn').classList.toggle('hidden', players.length === 0);
}

function removePlayer(i) { players.splice(i, 1); renderPlayers(); }
function clearAllPlayers() { players = []; renderPlayers(); }

function showStep(stepId) {
    document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
    document.getElementById(stepId).classList.remove('hidden');
    document.getElementById('backAction').classList.toggle('hidden', stepId === 'step1');
}

function goToStep2() { showStep('step2'); }
function goToStart() { if (timerInterval) clearInterval(timerInterval); showStep('step1'); }

function goBack() {
    if (!document.getElementById('step2').classList.contains('hidden')) showStep('step1');
    else if (!document.getElementById('stepSettings').classList.contains('hidden')) showStep('step2');
    else if (!document.getElementById('game').classList.contains('hidden')) showStep('stepSettings');
}

function selectCategory(cat) {
    selectedCategory = cat;
    cfgImpostors = 1; 
    document.getElementById('impVal').innerText = cfgImpostors;
    showStep('stepSettings');
}

function changeImpostors(val) {
    const maxImp = Math.max(1, Math.floor(players.length / 2)); 
    cfgImpostors = Math.max(1, Math.min(maxImp, cfgImpostors + val));
    document.getElementById('impVal').innerText = cfgImpostors;
}

function changeTime(val) {
    cfgMinutes = Math.max(1, Math.min(10, cfgMinutes + val));
    document.getElementById('timeVal').innerText = cfgMinutes;
}

function startGame() {
    let pool = [];
    if (selectedCategory === 'todas') {
        pool = Object.values(database).flat();
    } else {
        pool = database[selectedCategory];
    }
    
    if (!pool || pool.length === 0) return alert("Categoría vacía");
    
    const item = pool[Math.floor(Math.random() * pool.length)];
    secretWord = item.w;
    currentHint = item.h;

    impostors = [];
    let poolIndices = [...Array(players.length).keys()];
    for(let i=0; i<cfgImpostors; i++) {
        let randIdx = Math.floor(Math.random() * poolIndices.length);
        impostors.push(poolIndices.splice(randIdx, 1)[0]);
    }

    currentPlayerIndex = 0;
    showStep('game');
    updateTurnUI();
}

function updateTurnUI() {
    document.getElementById('turnTitle').innerText = players[currentPlayerIndex];
    document.getElementById('wordBox').classList.add('hidden');
    document.getElementById('mainBtn').innerText = "VER PALABRA";
    isWordRevealed = false;
}

function flow() {
    if (!isWordRevealed) {
        const isImp = impostors.includes(currentPlayerIndex);
        document.getElementById('secretWord').innerText = isImp ? "¡ERES EL IMPOSTOR!" : secretWord;
        document.getElementById('secretWord').style.color = isImp ? "var(--danger)" : "var(--accent)";
        
        // Se añade la condición: debe ser impostor Y las pistas deben estar activadas
        const mostrarPista = isImp && document.getElementById('hintToggle').checked;
        document.getElementById('hintArea').classList.toggle('hidden', !mostrarPista);
        
        document.getElementById('hintText').innerText = currentHint;
        document.getElementById('wordBox').classList.remove('hidden');
        document.getElementById('mainBtn').innerText = "ENTENDIDO";
        isWordRevealed = true;
    } else {
        currentPlayerIndex++;
        if (currentPlayerIndex < players.length) updateTurnUI();
        else startDebate();
    }
}

function startDebate() {
    showStep('finish');
    const starter = players[Math.floor(Math.random() * players.length)];
    document.getElementById('whoStarts').innerHTML = `🎙️ INICIA LA RONDA: <br><span style="color:var(--accent); font-size:1.5rem;">${starter}</span>`;
    document.getElementById('impostorResult').classList.add('hidden');
    document.getElementById('endOptions').classList.add('hidden');
    document.getElementById('revealBtn').classList.remove('hidden');
    document.getElementById('timerDisplay').innerText = `${cfgMinutes}:00`;
    startTimer(cfgMinutes * 60);
}

function startTimer(seconds) {
    if (timerInterval) clearInterval(timerInterval);
    let t = seconds;
    timerInterval = setInterval(() => {
        let m = Math.floor(t / 60), s = t % 60;
        document.getElementById('timerDisplay').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        if (--t < 0) clearInterval(timerInterval);
    }, 1000);
}

function revealImpostor() {
    const names = impostors.map(idx => players[idx]).join(", ");
    document.getElementById('impostorName').innerText = names;
    document.getElementById('impostorResult').classList.remove('hidden');
    document.getElementById('endOptions').classList.remove('hidden');
    document.getElementById('revealBtn').classList.add('hidden');
    document.getElementById('whoStarts').innerHTML = "";
    if (timerInterval) clearInterval(timerInterval);
}

function newRound() { showStep('step2'); }

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});