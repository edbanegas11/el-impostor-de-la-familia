const database = {
    biblia: [
        {w:"Adán",h:"Origen"},{w:"Eva",h:"Curiosidad"},{w:"Noé",h:"Supervivencia"},{w:"Moisés",h:"Liderazgo"},{w:"David",h:"Valentía"},{w:"Goliat",h:"Inmenso"},{w:"Salomón",h:"Juicio"},{w:"Jonás",h:"Desobediencia"},{w:"Sansón",h:"Vulnerabilidad"},{w:"Pedro",h:"Impulsivo"},{w:"Pablo",h:"Transformación"},{w:"Judas",h:"Codicia"},{w:"Lázaro",h:"Despertar"},{w:"María",h:"Escogida"},{w:"José",h:"Soñador"},{w:"Ester",h:"Intercesión"},{w:"Job",h:"Resistencia"},{w:"Daniel",h:"Integridad"},{w:"Gedeón",h:"Duda"},{w:"Rut",h:"Extranjera"},{w:"Jerusalén",h:"Destino"},{w:"Egipto",h:"Pasado"},{w:"Río Jordán",h:"Tránsito"},{w:"Bebé Moisés",h:"Protección"},{w:"Maná",h:"Sustento"},{w:"Sinaí",h:"Encuentro"},{w:"Arca Alianza",h:"Presencia"},{w:"Diluvio",h:"Juicio"},{w:"Torre Babel",h:"Ambición"},{w:"Sodoma",h:"Corrupción"},{w:"Abraham",h:"Distancia"},{w:"Isaac",h:"Entrega"},{w:"Jacob",h:"Suplantador"},{w:"Esaú",h:"Necesidad"},{w:"Samuel",h:"Escucha"},{w:"Saúl",h:"Apariencia"},{w:"Absalón",h:"Vanidad"},{w:"Elías",h:"Fervor"},{w:"Eliseo",h:"Sucesión"},{w:"Juan Bautista",h:"Anuncio"},{w:"Zaqueo",h:"Búsqueda"},{w:"Nicodemo",h:"Duda"},{w:"Marta",h:"Distracción"},{w:"Miriam",h:"Ritmo"},{w:"Belén",h:"Humildad"},{w:"Nazaret",h:"Cotidianidad"},{w:"Getsemaní",h:"Agonía"},{w:"Gólgota",h:"Final"},{w:"Mar Rojo",h:"Liberación"},{w:"Muro Jericó",h:"Estrategia"},{w:"Manzana",h:"Atractivo"},{w:"Serpiente",h:"Astucia"},{w:"Paloma",h:"Paz"},{w:"Cuervo",h:"Provisión"},{w:"Oveja",h:"Guía"},{w:"Cáliz",h:"Destino"},{w:"Cruz",h:"Instrumento"},{w:"Corona Espinas",h:"Sufrimiento"},{w:"Clavos",h:"Sujeción"},{w:"Sepulcro",h:"Silencio"},{w:"Ascensión",h:"Retorno"},{w:"Pentecostés",h:"Poder"},{w:"Apocalipsis",h:"Futuro"},{w:"Edén",h:"Perfección"},{w:"Débora",h:"Dirección"},{w:"Dalila",h:"Debilidad"},{w:"Herodes",h:"Celos"},{w:"Pilato",h:"Neutralidad"},{w:"Barrabás",h:"Sustitución"},{w:"Esteban",h:"Perdón"},{w:"Lucas",h:"Detalle"},{w:"Mateo",h:"Cambio"},{w:"Marcos",h:"Brevedad"},{w:"Juan",h:"Cercanía"},{w:"Timoteo",h:"Legado"},{w:"Silas",h:"Apoyo"},{w:"Barnabé",h:"Motivación"},{w:"Cornelio",h:"Apertura"},{w:"Lidia",h:"Influencia"},{w:"Priscila",h:"Hospitalidad"},{w:"Matusalén",h:"Tiempo"},{w:"Enoc",h:"Caminata"},{w:"Melquisedec",h:"Misterio"},{w:"Josué",h:"Herencia"},{w:"Rahab",h:"Oportunidad"},{w:"Booz",h:"Bondad"},{w:"Ana",h:"Persistencia"},{w:"Betania",h:"Hogar"},{w:"Caná",h:"Alegría"},{w:"Cofre",h:"Valor"},{w:"Talento",h:"Responsabilidad"},{w:"Lámpara",h:"Visión"},{w:"Trigo",h:"Cosecha"},{w:"Sal de tierra",h:"Influencia"},{w:"Luz mundo",h:"Guía"},{w:"Buen Pastor",h:"Cuidado"},{w:"Vid verdadera",h:"Conexión"},{w:"Alfa y Omega",h:"Totalidad"},{w:"Armagedón",h:"Conflicto"},{w:"Cielo",h:"Promesa"}
    ],
    comida: [
        {w:"Pizza",h:"Capas"},{w:"Hamburguesa",h:"Apilado"},{w:"Sushi",h:"Enrollado"},{w:"Pasta",h:"Extensión"},{w:"Tacos",h:"Envoltura"},{w:"Ensalada",h:"Mezcla"},{w:"Helado",h:"Fusión"},{w:"Chocolate",h:"Tentación"},{w:"Arroz",h:"Granulado"},{w:"Pollo Frito",h:"Crocante"},{w:"Sopa",h:"Fluidez"},{w:"Huevo",h:"Frágil"},{w:"Pan",h:"Básico"},{w:"Queso",h:"Maduración"},{w:"Manzana",h:"Fritura"},{w:"Banana",h:"Curvatura"},{w:"Filete",h:"Corte"},{w:"Pescado",h:"Escamas"},{w:"Palomitas",h:"Expansión"},{w:"Donas",h:"Vacio central"},{w:"Café",h:"Estimulante"},{w:"Té",h:"Infusión"},{w:"Leche",h:"Origen"},{w:"Mantequilla",h:"Untable"},{w:"Miel",h:"Viscosidad"},{w:"Limón",h:"Acidez"},{w:"Chile",h:"Intensidad"},{w:"Sal",h:"Cristalino"},{w:"Azúcar",h:"Dulzura"},{w:"Cebolla",h:"Lágrimas"},{w:"Ajo",h:"Aroma"},{w:"Papa",h:"Tubérculo"},{w:"Zanahoria",h:"Colorido"},{w:"Brócoli",h:"Ramificado"},{w:"Sandía",h:"Hidratación"},{w:"Uvas",h:"Racimo"},{w:"Fresa",h:"Semillas externas"},{w:"Naranja",h:"Gajos"},{w:"Piña",h:"Áspero"},{w:"Aguacate",h:"Cremoso"},{w:"Bacón",h:"Ahumado"},{w:"Salchicha",h:"Embutido"},{w:"Yogur",h:"Fermentación"},{w:"Cereal",h:"Mañana"},{w:"Galletas",h:"Porción"},{w:"Pastel",h:"Celebración"},{w:"Gelatina",h:"Vibración"},{w:"Aceitunas",h:"Salino"},{w:"Nueces",h:"Cáscara"},{w:"Almendras",h:"Alargado"},{w:"Camarones",h:"Curvo"},{w:"Langosta",h:"Pinzas"},{w:"Paella",h:"Sartén"},{w:"Lasaña",h:"Niveles"},{w:"Ramen",h:"Caldo"},{w:"Burrito",h:"Cilindro"},{w:"Nachos",h:"Triangular"},{w:"Hot Dog",h:"Alargado"},{w:"Panqueques",h:"Disco"},{w:"Waffles",h:"Cuadriculado"},{w:"Churros",h:"Estriado"},{w:"Papas Fritas",h:"Bastones"},{w:"Puré",h:"Textura"},{w:"Albóndigas",h:"Esférico"},{w:"Lentejas",h:"Pequeño"},{w:"Garbanzos",h:"Dureza"},{w:"Frijoles",h:"Semilla"},{w:"Maíz",h:"Dientes"},{w:"Champiñones",h:"Hongo"},{w:"Espinacas",h:"Verdor"},{w:"Pepino",h:"Fresco"},{w:"Tomate",h:"Jugo"},{w:"Ketchup",h:"Condimento"},{w:"Mayonesa",h:"Emulsión"},{w:"Mostaza",h:"Picante suave"},{w:"Vino",h:"Uva"},{w:"Cerveza",h:"Espuma"},{w:"Refresco",h:"Efervescencia"},{w:"Agua",h:"Transparencia"},{w:"Jugo",h:"Extracción"},{w:"Coco",h:"Duro"},{w:"Mango",h:"Fibroso"},{w:"Melón",h:"Redondez"},{w:"Pera",h:"Silueta"},{w:"Ciruela",h:"Hueso"},{w:"Durazno",h:"Terciopelo"},{w:"Cereza",h:"Par"},{w:"Arándanos",h:"Pequeño azul"},{w:"Kiwi",h:"Velloso"},{w:"Pimiento",h:"Hueco"},{w:"Berenjena",h:"Púrpura"},{w:"Calabaza",h:"Otoño"},{w:"Pavo",h:"Festivo"},{w:"Jamón",h:"Curado"},{w:"Costillas",h:"Estructura"},{w:"Chuleta",h:"Hueso lateral"},{w:"Salmón",h:"Rosado"},{w:"Atún",h:"Lata"},{w:"Sardinas",h:"Pequeño"},{w:"Pulpo",h:"Tentáculos"}
    ],
    profesiones: [
        {w:"Médico",h:"Cuidado"},{w:"Policía",h:"Orden"},{w:"Bombero",h:"Riesgo"},{w:"Chef",h:"Sabor"},{w:"Arquitecto",h:"Espacios"},{w:"Abogado",h:"Normas"},{w:"Músico",h:"Frecuencia"},{w:"Pintor",h:"Pigmento"},{w:"Astronauta",h:"Lejanía"},{w:"Científico",h:"Método"},{w:"Juez",h:"Veredicto"},{w:"Piloto",h:"Altitud"},{w:"Veterinario",h:"Silencio"},{w:"Maestro",h:"Transmisión"},{w:"Actor",h:"Máscara"},{w:"Bailarín",h:"Movimiento"},{w:"Periodista",h:"Suceso"},{w:"Programador",h:"Lógica"},{w:"Carpintero",h:"Fibra"},{w:"Mecánico",h:"Ajuste"},{w:"Fotógrafo",h:"Captura"},{w:"Electricista",h:"Flujo"},{w:"Panadero",h:"Levadura"},{w:"Barbero",h:"Estética"},{w:"Granjero",h:"Ciclo"},{w:"Minero",h:"Profundidad"},{w:"Escultor",h:"Volumen"},{w:"Escritor",h:"Narrativa"},{w:"Psicólogo",h:"Conducta"},{w:"Dentista",h:"Precisión"},{w:"Enfermero",h:"Asistencia"},{w:"Arqueólogo",h:"Reliquia"},{w:"Diseñador",h:"Concepto"},{w:"Ingeniero",h:"Solución"},{w:"Bibliotecario",h:"Archivo"},{w:"Detective",h:"Rastro"},{w:"Atleta",h:"Rendimiento"},{w:"Soldado",h:"Disciplina"},{w:"Sacerdote",h:"Guía"},{w:"Traductor",h:"Puente"},{w:"Vigilante",h:"Atención"},{w:"Mesero",h:"Atención"},{w:"Cartero",h:"Entrega"},{w:"Peluquero",h:"Corte"},{w:"Costurero",h:"Unión"},{w:"Joyero",h:"Brillo"},{w:"Salvavidas",h:"Vigilancia"},{w:"Cajero",h:"Transacción"},{w:"Albañil",h:"Cimentación"},{w:"Fontanero",h:"Conducto"},{w:"Azafata",h:"Servicio"},{w:"Economista",h:"Cifras"},{w:"Político",h:"Discurso"},{w:"Filósofo",h:"Duda"},{w:"Jardinero",h:"Crecimiento"},{w:"Pescador",h:"Paciencia"},{w:"Cazador",h:"Rastreo"},{w:"Cocinero",h:"Preparación"},{w:"Modista",h:"Silueta"},{w:"Maquillista",h:"Superficie"},{w:"Zapatero",h:"Suela"},{w:"Taxista",h:"Ruta"},{w:"Camionero",h:"Carga"},{w:"Entrenador",h:"Estrategia"},{w:"Modelo",h:"Pose"},{w:"Diplomático",h:"Acuerdo"},{w:"Contador",h:"Balance"},{w:"Sociólogo",h:"Grupo"},{w:"Geólogo",h:"Estrato"},{w:"Biólogo",h:"Muestra"},{w:"Químico",h:"Reacción"},{w:"Físico",h:"Energía"},{w:"Matemático",h:"Abstracción"},{w:"Historiador",h:"Memoria"},{w:"Geógrafo",h:"Relieve"},{w:"Ecologista",h:"Entorno"},{w:"Meteorólogo",h:"Predicción"},{w:"Locutor",h:"Emisión"},{w:"Editor",h:"Corrección"},{w:"Director",h:"Visión"},{w:"Secretario",h:"Orden"},{w:"Recepcionista",h:"Bienvenida"},{w:"Conserje",h:"Mantenimiento"},{w:"Vendedor",h:"Persuasión"},{w:"Empresario",h:"Inversión"},{w:"Inversor",h:"Riesgo"},{w:"Consultor",h:"Consejo"},{w:"Cerrajero",h:"Acceso"},{w:"Afilador",h:"Filo"},{w:"Tapicero",h:"Recubrimiento"},{w:"Relojero",h:"Engranaje"},{w:"Encuestador",h:"Dato"},{w:"Marinero",h:"Navegación"},{w:"Soldador",h:"Fusión"}
    ],
    lugares: [
        {w:"París",h:"Icono"},{w:"Egipto",h:"Eternidad"},{w:"Roma",h:"Antigüedad"},{w:"Tokio",h:"Neón"},{w:"Nueva York",h:"Vertical"},{w:"Londres",h:"Niebla"},{w:"China",h:"Muralla"},{w:"Brasil",h:"Ritmo"},{w:"México",h:"Color"},{w:"España",h:"Pasión"},{w:"Italia",h:"Arte"},{w:"Francia",h:"Estilo"},{w:"Alemania",h:"Estructura"},{w:"Grecia",h:"Origen"},{w:"Rusia",h:"Frio"},{w:"India",h:"Contraste"},{w:"Australia",h:"Aislamiento"},{w:"Canadá",h:"Extensión"},{w:"Argentina",h:"Sur"},{w:"Chile",h:"Cordillera"},{w:"Colombia",h:"Aroma"},{w:"Perú",h:"Altura"},{w:"Vaticano",h:"Soberanía"},{w:"Jerusalén",h:"Fe"},{w:"Amazonas",h:"Verdor"},{w:"Sahara",h:"Vacío"},{w:"Antártida",h:"Blanco"},{w:"Everest",h:"Cúspide"},{w:"Gran Cañón",h:"Erosión"},{w:"Cataratas",h:"Caída"},{w:"Playas",h:"Costa"},{w:"Montañas",h:"Relieve"},{w:"Desiertos",h:"Sed"},{w:"Selvas",h:"Densidad"},{w:"Bosques",h:"Sombra"},{w:"Islas",h:"Rodeado"},{w:"Cuevas",h:"Eco"},{w:"Volcanes",h:"Calor"},{w:"Glaciares",h:"Hielo"},{w:"Lagos",h:"Calma"},{w:"Ríos",h:"Corriente"},{w:"Océanos",h:"Inmensidad"},{w:"Ciudades",h:"Ruido"},{w:"Pueblos",h:"Cercanía"},{w:"Granjas",h:"Cosecha"},{w:"Castillos",h:"Fortaleza"},{w:"Templos",h:"Silencio"},{w:"Pirámides",h:"Triángulo"},{w:"Museos",h:"Exposición"},{w:"Parques",h:"Recreo"},{w:"Zoológicos",h:"Cautiverio"},{w:"Acuarios",h:"Cristal"},{w:"Estadios",h:"Grito"},{w:"Teatros",h:"Escena"},{w:"Cines",h:"Proyección"},{w:"Bibliotecas",h:"Páginas"},{w:"Hospitales",h:"Cura"},{w:"Escuelas",h:"Aula"},{w:"Universidades",h:"Saber"},{w:"Aeropuertos",h:"Escala"},{w:"Puertos",h:"Arribo"},{w:"Estaciones",h:"Vía"},{w:"Puentes",h:"Vínculo"},{w:"Túneles",h:"Oscuro"},{w:"Carreteras",h:"Asfalto"},{w:"Calles",h:"Paso"},{w:"Plazas",h:"Encuentro"},{w:"Mercados",h:"Oferta"},{w:"Centros Comerciales",h:"Consumo"},{w:"Restaurantes",h:"Menú"},{w:"Hoteles",h:"Hospedaje"},{w:"Casas",h:"Refugio"},{w:"Apartamentos",h:"Altura"},{w:"Oficinas",h:"Labor"},{w:"Fábricas",h:"Producción"},{w:"Minas",h:"Extracción"},{w:"Cárceles",h:"Muro"},{w:"Iglesias",h:"Campana"},{w:"Cementerios",h:"Final"},{w:"Faros",h:"Destello"},{w:"Molinos",h:"Viento"},{w:"Presas",h:"Contención"},{w:"Observatorios",h:"Lente"},{w:"Laboratorios",h:"Ensayo"},{w:"Campamentos",h:"Fogata"},{w:"Balnearios",h:"Relajo"},{w:"Gimnasios",h:"Esfuerzo"},{w:"Peluquerías",h:"Estética"},{w:"Farmacias",h:"Dosis"},{w:"Panaderías",h:"Horno"},{w:"Supermercados",h:"Pasillo"},{w:"Bancos",h:"Caja"},{w:"Gasolineras",h:"Surtidor"},{w:"Lavanderías",h:"Giro"},{w:"Talleres",h:"Reparación"},{w:"Estacionamientos",h:"Lugar"},{w:"Ferias",h:"Juego"},{w:"Circos",h:"Carpa"},{w:"Discotecas",h:"Luces"},{w:"Bares",h:"Barra"}
    ],
    objetos: [
        {w:"Reloj",h:"Ritmo"},{w:"Teléfono",h:"Señal"},{w:"Computadora",h:"Proceso"},{w:"Libro",h:"Trama"},{w:"Lápiz",h:"Trazo"},{w:"Gafas",h:"Enfoque"},{w:"Llave",h:"Giro"},{w:"Candado",h:"Cierre"},{w:"Cuchillo",h:"Filo"},{w:"Tenedor",h:"Puntas"},{w:"Cuchara",h:"Cóncavo"},{w:"Plato",h:"Base"},{w:"Vaso",h:"Contenedor"},{w:"Botella",h:"Cuello"},{w:"Silla",h:"Soporte"},{w:"Mesa",h:"Superficie"},{w:"Cama",h:"Descanso"},{w:"Sofá",h:"Confort"},{w:"Lámpara",h:"Radiación"},{w:"Espejo",h:"Reflejo"},{w:"Ventana",h:"Trasparencia"},{w:"Puerta",h:"Umbral"},{w:"Martillo",h:"Impacto"},{w:"Tornillo",h:"Espiral"},{w:"Clavo",h:"Punta"},{w:"Sierra",h:"Dientes"},{w:"Pincel",h:"Cerdas"},{w:"Cámara",h:"Lente"},{w:"Paraguas",h:"Cúpula"},{w:"Bolsa",h:"Espacio"},{w:"Cartera",h:"Resguardo"},{w:"Moneda",h:"Metal"},{w:"Billete",h:"Papel"},{w:"Tarjeta",h:"Banda"},{w:"Reloj de arena",h:"Flujo"},{w:"Brújula",h:"Norte"},{w:"Mapa",h:"Guía"},{w:"Globo terráqueo",h:"Esfera"},{w:"Bandera",h:"Símbolo"},{w:"Escudo",h:"Defensa"},{w:"Espada",h:"Acero"},{w:"Arco",h:"Tensión"},{w:"Flecha",h:"Vuelo"},{w:"Guitarra",h:"Cuerdas"},{w:"Piano",h:"Teclas"},{w:"Tambor",h:"Membrana"},{w:"Flauta",h:"Agujeros"},{w:"Violín",h:"Arco"},{w:"Trompeta",h:"Latón"},{w:"Micrófono",h:"Captura"},{w:"Altavoz",h:"Ondas"},{w:"Audífonos",h:"Privado"},{w:"Televisor",h:"Pantalla"},{w:"Radio",h:"Frecuencia"},{w:"Cámara de fotos",h:"Instante"},{w:"Linterna",h:"Haz"},{w:"Batería",h:"Carga"},{w:"Cable",h:"Enlace"},{w:"Enchufe",h:"Contacto"},{w:"Bombilla",h:"Filamento"},{w:"Ventilador",h:"Giro"},{w:"Aire acondicionado",h:"Grados"},{w:"Estufa",h:"Combustión"},{w:"Horno",h:"Calor"},{w:"Microondas",h:"Ondas"},{w:"Nevera",h:"Frío"},{w:"Lavadora",h:"Centrífugo"},{w:"Plancha",h:"Presión"},{w:"Aspiradora",h:"Succión"},{w:"Escoba",h:"Fricción"},{w:"Trapeador",h:"Humedad"},{w:"Cubo",h:"Volumen"},{w:"Tijeras",h:"Eje"},{w:"Pegamento",h:"Adherencia"},{w:"Cinta",h:"Rollo"},{w:"Papel",h:"Lámina"},{w:"Cuaderno",h:"Hojas"},{w:"Bolígrafo",h:"Tinta"},{w:"Goma",h:"Borrado"},{w:"Regla",h:"Rectitud"},{w:"Compás",h:"Radio"},{w:"Calculadora",h:"Cifras"},{w:"Diccionario",h:"Término"},{w:"Periódico",h:"Noticia"},{w:"Revista",h:"Imagen"},{w:"Sobre",h:"Resguardo"},{w:"Sello",h:"Marca"},{w:"Paquete",h:"Envío"},{w:"Caja",h:"Cubo"},{w:"Cesta",h:"Tejido"},{w:"Bolsa de basura",h:"Residuo"},{w:"Escalera",h:"Peldaño"},{w:"Cuerda",h:"Tensión"},{w:"Cadena",h:"Eslabón"},{w:"Ancla",h:"Peso"},{w:"Timón",h:"Rumbo"},{w:"Remo",h:"Impulso"},{w:"Vela",h:"Cera"},{w:"Fósforo",h:"Fuego"},{w:"Encendedor",h:"Chispa"}
    ],
    peliculas: [
        {w:"Titanic",h:"Hielo"},{w:"Star Wars",h:"Galaxia"},{w:"Harry Potter",h:"Varita"},{w:"El Padrino",h:"Familia"},{w:"Jurassic Park",h:"ADN"},{w:"Avatar",h:"Color"},{w:"Matrix",h:"Simulación"},{w:"El Rey León",h:"Ciclo"},{w:"Toy Story",h:"Plástico"},{w:"Batman",h:"Sombra"},{w:"Spider-Man",h:"Red"},{w:"Iron Man",h:"Armadura"},{w:"Avengers",h:"Grupo"},{w:"Frozen",h:"Nieve"},{w:"Coco",h:"Recuerdo"},{w:"Shrek",h:"Verde"},{w:"Joker",h:"Risa"},{w:"Gladiador",h:"Arena"},{w:"Inception",h:"Sueño"},{w:"Interstellar",h:"Tiempo"},{w:"Pulp Fiction",h:"Diálogo"},{w:"Forrest Gump",h:"Carrera"},{w:"Up",h:"Vuelo"},{w:"Buscando a Nemo",h:"Corriente"},{w:"Los Increíbles",h:"Traje"},{w:"Ratatouille",h:"Gusto"},{w:"Cars",h:"Velocidad"},{w:"Monsters Inc",h:"Grito"},{w:"Wall-E",h:"Chatarra"},{w:"El Señor de los Anillos",h:"Círculo"},{w:"El Hobbit",h:"Viaje"},{w:"Crepúsculo",h:"Brillo"},{w:"Los Juegos del Hambre",h:"Supervivencia"},{w:"Divergente",h:"Facción"},{w:"Maze Runner",h:"Salida"},{w:"Transformers",h:"Metal"},{w:"Rápido y Furioso",h:"Nitro"},{w:"Misión Imposible",h:"Riesgo"},{w:"James Bond",h:"Agente"},{w:"Sherlock Holmes",h:"Deducción"},{w:"Indiana Jones",h:"Látigo"},{w:"Piratas del Caribe",h:"Brújula"},{w:"Mad Max",h:"Arena"},{w:"Blade Runner",h:"Réplica"},{w:"Alien",h:"Espacio"},{w:"Depredador",h:"Caza"},{w:"Terminator",h:"Futuro"},{w:"Robocop",h:"Ley"},{w:"Rambo",h:"Guerra"},{w:"Rocky",h:"Guante"},{w:"Karate Kid",h:"Equilibrio"},{w:"Jumanji",h:"Turno"},{w:"Ghostbusters",h:"Espectro"},{w:"Back to the Future",h:"Energía"},{w:"E.T.",h:"Dedo"},{w:"Gremlins",h:"Reglas"},{w:"El Exorcista",h:"Posesión"},{w:"It",h:"Globo"},{w:"Saw",h:"Juego"},{w:"Scream",h:"Voz"},{w:"Halloween",h:"Máscara"},{w:"Psicosis",h:"Ducha"},{w:"El Resplandor",h:"Pasillo"},{w:"Carrie",h:"Baile"},{w:"El Silencio de los Inocentes",h:"Bozal"},{w:"Seven",h:"Pecado"},{w:"Zodiac",h:"Cifrado"},{w:"Parasite",h:"Sótano"},{w:"La La Land",h:"Baile"},{w:"Mamma Mia",h:"Canción"},{w:"Grease",h:"Peinado"},{w:"Bohemian Rhapsody",h:"Escenario"},{w:"A Star Is Born",h:"Fama"},{w:"El Gran Showman",h:"Espectáculo"},{w:"Moulin Rouge",h:"Rojo"},{w:"Chicago",h:"Jazz"},{w:"Mary Poppins",h:"Bolso"},{w:"El Mago de Oz",h:"Camino"},{w:"Alicia en el País de las Maravillas",h:"Té"},{w:"Cenicienta",h:"Zapatilla"},{w:"Blancanieves",h:"Espejo"},{w:"La Bella y la Bestia",h:"Rosa"},{w:"Aladdin",h:"Lámpara"},{w:"La Sirenita",h:"Voz"},{w:"Mulan",h:"Honor"},{w:"Pocahontas",h:"Viento"},{w:"Hércules",h:"Fuerza"},{w:"Tarzán",h:"Liana"},{w:"Lilo & Stitch",h:"Familia"},{w:"Moana",h:"Océano"},{w:"Encanto",h:"Vela"},{w:"Raya",h:"Gema"},{w:"Soul",h:"Propósito"},{w:"Luca",h:"Agua"},{w:"Red",h:"Cambio"},{w:"Lightyear",h:"Misión"},{w:"Spider-Verse",h:"Estilo"},{w:"Minions",h:"Amarillo"}
    ],
    animales: [
        {w:"León",h:"Melena"},{w:"Tigre",h:"Rayas"},{w:"Elefante",h:"Memoria"},{w:"Jirafa",h:"Altura"},{w:"Cebra",h:"Contraste"},{w:"Hipopótamo",h:"Inmersión"},{w:"Rinoceronte",h:"Cuerno"},{w:"Guepardo",h:"Velocidad"},{w:"Lobo",h:"Aullido"},{w:"Zorro",h:"Astucia"},{w:"Oso",h:"Hibernación"},{w:"Panda",h:"Bambú"},{w:"Koala",h:"Eucalipto"},{w:"Canguro",h:"Salto"},{w:"Ornitorrinco",h:"Extraño"},{w:"Mono",h:"Agilidad"},{w:"Gorila",h:"Fuerza"},{w:"Chimpancé",h:"Inteligencia"},{w:"Lemur",h:"Cola"},{w:"Perezoso",h:"Lentitud"},{w:"Águila",h:"Visión"},{w:"Halcón",h:"Picada"},{w:"Búho",h:"Giro"},{w:"Loro",h:"Repetición"},{w:"Pavo Real",h:"Abanico"},{w:"Flamenco",h:"Equilibrio"},{w:"Pingüino",h:"Frío"},{w:"Avestruz",h:"Velocidad"},{w:"Colibrí",h:"Vibración"},{w:"Cisne",h:"Elegancia"},{w:"Pato",h:"Plumaje"},{w:"Ganso",h:"Migración"},{w:"Pelícano",h:"Bolsa"},{w:"Gaviota",h:"Vuelo"},{w:"Cuervo",h:"Negro"},{w:"Paloma",h:"Mensaje"},{w:"Tiburón",h:"Aleta"},{w:"Ballena",h:"Canto"},{w:"Delfín",h:"Eco"},{w:"Pulpo",h:"Tinta"},{w:"Calamar",h:"Profundo"},{w:"Medusa",h:"Transparente"},{w:"Caballito de Mar",h:"Curva"},{w:"Estrella de Mar",h:"Brazos"},{w:"Cangrejo",h:"Pinzas"},{w:"Langosta",h:"Caparazón"},{w:"Caracol",h:"Espiral"},{w:"Tortuga",h:"Longevidad"},{w:"Cocodrilo",h:"Mandíbula"},{w:"Serpiente",h:"Escamas"},{w:"Lagarto",h:"Cola"},{w:"Camaleón",h:"Cambio"},{w:"Rana",h:"Salto"},{w:"Sapo",h:"Rugoso"},{w:"Salamandra",h:"Humedad"},{w:"Perro",h:"Lealtad"},{w:"Gato",h:"Independencia"},{w:"Caballo",h:"Galope"},{w:"Vaca",h:"Pasto"},{w:"Toro",h:"Embestida"},{w:"Oveja",h:"Lana"},{w:"Cabra",h:"Escalada"},{w:"Cerdo",h:"Lodo"},{w:"Burro",h:"Carga"},{w:"Conejo",h:"Orejas"},{w:"Hamster",h:"Rueda"},{w:"Ratón",h:"Pequeño"},{w:"Rata",h:"Alcantarilla"},{w:"Ardilla",h:"Nuez"},{w:"Castor",h:"Diente"},{w:"Comadreja",h:"Rápido"},{w:"Hurón",h:"Flexible"},{w:"Murciélago",h:"Radar"},{w:"Abeja",h:"Colmena"},{w:"Avispa",h:"Aguijón"},{w:"Hormiga",h:"Carga"},{w:"Termita",h:"Madera"},{w:"Mariposa",h:"Vuelo"},{w:"Polilla",h:"Luz"},{w:"Libélula",h:"Doble"},{w:"Escarabajo",h:"Duro"},{w:"Mariquita",h:"Puntos"},{w:"Saltamontes",h:"Verde"},{w:"Grillo",h:"Sonido"},{w:"Cigarra",h:"Verano"},{w:"Mantis",h:"Postura"},{w:"Araña",h:"Tela"},{w:"Escorpión",h:"Cola"},{w:"Ciempiés",h:"Patas"},{w:"Gusano",h:"Suelo"},{w:"Mosca",h:"Zumbido"},{w:"Mosquito",h:"Picadura"},{w:"Pulga",h:"Salto"},{w:"Garrapata",h:"Sujeción"},{w:"Piojo",h:"Cabeza"},{w:"Alacrán",h:"Veneno"},{w:"Camello",h:"Jiba"},{w:"Alpaca",h:"Suave"}
    ]
};

let players = [];
let selectedCategory = '';
let impostorCount = 1;
let gameTime = 3;
let showImpostorHint = true;
let gameData = [];
let turnIndex = 0;
let phase = 'REVEAL';
let timerInterval;

// Navegación
function showStep(id) {
    document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('backAction').classList.toggle('hidden', id === 'step1');
}

function cancelGame() {
    clearInterval(timerInterval);
    showStep('step1');
}

// Jugadores
function addPlayer() {
    const input = document.getElementById('playerNameInput');
    const name = input.value.trim();
    if (name !== "") {
        players.push(name);
        input.value = "";
        updatePlayerList();
        if (players.length >= 3) document.getElementById('toStep2').classList.remove('hidden');
    }
}

function updatePlayerList() {
    const list = document.getElementById('namesList');
    list.innerHTML = "";
    players.forEach((p, idx) => {
        const div = document.createElement('div');
        div.className = 'stack-item';
        div.innerHTML = `<span>${p}</span><button onclick="removePlayer(${idx})" style="background:none;border:none;color:#ef4444;font-size:1.5rem;">×</button>`;
        list.appendChild(div);
    });
}

function removePlayer(idx) {
    players.splice(idx, 1);
    updatePlayerList();
    if (players.length < 3) document.getElementById('toStep2').classList.add('hidden');
}

// Configuración
function goToStep2() { showStep('step2'); }
function selectCategory(cat) { selectedCategory = cat; showStep('step3'); }
function changeImp(v) { impostorCount = Math.max(1, Math.min(players.length - 2, impostorCount + v)); document.getElementById('impVal').innerText = impostorCount; }
function changeTime(v) { gameTime = Math.max(1, Math.min(10, gameTime + v)); document.getElementById('timeVal').innerText = gameTime + " min"; }
function toggleHint() { showImpostorHint = !showImpostorHint; document.getElementById('hintToggle').classList.toggle('active'); }

// Juego
function initGame() {
    const words = database[selectedCategory];
    const secret = words[Math.floor(Math.random() * words.length)];
    
    // Resetear UI del final
    document.getElementById('impostorResult').classList.add('hidden');
    document.getElementById('revealBtn').classList.remove('hidden');
    document.getElementById('resetOptions').classList.add('hidden');
    document.getElementById('preResetBtn').classList.remove('hidden');

    gameData = players.map(p => ({ name: p, role: 'FAMILIA', word: secret.w, hint: '' }));
    let assigned = 0;
    while(assigned < impostorCount) {
        let idx = Math.floor(Math.random() * players.length);
        if(gameData[idx].role !== 'IMPOSTOR') {
            gameData[idx].role = 'IMPOSTOR';
            gameData[idx].word = 'IMPOSTOR';
            gameData[idx].hint = showImpostorHint ? secret.h : 'Sin pistas';
            assigned++;
        }
    }
    turnIndex = 0; phase = 'REVEAL';
    showStep('game'); updateTurn();
}

function updateTurn() {
    document.getElementById('turnTitle').innerText = gameData[turnIndex].name;
    document.getElementById('wordBox').classList.add('hidden');
    document.getElementById('mainBtn').innerText = "VER PALABRA";
    document.getElementById('instr').innerText = "Toca para descubrir tu secreto";
}

function flow() {
    if (phase === 'REVEAL') {
        const curr = gameData[turnIndex];
        const wordEl = document.getElementById('secretWord');
        wordEl.innerText = curr.word;
        wordEl.className = curr.role === 'IMPOSTOR' ? 'reveal-text impostor' : 'reveal-text';
        document.getElementById('hintArea').classList.toggle('hidden', curr.role !== 'IMPOSTOR');
        document.getElementById('hintText').innerText = curr.hint;
        document.getElementById('wordBox').classList.remove('hidden');
        document.getElementById('mainBtn').innerText = "ENTENDIDO";
        phase = 'NEXT';
    } else {
        turnIndex++;
        if (turnIndex < gameData.length) { phase = 'REVEAL'; updateTurn(); }
        else { startFinish(); }
    }
}

// Final
function startFinish() {
    showStep('finish');
    document.getElementById('starterName').innerText = players[Math.floor(Math.random() * players.length)];
    let t = gameTime * 60;
    const disp = document.getElementById('timerDisplay');
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        let m = Math.floor(t / 60), s = t % 60;
        disp.innerText = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        if (--t < 0) {
            clearInterval(timerInterval);
            disp.innerText = "¡TIEMPO!";
        }
    }, 1000);
}

function confirmReveal() {
    if(confirm("¿Están listos para saber quién es el impostor?")) {
        const impostors = gameData.filter(p => p.role === 'IMPOSTOR').map(p => p.name);
        document.getElementById('impostorName').innerText = impostors.join(", ");
        document.getElementById('revealBtn').classList.add('hidden');
        document.getElementById('impostorResult').classList.remove('hidden');
    }
}

function showResetOptions() {
    document.getElementById('preResetBtn').classList.add('hidden');
    document.getElementById('resetOptions').classList.remove('hidden');
}

function samePlayers() {
    showStep('step2'); // Lleva directo a elegir categoría
}

function fullRestart() {
    location.reload();
}
