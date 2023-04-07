// Importamos o Swal da biblioteca sweetalert2
import Swal from 'sweetalert2';

// Criamos as constantes da nossa imagem, do nome e do botão
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

// Nossa URL base agora será a URL da outra API
// const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id';

// A API possui 731 heroínas e heróis cadastrados. Porém, para
// simularmos um erro na API por não encontrar o id informado,
// vamos colocar que a quantidade máxima de ids é superior ao
// correto.

// Função simples para retornar um valor inteiro aleatório
const randomId = () => Math.floor(Math.random() * '731');

// Adicionamos o eventListener 'click' no nosso botão
button.addEventListener('click', () => {
    const id = randomId();

    // Faremos o fetch utilizando nossa URL e o id gerado
    // pela função. Agora, note que devemos adicionar,
    // além do ID, um '.json' ao final da URL
    fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
    // Após o fetch, devemos extrair o objeto com a função .json()
        .then((result) => result.json())
        .then((data) => {
        // Uma vez extraído, vamos recuperar as informações
        // que precisamos. No caso, a imagem e o nome
        // Atenção aqui: A imagem está em uma propriedade
        // diferente chamada 'images'. Nela, tem diferentes
        // tamanhos para as imagens. Aqui, usaremos o tamanho
        // large (images.lg)
            img.src = data.images.lg;
            name.innerHTML = data.name;
        })
    // Caso haja erro, nós tratamos o mesmo com o .catch()
        .catch((error) => Swal.fire({
        // Aqui, estamos usando a nossa biblioteca, mas
        // você pode usar a função window.alert() também
            title: 'Heroi nao encontrado!',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Cool',
        }));
});
