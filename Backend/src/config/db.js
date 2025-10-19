import { neon } from "@neondatabase/serverless"
import {Client} from "pg"
import "dotenv/config"
import fs from "fs/promises"
import filesys from "fs"

// initializing the neon database

console.log(process.env.DATABASE_URL);
export const NeonDB = new Client({
    connectionString: process.env.DATABASE_URL
});
export const PGClient = new Client({
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
});

// initial function for creating the first table in the database

export default async function initDB(){
    try {
        
        // reading the config json data
        const config = await fs.readFile("./src/config/config.json", "utf-8");
        const configData = JSON.parse(config);

        // initializing the Suits table in neonserverless database
        console.log("creating suits table in neon database...");
        
        if(!configData.offlineMode){
            await NeonDB.connect();
            await NeonDB.query(`
                CREATE TABLE IF NOT EXISTS suits(
                    id SERIAL PRIMARY KEY,
                    ManufactureName VARCHAR(255) NOT NULL,
                    ManufactureContacs VARCHAR(255) NOT NULL,
                    SuitPrice INT NOT NULL,
                    SuitPreviousPrice INT NOT NULL,
                    SuitDiscount INT NOT NULL,
                    SuitSize VARCHAR(255) NOT NULL,
                    SuitQuantity INT NOT NULL,
                    SuitImages VARCHAR(255) NOT NULL,
                    Posted_On DATE NOT NULL DEFAULT CURRENT_DATE)`)
        };
        
        console.log("successfully created suits table in neon database! ");

        // initializing the Suits table in postgresql in SuitUP database
        console.log("creating suits table postgresql database...");
        await PGClient.connect();

        const response = await PGClient.query(
            `CREATE TABLE IF NOT EXISTS suits(
                id SERIAL PRIMARY KEY,
                ManufactureName VARCHAR(255) NOT NULL,
                ManufactureContacs VARCHAR(255) NOT NULL,
                SuitPrice INT NOT NULL,
                SuitPreviousPrice INT NOT NULL,
                SuitDiscount INT NOT NULL,
                SuitSize VARCHAR(255) NOT NULL,
                SuitQuantity INT NOT NULL,
                SuitImages VARCHAR(255) NOT NULL,
                Posted_On DATE NOT NULL DEFAULT CURRENT_DATE);`
        ) 

        console.log("successfully created suits table in postgresql database!")

        // reading data from ./file.json values
        const data = await fs.readFile("./file.json","utf-8")
        const obj = JSON.parse(data); // Convert JSON string to object

        // checking if the database was initialized with default data
        if(!configData.InitializeDB){
            console.log("initializing data in both neon and postgresql database suits table from ./file.json...")
            for(let i=0; i<62; i++){
                const NeonResponse = await NeonDB.query(`
                    INSERT INTO suits (ManufactureName, ManufactureContacs, SuitPrice, SuitPreviousPrice, SuitDiscount, SuitSize, SuitQuantity, SuitImages) 
                    VALUES (${obj[`Suit${i}`].ManufactureName}, ${obj[`Suit${i}`].ManufactureContacts}, ${obj[`Suit${i}`].SuitPrice}, ${obj[`Suit${i}`].SuitPreviousPrice}, ${obj[`Suit${i}`].SuitDiscount}, ${obj[`Suit${i}`].SuitSize}, ${obj[`Suit${i}`].SuitQuantity}, ${obj[`Suit${i}`].SuitImage}) 
                    RETURNING *`)
                const PGResponse = await PGClient.query(`
                    INSERT INTO suits (ManufactureName, ManufactureContacs, SuitPrice, SuitPreviousPrice, SuitDiscount, SuitSize, SuitQuantity, SuitImages) 
                    VALUES ('${obj[`Suit${i}`].ManufactureName}', '${obj[`Suit${i}`].ManufactureContacts}', ${obj[`Suit${i}`].SuitPrice}, ${obj[`Suit${i}`].SuitPreviousPrice}, ${obj[`Suit${i}`].SuitDiscount}, ${obj[`Suit${i}`].SuitSize}, ${obj[`Suit${i}`].SuitQuantity}, '${obj[`Suit${i}`].SuitImage}') 
                    RETURNING *;`)
            }

            // then we change the initializeDB from config.json to True          
            let raw = filesys.readFileSync("./src/config/config.json");
            let data = JSON.parse(raw);
            data.InitializeDB = true;
            filesys.writeFileSync("./src/config/config.json", JSON.stringify(data, null, 2));

        }
        console.log("successfully initialized data in both neon and postgresql database, suits table.")
    }
    catch (error) {
        console.log(error);
        process.exit(1);  // code 1 is for fail, 0 is for success
    }
}
