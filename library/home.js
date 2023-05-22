let PostedData = JSON.parse(localStorage.getItem("PostedData"));
let userId = window.localStorage.getItem("Current_User_id");
console.log(PostedData);
// let Name = JSON.parse(localStorage.getItem("Doctor's_login"));
// let name = PostedData.find()
for (let i = 0; i < PostedData.length; i++) {

    let cardData = document.getElementById("Home");

    let parent = document.createElement("div");
    parent.setAttribute("id", "post-section");
    cardData.append(parent);


    let card = document.createElement("div");
    card.setAttribute("id", "solo-post");
    console.log(card);
    parent.append(card)


    let card1 = document.createElement("div");
    card1.setAttribute("id", "profile-post");
    console.log(card1);
    card.append(card1);


    let img = document.createElement("img");
    img.setAttribute("src", '/assest/images/L-Icon.jpg');
    card1.append(img);


    let Name = document.createElement("h2");
    Name.setAttribute("id", "profile-name");
    Name.innerText = "Dr. " + "Logesh Venkatesan";
    card1.append(Name);


    let Post_img = document.createElement("img");
    Post_img.setAttribute("class", "profile-post");
    Post_img.src = PostedData[i]["Video_URL"];
    card.append(Post_img);

    let edit = document.createElement("img");
    edit.setAttribute("class", "Post");
    edit.title = "Edit";
    edit.setAttribute("id", PostedData[i]["id"]);
    edit.src = "/assest/images/Images/Banner Image/Edit.png";
    edit.setAttribute("alt", "Edit");
    edit.addEventListener("click", function () {
        let main = this.closest("#post-section");
        console.log(main);
        const Id = this.getAttribute("id");
        console.log(Id);
        if (confirm("Are you sure to Edit?")) {
            localStorage.setItem("Post", JSON.stringify(Id));
            window.location.href = "./EditPost.html";
        }
    });
    card.append(edit);

    let del = document.createElement("img");
    del.setAttribute("class", "cancel");
    del.title = "Delete";
    del.setAttribute("id", PostedData[i]["id"]);
    del.setAttribute("alt", "delete");
    del.src = "/assest/images/Images/Banner Image/Delete.png";
    del.addEventListener("click", function () {
        if (confirm("Are you sure?")) {
            let jsonData = JSON.parse(localStorage.getItem("PostedData"));
            let card = this.closest("#post-section");
            const Id = this.getAttribute("id");
            console.log(Id);
            let indexOf = jsonData.findIndex(obj => obj.id === Id);
            console.log(indexOf);

            jsonData.splice(indexOf, 1);
            localStorage.setItem("PostedData", JSON.stringify(jsonData));
            // // Redirect to Doctorslist page
            window.location.href = "./Home.html";
        }
    })
    card.append(del);

    let comment = document.createElement("img");

    comment.setAttribute("class", "comment");
    comment.title = "Comment";
    comment.setAttribute("id", PostedData[i]["id"]);
    comment.setAttribute("alt", "comment");
    comment.src = "/assest/images/Images/Banner Image/comment 12.png";
    card.appendChild(comment);

    let Title = document.createElement("h2");
    Title.setAttribute("id", "discription_title");
    Title.innerText = PostedData[i]["Video_title"];
    card.append(Title);


    let Description = document.createElement("p");
    Description.setAttribute("id", "description");
    Description.innerText = "@" + PostedData[i]["Video_Description"];
    card.append(Description);

    console.log(card1);
    console.log(parent);

}
;