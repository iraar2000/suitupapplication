import {Client} from "pg"


async function accessingPostgress(){

    const client = new Client({
        host: "localhost",
        database: "SuitUP",
        port: 5432,
        user: "postgres",
        password: "arsene01102000"
    });

    try {
        await client.connect();
        console.log("the server was connected successfully!");

        const weatherData = await client.query("select * from weather;")
        console.log("the querry returned database weatherData: ", weatherData.rows[0]); 

        await client.end();
    } catch (error) {
        console.log("querry failed to return weather data with error: ", error);        
    }
};

accessingPostgress();