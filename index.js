const charactersUrl = 'https://hp-api.herokuapp.com/api/characters'
const characterDiv = document.querySelector('#character-div')
const reviewForm = document.querySelector('form')
const reviewInput =  document.querySelector('.review')
const reviewDiv = document.querySelector('#review-panel')
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

fetch(charactersUrl)
.then(r => r.json())
.then(characterArray =>{
    //renderCharacters(characterArray)
    const characterOnThePage = characterArray.splice(0, 25)
    characterOnThePage.forEach(characterObj=> {
        renderCharacters(characterObj)
        //console.log(characterObj)
        document.querySelector('img').addEventListener("mouseover", ()=>{
            const funImg = document.createElement("img")
            funImg.src = "./piggy.gif"
            characterDiv.append(funImg)
        })
    })
    reviewForm.addEventListener("submit", e => {
        e.preventDefault()
        const characterReview = document.createElement('p')
        characterReview.textContent = reviewInput.value
        reviewDiv.append(characterReview)   
     
    })
    // searchForm.addEventListener('submit', (e) =>{
    //     e.preventDefault()
    //     characterDiv.innerHTML = " "
    //     // searchInput.value
    //     searchInput.value = characterNameList.textContent
    //     characterImg.src = characterObj.image
    //     characterSpecies.textContent = characterObj.species
    //     characterGender.textContent = characterObj.gender
    //     characterDiv.append(characterCard)
    //     characterCard.append(characterNameList,characterImg, characterSpecies, characterGender)

    // })// searchForm Submit Event

 

}) // fetch 2nd then




function renderCharacters (characterObj ) {

    const characterCard = document.createElement('ul')
    const characterNameList = document.createElement('h2')
    const characterImg = document.createElement('img')
    const characterSpecies = document.createElement('h3')
    const characterGender = document.createElement('h5')
    const likeBtn = document.createElement('button')

    // characterNameList.id = characterNameList.dataset.id
    characterNameList.textContent = characterObj.name
    characterImg.src = characterObj.image
    characterSpecies.textContent = characterObj.species
    characterGender.textContent = characterObj.gender
    likeBtn.textContent = '♡'
    characterDiv.append(characterCard)
    characterCard.append(characterNameList,characterImg, characterSpecies, characterGender, likeBtn)

    // console.log(characterCard)
    let redHeart = false;
    likeBtn.addEventListener("click", ()=>{
        redHeart = !redHeart;
        if (redHeart){
            likeBtn.style.color = "red";
            likeBtn.textContent= FULL_HEART;
        } else{
            likeBtn.style.color = "black";
            likeBtn.textContent = EMPTY_HEART;
        }
 })


} //renderCharacter function
// url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.woff2") format("woff2"),
//     url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.woff") format("woff"),
//     url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.ttf") format("truetype"),
//     url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.svg#Harry Potter") format("svg");
