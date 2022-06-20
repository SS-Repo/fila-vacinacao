import jsonData from "../model/PessoasVacinacao";

let tamanho = jsonData.pessoas.length;
const listGrupos = ['Saúde','Educação','Alimentícios','Segurança','Aposentado','Outros'];
let pessoas = [];
let grupoSaude = [];
let grupoEducacao = [];
let grupoAlimenticio = [];
let grupoSeguranca = [];
let grupoAposentados = [];
let grupoOutros = [];
let resultadoOrdenacao = [];

for (let i = 0; i < tamanho; i++) {
   pessoas.push(jsonData.pessoas[i]); 
}

function separacaoGrupos(linha, grupo){
    if(grupo === 0){
        grupoSaude.push(linha)
    }
    if(grupo === 1){
        grupoEducacao.push(linha);
    }
    if(grupo === 2){
        grupoAlimenticio.push(linha);
    }
    if(grupo === 3){
        grupoSeguranca.push(linha);
    }
    if(grupo === 4){
        grupoAposentados.push(linha);
    }
    if(grupo === 5){
        grupoOutros.push(linha);
    }
}

for (let j = 0; j < 20; j++) {
    if(pessoas[j].areaDeAtuacao === listGrupos[0]){
        separacaoGrupos(pessoas[j], 0);
    }
    if(pessoas[j].areaDeAtuacao === listGrupos[1]){
        separacaoGrupos(pessoas[j], 1);
    }
    if(pessoas[j].areaDeAtuacao === listGrupos[2]){
        separacaoGrupos(pessoas[j], 2);
    }
    if(pessoas[j].areaDeAtuacao === listGrupos[3]){
        separacaoGrupos(pessoas[j], 3);
    }
    if(pessoas[j].idade > 60){
        separacaoGrupos(pessoas[j], 4);
    }
    if(pessoas[j].areaDeAtuacao !== listGrupos[0] 
        && pessoas[j].areaDeAtuacao !== listGrupos[1]
            && pessoas[j].areaDeAtuacao !== listGrupos[2]
                && pessoas[j].areaDeAtuacao !== listGrupos[3]
                    && pessoas[j].idade < 60){
        separacaoGrupos(pessoas[j], 5);
    }
}

function ordenacao(grupo){
    let sort = [];
    for (let i = 0; i< grupo.length; i++) {
        for (let j = i + 1; j < grupo.length; j++) {
            if(grupo[i].idade < grupo[j].idade )
            {
                sort[i] = grupo[i];
                grupo[i] = grupo[j];
                grupo[j] = sort[i];
            }
        }
    }
    return grupo;
 }
 
grupoSaude = ordenacao(grupoSaude);
grupoEducacao = ordenacao(grupoEducacao);
grupoAlimenticio = ordenacao(grupoAlimenticio);
grupoSeguranca = ordenacao(grupoSeguranca);
grupoAposentados = ordenacao(grupoAposentados);
grupoOutros = ordenacao(grupoOutros);

function resultadoFinal(grupo){
    for (let i = 0; i < grupo.length; i++) {
        resultadoOrdenacao.push(grupo[i]);
    }
}

resultadoFinal(grupoAposentados);
resultadoFinal(grupoSaude);
resultadoFinal(grupoEducacao);
resultadoFinal(grupoAlimenticio);
resultadoFinal(grupoSeguranca);
resultadoFinal(grupoOutros)

const grupos = 4;
const divisaoGrupos = tamanho / grupos;
let start = 0;
let a = divisaoGrupos;
let b = a + divisaoGrupos;
let c = b + divisaoGrupos;
let d = c + divisaoGrupos;

resultadoOrdenacao.forEach(res =>{
    if(start < a){
        res['grupoVacinacao'] = "Grupo - 1";
    }
    if(start > a - 1 && start < b){
        res['grupoVacinacao'] = "Grupo - 2";
    }
    if(start > b - 1 && start < c){
        res['grupoVacinacao'] = "Grupo - 3";
    }
    if(start > c - 1 && start < d){
        res['grupoVacinacao'] = "Grupo - 4";
    }
    start++
})

export default resultadoOrdenacao;