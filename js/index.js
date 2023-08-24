document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('buttonText').addEventListener('click', function(){
    
    localStorage.setItem('dato', document.getElementById('inputText').value)

    })
})