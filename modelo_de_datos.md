## Diseño del modelo de datos

Base de datos: `torneo2025`

Este documento describe el modelo documental propuesto (nivel principiante, claro y práctico) para gestionar delegaciones, equipos, atletas y competencias del torneo.

---

### Objetivo

- Representar el dominio del torneo con un modelo simple y legible.
- Facilitar consultas típicas: por disciplina, país, fechas y resultados.
- Evitar sobre-modelar; usar referencias ligeras y estructuras flexibles cuando sea útil.

### Principios de diseño

- Sencillez primero: nombres de campos claros y tipos básicos.
- Referencias ligeras: códigos de país ISO-3 como `_id` en `delegaciones` para relacionar sin `ObjectId`.
- Flexibilidad controlada: `competencias.resultados` admite distintos formatos (individual/equipos).

---

## Esquema por colección

### 1) `delegaciones`

Campos principales:
- `_id` (string, requerido, único): Código ISO-3. Ej.: `ARG`, `USA`.
- `nombre` (string, requerido): Nombre del país/delegación.
- `continente` (string, requerido): Ej.: `América del Sur`, `Europa`, `Asia`, `África`, `Oceanía`, `América del Norte`.

Ejemplo de documento:
```json
{
  "_id": "ARG",
  "nombre": "Argentina",
  "continente": "América del Sur"
}
```

Índices sugeridos:
- Implícito: `_id` único.
- `{ continente: 1 }` para filtrar por región.

---

### 2) `equipos`

Campos principales:
- `_id` (ObjectId, requerido)
- `nombre` (string, requerido)
- `disciplina` (string, requerido): Ej.: `Fútbol`, `Natación`, `Judo`, `Ciclismo`, `Esgrima`, `Baloncesto`, `Voleibol`.
- `delegacionCodigo` (string, requerido): Referencia a `delegaciones._id`.
- `anio` (number, requerido): Año del torneo/equipo.
- `entrenador` (string)
- `numJugadores` (number): Tamaño de la plantilla para consultas rápidas.

Ejemplo de documento:
```json
{
  "_id": { "$oid": "64f0..." },
  "nombre": "Argentina Fútbol Senior",
  "disciplina": "Fútbol",
  "delegacionCodigo": "ARG",
  "anio": 2025,
  "entrenador": "Diego L.",
  "numJugadores": 23
}
```

Índices sugeridos:
- `{ disciplina: 1 }`
- `{ delegacionCodigo: 1 }`
- Compuesto opcional: `{ disciplina: 1, delegacionCodigo: 1 }`

---

### 3) `atletas`

Campos principales:
- `_id` (ObjectId, requerido)
- `nombre` (string, requerido)
- `apellido` (string, requerido)
- `genero` (string, requerido): `M` | `F` | `X`.
- `fechaNacimiento` (date, requerido)
- `edad` (number): Persistida para simplificar consultas del taller.
- `estaturaCm` (number)
- `pesoKg` (number)
- `paisCodigo` (string, requerido): Referencia a `delegaciones._id`.
- `disciplina` (string, requerido)
- `equipoId` (ObjectId|null): Referencia a `equipos._id` cuando aplique.
- `medallas` (array<string>): Valores típicos `"oro" | "plata" | "bronce"`.
- `esCapitan` (boolean)

Ejemplo de documento:
```json
{
  "_id": { "$oid": "64f0..." },
  "nombre": "Juan",
  "apellido": "Pérez",
  "genero": "M",
  "fechaNacimiento": { "$date": "1998-03-12T00:00:00Z" },
  "edad": 27,
  "estaturaCm": 178,
  "pesoKg": 74,
  "paisCodigo": "ARG",
  "disciplina": "Fútbol",
  "equipoId": { "$oid": "64f0..." },
  "medallas": [],
  "esCapitan": true
}
```

Índices sugeridos:
- `{ paisCodigo: 1 }`
- `{ disciplina: 1 }`
- `{ edad: 1 }`
- `{ medallas: 1 }` (array index)
- `{ equipoId: 1 }`

---

### 4) `competencias`

Campos principales:
- `_id` (ObjectId, requerido)
- `nombreEvento` (string, requerido)
- `disciplina` (string, requerido)
- `tipo` (string, requerido): `individual` | `equipos`
- `fecha` (date, requerido)
- `sede` (object, requerido): `{ ciudad: string, paisCodigo: string }`
- `ronda` (string): `clasificatoria` | `fase de grupos` | `semifinal` | `final` | `amistoso` | `exhibición`
- `participantes` (array<object>, requerido):
  - Individual: `{ atletaId: ObjectId, delegacionCodigo: string }`
  - Equipos: `{ equipoId: ObjectId, delegacionCodigo: string }`
- `resultados` (object, flexible): Estructura distinta según `tipo`.

Ejemplo (individual):
```json
{
  "_id": { "$oid": "64f0..." },
  "nombreEvento": "100m Masculino - Final",
  "disciplina": "Atletismo",
  "tipo": "individual",
  "fecha": { "$date": "2025-08-01T00:00:00Z" },
  "sede": { "ciudad": "París", "paisCodigo": "FRA" },
  "ronda": "final",
  "participantes": [ { "atletaId": { "$oid": "64f0..." }, "delegacionCodigo": "KEN" } ],
  "resultados": {
    "posiciones": [ { "atletaId": { "$oid": "64f0..." }, "puesto": 2, "marca": "9.92s" } ],
    "medallas": { "oro": null, "plata": { "$oid": "64f0..." }, "bronce": null }
  }
}
```

Ejemplo (equipos):
```json
{
  "_id": { "$oid": "64f0..." },
  "nombreEvento": "Fútbol - Grupo A: ARG vs BRA",
  "disciplina": "Fútbol",
  "tipo": "equipos",
  "fecha": { "$date": "2025-08-09T00:00:00Z" },
  "sede": { "ciudad": "Buenos Aires", "paisCodigo": "ARG" },
  "ronda": "fase de grupos",
  "participantes": [
    { "equipoId": { "$oid": "64f0..." }, "delegacionCodigo": "ARG" },
    { "equipoId": { "$oid": "64f0..." }, "delegacionCodigo": "BRA" }
  ],
  "resultados": { "ganadorEquipoId": { "$oid": "64f0..." }, "marcador": "2-1" }
}
```

Índices sugeridos:
- `{ fecha: 1 }`
- `{ "sede.ciudad": 1 }`
- `{ "sede.paisCodigo": 1 }`
- `{ tipo: 1 }`
- `{ disciplina: 1 }`
- `{ "participantes.delegacionCodigo": 1 }`

---

## Relaciones lógicas

- `equipos.delegacionCodigo` → `delegaciones._id`
- `atletas.paisCodigo` → `delegaciones._id`
- `atletas.equipoId` → `equipos._id`
- `competencias.participantes[].{delegacionCodigo|atletaId|equipoId}` → `delegaciones/_id`, `atletas/_id`, `equipos/_id`

Nota: No se aplican restricciones de integridad referencial en MongoDB; estas relaciones se controlan desde la aplicación y mediante datos consistentes.

---

## Reglas y validaciones (sencillas)

- `delegaciones._id`: debe ser un código ISO-3 en mayúsculas.
- `equipos.anio`: entero positivo (ej. 2025).
- `equipos.numJugadores`: entero en rango razonable según disciplina.
- `atletas.genero`: `M` | `F` | `X`.
- `atletas.edad`: persistida para el taller (en sistemas reales, derivada de `fechaNacimiento`).
- `competencias.tipo`: `individual` o `equipos` (define la forma de `participantes` y `resultados`).

---

## Consultas previstas y motivación de índices

- Filtrar equipos por `disciplina` y `delegacionCodigo`.
- Buscar atletas por `paisCodigo`, `disciplina` o rango de `edad`.
- Consultar competencias por `fecha`, `sede.ciudad`/`sede.paisCodigo`, `tipo` y participantes (`delegacionCodigo`).
- Explorar medallas con búsquedas por arrays (`medallas`).

Estos casos de uso están cubiertos en `consultas_sencillas.js` y `consultas_operadores.js` y justifican los índices propuestos.

---

## Limitaciones y extensiones futuras

- No hay control automático de borrado en cascada entre colecciones.
- `resultados` es flexible; si una disciplina requiere más detalle, se pueden definir sub-esquemas por tipo de evento.
- Posibles nuevas colecciones: `sedes` (con aforo y país), `historial_competiciones`, `arbitros`, `lesiones`.

---

## Resumen

El modelo usa 4 colecciones con relaciones simples y referencias claras (códigos ISO y `ObjectId`). Permite consultas frecuentes del torneo con índices básicos y mantiene flexibilidad para distintos tipos de competencias sin complejidad innecesaria.