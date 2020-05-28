const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
})

function dragstart() {
 dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

 this.classList.add('is-dragging')
}

function drag() {
  console.log("> CARD:  is dragging")
}

function dragend() {
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

  this.classList.remove('is-dragging')
}

/* place where we will drop zone */

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter);
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
  dropzone.addEventListener('drop', drop);
})

function dragenter(){
}

function dragover(){
  // this equal dropzone
  this.classList.add('over')

  // get dragging card
  const cardBeingDragged = document.querySelector('.is-dragging')

  // this = dropzone
  this.appendChild(cardBeingDragged)


}

function dragleave() {
  this.classList.remove('over')
}

function drop() {
  this.classList.remove('over')
}

