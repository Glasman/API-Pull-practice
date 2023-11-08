const main = document.querySelector('main')
let state = {
  allArtists: []
}

const getArtists = async () => {
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-ft-sf/artists')
  const jsonResponse = await response.json()
  state.allArtists = jsonResponse.data
  console.log(jsonResponse)
  render()
}

function render() {
  state.allArtists.forEach((element) => {
    const item = document.createElement('div');
    main.appendChild(item)
    item.innerText = 'test'
  }
  )
  console.log(state.allArtists)
  
}
getArtists()