const db = require("./_database")

async function listMenosDependentes(){
    await db.connect()
    var resultado
    result = await db.query("select * from numero_dependentes")
    console.log("Setor com menor numero de funcionários sem dependentes!")
    console.table(result.rows); 
}
listMenosDependentes()

