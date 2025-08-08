// Consultas con operadores - Ejecutar con: mongosh consultas_operadores.js

const database = db.getSiblingDB('torneo2025');

// 1) Equipos con más de 10 jugadores ($gt)
print('\nEquipos con más de 10 jugadores:');
printjson(database.equipos.find({ numJugadores: { $gt: 10 } }).toArray());

// 2) Atletas con edad entre 20 y 25 ($gte, $lte)
print('\nAtletas con edad entre 20 y 25:');
printjson(database.atletas.find({ edad: { $gte: 20, $lte: 25 } }).toArray());

// 3) Delegaciones que no sean de Europa ($ne)
print('\nDelegaciones que no son de Europa:');
printjson(database.delegaciones.find({ continente: { $ne: 'Europa' } }).toArray());

// 4) Equipos cuya disciplina está en un conjunto ($in)
print('\nEquipos de Fútbol o Natación:');
printjson(database.equipos.find({ disciplina: { $in: ['Fútbol', 'Natación'] } }).toArray());

// 5) Atletas cuya disciplina no esté en un conjunto ($nin)
print('\nAtletas que no sean de Fútbol ni Baloncesto:');
printjson(database.atletas.find({ disciplina: { $nin: ['Fútbol', 'Baloncesto'] } }).toArray());

// 6) Competencias programadas después del 1 de agosto de 2025 ($gt)
print('\nCompetencias después del 2025-08-01:');
printjson(database.competencias.find({ fecha: { $gt: ISODate('2025-08-01T00:00:00Z') } }).toArray());

// 7) Atletas con estatura mayor o igual a 185 cm ($gte)
print('\nAtletas con estatura >= 185cm:');
printjson(database.atletas.find({ estaturaCm: { $gte: 185 } }).toArray());

// 8) Equipos con número de jugadores distinto de 23 ($ne)
print('\nEquipos con numJugadores != 23:');
printjson(database.equipos.find({ numJugadores: { $ne: 23 } }).toArray());

// 9) Competencias de tipo 'equipos' o con sede en España ($or)
print("\nCompetencias de tipo 'equipos' o sede en España:");
printjson(database.competencias.find({ $or: [ { tipo: 'equipos' }, { 'sede.paisCodigo': 'ESP' } ] }).toArray());

// 10) Competencias con 2 o más participantes ($expr, $size)
print('\nCompetencias con al menos 2 participantes:');
printjson(database.competencias.find({ $expr: { $gte: [ { $size: '$participantes' }, 2 ] } }).toArray());

// 11) Competencias donde participa una delegación específica ($elemMatch)
print('\nCompetencias con participación de ARG:');
printjson(database.competencias.find({ participantes: { $elemMatch: { delegacionCodigo: 'ARG' } } }).toArray());

// 12) Atletas que tengan medallas que incluyan "oro" ($in en arrays)
print('\nAtletas con medalla de oro:');
printjson(database.atletas.find({ medallas: { $in: ['oro'] } }).toArray());