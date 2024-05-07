var altura = 0
var largura = 0
var vidas = 1
function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()
function posicaoRandomica(){
	//Remoção do mosquito da posição anterior antes de criar o elemento novamente (caso exista)
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
		//Condição que conta o número de vidas!
		if(vidas > 3){
			window.location.href = 'fim_jogo.html'
		}else{
			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
			vidas++
		}
	}
	var x = Math.floor(Math.random() * largura) - 90
	var y = Math.floor(Math.random() * altura) - 90
	x = x < 0 ? 0 : x
	y = y < 0 ? 0 : y
	console.log(x, y)
	//criar o elemento html de forma programática com DOM
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = x + 'px'
	mosquito.style.top = y + 'px'
	mosquito.style.position = 'absolute'
	document.body.appendChild(mosquito)
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}
}
//Função para criar tamanhos aleatórios para o elemento html
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	switch(classe){
	case 0:
		return 'mosquito1'
	case 1:
		return 'mosquito2'
	case 2:
		return 'mosquito3'
	}
}
//Função para mudar o lado em que o elemento html está apontando (olhando)
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)
	switch(classe){
	case 0:
		return 'ladoA'
	case 1:
		return 'ladoB'
	}
}