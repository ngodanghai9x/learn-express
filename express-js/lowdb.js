// import { join } from 'path'
import { Low, JSONFile } from 'lowdb';

// Use JSON file for storage
// const file = join(__dirname, 'lowdb.json');
const adapter = new JSONFile('./lowdb.json');
const db = new Low(adapter);

export default db;