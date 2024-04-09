const inputElement = document.ElementById('title')
const inputElement = document.ElementById('create')
const inputElement = document.ElementById('list')

const notes = ['блок про массивы']

function render() {
for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('bforeend', getNoteTemplate(notes[i  ]))}

}

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return 
    }
        //listElement.innerHTML = 

    listElement.insertAdjacentHTML('bforeend', 
    `<li
    class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputElement.value}</span>
    <span>
    <span class="btn btn-small btn-success">&check;</span>
    <span class="btn btn-small btn-danger">&times;</span>
    </span>
</li>`)

inputElement.value = ''
}

function getNoteTemplate (title) {
    return `<li
    class="list-group-item d-flex justify-content-between align-items-center">
    <span>${title}</span>
    <span>
    <span class="btn btn-small btn-success">&check;</span>
    <span class="btn btn-small btn-danger">&times;</span>
    </span>
</li>`
}



 const notes = [
    {
        title: 'написать стих',
        completed: false ,
    },
    {
        title: 'почитать книгу',
        completed: false ,
    }
 ]


 function render() {
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('bforeend', getNoteTemplate(notes[i  ]))}
    
    }

render()