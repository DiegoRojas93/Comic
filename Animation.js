// (async function load (){

// 	async function getData(url) {
// 		const response = await fetch(url);
// 		const data = await response.json();
// 		return data
// 	}

// 	const info = await getData ('https://xkcd.com/info.0.json');

// 	console.log(info)
// })();



// https://stephencharlesweiss.com/building-xkcd-daily-digest/#footnotes

function XKCDGallery() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com'

  const proxiedRequest = (url, options = {}) =>
    fetch(`${proxyUrl}/${url}`, {
      ...options,
      headers: {
        ...options.headers,
        'X-Requested-With': 'wololo',
      },
    })
    .then(resp => resp.json())
    .then(res => console.log({comic: res}))
    .catch(error => console.error(`oh no --> `, error))

  const proxiedGet = url => proxiedRequest(url)

  proxiedGet('https://xkcd.com/info.0.json')

  return ()
}