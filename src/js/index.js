/*
Quando clicar no pokémon da listagem, temos que esconder o cartão do pokémon aberto e mostrar o cartão do pokémon correspondente ao que foi selecionado na listagem 

Pra isso vamos precisar trabalhar com 2 elementos:
1- Listagem
2-Cartão pokémon

Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

-Remover a classe aberto só do cartão que está aberto

-Ao clicar em um pokémon  da listagem pegamos  o id desse pokémon pra saber qual cartão mostrar

-Remover a classe ativo que marca o pokémon selecionado (Marcação vermelha da listagem)

-Adicionar a classe ativo no item da lista selecionado


*/  

// Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
console.log(listaSelecaoPokemons)
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    // Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
    pokemon.addEventListener('click',() => {
        console.log(pokemon)
        // -Remover a classe aberto só do cartão que está aberto
            const cartaoPokemonAberto = document.querySelector('.aberto')
            cartaoPokemonAberto.classList.remove('aberto')

        // Ao clicar em um pokémon  da listagem pegamos  o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado 
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // -Remover a classe ativo que marca o pokémon selecionado (Marcação vermelha da listagem)
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // Adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})

