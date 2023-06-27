const textContainer = document.getElementById('text-container');
const text = 'Texto subindo da parte inferior da página.';
const delay = 100; // Tempo de atraso entre cada letra (em milissegundos)

let index = 0;

function displayNextLetter() {
    if (index < text.length) {
        const letter = document.createElement('span');
        letter.textContent = text.charAt(index);
        textContainer.appendChild(letter);
        index++;
        setTimeout(displayNextLetter, delay);
    }
}

displayNextLetter();