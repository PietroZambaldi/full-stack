app.get('/cadastrar', function(requisicao,resposta){
    let nome = requisicao.query.nome;
    let login = requiscao.query.login;
    let senha = requisicao.query.senha;
    let nasc = requisicao.query.nascimento;

    console.log(nome,login,senha,nasc)
})

app.post('/cadastrar', function(requiscao, resposta){
    let nome = requisicao.body.nome;
    let login = requiscao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;

    console.log(nome,login,senha,nasc)
})



var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = `mongodb+srv://pietro:zambaldi1212@cloasterdaora.cqdwfan.mongodb.net/?retryWrites=true&w=majority&appName=cloasterdaora`;


const client = new MongoClient(uri, { useNewUrlParser: true });
