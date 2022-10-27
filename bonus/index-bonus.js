const charactersUrl = 'https://hp-api.herokuapp.com/api/characters'

const header = document.querySelector('h1')
const commentForm = document.querySelector('form')
const commentInput =  document.querySelector('.comment-input')
const commentDiv = document.querySelector('#comment-panel')

const characterContainer = document.querySelector('.flip-card')
const EMPTY_HEART = '♡'
const FULL_HEART = '❤️'

// GET information from API
fetch(charactersUrl)
.then(r => r.json())
.then(characterArray =>{

   //target first 24 objects
    const characterOnThePage = characterArray.splice(0, 24)
    characterOnThePage.forEach(characterObj=> {

        renderCharacters(characterObj)

    })//foreach function

    // submit event to the comment form
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

    })// submit event

}) // fetch 2nd .then

// change the color of the header "The Harry Potter Gallery"
header.addEventListener("mouseover", e =>{
    e.target.style.color = 'white'
    header.addEventListener("mouseleave",e => {
        e.target.style.color = 'black'
    })
})

// render information to the character cards
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
    //append img  to the front of the card
    characterCardFront.append(characterImg)
    characterEachCard.append(characterCardFront)
    // function the like btn
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
    // render character info (name, species, gender, house, dob )-- back card
    const characterCardBack = document.createElement ('div')
    // assign classname(s) to the back of each card
    if (`${characterObj.house}` === ''){
       characterCardBack.className='flip-card-back'
    }else{
       characterCardBack.classList.add('flip-card-back', `${characterObj.house}`);
    }

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

    //append all the info to the back of the card
    characterCardBack.append(characterNameList, characterSpecies, characterGender, characterDOB, characterHouse)
    characterEachCard.append(characterCardBack)
    // append the like btn to the entire card
    characterCard.append(characterEachCard, likeBtn)
    characterContainer.append(characterCard)
}
//renderCharacter function
