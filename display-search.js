var image = document.getElementById('#jumbotron');
var url = 'https://random.dog/doggos';
 
function imageRandomizer () {
    var imageURL = message;
    console.log(imageURL);
    
    image.attribute("src", imageURL);
}

function displayRandom() {
fetch ('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        return response.json()
    
    
    .then(function(data){
        console.log(data);
        console.log(data.message);
        imageRandomizer(data.message);
    })
.catch(err=>console.log(err))
    
//var divEl = document.createElement('div');
//divEl.innerHTML = 
})
}

displayRandom();