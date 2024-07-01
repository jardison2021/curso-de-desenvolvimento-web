class Despesa{
	constructor(ano, mes, dia, tipo, descricao, valor){
		this.ano = ano
		this.mes = tipo
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}
	//Método para validação dos dados
	validarDados(){
		for(let i in this){
			if(this[i] == undefined || this[i] == '' || this[i] == null){
				return false
			}
		}
		return true
	}
}
//Classe do objeto BD
class Bd{
	constructor(){
		let id = localStorage.getItem('id')
		if(id === null){
			localStorage.setItem('id', 0)
		}
	}
	getProximoId(){
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}
	//Função para utilizar o local storage
	//Esta função permite que toda vez que algum dado seja adiciondo, ela seja setada na notação JSON, artavés do camando JSON.stringify(d), sendo "d" o parâmetro utilizado para guardar as informações.
	//A função setItem contém um protocolo que abre comunicação com o local storage para o encaminhar o JSON.
	gravar(d){
		let id = this.getProximoId()
		localStorage.setItem(id, JSON.stringify(d))
		localStorage.setItem('id', id)
	}
}
let bd = new Bd()
function cadastrarDespesa(){
	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')
	let despesa = new Despesa(ano.value, mes.value, dia.value, descricao.value, valor.value)
	//Condição e chamada da validação dos dados
	if(despesa.validarDados()){
		//bd.gravar(despesa)
		console.log('Dados válidos')
	}else{
		console.log('Dados inválidos')
	}
}