# 📚 Taller: Modelado NoSQL Documental con MongoDB para "Torneo Deportivo Internacional"


<p align="center"> 
  <img src="https://media.tenor.com/3a-6T2oJ5ZoAAAAi/pepe-noob-noob.gif" width="350"/> 
</p>

<p align="center"> 
  <img src="https://img.shields.io/badge/MongoDB-6.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/MQL-Query%20Language-brightgreen?style=for-the-badge&logo=mongodb" alt="MQL">
  <img src="https://img.shields.io/badge/Database-Documental-darkgreen?style=for-the-badge&logo=database&logoColor=white" alt="Documental">
  <img src="https://img.shields.io/badge/Status-Completed-blue?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="MIT License">
</p>

> Base de datos en MongoDB para gestionar delegaciones, equipos, atletas y competencias de un torneo multideportivo internacional.

---

## 👨‍🎓 Estudiante

- Nombre completo: Daniel Vinasco

---

## 📝 Descripción general

Este proyecto propone un modelo documental sencillo y práctico (nivel principiante) con 4 colecciones: `delegaciones`, `equipos`, `atletas` y `competencias`. Incluye scripts para insertar datos y ejecutar consultas básicas y con operadores.

---

## 🧩 Diseño del modelo

- Base de datos: `torneo2025`
- Colecciones principales:
  - `delegaciones`: países/organizaciones participantes (código ISO-3 como `_id`).
  - `equipos`: plantillas por disciplina y delegación.
  - `atletas`: datos personales/deportivos básicos, con enlaces a país y equipo.
  - `competencias`: eventos individuales y por equipos (estructura flexible para resultados).

Consulta el detalle de campos y relaciones en `modelo_de_datos.md`.

---

## 📁 Estructura del repositorio

```
/torneo-deportivo-internacional
├── README.md                   # Este archivo
├── modelo_de_datos.md          # Explicación de colecciones y campos
├── inserciones.js              # Crea BD y carga 15+ documentos por colección
├── consultas_sencillas.js      # 5 consultas por campos simples
└── consultas_operadores.js     # 10+ consultas con operadores
```

---

## 🗄️ Base de datos y requisitos

- MongoDB (local o Atlas)
- `mongosh` o MongoDB Compass
- Nombre de la base de datos por defecto: `torneo2025`

---

## 🛠️ Cómo ejecutar (mongosh recomendado)

1. Abre una terminal en la carpeta del proyecto `torneo-deportivo-internacional`.
2. Carga datos:
   ```bash
   mongosh inserciones.js
   ```
3. Ejecuta consultas:
   ```bash
   mongosh consultas_sencillas.js
   mongosh consultas_operadores.js
   ```

Esto utilizará la base `torneo2025`. Puedes cambiar el nombre dentro de los scripts si lo necesitas.

---

## 🧭 Cómo ejecutar en MongoDB Compass

1. Conéctate a tu clúster/base local.
2. Crea o selecciona la base `torneo2025`.
3. Abre la consola de Compass y pega el contenido de:
   - `inserciones.js`
   - `consultas_sencillas.js`
   - `consultas_operadores.js`
4. Ejecuta para ver los resultados.

---

## 🔎 ¿Qué incluye cada archivo?

- `modelo_de_datos.md`: Diseño de colecciones, campos, tipos y relaciones lógicas.
- `inserciones.js`: Creación de colecciones e inserción de 15+ documentos por colección.
- `consultas_sencillas.js`: 5 consultas básicas por 1-2 campos (sin operadores).
- `consultas_operadores.js`: 10+ consultas con operadores (`$gt`, `$lt`, `$in`, `$nin`, `$and`, `$or`, etc.).

---

## 💡 Notas

- Datos ficticios diseñados para cubrir casos variados (disciplinas, países, fechas, resultados).
- Estructura pensada para principiantes; se puede extender con más colecciones (`sedes`, `historial`, etc.).

---

## 👨‍💻 Autor

**Daniel Vinasco**

Desarrollado como parte del taller de NO-SQL Documental con MongoDB 

### Información de Contacto
- **GitHub**: [@DanielSantiagoV](https://github.com/DanielSantiagoV)

---

*Este proyecto cumple con todos los requerimientos especificados en el taller y proporciona una base sólida Documental con MongoDB".*

---

<p align="center">
  Developed with ❤️ by Estudiante de Base de Datos<br>
  🔥 <b><a href="https://github.com/DanielSantiagoV">Visit my GitHub</a></b> 🚀
</p>