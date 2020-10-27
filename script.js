function EditSection (data){

  return (`
    <article class="commic__container">
      <div class="commic__image">
        <img src=${data.img} alt="${data.alt}">
      </div>

      <div class="commic__data">
        <div class="commic__data-container">
          <h2>${data.title}</h2>
          <p>${data.year} / ${data.month} / ${data.day}</p>
          <p>commic numero: ${data.num}</p>
        </div>
      </div>
    </article>
  `)
}


const editHtml = (res) => {

  let $commic = document.getElementById('commic')

  console.log('numero de contenido: ', $commic.children[0]);
  console.log('contenido: ', $commic.innerHTML);

  if ($commic.innerHTML.length >= 5){
    $commic.children[0].remove();
  }

  const HTML = EditSection(res);

  const $home = document.implementation.createHTMLDocument()

  $home.body.innerHTML = HTML;

  $commic.append($home.body.children[0]);

}


let calificacion = (num) => {
  let $icon = document.getElementsByClassName('fas');
  $icon[num].classList.add('active')
    setTimeout(()=>{
      alert('Gracias por calificar')
      console.log('esperando');
      $icon[num].classList.remove('active');
    },500)
}

(function load (){

  async function getData(url) {
    let cors = 'https://cors-anywhere.herokuapp.com'
    const response = await fetch(`${cors}/${url}`);
    const data = await response.json();
    return data
  }

  let $buttom = document.querySelectorAll('.buttom');

  let numberRandom = setInterval( async()=>{
    numberRandom = Math.round((Math.random() * 614) + 1)
    console.log(numberRandom)
    let info = await getData (`https://xkcd.com/${numberRandom}/info.0.json`);
    editHtml(info)

  }, 5000)

  $buttom[0].addEventListener('click', () => {calificacion(0)} )
  $buttom[1].addEventListener('click', () => {calificacion(1)})
  $buttom[2].addEventListener('click', () => {calificacion(2)})
  $buttom[3].addEventListener('click', () => {calificacion(3)})
  $buttom[4].addEventListener('click', () => {calificacion(4)})
})();

