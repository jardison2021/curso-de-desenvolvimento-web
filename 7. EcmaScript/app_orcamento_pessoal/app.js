class Despesa{
	constructor(ano, mes, dia, tipo, descricao, valor){
		this.ano = ano
		this.mes = tipo
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}
}
function cadastrarDespesa(){
	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')
	let despesa = new Despesa(ano.value, mes.value, dia.value, descricao.value, valor.value)
	gravar(despesa)
}
//Função para utilizar o local storage
//Esta função permite que toda vez que algum dado seja adiciondo, ela seja setada na notação JSON, artavés do camando JSON.stringify(d), sendo "d" o parâmetro utilizado para guardar as informações.
function gravar(d){
	localStorage.setItem('despesa', JSON.stringify(d))
}