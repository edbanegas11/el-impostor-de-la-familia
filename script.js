const database = {
    biblia: [
        {w:"Adán",h:"Primer hombre"},{w:"Eva",h:"Costilla"},{w:"Noé",h:"Arca"},{w:"Moisés",h:"Zarza"},{w:"David",h:"Onda"},{w:"Goliat",h:"Gigante"},{w:"Salomón",h:"Sabiduría"},{w:"Jonás",h:"Pez"},{w:"Sansón",h:"Cabello"},{w:"Pedro",h:"Gallo"},{w:"Pablo",h:"Damasco"},{w:"Judas",h:"Beso"},{w:"Lázaro",h:"Resurrección"},{w:"María",h:"Virgen"},{w:"José",h:"Túnica"},{w:"Ester",h:"Reina"},{w:"Job",h:"Paciencia"},{w:"Daniel",h:"Leones"},{w:"Gedeón",h:"Cántaros"},{w:"Rut",h:"Lealtad"}
        // ... (Añade aquí el resto hasta completar las 100)
    ],
    peliculas: [
        {w:"Titanic",h:"Iceberg"},{w:"Star Wars",h:"Galaxia"},{w:"Harry Potter",h:"Cicatriz"},{w:"Avengers",h:"Chasquido"},{w:"Batman",h:"Murciélago"},{w:"Joker",h:"Risa"},{w:"Toy Story",h:"Juguetes"},{w:"Inception",h:"Sueños"},{w:"Matrix",h:"Pastillas"},{w:"Gladiador",h:"Roma"}
        // ... (Añade aquí el resto hasta completar las 100)
    ],
    animales: [
        {w:"León",h:"Melena"},{w:"Delfín",h:"Inteligente"},{w:"Pingüino",h:"Hielo"},{w:"Camaleón",h:"Color"},{w:"Elefante",h:"Trompa"},{w:"Tiburón",h:"Dientes"},{w:"Águila",h:"Vuelo"},{w:"Serpiente",h:"Veneno"},{w:"Cebra",h:"Rayas"},{w:"Canguro",h:"Salto"}
        // ... (Añade aquí el resto hasta completar las 100)
    ],
    comida: [
        {w:"Pizza",h:"Italia"},{w:"Sushi",h:"Japón"},{w:"Hamburguesa",h:"Carne"},{w:"Tacos",h:"México"},{w:"Helado",h:"Frío"},{w:"Café",h:"Despertar"},{w:"Chocolate",h:"Dulce"},{w:"Pasta",h:"Trigo"},{w:"Queso",h:"Lácteo"},{w:"Arroz",h:"Grano"}
        // ... (Añade aquí el resto hasta completar las 100)
    ],
    lugares: [
        {w:"París",h:"Torre"},{w:"Roma",h:"Coliseo"},{w:"Egipto",h:"Pirámides"},{w:"Londres",h:"Reloj"},{w:"Tokio",h:"Neón"},{w:"Nueva York",h:"Estatua"},{w:"Brasil",h:"Carnaval"},{w:"Venecia",h:"Canales"},{w:"Sídney",h:"Ópera"},{w:"España",h:"Fiesta"}
        // ... (Añade aquí el resto hasta completar las 100)
    ],
    profesiones: [
        {w:"Médico",h:"Salud"},{w:"Bombero",h:"Fuego"},{w:"Policía",h:"Ley"},{w:"Chef",h:"Cocina"},{w:"Piloto",h:"Avión"},{w:"Astronauta",h:"Espacio"},{w:"Abogado",h:"Juicio"},{w:"Actor",h:"Teatro"},{w:"Músico",h:"Notas"},{w:"Pintor",h:"Cuadro"}
        // ... (Añade aquí el resto hasta completar las 100)
    ]
};

let players = [], current = 0, impIdx = 0, selectedData = {};
const track = document.getElementById('sliderTrack');
const container = document.getElementById('sliderCont');
let startY, isDragging = false;

function buildInputs() {
    const c = document.getElementById('namesContainer');
    const qty = document.getElementById('playerQty').value;
    c.innerHTML = '';
    for(let i=1; i<=qty; i++) {
        const inp = document.createElement('input');
        inp.placeholder = `Jugador ${i}`;
        inp.className = 'p-in';
        c.appendChild(inp);
    }
}

function init() {
    const inps = document.querySelectorAll('.p-in');
    players = Array.from(inps).map((n, i) => n.value.trim() || `Jugador ${i+1}`);
    if (players.length < 3) return alert("Mínimo 3 jugadores");
    startRound();
}

function startRound() {
    const cat = document.getElementById('catSelect').value;
    selectedData = database[cat][Math.floor(Math.random() * database[cat].length)];
    impIdx = Math.floor(Math.random() * players.length);
    current = 0;
    document.getElementById('setup').classList.add('hidden');
    document.getElementById('finish').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');
    prepareTurn();
}

function prepareTurn() {
    document.getElementById('turnTitle').innerText = players[current];
    document.getElementById('nextBtn').classList.add('hidden');
    container.classList.remove('revealed');
    track.style.transform = `translateY(0)`;
    
    const wordEl = document.getElementById('secretWord');
    const hintArea = document.getElementById('hintArea');

    if(current === impIdx) {
        wordEl.innerText = "IMPOSTOR";
        wordEl.classList.add('impostor');
        document.getElementById('hintText').innerText = selectedData.h;
        hintArea.classList.remove('hidden');
    } else {
        wordEl.innerText = selectedData.w;
        wordEl.classList.remove('impostor');
        hintArea.classList.add('hidden');
    }
}

const handleStart = (e) => { startY = e.touches ? e.touches[0].clientY : e.clientY; isDragging = true; };
const handleMove = (e) => {
    if (!isDragging) return;
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = currentY - startY;
    if (deltaY < 0 && deltaY > -140) {
        track.style.transform = `translateY(${deltaY}px)`;
        if (deltaY < -100) {
            container.classList.add('revealed');
            document.getElementById('nextBtn').classList.remove('hidden');
        }
    }
};
const handleEnd = () => { isDragging = false; if (!container.classList.contains('revealed')) track.style.transform = `translateY(0)`; };

track.addEventListener('mousedown', handleStart);
window.addEventListener('mousemove', handleMove);
window.addEventListener('mouseup', handleEnd);
track.addEventListener('touchstart', handleStart);
window.addEventListener('touchmove', handleMove);
window.addEventListener('touchend', handleEnd);

function nextTurn() {
    if(current < players.length - 1) { current++; prepareTurn(); }
    else { 
        document.getElementById('game').classList.add('hidden');
        document.getElementById('finish').classList.remove('hidden');
        document.getElementById('starterName').innerText = players[Math.floor(Math.random()*players.length)];
    }
}

function restartSamePlayers() { startRound(); }
function resetGame() { 
    document.getElementById('finish').classList.add('hidden');
    document.getElementById('setup').classList.remove('hidden');
    buildInputs(); 
}

window.onload = buildInputs;