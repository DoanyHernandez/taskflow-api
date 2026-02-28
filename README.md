# TaskFlow API 🚀

Una API REST robusta construida con **Node.js** y **Express** para la gestión de tareas, aplicando estructuras de datos fundamentales en memoria y una arquitectura limpia por capas.

## Estructuras de Datos Implementadas
Para cumplir con los requisitos de la materia, se implementaron las siguientes estructuras:

1.  **(Backlog):** Almacena el listado dinámico de tareas pendientes.
2.  **(Undo):** Registra cada acción realizada (historial) permitiendo consultar o eliminar la última acción (LIFO).
3.  **Cola / Queue (Processing):** Gestiona el orden de procesamiento de tareas bajo el principio FIFO (First-In, First-Out).

## Arquitectura por Capas
El proyecto sigue el modelo de responsabilidad única:

* **Models:** Define la estructura de los objetos `Task` y `Action`.
* **Repositories:** Gestiona la persistencia en memoria y la lógica cruda de las estructuras de datos.
* **Services:** Contiene la lógica de negocio y coordina las operaciones entre el repositorio y el controlador.
* **Controllers (App.js):** Maneja las peticiones HTTP, validaciones de entrada y respuestas al cliente.

## Instalación y Ejecución

1.  Instalar dependencias:
    ```bash
    npm install
    ```
2.  Iniciar el servidor:
    ```bash
    node src/app.js
    ```
    El servidor iniciará en: `http://localhost:3000`

## 🌐 Endpoints Principales (Ejemplos cURL / PowerShell)

### 1. Backlog (Lista Enlazada)
* **Crear Tarea:** `POST /backlog/tasks`
* **Listar Tareas:** `GET /backlog/tasks`

### 2. Undo (Pila)
* **Ver última acción:** `GET /undo/peek`
* **Deshacer acción:** `DELETE /undo`

### 3. Queue (Cola de Procesamiento)
* **Encolar tarea:** `POST /queue` (requiere `taskId`)
* **Procesar siguiente:** `DELETE /queue`