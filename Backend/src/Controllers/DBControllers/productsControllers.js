import { NeonDB, PGClient } from "../../config/db.js"
import fs from "fs/promises" 

let config = await fs.readFile("./src/config/config.json", "utf-8");
let configData = JSON.parse(config);

// defining the controllers of the api requests for online format in neon database
export async function GetProducts(req, res){
    let Data = "";

    try {
        // a querry to get all Suits available in database
        if(!configData.offlineMode)  Data = await NeonDB.query(`SELECT * FROM suits`);
        else if(configData.offlineMode) Data = await PGClient.query("SELECT * FROM suits;");

        // the response for the request 
        return res.status(200).json({
            data: Data.rows,
            columns: (Data.fields).map(({name}) => name ),
            message:"The app Retrieved All Suits"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
}

export async function GetProductsByColumnValue(req, res){
    const {colName, Value} = req.body;
    let Data = "";

    try {
        // a querry to get all Suits available in database by id
        if(!configData.offlineMode) Data = await NeonDB.query(`SELECT * FROM suits WHERE ${colName}=${Value}}`);
        else if(configData.offlineMode) Data = await PGClient.query(`SELECT * FROM suits WHERE ${colName}=${Value};`);
        
        // the response for the request 
        return res.status(200).json({
            data: Data.rows,
            columns: (Data.fields).map(({name}) => name),
            message:`The app Retrieved the Suit with an id ${Value}`
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
}

export async function PostProducts(req, res){
    let Data = "";

    try {
        const {ManufactureName, ManufactureContacts, SuitPrice, SuitPreviousPrice, SuitDiscount, SuitSize, SuitQuantity, SuitImages} = req.body;
        if(!ManufactureName||!ManufactureContacts||!SuitPrice||!SuitPreviousPrice||!SuitDiscount||!SuitSize||!SuitQuantity||!SuitImages){
            return res.status(400).json({message:"missing some data!"});
        }
        
        if(!configData.offlineMode){
            Data = await NeonDB.query(`
                INSERT INTO suits (ManufactureName, ManufactureContacs, SuitPrice, SuitPreviousPrice, SuitDiscount, SuitSize, SuitQuantity, SuitImages) 
                VALUES (${ManufactureName}, ${ManufactureContacts}, ${SuitPrice}, ${SuitPreviousPrice}, ${SuitDiscount}, ${SuitSize}, ${SuitQuantity}, ${SuitImages}) 
                RETURNING *`);
            console.log("inserting data in the neon database");

        }else if(configData.offlineMode){
            Data = (await PGClient.query(`
                INSERT INTO suits (ManufactureName, ManufactureContacs, SuitPrice, SuitPreviousPrice, SuitDiscount, SuitSize, SuitQuantity, SuitImages) 
                VALUES ('${ManufactureName}', '${ManufactureContacts}', ${SuitPrice}, ${SuitPreviousPrice}, ${SuitDiscount}, ${SuitSize}, ${SuitQuantity}, '${SuitImages}') 
                RETURNING *`)).rows;
            console.log("inserting data in the postgresql database");
        }
        
        return res.status(200).json({
            Data: Data.rows,
            message:"Data Inserted Successfully!"});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error:",error});
    } 
}
