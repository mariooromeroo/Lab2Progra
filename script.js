// --- Formas de selección en acción ---

// 1. getElementById: Selecciona elementos por su ID único.
const tituloPrincipal = document.getElementById('titulo-principal');
const inputTarea = document.getElementById('nueva-tarea-input');
const btnAgregar = document.getElementById('btn-agregar');
const listaTareas = document.getElementById('lista-tareas');
const numeroTareasSpan = document.getElementById('numero-tareas');
const mensajeUsuario = document.getElementById('mensaje-usuario');

// 2. querySelector: Selecciona el PRIMER elemento que coincida.
//    - Por etiqueta: Selecciona la primera etiqueta <h2>
const subtituloLista = document.querySelector('h2');
//    - Por clase: Selecciona el primer elemento con clase "input-area" (aunque sea un div)
const primeraArea = document.querySelector('.input-area');
//    - Por atributo: Selecciona el input cuyo tipo sea 'text' (es el único, pero es una forma válida)
const campoTexto = document.querySelector('input[type="text"]');

// 3. querySelectorAll: Selecciona TODOS los elementos que coincidan. Devuelve una NodeList.
//    - Selecciona todos los botones que están dentro de las acciones de cada tarea (inicialmente vacío, pero se llenará después)
let botonesCompletar = document.querySelectorAll('.btn-completar');
let botonesEliminar = document.querySelectorAll('.btn-eliminar');
//    - Selecciona todos los elementos <li> dentro de la lista
let itemsDeLista = document.querySelectorAll('#lista-tareas li');


// --- Funciones de la aplicación ---

function actualizarContador() {
    // Usamos querySelectorAll para obtener TODOS los LI actuales
    const tareasActuales = document.querySelectorAll('#lista-tareas li');
    numeroTareasSpan.textContent = tareasActuales.length;

    // Cambiamos el mensaje de bienvenida según el número de tareas (Manipulación de etiqueta)
    if (tareasActuales.length === 0) {
        mensajeUsuario.textContent = '🎉 ¡Felicidades! No tienes tareas pendientes.';
    } else {
        mensajeUsuario.textContent = `📝 Tienes ${tareasActuales.length} tarea(s) en tu lista. ¡A trabajar!`;
    }
}

function crearTareaElemento(textoTarea) {
    const li = document.createElement('li');
    li.textContent = textoTarea;

    // Crear contenedor de acciones
    const spanAcciones = document.createElement('span');
    spanAcciones.classList.add('acciones');

    // Botón Completar
    const btnCompletar = document.createElement('button');
    btnCompletar.textContent = '✅';
    btnCompletar.classList.add('btn-completar');
    // Acción para marcar como completada (cambia estilo)
    btnCompletar.addEventListener('click', function(event) {
        // event.target es el botón que se clickeó. Usamos parentNode para llegar al <li>
        const tareaLi = event.target.closest('li'); // Forma más robusta de encontrar el <li> padre
        tareaLi.style.textDecoration = 'line-through';
        tareaLi.style.color = 'gray';
        btnCompletar.disabled = true; // Deshabilitar botón una vez completada
        mensajeUsuario.textContent = `✅ Tarea "${textoTarea}" marcada como completada.`;
    });

    // Botón Eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '❌';
    btnEliminar.classList.add('btn-eliminar');
    // Acción para eliminar la tarea
    btnEliminar.addEventListener('click', function(event) {
        const tareaLi = event.target.closest('li');
        tareaLi.remove(); // Elimina el elemento <li> del DOM
        actualizarContador(); // Actualizamos el contador
        mensajeUsuario.textContent = `🗑️ Tarea "${textoTarea}" eliminada.`;
    });

    spanAcciones.appendChild(btnCompletar);
    spanAcciones.appendChild(btnEliminar);
    li.appendChild(spanAcciones);

    return li;
}

function agregarTarea() {
    const textoNuevaTarea = inputTarea.value.trim();

    if (textoNuevaTarea === '') {
        alert('Por favor, escribe una tarea.');
        return;
    }

    const nuevaTareaLi = crearTareaElemento(textoNuevaTarea);
    listaTareas.appendChild(nuevaTareaLi); // Agregar al DOM

    // Limpiar el input
    inputTarea.value = '';

    // Actualizar el contador
    actualizarContador();
}

// --- Eventos Iniciales ---

btnAgregar.addEventListener('click', agregarTarea);

// Permitir agregar tarea con la tecla "Enter"
inputTarea.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});

// Inicializar el contador cuando la página carga
actualizarContador();

// Podemos cambiar el título para demostrar otra manipulación
// tituloPrincipal.textContent = '🗂️ Administrador de Tareas';

// Mostrar un mensaje en consola sobre los selectores usados
console.log('--- Ejemplos de selectores en acción ---');
console.log('getElementById (título):', tituloPrincipal);
console.log('querySelector (primer h2):', subtituloLista);
console.log('querySelectorAll (items de lista al inicio):', itemsDeLista);
console.log('querySelector por atributo (input[type="text"]):', campoTexto);