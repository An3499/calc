document.addEventListener('DOMContentLoaded', start)

function start() {
    document.querySelectorAll('.btn').forEach(function (btn) {
        btn.onclick = function (event) {
            document.querySelector('.input').value += event.target.innerHTML
        }
    })

    document.querySelector('.btn__backspace').onclick = function (event) {
        let input = document.querySelector('.input')
        input.value = input.value.slice(0, -1)
    }

    document.querySelector('.btn__clean').onclick=function(event){
        document.querySelector('.input').value=''
    }

    document.querySelector('.btn__equal').onclick=function(event){
        let input=document.querySelector('.input')
        input.value=eval(input.value)
    }
}


