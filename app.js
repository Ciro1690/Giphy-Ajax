const API_KEY = '2fal5M7BdBmD9Tda8eFh8o405in1SiCF'

const form = document.querySelector('#search-form')

form.addEventListener('submit', async function(e) {
    e.preventDefault()
    let input = document.querySelector('#search-text')
    inputValue = input.value
    input.value = ""
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: inputValue,
            api_key: API_KEY
        }
    });
    const newImg = document.createElement('img')
    let randNum = Math.floor(Math.random() * 50);
    newImg.src = res.data.data[randNum].images.original.url
    newImg.classList = ".col-4 m-2"
    const container = document.querySelector('.row')
    container.append(newImg)
})

const remove = document.querySelector('#remove-button')
remove.addEventListener('click', function(e) {
    e.preventDefault()
    let container = document.querySelector('.row')
    container.remove()
    let newContainer = document.createElement('div')
    newContainer.classList = 'row'
    const mainDiv = document.querySelector('#main-div')
    mainDiv.append(newContainer)  
})
