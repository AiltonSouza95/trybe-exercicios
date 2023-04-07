import Swal from 'sweetalert2';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const randomId = () => Math.floor(Math.random() * '731');

button.addEventListener('click', () => {
    const id = randomId();

    fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
        .then((result) => result.json())
        .then((data) => {
            img.src = data.images.lg;
            name.innerHTML = data.name;
        })
        .catch((error) => Swal.fire({
            title: 'Heroi nao encontrado!',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Cool',
        }));
});
