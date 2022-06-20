import Table from 'react-bootstrap/Table';
import resultadoOrdenacao from '../../controller/Algoritmo';

const grupos = [
  {
    id: 1,
    grupo: "Grupo - 1",
    dataVacinacao: "01/07/2022" 
  },
  {
    id: 2,
    grupo: "Grupo - 2",
    dataVacinacao: "02/07/2022"
  },
  {
    id: 3,
    grupo: "Grupo - 3",
    dataVacinacao: "03/07/2022"
  },
  {
    id: 4,
    grupo: "Grupo - 4",
    dataVacinacao: "04/07/2022"
  }
]

function ApresentacaoResultados(){
    return(
        <div className="apresentacao-resultado">
            <h1 className="texto-titulo">Datas de Vacinação de Grupos de Alto Risco</h1>

            <Table className="tabela-grupos" bordered hover>
              <thead>
                <tr>
                  <th>Grupos</th>
                  <th>Data de Vacinação</th>
                </tr>
              </thead>
              <tbody>
                {
                  grupos.map((grupo) => {
                    return(
                      <tr key={ grupo.id }>
                        <td>{ grupo.grupo }</td>
                        <td>{ grupo.dataVacinacao }</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

             <h1 className="texto-titulo">Lista De Vacinação</h1>    
             <p className='regras'>
              <b>
              A lista de vacinação é classificada por:
              </b>
              <br />
              1 - Aposentados e idosos acima de 60 anos
              <br />
              2 - Profissional que exerce atividade relacionado há:
              <br />
              Saúde,Educação,Alimentícios e Segurança
             </p>
            
            <Table className="tabela-resultados" bordered hover>
              <thead>
                <tr>
                  <th>Grupos de Vacinação</th>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Area de Atuação</th>
                </tr>
              </thead>
              <tbody>
                {
                  resultadoOrdenacao.map((resultado, index) =>{
                    return(
                      <tr key= {index}>
                        <td> { resultado.grupoVacinacao }</td>
                        <td> { resultado.nome } </td>
                        <td> { resultado.idade }</td>
                        <td> { resultado.areaDeAtuacao } </td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </Table>    
        </div>
    );
}

export default ApresentacaoResultados;