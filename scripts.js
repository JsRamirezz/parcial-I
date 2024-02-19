const descripcion = document.getElementById("descripcion");


descripcion.addEventListener("mouseover", function(){
    descripcion.style.fontSize = '24px';

})

descripcion.addEventListener("mouseout", function(){
    descripcion.style.fontSize ='16px'
})


const inside = document.getElementById("divOculto")
const textoOculto = document.getElementById("textoOculto");

inside.addEventListener("click", function(){
    textoOculto.classList.toggle('visible');
})


const titulo = document.getElementById("titulo")

titulo.addEventListener('focus', function() {
    titulo.classList.add('focused');
  });

titulo.addEventListener('blur', function() {
    titulo.classList.remove('focused');
});

