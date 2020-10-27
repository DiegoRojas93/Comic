
// https://stephencharlesweiss.com/building-xkcd-daily-digest/#footnotes

// const proxyUrl = 'https://cors-anywhere.herokuapp.com'

// const proxiedRequest = (url, options = {}) =>
//   fetch(`${proxyUrl}/${url}`, {
//     ...options,
//     headers: {
//       ...options.headers,
//       'X-Requested-With': 'wololo',
//     },
//   })
//   .then(resp => resp.json())
//   .then(res => console.log({comic: res}))
//   .catch(error => console.error(`oh no --> `, error))

// const proxiedGet = url => proxiedRequest(url)

// proxiedGet('https://xkcd.com/info.0.json')


const editHtml = (res) => {
  console.log('data: ', res);

  const $section = document.getElementsByTagName('section')

  function EditSection (data){
    return (`
      <div class="title">
        <h2>${data.title}</h2>
      </div>

      <div class="image">
        <img src="${data.img}" alt="${data.alt}">
      </div>

      <div class="Calification">
        clasifica este trabajo

        <ul>
          <li><i class="fas fa-star"></i></li>
          <li><i class="fas fa-star"></i></li>
          <li><i class="fas fa-star"></i></li>
          <li><i class="fas fa-star"></i></li>
          <li><i class="fas fa-star"></i></li>
        </ul>
      </div>
    `)
  }

  const HTML = EditSection(res);

  console.log('html: ', HTML);
  
  const $home = document.implementation.createHTMLDocument()
  
  $home.body.innerHTML = HTML;
  console.log('html: ', $home);
  
}

(async function load() {

  const proxyUrl = 'https://cors-anywhere.herokuapp.com'

  const proxiedRequest = async(url, options = {}) =>
    fetch(`${proxyUrl}/${url}`, {
      ...options,
        headers: {
          ...options.headers,
          'X-Requested-With': 'Diego',
        },
    })
    .then(resp => resp.json())
    .then(res => editHtml(res))
    .catch(error => console.error(`Tengo un error --> `, error))

  const proxiedGet = url => proxiedRequest(url)

  proxiedGet('https://xkcd.com/info.0.json')

})()




