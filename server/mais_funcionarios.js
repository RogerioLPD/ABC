const db = require("./_database")

async function listMaisFuncionarios(){
    await db.connect()
    result = await db.query("select * from mais_funcionarios")
    console.log("Setor com o maior número de funcionários!")
    console.table(result.rows);  
}
listMaisFuncionarios()

