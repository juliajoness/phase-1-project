const charactersUrl = 'https://hp-api.herokuapp.com/api/characters'
const characterDiv = document.querySelector('#character-div')

fetch(charactersUrl)
.then(r => r.json())
.then(characterArray => {characterArray.forEach (characterObj => {
    renderCharacters(characterObj)
    // console.log(characterObj.gender)
    })
})

function renderCharacters (characterObj) {
    const characterCard = document.createElement('ul')
    const characterNameList = document.createElement('li')
    const characterSpecies = document.createElement('p')
    const characterGender = document.createElement('p')
    characterNameList.textContent = characterObj.name
    characterSpecies.textContent = characterObj.species
    characterGender.textContent = characterObj.gender
    characterDiv.append(characterCard)
    characterCard.append(characterNameList, characterSpecies, characterGender)
}