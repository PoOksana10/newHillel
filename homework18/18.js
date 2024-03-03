const length = 10;
const tbody = document.createElement('table');
const body = document.body
body.appendChild(tbody)

Array.from({length}, () => {
    const tr = document.createElement('tr');
    tr.classList.add('line');
    Array.from({length}, () => {
        const n = 1 + Math.random() * 100 | 0;
        const td = document.createElement('td');
        td.classList.add('box');
        td.innerText = n;
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
});