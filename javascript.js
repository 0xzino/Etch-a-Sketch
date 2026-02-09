const btnNew = document.querySelector("#newGrid");
const CONTAINER_SIZE = 640;

function createGrid(size = 16) {
    const container = document.getElementById('container');
    const boxSize = CONTAINER_SIZE / size;
    
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.width = div.style.height = `${boxSize}px`;
        div.addEventListener('mousedown', () => {div.style.backgroundColor = 'black';});
        div.addEventListener('mouseenter', (e) => {if (e.buttons === 1) {div.style.backgroundColor = 'black';}});
        container.appendChild(div);
    }

    console.log(`Grid of ${size} x ${size} created.`);
}

function clearGrid() {
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    console.log('Grid cleared.');
}

function newGrid() {
    clearGrid();
    const newSize = prompt('Enter new grid size (1-64): ');
    if (newSize >= 1 && newSize <= 64) {
        createGrid(newSize);
    } else {
        alert('Invalid size. Please enter a number between 1 and 64.');
    }
}


btnNew.addEventListener('click', newGrid);

createGrid(16);

if (box.hover) {
    box.style.backgroundColor = 'black';
}