// Variables==============
const myInput = document.getElementById('input');
const btn = document.querySelector('.btn');
const resultData = document.querySelector('.data');
const container = document.querySelector('.container');

console.log();

// Events=================
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (myInput.value === '') {
        sweetAlert()
    }
    else {
        createElement();
        completeTask();
        deleteTask();
    }
})
// Functions ==============
function sweetAlert() {
    let alert = document.querySelector('.alert');
    alert.style.opacity = '1';
    alert.style.zIndex = '2';
    alert.onclick = function () {
        alert.style.opacity = '0';
        alert.style.zIndex = '-1';
    }
}

function createElement() {
    let resultData = document.createElement('div');
    resultData.className = 'data';
    container.appendChild(resultData);
    resultData.innerHTML += `
         <span class="list">${myInput.value} </span>
         <span class="delete">X</span>
         <span class="complete">/</span>
 `;
    // document.querySelector('.delete').textContent = 'X';
    // document.querySelector('.complete').textContent = '/';
    myInput.value = '';
};



function completeTask() {
    let completeBtn = document.querySelectorAll('.data span.complete');
    completeBtn.forEach(cBtn => {
        cBtn.addEventListener('click', (e) => {

            cBtn.previousElementSibling.previousElementSibling.style.textDecoration = 'line-through'
        })
    });
};

function deleteTask() {
    let deleteBtn = document.querySelectorAll('.data span.delete');
    deleteBtn.forEach(dBtn => {

        dBtn.addEventListener('click', e => {
            e.target.parentElement.remove();
        })

    });
};