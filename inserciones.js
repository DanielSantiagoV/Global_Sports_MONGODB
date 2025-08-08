// Inserciones para la base torneo2025
// Ejecutar con: mongosh inserciones.js

const database = db.getSiblingDB('torneo2025');

// Limpieza básica
try { database.delegaciones.drop(); } catch (e) {}
try { database.equipos.drop(); } catch (e) {}
try { database.atletas.drop(); } catch (e) {}
try { database.competencias.drop(); } catch (e) {}

// 1) Delegaciones (usar códigos ISO-3 como _id)
const delegaciones = [
  { _id: 'ARG', nombre: 'Argentina', continente: 'América del Sur' },
  { _id: 'BRA', nombre: 'Brasil', continente: 'América del Sur' },
  { _id: 'CHL', nombre: 'Chile', continente: 'América del Sur' },
  { _id: 'COL', nombre: 'Colombia', continente: 'América del Sur' },
  { _id: 'USA', nombre: 'Estados Unidos', continente: 'América del Norte' },
  { _id: 'CAN', nombre: 'Canadá', continente: 'América del Norte' },
  { _id: 'MEX', nombre: 'México', continente: 'América del Norte' },
  { _id: 'ESP', nombre: 'España', continente: 'Europa' },
  { _id: 'FRA', nombre: 'Francia', continente: 'Europa' },
  { _id: 'GER', nombre: 'Alemania', continente: 'Europa' },
  { _id: 'ITA', nombre: 'Italia', continente: 'Europa' },
  { _id: 'JPN', nombre: 'Japón', continente: 'Asia' },
  { _id: 'CHN', nombre: 'China', continente: 'Asia' },
  { _id: 'AUS', nombre: 'Australia', continente: 'Oceanía' },
  { _id: 'KEN', nombre: 'Kenia', continente: 'África' },
];
database.delegaciones.insertMany(delegaciones);

// 2) Equipos (15)
const equipos = [
  { _id: new ObjectId(), nombre: 'Argentina Fútbol Senior', disciplina: 'Fútbol', delegacionCodigo: 'ARG', anio: 2025, entrenador: 'Diego L.', numJugadores: 23 },
  { _id: new ObjectId(), nombre: 'Brasil Fútbol Senior', disciplina: 'Fútbol', delegacionCodigo: 'BRA', anio: 2025, entrenador: 'Renato S.', numJugadores: 23 },
  { _id: new ObjectId(), nombre: 'España Fútbol Senior', disciplina: 'Fútbol', delegacionCodigo: 'ESP', anio: 2025, entrenador: 'Luis D.', numJugadores: 23 },
  { _id: new ObjectId(), nombre: 'Alemania Fútbol Senior', disciplina: 'Fútbol', delegacionCodigo: 'GER', anio: 2025, entrenador: 'Hans K.', numJugadores: 23 },
  { _id: new ObjectId(), nombre: 'USA Baloncesto', disciplina: 'Baloncesto', delegacionCodigo: 'USA', anio: 2025, entrenador: 'Mike B.', numJugadores: 12 },
  { _id: new ObjectId(), nombre: 'Canadá Hockey Hielo', disciplina: 'Hockey', delegacionCodigo: 'CAN', anio: 2025, entrenador: 'Rick T.', numJugadores: 25 },
  { _id: new ObjectId(), nombre: 'Brasil Voleibol', disciplina: 'Voleibol', delegacionCodigo: 'BRA', anio: 2025, entrenador: 'Bernardo R.', numJugadores: 14 },
  { _id: new ObjectId(), nombre: 'Argentina Rugby', disciplina: 'Rugby', delegacionCodigo: 'ARG', anio: 2025, entrenador: 'Felipe C.', numJugadores: 31 },
  { _id: new ObjectId(), nombre: 'Australia Natación 4x100', disciplina: 'Natación', delegacionCodigo: 'AUS', anio: 2025, entrenador: 'Ian T.', numJugadores: 4 },
  { _id: new ObjectId(), nombre: 'USA Natación 4x100', disciplina: 'Natación', delegacionCodigo: 'USA', anio: 2025, entrenador: 'Bob M.', numJugadores: 4 },
  { _id: new ObjectId(), nombre: 'Francia Esgrima', disciplina: 'Esgrima', delegacionCodigo: 'FRA', anio: 2025, entrenador: 'Pierre L.', numJugadores: 5 },
  { _id: new ObjectId(), nombre: 'Colombia Ciclismo Ruta', disciplina: 'Ciclismo', delegacionCodigo: 'COL', anio: 2025, entrenador: 'Nairo Q.', numJugadores: 6 },
  { _id: new ObjectId(), nombre: 'China Ciclismo Pista', disciplina: 'Ciclismo', delegacionCodigo: 'CHN', anio: 2025, entrenador: 'Li W.', numJugadores: 6 },
  { _id: new ObjectId(), nombre: 'Japón Judo', disciplina: 'Judo', delegacionCodigo: 'JPN', anio: 2025, entrenador: 'Yasuhiro Y.', numJugadores: 8 },
  { _id: new ObjectId(), nombre: 'México Fútbol Senior', disciplina: 'Fútbol', delegacionCodigo: 'MEX', anio: 2025, entrenador: 'Javier A.', numJugadores: 23 },
];

database.equipos.insertMany(equipos);

// Mapa rápido por nombre para facilitar referencias
const equipoPorNombre = Object.fromEntries(equipos.map(e => [e.nombre, e]));

// 3) Atletas (15)
const atletas = [
  { _id: new ObjectId(), nombre: 'Juan', apellido: 'Pérez', genero: 'M', fechaNacimiento: ISODate('1998-03-12'), edad: 27, estaturaCm: 178, pesoKg: 74, paisCodigo: 'ARG', disciplina: 'Fútbol', equipoId: equipoPorNombre['Argentina Fútbol Senior']._id, medallas: [], esCapitan: true },
  { _id: new ObjectId(), nombre: 'Carlos', apellido: 'Silva', genero: 'M', fechaNacimiento: ISODate('2000-06-21'), edad: 24, estaturaCm: 182, pesoKg: 77, paisCodigo: 'BRA', disciplina: 'Fútbol', equipoId: equipoPorNombre['Brasil Fútbol Senior']._id, medallas: ['plata'], esCapitan: false },
  { _id: new ObjectId(), nombre: 'Miguel', apellido: 'López', genero: 'M', fechaNacimiento: ISODate('1997-01-05'), edad: 28, estaturaCm: 180, pesoKg: 79, paisCodigo: 'ESP', disciplina: 'Fútbol', equipoId: equipoPorNombre['España Fútbol Senior']._id, medallas: [], esCapitan: false },
  { _id: new ObjectId(), nombre: 'Thomas', apellido: 'Müller', genero: 'M', fechaNacimiento: ISODate('1996-11-30'), edad: 28, estaturaCm: 186, pesoKg: 81, paisCodigo: 'GER', disciplina: 'Fútbol', equipoId: equipoPorNombre['Alemania Fútbol Senior']._id, medallas: [], esCapitan: true },
  { _id: new ObjectId(), nombre: 'Mike', apellido: 'Johnson', genero: 'M', fechaNacimiento: ISODate('1999-07-10'), edad: 25, estaturaCm: 195, pesoKg: 90, paisCodigo: 'USA', disciplina: 'Baloncesto', equipoId: equipoPorNombre['USA Baloncesto']._id, medallas: ['oro'], esCapitan: false },
  { _id: new ObjectId(), nombre: 'Ethan', apellido: 'Clark', genero: 'M', fechaNacimiento: ISODate('2002-02-14'), edad: 23, estaturaCm: 188, pesoKg: 85, paisCodigo: 'CAN', disciplina: 'Hockey', equipoId: equipoPorNombre['Canadá Hockey Hielo']._id, medallas: [], esCapitan: false },
  { _id: new ObjectId(), nombre: 'Renata', apellido: 'Souza', genero: 'F', fechaNacimiento: ISODate('2001-09-09'), edad: 23, estaturaCm: 182, pesoKg: 70, paisCodigo: 'BRA', disciplina: 'Voleibol', equipoId: equipoPorNombre['Brasil Voleibol']._id, medallas: ['oro'], esCapitan: true },
  { _id: new ObjectId(), nombre: 'Facundo', apellido: 'Gómez', genero: 'M', fechaNacimiento: ISODate('1995-04-18'), edad: 30, estaturaCm: 188, pesoKg: 95, paisCodigo: 'ARG', disciplina: 'Rugby', equipoId: equipoPorNombre['Argentina Rugby']._id, medallas: [], esCapitan: false },
  { _id: new ObjectId(), nombre: 'Kyle', apellido: 'Miller', genero: 'M', fechaNacimiento: ISODate('2003-05-01'), edad: 22, estaturaCm: 185, pesoKg: 78, paisCodigo: 'USA', disciplina: 'Natación', equipoId: equipoPorNombre['USA Natación 4x100']._id, medallas: ['bronce'], esCapitan: false },
  { _id: new ObjectId(), nombre: 'Ian', apellido: 'Thorpe', genero: 'M', fechaNacimiento: ISODate('2004-12-20'), edad: 20, estaturaCm: 190, pesoKg: 84, paisCodigo: 'AUS', disciplina: 'Natación', equipoId: equipoPorNombre['Australia Natación 4x100']._id, medallas: ['oro','plata'], esCapitan: true },
  { _id: new ObjectId(), nombre: 'Pierre', apellido: 'Martin', genero: 'M', fechaNacimiento: ISODate('1998-08-08'), edad: 26, estaturaCm: 176, pesoKg: 70, paisCodigo: 'FRA', disciplina: 'Esgrima', equipoId: equipoPorNombre['Francia Esgrima']._id, medallas: ['plata'], esCapitan: false },
  { _id: new ObjectId(), nombre: 'Nairo', apellido: 'Quintana', genero: 'M', fechaNacimiento: ISODate('1990-02-04'), edad: 35, estaturaCm: 167, pesoKg: 59, paisCodigo: 'COL', disciplina: 'Ciclismo', equipoId: equipoPorNombre['Colombia Ciclismo Ruta']._id, medallas: [], esCapitan: true },
  { _id: new ObjectId(), nombre: 'Li', apellido: 'Wei', genero: 'M', fechaNacimiento: ISODate('1999-10-11'), edad: 25, estaturaCm: 178, pesoKg: 68, paisCodigo: 'CHN', disciplina: 'Ciclismo', equipoId: equipoPorNombre['China Ciclismo Pista']._id, medallas: ['bronce'], esCapitan: false },
  { _id: new ObjectId(), nombre: 'Yuki', apellido: 'Tanaka', genero: 'F', fechaNacimiento: ISODate('2000-01-22'), edad: 25, estaturaCm: 165, pesoKg: 57, paisCodigo: 'JPN', disciplina: 'Judo', equipoId: equipoPorNombre['Japón Judo']._id, medallas: ['oro'], esCapitan: false },
  { _id: new ObjectId(), nombre: 'Hassan', apellido: 'Kiprop', genero: 'M', fechaNacimiento: ISODate('2001-03-30'), edad: 24, estaturaCm: 177, pesoKg: 61, paisCodigo: 'KEN', disciplina: 'Atletismo', equipoId: null, medallas: ['plata'], esCapitan: false },
];

database.atletas.insertMany(atletas);

// Mapa de atletas por nombre completo (para referencias en competencias)
const atletaPorNombre = Object.fromEntries(atletas.map(a => [[a.nombre, a.apellido].join(' '), a]));

// 4) Competencias (15)
const competencias = [
  {
    _id: new ObjectId(),
    nombreEvento: '100m Masculino - Final',
    disciplina: 'Atletismo',
    tipo: 'individual',
    fecha: ISODate('2025-08-01T00:00:00Z'),
    sede: { ciudad: 'París', paisCodigo: 'FRA' },
    ronda: 'final',
    participantes: [
      { atletaId: atletaPorNombre['Hassan Kiprop']._id, delegacionCodigo: 'KEN' },
    ],
    resultados: { posiciones: [{ atletaId: atletaPorNombre['Hassan Kiprop']._id, puesto: 2, marca: '9.92s' }], medallas: { oro: null, plata: atletaPorNombre['Hassan Kiprop']._id, bronce: null } },
  },
  {
    _id: new ObjectId(),
    nombreEvento: '200m Libre - Final',
    disciplina: 'Natación',
    tipo: 'individual',
    fecha: ISODate('2025-08-03T00:00:00Z'),
    sede: { ciudad: 'Sídney', paisCodigo: 'AUS' },
    ronda: 'final',
    participantes: [
      { atletaId: atletaPorNombre['Ian Thorpe']._id, delegacionCodigo: 'AUS' },
      { atletaId: atletaPorNombre['Kyle Miller']._id, delegacionCodigo: 'USA' },
    ],
    resultados: { posiciones: [
      { atletaId: atletaPorNombre['Ian Thorpe']._id, puesto: 1, marca: '1:44.00' },
      { atletaId: atletaPorNombre['Kyle Miller']._id, puesto: 3, marca: '1:46.20' },
    ], medallas: { oro: atletaPorNombre['Ian Thorpe']._id, plata: null, bronce: atletaPorNombre['Kyle Miller']._id } },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Esgrima Florete - Final',
    disciplina: 'Esgrima',
    tipo: 'individual',
    fecha: ISODate('2025-08-05T00:00:00Z'),
    sede: { ciudad: 'París', paisCodigo: 'FRA' },
    ronda: 'final',
    participantes: [
      { atletaId: atletaPorNombre['Pierre Martin']._id, delegacionCodigo: 'FRA' },
    ],
    resultados: { posiciones: [{ atletaId: atletaPorNombre['Pierre Martin']._id, puesto: 2, marcador: '14-15' }], medallas: { oro: null, plata: atletaPorNombre['Pierre Martin']._id, bronce: null } },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Ruta - Prueba en línea',
    disciplina: 'Ciclismo',
    tipo: 'individual',
    fecha: ISODate('2025-08-07T00:00:00Z'),
    sede: { ciudad: 'Bogotá', paisCodigo: 'COL' },
    ronda: 'final',
    participantes: [
      { atletaId: atletaPorNombre['Nairo Quintana']._id, delegacionCodigo: 'COL' },
      { atletaId: atletaPorNombre['Li Wei']._id, delegacionCodigo: 'CHN' },
    ],
    resultados: { posiciones: [
      { atletaId: atletaPorNombre['Nairo Quintana']._id, puesto: 1, tiempo: '5h12m' },
      { atletaId: atletaPorNombre['Li Wei']._id, puesto: 3, tiempo: '5h17m' },
    ], medallas: { oro: atletaPorNombre['Nairo Quintana']._id, plata: null, bronce: atletaPorNombre['Li Wei']._id } },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Fútbol - Grupo A: ARG vs BRA',
    disciplina: 'Fútbol',
    tipo: 'equipos',
    fecha: ISODate('2025-08-09T00:00:00Z'),
    sede: { ciudad: 'Buenos Aires', paisCodigo: 'ARG' },
    ronda: 'fase de grupos',
    participantes: [
      { equipoId: equipoPorNombre['Argentina Fútbol Senior']._id, delegacionCodigo: 'ARG' },
      { equipoId: equipoPorNombre['Brasil Fútbol Senior']._id, delegacionCodigo: 'BRA' },
    ],
    resultados: { ganadorEquipoId: equipoPorNombre['Argentina Fútbol Senior']._id, marcador: '2-1' },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Fútbol - Grupo B: ESP vs GER',
    disciplina: 'Fútbol',
    tipo: 'equipos',
    fecha: ISODate('2025-08-10T00:00:00Z'),
    sede: { ciudad: 'Madrid', paisCodigo: 'ESP' },
    ronda: 'fase de grupos',
    participantes: [
      { equipoId: equipoPorNombre['España Fútbol Senior']._id, delegacionCodigo: 'ESP' },
      { equipoId: equipoPorNombre['Alemania Fútbol Senior']._id, delegacionCodigo: 'GER' },
    ],
    resultados: { ganadorEquipoId: equipoPorNombre['España Fútbol Senior']._id, marcador: '1-0' },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Natación 4x100 - Final',
    disciplina: 'Natación',
    tipo: 'equipos',
    fecha: ISODate('2025-08-02T00:00:00Z'),
    sede: { ciudad: 'Sídney', paisCodigo: 'AUS' },
    ronda: 'final',
    participantes: [
      { equipoId: equipoPorNombre['Australia Natación 4x100']._id, delegacionCodigo: 'AUS' },
      { equipoId: equipoPorNombre['USA Natación 4x100']._id, delegacionCodigo: 'USA' },
    ],
    resultados: { ganadorEquipoId: equipoPorNombre['Australia Natación 4x100']._id, marcador: '3:10.50' },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Judo -81kg Final',
    disciplina: 'Judo',
    tipo: 'individual',
    fecha: ISODate('2025-08-06T00:00:00Z'),
    sede: { ciudad: 'Tokio', paisCodigo: 'JPN' },
    ronda: 'final',
    participantes: [
      { atletaId: atletaPorNombre['Yuki Tanaka']._id, delegacionCodigo: 'JPN' },
    ],
    resultados: { posiciones: [{ atletaId: atletaPorNombre['Yuki Tanaka']._id, puesto: 1, victoria: 'ippon' }], medallas: { oro: atletaPorNombre['Yuki Tanaka']._id, plata: null, bronce: null } },
  },
  {
    _id: new ObjectId(),
    nombreEvento: '5000m Masculino - Final',
    disciplina: 'Atletismo',
    tipo: 'individual',
    fecha: ISODate('2025-08-04T00:00:00Z'),
    sede: { ciudad: 'París', paisCodigo: 'FRA' },
    ronda: 'final',
    participantes: [
      { atletaId: atletaPorNombre['Hassan Kiprop']._id, delegacionCodigo: 'KEN' },
    ],
    resultados: { posiciones: [{ atletaId: atletaPorNombre['Hassan Kiprop']._id, puesto: 1, tiempo: '12:55' }], medallas: { oro: atletaPorNombre['Hassan Kiprop']._id, plata: null, bronce: null } },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Ciclismo Pista - Persecución',
    disciplina: 'Ciclismo',
    tipo: 'individual',
    fecha: ISODate('2025-08-08T00:00:00Z'),
    sede: { ciudad: 'Shanghái', paisCodigo: 'CHN' },
    ronda: 'semifinal',
    participantes: [
      { atletaId: atletaPorNombre['Li Wei']._id, delegacionCodigo: 'CHN' },
    ],
    resultados: { posiciones: [{ atletaId: atletaPorNombre['Li Wei']._id, puesto: 2, tiempo: '4:12.5' }], medallas: {} },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Fútbol - Grupo A: MEX vs ARG',
    disciplina: 'Fútbol',
    tipo: 'equipos',
    fecha: ISODate('2025-08-12T00:00:00Z'),
    sede: { ciudad: 'Ciudad de México', paisCodigo: 'MEX' },
    ronda: 'fase de grupos',
    participantes: [
      { equipoId: equipoPorNombre['México Fútbol Senior']._id, delegacionCodigo: 'MEX' },
      { equipoId: equipoPorNombre['Argentina Fútbol Senior']._id, delegacionCodigo: 'ARG' },
    ],
    resultados: { ganadorEquipoId: equipoPorNombre['México Fútbol Senior']._id, marcador: '1-0' },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Voleibol - Exhibición',
    disciplina: 'Voleibol',
    tipo: 'individual',
    fecha: ISODate('2025-08-11T00:00:00Z'),
    sede: { ciudad: 'Río de Janeiro', paisCodigo: 'BRA' },
    ronda: 'exhibición',
    participantes: [
      { atletaId: atletaPorNombre['Renata Souza']._id, delegacionCodigo: 'BRA' },
    ],
    resultados: { posiciones: [{ atletaId: atletaPorNombre['Renata Souza']._id, puesto: 1 }], medallas: {} },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Baloncesto - Tiro de 3',
    disciplina: 'Baloncesto',
    tipo: 'individual',
    fecha: ISODate('2025-08-13T00:00:00Z'),
    sede: { ciudad: 'Los Ángeles', paisCodigo: 'USA' },
    ronda: 'exhibición',
    participantes: [
      { atletaId: atletaPorNombre['Mike Johnson']._id, delegacionCodigo: 'USA' },
    ],
    resultados: { posiciones: [{ atletaId: atletaPorNombre['Mike Johnson']._id, puesto: 1, puntos: 27 }], medallas: {} },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Hockey - Habilidades',
    disciplina: 'Hockey',
    tipo: 'individual',
    fecha: ISODate('2025-08-14T00:00:00Z'),
    sede: { ciudad: 'Toronto', paisCodigo: 'CAN' },
    ronda: 'exhibición',
    participantes: [
      { atletaId: atletaPorNombre['Ethan Clark']._id, delegacionCodigo: 'CAN' },
    ],
    resultados: { posiciones: [{ atletaId: atletaPorNombre['Ethan Clark']._id, puesto: 2, puntos: 85 }], medallas: {} },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Fútbol - Amistoso: BRA vs ESP',
    disciplina: 'Fútbol',
    tipo: 'equipos',
    fecha: ISODate('2025-08-15T00:00:00Z'),
    sede: { ciudad: 'São Paulo', paisCodigo: 'BRA' },
    ronda: 'amistoso',
    participantes: [
      { equipoId: equipoPorNombre['Brasil Fútbol Senior']._id, delegacionCodigo: 'BRA' },
      { equipoId: equipoPorNombre['España Fútbol Senior']._id, delegacionCodigo: 'ESP' },
    ],
    resultados: { ganadorEquipoId: equipoPorNombre['Brasil Fútbol Senior']._id, marcador: '3-2' },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Esgrima Florete - Clasificatoria',
    disciplina: 'Esgrima',
    tipo: 'individual',
    fecha: ISODate('2025-07-28T00:00:00Z'),
    sede: { ciudad: 'Lyon', paisCodigo: 'FRA' },
    ronda: 'clasificatoria',
    participantes: [
      { atletaId: atletaPorNombre['Pierre Martin']._id, delegacionCodigo: 'FRA' },
    ],
    resultados: { posiciones: [{ atletaId: atletaPorNombre['Pierre Martin']._id, puesto: 1 }], medallas: {} },
  },
  {
    _id: new ObjectId(),
    nombreEvento: 'Natación 4x100 - Clasificatoria',
    disciplina: 'Natación',
    tipo: 'equipos',
    fecha: ISODate('2025-08-01T00:00:00Z'),
    sede: { ciudad: 'Sídney', paisCodigo: 'AUS' },
    ronda: 'clasificatoria',
    participantes: [
      { equipoId: equipoPorNombre['Australia Natación 4x100']._id, delegacionCodigo: 'AUS' },
      { equipoId: equipoPorNombre['USA Natación 4x100']._id, delegacionCodigo: 'USA' },
    ],
    resultados: { ganadorEquipoId: equipoPorNombre['Australia Natación 4x100']._id },
  },
  {
    _id: new ObjectId(),
    nombreEvento: '200m Masculino - Final',
    disciplina: 'Atletismo',
    tipo: 'individual',
    fecha: ISODate('2025-08-02T00:00:00Z'),
    sede: { ciudad: 'París', paisCodigo: 'FRA' },
    ronda: 'final',
    participantes: [
      { atletaId: atletaPorNombre['Hassan Kiprop']._id, delegacionCodigo: 'KEN' },
    ],
    resultados: { posiciones: [{ atletaId: atletaPorNombre['Hassan Kiprop']._id, puesto: 4 }], medallas: {} },
  },
];

database.competencias.insertMany(competencias);

print('Inserciones completadas en la base torneo2025');