//HERE I AM DECLARED "DATA" AS A VARIABLE FOR THESE

// const data = [
//     {
//         "image": {
//             "sorce": "../assets/Images/icons/CHATROOM dp.gif",
//             "alt": "profile-0",
//         },
//         "heading": "Ms.Susilavathi",
//         "Paragraph": "Client",
//     },
//     {
//         "image": {
//             "sorce": "../assets/Images/icons/Chatroom 2.jpg",
//             "alt": "profile-1",
//         },
//         "heading": "Mr.Ramasamy",
//         "Paragraph": "Doctor",
//     },
//     {
//         "image": {
//             "sorce": "../assets/Images/icons/Chatroom 2.jpg",
//             "alt": "profile-2",
//         },
//         "heading": "Mr.Gopikarthick",
//         "Paragraph": "Doctor",
//     },
//     {
//         "image": {
//             "sorce": "../assets/Images/icons/CHATROOM dp.gif",
//             "alt": "profile-3",
//         },
//         "heading": "Ms.Devi",
//         "Paragraph": "Friend",
//     },
//     {
//         "image": {
//             "sorce": "../assets/Images/icons/chatroom-3.png",
//             "alt": "profile-4",
//         },
//         "heading": "Mr.Naveennag",
//         "Paragraph": "Doctor",
//     },
//     {
//         "image": {
//             "sorce": "../assets/Images/icons/chatoom-4.png",
//             "alt": "profile-5",
//         },
//         "heading": "Mr.Vinithkumar",
//         "Paragraph": "Friend",
//     },
//     {
//         "image": {
//             "sorce": "../assets/Images/icons/CHATROOM dp.gif",
//             "alt": "profile-6",
//         },
//         "heading": "Mr.Nithi",
//         "Paragraph": "Doctor",
//     }
// ]
// //Here i created loop for returning value for all

// for (let i = 0; i <= 7; i++) {

//     // Create a new div element for the card
//     let div1 = document.createElement('div');
//     div1.setAttribute('class', 'chatroom-flex-container');


//     // Create an image element and add it to the card
//     let img = document.createElement('img');
//     img.setAttribute('class', 'chatroom-profile-profile-photo');
//     img.setAttribute('src', data[i]["image"]["sorce"]);
//     img.setAttribute('alt', data[i]["image"]["alt"]);
//     div1.append(img);
//     // Create a second div element for the card
//     let div2 = document.createElement('div');
//     div2.setAttribute('class', 'chatroom-profile-div-container');
//     div1.appendChild(div2);

//     // Create a heading element and add it to the card
//     let heading1 = document.createElement('h1');
//     heading1.setAttribute('class', 'chatroom-profile-div-heading');
//     heading1.innerText = ('headind', data[i]["heading"]);
//     div2.append(heading1);
//     //here i create a br tag
//     let hr = document.createElement('hr');
//     hr.setAttribute('class', 'chatroom-chat-bottom-line');


//     // Create a paragraph element and add it to the card
//     let para1 = document.createElement('p');
//     para1.setAttribute('class', 'chatroom-profile-div-paragraph');
//     para1.setAttribute('id', 'doctor-color');
//     para1.innerText = ('Paragraph', data[i]["Paragraph"]);
//     div2.append(para1);


//     // Append the card to the body of the HTML document
//     let container = document.getElementById("card");

//     // container.appendChild(div2);
//     container.appendChild(div1);
//     container.appendChild(hr);
//     console.log(div1);

//     // Create a new div element for the card
// }