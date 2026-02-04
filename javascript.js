function createGrid(size = 16) {
    const container = document.getElementById('container');
    
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    }
}

createGrid(16);