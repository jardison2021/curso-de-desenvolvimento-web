var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
//Essa parte serve para ajustar o tempo do jogo de acordo com nível escolhio
var criaMosquitoTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel === 'normal'){
	//1500
	criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
	//1000
	criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
	//750
	criaMosquitoTempo = 750
}
function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()
//A variável cronomento contará o tempo de jogo, a função receberá a variável e será decrementada -1.
var cronometro = setInterval(function(){
	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html' 
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)
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