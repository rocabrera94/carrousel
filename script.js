let images = document.getElementById('anuncios')
const marcas = ['bbva', 'turkish', 'cocacola']
let num = 0
const timer = () =>{
    
    setInterval(()=>{
      if (num<= marcas.length-1){
        images.src = `/imagenes/${marcas[num]}.jpg`;
        num++;
        console.log(images.src)
      } if (num>marcas.length-1) num=0;
      
    },3000)
}

timer();