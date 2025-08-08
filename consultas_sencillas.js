// Consultas sencillas (sin operadores) - Ejecutar con: mongosh consultas_sencillas.js

const database = db.getSiblingDB('torneo2025');

// 1) Equipos de una disciplina específica (Fútbol)
print('\nEquipos de Fútbol:');
printjson(database.equipos.find({ disciplina: 'Fútbol' }).toArray());

// 2) Atletas de cierto país (España)
print('\nAtletas de España:');
printjson(database.atletas.find({ paisCodigo: 'ESP' }).toArray());

// 3) Delegaciones de un continente (Europa)
print('\nDelegaciones de Europa:');
printjson(database.delegaciones.find({ continente: 'Europa' }).toArray());

// 4) Competencias en una ciudad específica (París)
print('\nCompetencias en París:');
printjson(database.competencias.find({ 'sede.ciudad': 'París' }).toArray());

// 5) Competencias de una fecha exacta (2025-08-01)
print('\nCompetencias del 2025-08-01:');
printjson(database.competencias.find({ fecha: ISODate('2025-08-01T00:00:00Z') }).toArray());