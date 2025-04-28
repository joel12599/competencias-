// Variables de referencia
const registroForm = document.getElementById('registroForm');
const registroSection = document.getElementById('registroSection');
const competenciasSection = document.getElementById('competenciasSection');
const competenciasContainer = document.getElementById('competenciasContainer');
const bienvenida = document.getElementById('bienvenida');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrarModal');
const infoCompetencia = document.getElementById('infoCompetencia');

let usuarioActual = {}; // Guardar el usuario que se registra

// Formulario de registro
registroForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const genero = document.getElementById('genero').value;
    const ciudad = document.getElementById('ciudad').value.trim();

    if (nombre && correo && edad && genero && ciudad) {
        usuarioActual = { nombre, correo, edad, genero, ciudad };

        registroSection.style.display = 'none';
        competenciasSection.style.display = 'block';
        bienvenida.textContent = `👋 Hola ${nombre}, elige tu competencia`;
        mostrarCompetencias();
    } else {
        alert('Por favor completa todos los campos.');
    }
});

// Lista de competencias
const competencias = [
    { 
        nombre: "Torneo de Fútbol",
        imagen: "https://st2.depositphotos.com/5963850/10870/v/450/depositphotos_108704738-stock-illustration-football-equipment-set.jpg",
        ciudad: "Barranquilla",
        registrados: Math.floor(Math.random() * 100),
        premio: 5000,
        capacidad: 100,
        inscritos: 0,
        modalidad: "Presencial"
    },
    { 
        nombre: "Competencia de Natación",
        imagen: "https://90minutos.co/wp-content/uploads/2015/03/natacion-26-03-15_0-1.jpg",
        ciudad: "Medellín",
        premio: 2000,
        capacidad: 50,
        inscritos: 0,
        modalidad: "Presencial"
    },
    {
        nombre: "Campeonato de Skate",
        imagen: "https://www.gravedadzero.tv/wp-content/uploads/2020/03/Pedro_Barros___cred_Pablo_Vaz.jpg",
        ciudad: "Virtual",
        premio: 1500,
        capacidad: 80,
        inscritos: 0,
        modalidad: "Virtual"
    },
    {
        nombre: "Maratón de Atletismo",
        imagen: "https://noticiasdeazul.com/download/multimedia.normal.bc2fa269ed816626.546f726e656f2064652061746c657469736d6f5f6e6f726d616c2e77656270.webp",
        ciudad: "Bogotá",
        premio: 10000,
        capacidad: 500,
        inscritos: 0,
        modalidad: "Presencial"
    },
    {
        nombre: "Campeonato de Tenis",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0VIRuoTDpodeytBgILifE1KEdoO-Z8oSPA&s",
        ciudad: "Cali",
        premio: 4000,
        capacidad: 40,
        inscritos: 0,
        modalidad: "Presencial"
    },
    {
        nombre: "Competencia de Surf",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMjyzhs0mNVxmOYFmWR20FeDNnnIQOZ08tw&s",
        ciudad: "Cartagena",
        premio: 7000,
        capacidad: 60,
        inscritos: 0,
        modalidad: "Presencial"
    },
    {
        nombre: "Competencia de league of legends",
        imagen: "https://esports.as.com/2018/03/11/LCS_NA.png?hash=c09ba2ca8c1d5996c62eb3d0dfbb3f07cbb83d56",
        ciudad: "Cartagena",
        premio: 7000,
        capacidad: 60,
        inscritos: 0,
        modalidad: "Virtual"
    },
    {
        nombre: "Competencia de baile",
        imagen: "https://img.freepik.com/vector-premium/concurso-baile-concursos-coreografia-contemporanea-bailes-salon-chicos-chicas-numeros-participantes-torneo-tango-o-bachata-actuacion-bailarines-concepto-vector-llamativo_533410-3568.jpg",
        ciudad: "Cartagena",
        premio: 7000,
        capacidad: 60,
        inscritos: 0,
        modalidad: "Virtual"
    },
    {
        nombre: "Competencia de comida",
        imagen: "https://png.pngtree.com/thumb_back/fh260/background/20220217/pngtree-cartoon-food-festival-background-design-image_947694.jpg",
        ciudad: "Cartagena",
        premio: 7000,
        capacidad: 60,
        inscritos: 0,
        modalidad: "Virtual"
    },
    {
        nombre: "Competencia de matemáticas",
        imagen: "https://ntcd.mx/uploads/fotos_old34/7e836eab2ce46108bf9aae67b962b12b.jpg",
        ciudad: "Cartagena",
        premio: 7000,
        capacidad: 60,
        inscritos: 0,
        modalidad: "Virtual"
    }
];

// Mostrar las competencias en pantalla
function mostrarCompetencias() {
    competenciasContainer.innerHTML = "";

    competencias.forEach((comp, index) => {
        const card = document.createElement('div');
        card.classList.add('tarjeta');

        card.innerHTML = `
            <img src="${comp.imagen}" alt="${comp.nombre}">
            <h3>${comp.nombre}</h3>
        `;

        card.addEventListener('click', () => {
            abrirModal(index);
        });

        competenciasContainer.appendChild(card);
    });
}

// Abrir modal al clickear una competencia
function abrirModal(index) {
    const comp = competencias[index];
    const porcentajeOcupado = ((comp.inscritos / comp.capacidad) * 100).toFixed(1);
    const bonus = Math.random() > 0.5 ? "🎁 ¡Incluye kit deportivo!" : "🔥 ¡Descuento para próximos eventos!";

    infoCompetencia.innerHTML = `
        <h2>${comp.nombre}</h2>
        <p><strong>Ciudad:</strong> ${comp.ciudad}</p>
        <p><strong>Premio:</strong> ${comp.premio > 0 ? `$${comp.premio}` : "Sin premio"}</p>
        <p><strong>Capacidad máxima:</strong> ${comp.capacidad} personas</p>
        <p><strong>Inscritos actuales:</strong> ${comp.inscritos} (${porcentajeOcupado}%)</p>
        <p><strong>Modalidad:</strong> ${comp.modalidad}</p>
        <p><strong>Bonus:</strong> ${bonus}</p>
        <button id="botonRegistro">Registrarme</button>
    `;

    modal.style.display = "block";

    document.getElementById('botonRegistro').addEventListener('click', function() {
        if (comp.inscritos < comp.capacidad) {
            comp.inscritos++;
            alert(`✅ ${usuarioActual.nombre}, te has registrado en ${comp.nombre}`);
            localStorage.setItem('competencias', JSON.stringify(competencias));
            modal.style.display = "none";
            mostrarCompetencias();
        } else {
            alert("🚫 No hay cupos disponibles en esta competencia.");
        }
    });
}

// Cerrar modal
cerrarModal.onclick = function() {
    modal.style.display = "none";
}

// Cerrar modal al hacer click fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const mensajes = [
    "🌱 ¡Planta un árbol hoy y ayuda a salvar el planeta!",
    "♻️ Reciclar es amar nuestro futuro. ¡Separa tus residuos!",
    "🚲 Usa la bicicleta, ahorras energía y proteges el aire.",
    "💧 Cuida el agua, cada gota cuenta para la vida.",
    "🧹 Participa en jornadas de limpieza comunitaria. ¡Tu barrio lo merece!"
];

function mostrarPropaganda() {
    const indice = Math.floor(Math.random() * mensajes.length);
    document.getElementById('propaganda').textContent = mensajes[indice];
}

window.onload = () => {
    mostrarPropaganda();
    // Cambiar cada 10 segundos
    setInterval(mostrarPropaganda, 10000);
};

// Cargar datos guardados si hay en LocalStorage
document.addEventListener('DOMContentLoaded', () => {
    const guardadas = localStorage.getItem('competencias');
    if (guardadas) {
        const data = JSON.parse(guardadas);
        data.forEach((item, index) => {
            if (competencias[index]) {
                competencias[index].inscritos = item.inscritos;
            }
        });
    }
});
