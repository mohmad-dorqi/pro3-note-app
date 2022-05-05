let $ = document
const input = $.getElementById('input-field')
const color_box = $.querySelectorAll('.color-box')
const btn_save = $.getElementById('btn-save')
const btn_delete = $.getElementById('btn-delete')
const notecontainer = $.getElementById('listed')

function clear() {
    input.value = ""
    input.style.backgroundColor = '#fff'
}
function creatrnote() {
    if (input.value) {
        let newelmnt = $.createElement('div')
        newelmnt.style.backgroundColor = input.style.backgroundColor
        newelmnt.className = 'card shadow-sm rounded'
        let pelm = $.createElement('p')
        pelm.className = 'card-text p-3'
        newelmnt.append(pelm)
        pelm.innerHTML = input.value
        notecontainer.append(newelmnt)
        clear();
        newelmnt.addEventListener('click', deletelm)

    }

}
function deletelm(event) {
    event.target.parentElement.remove()
}


color_box.forEach(function (color_box) {
    color_box.addEventListener('click', function (event) {
        let color = event.target.style.backgroundColor
        input.style.backgroundColor = color
    })
})

btn_delete.addEventListener('click', function () {
    clear()
})

input.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {

        creatrnote()


    })
btn_save.addEventListener('click', creatrnote)