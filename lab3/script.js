const input = document.getElementById('input');
const clickbutton = document.getElementById('button');
const list = document.getElementById('list');
const button = document.getElementById('btn');

clickbutton.addEventListener('click', () => {
    addTask();
})

const state = {
    notes : [
        {text: '', status: true},
    ],
    filters : 'all'
};





input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        ev.preventDefault();
        addTask();
    }
})


function addTask() {
    if (input.value !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        //Реализация Стейта
        const text = input.value;
        


        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        li.appendChild(doneButton);

        list.appendChild(li);
        input.value = '';

        if (list.childNodes.length > 0 && !document.getElementById('delete-all-button')) {
            const deleteButton = document.createElement('button');
            deleteButton.id = 'delete-all-button';
            deleteButton.textContent = 'Delete all';
            button.appendChild(deleteButton);
            button.style.padding = '0px';
            button.style.textAlign = 'center';
            button.style.marginBottom = '20px';
            button.style.fontSize = '10px';

            deleteButton.addEventListener('click', () => {
                list.innerHTML = '';
                deleteButton.remove();
            });
        }

        doneButton.addEventListener('click', () => {
            li.style.textDecoration = 'line-through';
        })
    }
};


const filter = document.getElementById('filter');
filter.addEventListener('click', () => {
    if (list.childNodes.length > 0 && !document.getElementById('delete-all-button')) {
        document.createElement("")

    }
})