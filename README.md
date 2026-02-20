# Laboratorio 2 Primer Cómputo - Mario Antonio Salamanca Romero (SMSS085424)
## Administrador de Tareas

### a. Tabla de Selectores

| Tipo de Selector | Elemento Afectado | Descripción de la tarea que realiza el elemento |
|:-----------------|:------------------|:------------------------------------------------|
| **getElementById** | `<h1 id="titulo-principal">` | Muestra el título principal "Mis Tareas Pendientes" en la parte superior de la página. |
| **getElementById** | `<input id="nueva-tarea-input">` | Campo de texto donde el usuario escribe el nombre de la nueva tarea que desea agregar. |
| **getElementById** | `<button id="btn-agregar">` | Botón que al hacer clic ejecuta la función `agregarTarea()` para añadir una nueva tarea a la lista. |
| **getElementById** | `<ul id="lista-tareas">` | Contenedor principal que almacena y muestra dinámicamente todos los elementos `<li>` (tareas) agregadas por el usuario. |
| **getElementById** | `<span id="numero-tareas">` | Muestra en tiempo real el número total de tareas existentes en la lista, actualizándose al agregar o eliminar elementos. |
| **getElementById** | `<p id="mensaje-usuario">` | Área de mensajes que proporciona retroalimentación al usuario (bienvenida, confirmación de acciones, notificaciones). |
| **querySelector** (etiqueta) | `<h2>` (subtítulo "Lista de Tareas") | Selecciona el primer elemento `<h2>` del documento para demostrar el uso de selectores por etiqueta. |
| **querySelector** (atributo) | `<input type="text">` | Selecciona el campo de entrada de texto utilizando su atributo `type`, demostrando la versatilidad de `querySelector`. |
| **querySelectorAll** | `#lista-tareas li` (todos los `<li>`) | Selecciona TODOS los elementos de lista para contar cuántas tareas existen y actualizar el contador en la función `actualizarContador()`. |

### b. Preguntas de Análisis

**1. ¿Cuál es la ventaja de utilizar getElementById frente al QuerySelector?**

La principal ventaja de getElementById es su rendimiento y eficiencia. Como los IDs en una página HTML deben ser únicos por definición, el navegador puede buscar y devolver el elemento de manera inmediata utilizando un acceso directo optimizado. 
querySelector es más flexible porque acepta cualquier selector CSS, pero debe parsear ese selector y ejecutar un algoritmo de búsqueda más complejo, lo que lo hace ligeramente más lento. 
Además, getElementById es más semántico y claro cuando se sabe que se busca un elemento con un ID específico, haciendo el código más legible y explícito en su intención.

**2. ¿En qué situación es preferible usar querySelectorAll en lugar de querySelector? Explique qué tipo de dato devuelve cada uno.**

**querySelectorAll** es preferible cuando se necesita trabajar con **una colección completa de elementos** que coinciden con un selector específico. Por ejemplo, cuando se requiere obtener todas las tareas de una lista para contarlas (const tareas = document.querySelectorAll(#lista-tareas li)), aplicar un mismo cambio a múltiples elementos, o iterar sobre ellos para realizar operaciones individuales. Devuelve una **NodeList estática**, que es un objeto similar a un array que contiene todos los elementos que coinciden con el selector.

**querySelector** es preferible cuando se necesita **un solo elemento**, específicamente el primer elemento que coincida con el selector CSS. Es ideal para seleccionar elementos únicos como encabezados, botones específicos, o cuando se está seguro de que solo existe una coincidencia en el documento. Devuelve directamente el elemento (de tipo Element) o null si no encuentra ninguna coincidencia.
