const getdata = [
    {
        "image": "https://wallpaperaccess.com/full/3079060.jpg",
        "heading": "MR.APJ.ABDUL KALAM",
        "paratext":"Senior Specialist"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7b9Alj35I9mvI4C1q9DcxpqBdlgFkHz6GCYWuT1NCidVEnrWA3C6C3dYKNq0srJ2wZs&usqp=CAU",
        "heading": "MR.KAMARAJAR",
        "paratext":"Specialist"
    },
    {
        "image": "https://gumlet.assettype.com/swarajya%2F2018-03%2F8547a47b-32fc-4b22-8e8f-f9294e72a35f%2Ff073fb87-02ca-4218-905e-cd5c87778fb0.jpeg?rect=0%2C0%2C600%2C600&format=auto",
        "heading": "MR.Erode Venkatappa Ramasamy",
        "paratext":"Social Activist "
    }
]












for (let i = 0; i <= 3; i++) {

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