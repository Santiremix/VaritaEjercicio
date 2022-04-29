  //Anular links
  document.querySelector('body').addEventListener("click", function(cancelar){
     cancelar.preventDefault()
  });

  //De imagen a gif con click
  let fotos = document.getElementsByTagName('img');
  console.log(fotos);
  for (let i = 0; i < fotos.length; i++){
    fotos[i].addEventListener("click", function cambiarGif(){
    fotos[i].src = "/assets/magic-1.gif"})
}

//  Color de texto y fondo de los párrafos
 let parrafos = document.getElementsByTagName('p');
 console.log(parrafos);
 for (let i=0; i <= parrafos.length; i++){
   parrafos[i].addEventListener('click', function colorear(){
     parrafos[i].style.color = '#3DB784'
     parrafos[i].style.background = '#111374'
   })
 }

 //De imagen al gif abracadabra (hover)
let fotosHov = document.getElementsByTagName('img');
let array=[];
for ( let i=0; i<fotosHov.length; i++ ){
    array.push(fotosHov[i].src)
}
for (let i = 0; i < fotosHov.length; i++){    
    fotosHov[i].addEventListener('mouseover', function hover(){
      fotosHov[i].src = '/assets/abracadabra.gif'})
}
    
for (let i = 0; i < fotosHov.length; i++){
    fotosHov[i].addEventListener('mouseout', function hoverOut(){
        fotosHov[i].src = array[i]}) //?
    }

//Color y fondo párrafos (hover)
for (let i = 0; i < parrafos.length; i++){    
  parrafos[i].addEventListener('mouseover', function pHover(){
    parrafos[i].style.color = '#FFF444',
    parrafos[i].style.background = '#111374'
  })
} //?


