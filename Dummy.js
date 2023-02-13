const message = [
    {
        "image": {
            "sorce": "../assets/Images/icons/CHATROOM dp.gif",
            "alt": "profile-0",
        },
        "chat": "Hey hi this is io987456, in this converstation",

    },
    {
        "image": {
            "sorce": "../assets/Images/icons/Chatroom 2.jpg",
            "alt": "profile-1",
        },
        "chat": "I am feel alone, and i want some friendly talk with you",

    },
    {
        "image": {
            "sorce": "../assets/Images/icons/Chatroom 2.jpg",
            "alt": "profile-2",
        },
        "chat": "I am feel alone, and i want some friendly talk with you",

    },
    {
        "image": {
            "sorce": "../assets/Images/icons/CHATROOM dp.gif",
            "alt": "profile-3",
        },
        "chat": "I am Sorry ma'am please say your problem, i am here for you",

    },
    {
        "image": {
            "sorce": "../assets/Images/icons/chatroom-3.png",
            "alt": "profile-4",
        },
        "chat": "here i think....",

    },
    {
        "image": {
            "sorce": "../assets/Images/icons/chatoom-4.png",
            "alt": "profile-5",
        },
        "chat": "Hmm yes say...",

    },
    {
        "image": {
            "sorce": "../assets/Images/icons/CHATROOM dp.gif",
            "alt": "profile-6",
        },
        "chat": "Sorry i forgot",

    }
]
//Here i created loop for returning value for all

for (let i = 0; i <= 7; i++) {

    // Create a new div element for the card
    let div1 = document.createElement('div');
    div1.setAttribute('class', 'chatroom-chatside-div-chatwithyou');
    console.log(div1);

    // Create an image element and add it to the card
    let img = document.createElement('img');
    img.setAttribute('class', 'chatroom-susi-profile');
    img.setAttribute('src', message[i]["image"]["sorce"]);
    img.setAttribute('alt', message[i]["image"]["alt"]);
    div1.append(img);
    // Create a second div element for the card
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'chat-in-personal');
    div1.appendChild(div2);

    // Create a heading element and add it to the card
    let heading1 = document.createElement('h1');
    heading1.setAttribute('class', 'heading-chat');
    heading1.innerText = ('chat', message[i]["chat"]);
    div2.append(heading1);
    //here i create a br tag


    // Append the card to the body of the HTML document
    let container = document.getElementById("mainChatContent");

    // container.appendChild(div2);
    container.append(div1);



    // Create a new div element for the card
}