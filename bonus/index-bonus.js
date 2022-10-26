const charactersUrl = 'https://hp-api.herokuapp.com/api/characters'
const characterContainer = document.querySelector('.flip-card')
const header = document.querySelector('h1')

const commentForm = document.querySelector('form')
const commentInput =  document.querySelector('.comment-input')
const commentDiv = document.querySelector('#comment-panel')
const EMPTY_HEART = '♡'
const FULL_HEART = '❤️'

fetch(charactersUrl)
.then(r => r.json())
.then(characterArray =>{
   // renderCharacters(characterArray)
    const characterOnThePage = characterArray.splice(0, 25)
    characterOnThePage.forEach(characterObj=> {

        renderCharacters(characterObj)

    //     document.querySelector('img').addEventListener("mouseover", (characterObj)=>{
    //         renderCharacters(characterObj)
    //    })
    })

    document.querySelectorAll('.flip-card-inner').forEach(function(characterObj) {
        characterObj.addEventListener('mouseover', function () {

            this.classList.toggle('flipped')
        })
    })// mouseover

    commentForm.addEventListener("submit", e => {
        e.preventDefault()
        const characterComment = document.createElement('li')
        characterComment.textContent = commentInput.value
        characterComment.className = 'comment'
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent= ' X '
        deleteBtn.id = 'delete-btn'
        characterComment.append(deleteBtn)
        commentDiv.append(characterComment)
        commentForm.reset()

        deleteBtn.addEventListener('click', e =>{
            e.target.parentNode.remove()
        })

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

header.addEventListener("mouseover", e =>{
    e.target.style.color = 'white'
    header.addEventListener("mouseleave",e => {
        e.target.style.color = 'black'
    })
})

function renderCharacters (characterObj ) {
    const characterEachCard = document.createElement('div')
    characterEachCard.className = 'flip-card-inner'
    const characterCard = document.createElement('div')
    characterCard.className = 'characterInfo'

    // render img -- front card
    const characterCardFront = document.createElement ('div')
    characterCardFront.className='flip-card-front'
    const characterImg = document.createElement('img')
    characterImg.src = characterObj.image
    characterImg.className = 'img'
    // add like btn
    const likeBtn = document.createElement('button')
    likeBtn.textContent = EMPTY_HEART
    likeBtn.className = 'like-Btn'
    characterCardFront.append(characterImg)
    characterEachCard.append(characterCardFront)



    let redHeart = false;
    likeBtn.addEventListener("click", ()=>{
        redHeart = !redHeart;
        if (redHeart){
            likeBtn.style.color = 'red';
            likeBtn.textContent= FULL_HEART;
        } else{
            likeBtn.style.color = 'black';
            likeBtn.textContent = EMPTY_HEART;
        }
    })
    // render character info -- back card
    const characterCardBack = document.createElement ('div')

    if (`${characterObj.house}` === ''){
       characterCardBack.className='flip-card-back'
    }else{
       characterCardBack.classList.add('flip-card-back', `${characterObj.house}`);
    }
    console.log (characterCardBack.className)
    const characterNameList = document.createElement('h1')
    characterNameList.textContent = characterObj.name
    const characterSpecies = document.createElement('h2')
    characterSpecies.textContent = characterObj.species
    const characterGender = document.createElement('h3')
    characterGender.textContent = characterObj.gender
    const characterDOB = document.createElement('p')
    characterDOB.textContent = characterObj.dateOfBirth
    const characterHouse = document.createElement('h2')
    characterHouse.textContent = characterObj.house


    characterCardBack.append(characterNameList, characterSpecies, characterGender, characterDOB, characterHouse)
    characterEachCard.append(characterCardBack)

    characterCard.append(characterEachCard, likeBtn)
    characterContainer.append(characterCard)
}
//renderCharacter function





// url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.woff2") format("woff2"),
//     url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.woff") format("woff"),
//     url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.ttf") format("truetype"),
//     url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.svg#Harry Potter") format("svg");
