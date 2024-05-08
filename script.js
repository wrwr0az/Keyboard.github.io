document.querySelectorAll('.button-grid button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('output').textContent += button.textContent;
    });
});

document.getElementById('deleteButton').addEventListener('click', () => {
    let output = document.getElementById('output');
    let text = output.textContent;
    output.textContent = text.substr(0, text.length - 1);
});

document.getElementById('spaceButton').addEventListener('click', () => {
    let output = document.getElementById('output');
    let text = output.textContent + " ";
    output.textContent = text;
});
