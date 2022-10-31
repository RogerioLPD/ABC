const db = require("./_database")

async function listAnalista(){
    await db.connect()
    var resultado  
    result = await db.query("select * from analista")
    console.log("Analistas!")
    console.table(result.rows);
}
listAnalista()

