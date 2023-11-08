const main = document.querySelector('main')
let state = {
  allArtists: []
}

const getArtists = async () => {
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-ft-sf/artists')
  const artists = await response.json()
  console.log(artists)
  state.allArtists = artists
  render(artists.data)
}
getArtists()

function render(array) {
  array.forEach((element) => {
    console.log(element.name)
    const item = document.createElement('div');
    main.appendChild(item)
    item.innerText = 'test'
  }
  )

  
}
console.log(state.allArtists)