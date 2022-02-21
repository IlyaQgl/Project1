
let answersButton = document.getElementById('answersButton');
let answersText = document.getElementById('answersText');
let triangle = document.getElementById('triangle');

answersButton.addEventListener('click', function(){
    answersText.style.display = (answersText.style.display == 'block') ? 'none' : 'block';
    triangle.style.transform = (triangle.style.transform == 'rotate(90deg)') ? 'rotate(0deg)' : 'rotate(90deg)';
});