const likeButtons = document.querySelectorAll(".like-btn");

function handleLike(event) {
  event.target.classList.toggle("active");
}

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", handleLike);
});
