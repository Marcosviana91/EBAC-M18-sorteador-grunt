document.addEventListener("DOMContentLoaded",function(e){
    document.getElementById("sorteador").addEventListener("submit",function(e){
        e.preventDefault();
        let num_max = parseInt(document.getElementById("num_max").value);
        let num_aleatorio = Math.random() * num_max
        document.getElementById("resultado-valor").innerText = Math.ceil(num_aleatorio);
        document.querySelector('.resultado').style.display = "block";
    })
})