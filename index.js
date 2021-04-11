/***** Deliverable 1 *****/
const header = document.querySelector("#header")
// console.log("Here's your header:", header)



/***** Deliverable 2 *****/
header.style.color = 'green'

/***** Deliverable 3 *****/
// console.log('This is what the traveler object looks like: ', traveler)

//first assess WHERE on the page are these elements that need to be updated located?
//then find/update each element individually

const firstProfImg = document.querySelector("#profile > img")
firstProfImg.src = traveler.photo
firstProfImg.alt = traveler.name 

// console.log(firstProfImg)

const travelerName = document.querySelector("#profile > h2")
travelerName.textContent = traveler.name 

const travelerNickname = document.querySelector("#profile > em")
travelerNickname.textContent = traveler.nickname 


/***** Deliverable 4 *****/
//take combo approach & start with creating the outermost element
traveler.animalSightings.forEach(function (animalSightingObj){
     const animalLi = document.createElement('li')
     animalLi.dataset.id = animalSightingObj.id

     animalLi.innerHTML =
    `<p> ${animalSightingObj.description}</p>
     <img src="${animalSightingObj.photo}" alt="${animalSightingObj.species}"/>
     <a href="${animalSightingObj.link}" target="_blank">Here's a video about the ${animalSightingObj.species} species!</a>`

     const AnimalCollectionUl = document.querySelector('ul')
     AnimalCollectionUl.append(animalLi)
})
//^^^^remember the the () around animalSightingObj on line 31 are like the || of the
//do end in a .each in Ruby so you can call each elem in that ARRAY w/e you want

/***** Deliverable 5 *****/

const sightingToRemove = document.querySelector('[data-id="3"]')
console.log(sightingToRemove)
sightingToRemove.remove()