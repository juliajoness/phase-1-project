const charactersUrl = 'https://hp-api.herokuapp.com/api/characters'
const characterCard = document.querySelector('.flip-card')
//const characterEachCard = document.querySelector('#flip-card-inner')
const characterCardFront = document.querySelector('.flip-card-front')
const characterCardBack = document.querySelector('.flip-card-back')

const reviewForm = document.querySelector('form')
const reviewInput =  document.querySelector('.review')
const reviewDiv = document.querySelector('#review-panel')
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

fetch(charactersUrl)
.then(r => r.json())
.then(characterArray =>{
   // renderCharacters(characterArray)

    const characterOnThePage = characterArray.splice(0, 25)
    characterOnThePage.forEach(characterObj=> {
        renderCharactersImg(characterObj)
        const characterEachCard = document.createElement('div')
        characterEachCard.className = "flip-card-inner"
        characterEachCard.append(characterCardFront, characterCardBack)
        characterCard.append(characterEachCard)
        document.querySelector('img').addEventListener("mouseover", (characterObj)=>{
            renderCharacters(characterObj)
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

    const characterNameList = document.createElement('h2')
    const characterSpecies = document.createElement('h3')
    const characterGender = document.createElement('h5')
    //characterNameList.id = characterNameList.dataset.id

    characterNameList.textContent = characterObj.name
    characterSpecies.textContent = characterObj.species
    characterGender.textContent = characterObj.gender
    characterCardBack.append(characterNameList, characterSpecies, characterGender)
}
//renderCharacter function
 function renderCharactersImg (characterObj) {
    const characterImg = document.createElement('img')
    const likeBtn = document.createElement('button')
    characterImg.src = characterObj.image
    characterImg.className = "img"
    console.log(characterImg.src)
    likeBtn.textContent = '♡'
    likeBtn.className = "like-Btn"
    characterCardFront.append(characterImg, likeBtn)
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
 }
// url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.woff2") format("woff2"),
//     url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.woff") format("woff"),
//     url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.ttf") format("truetype"),
//     url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.svg#Harry Potter") format("svg");
