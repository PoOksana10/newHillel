function randomPhotos () {
    let num;
    let url;
    const image = document.createElement('img');
    const body = document.body;
    body.appendChild(image);

    function random_num () {
        num = Math.floor(Math.random() * 9);
        if (num === 0) {
            num = Math.floor(Math.random() * 9 + 1);
        }
        }
    random_num()    
    
    url = 'photos/' + num.toString() + '.jpg';
    document.querySelector('img').src = url;
}

randomPhotos()