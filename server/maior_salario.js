const db = require("./_database")

async function listMaiorSalario(){
    await db.connect()
    var resultado
    result = await db.query("select * from maior_salario")
    console.log("Funcionário com o maior salário!")
    console.table(result.rows); 
}
listMaiorSalario()

