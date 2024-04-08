const inputElement = document.ElementById('title')
const inputElement = document.ElementById('create')
const inputElement = document.ElementById('list')

createBtn.onclick = function () {
        listElement.innerHTML = `<li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${inputElement.value}</span>
        <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>`
}