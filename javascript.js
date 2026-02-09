const btnClear = document.querySelector("#clear");

function createGrid(size = 16) {
    const container = document.getElementById('container');
    
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }

    const containerSize = size * 10;
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    console.log(`Grid of ${size} x ${size} created.`);
}

function clearGrid() {
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    console.log('Grid cleared.');
}

createGrid(100);
btnClear.addEventListener('click', clearGrid);