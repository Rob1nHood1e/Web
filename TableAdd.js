document.getElementById("Add").addEventListener("click", () => {
    while ((input = prompt("Добавьте ячейку")) !== null) {
        let list = document.querySelector('table');
        let entry = document.createElement('td');
        let textNode = document.createTextNode(input);
        entry.appendChild(textNode);
        list.appendChild(entry);
    }
});