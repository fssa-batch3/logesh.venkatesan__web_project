const getdata = [
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
        "heading": "MR.Elon Musk",
        "paratext":"Our Technical Team Manager "
    },
    {
        "image": "https://photos5.appleinsider.com/archive/jobs-110824.png",
        "heading": "MR.Steve Jobs",
        "paratext":"Our Marketing Department Head"
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/1200px-Mother_Teresa_1.jpg",
        "heading": "Ms. Mother Teresa",
        "paratext":"Welfare Department Head"
    },
    {
        "image": "https://www.tatatrusts.org/Upload/Images/masthead/ratan-tata-img.jpg",
        "heading": "Mr.Ratan Tata",
        "paratext":"Head of All Department"
    }
]

for (let i = 0; i <= 4; i++) {

    // Create a new div element for the card
    let card1 = document.createElement('div');
    card1.setAttribute('class', 'card');
   

    // Create an image element and add it to the card
    let img = document.createElement('img');
    img.setAttribute('class', 'mini-img-1');
    img.setAttribute('src',getdata[i]["image"]);
    img.setAttribute('alt', "Image of Doctor");
    card1.appendChild(img);

    // Create a heading element and add it to the card
    let heading1 = document.createElement('h1');
    heading1.setAttribute('class', 'min-heading-2');
    heading1.innerText = ('headind',getdata[i]["heading"]);
    card1.append(heading1);

    // Create a paragraph element and add it to the card
    let para1 = document.createElement('p');
    para1.setAttribute('class', 'min-heading-2');
    para1.innerText = ('paratext',getdata[i]["paratext"]);
    card1.append(para1);

    // Append the card to the body of the HTML document
    let container = document.getElementById("card");

    container.appendChild(card1);
    console.log(card1);

    // Create a new div element for the card
}