const btnNew = document.querySelector("#newGrid");

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