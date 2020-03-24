const form = document.querySelector('form');
const inputPic = document.querySelector('#newMemePic');
const inputTop = document.querySelector('#newMemeTop');
const inputBottom = document.querySelector('#newMemeBottom');
const memeList = document.querySelector('#newMemes');



function createMeme(pic, textTop, textBottom) {
    const newMeme = document.createElement('li');
    const newContainer = document.createElement('div');
    const newPic = document.createElement('img');
    const newTextTop = document.createElement('p');
    const newTextBottom = document.createElement('p');
    const newBtn = document.createElement('button');

    newPic.setAttribute("src", pic);
    newTextTop.innerText = textTop;
    newTextTop.classList.add('text-top');
    newTextBottom.innerText = textBottom;
    newTextBottom.classList.add('text-bottom');
    newBtn.innerText = 'Remove';
    newContainer.classList.add('container');

    newContainer.appendChild(newPic);
    newContainer.appendChild(newTextTop);
    newContainer.appendChild(newTextBottom);
    newContainer.appendChild(newBtn);
    newMeme.appendChild(newContainer);
    memeList.appendChild(newMeme);
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    if((inputPic.value && inputTop.value) || (inputPic.value && inputBottom.value)) {
        createMeme(inputPic.value, inputTop.value, inputBottom.value);
        inputPic.value = '';
        inputTop.value = '';
        inputBottom.value = '';
    }
});

memeList.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON') {
        e.target.closest('li').remove();
    }
});