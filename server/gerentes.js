const db = require("./_database")

async function listGerentes(){
    await db.connect()
    var resultado
    result = await db.query("select * from gerentes")
    console.log("Gerentes!")
    console.table(result.rows);   
}
listGerentes()

