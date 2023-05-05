
let nav = document.createElement("nav");
nav.setAttribute("class", "sidebar close");

let header = document.createElement("header");

let Logo = document.createElement("div");
Logo.setAttribute("class", "text logo-text")

let Logo_span = document.createElement("span");
Logo_span.setAttribute("class", "name");
Logo_span.innerText = "Fresh";

let Logo_span_2 = document.createElement("span")
Logo_span_2.innerText = "BYE";
Logo_span.append(Logo_span_2);
Logo.append(Logo_span);

let span_about = document.createElement("span");
span_about.setAttribute("class", "profession");
span_about.innerText = "OPen Your Mind";
Logo.append(span_about);

header.append(Logo);

let icon1 = document.createElement("i");
icon1.setAttribute("class", "bx bx-chevron-right toggle");
icon1.setAttribute("style", "color:black;")
header.append(icon1);
nav.append(header);

let div1 = document.getElementById("div");
div1.setAttribute("class", "menu-bar");

let div1_sub1 = document.createElement("div");
div1_sub1.setAttribute("class", "menu");

let list1 = document.createElement("li");
list1.setAttribute("class", "search-box")

let search = document.createElement("input");
search.setAttribute("placeholder", "Search...");
search.setAttribute("type", "text");
div1_sub1.append(list1);


let ulisted = document.createElement("ul");
ulisted.setAttribute("class", "menu-links");
let list2 = document.createElement("li");
list2.setAttribute("class", "nav-link")

let Anchor = document.createElement("a");
Anchor.setAttribute("href", "./Home.html");

let icon2 = document.createTreeWalker("i");
icon2.setAttribute("class", "bx bx-home-alt icon");

let span_list = document.createElement("span");
span_list.setAttribute("class", "text nav-text")
span_list.innerText = "Home";
icon2.append(span_list);
Anchor.append(icon2);
list2.append(Anchor);
list1.append(list2);
ulisted.append(list1);
nav.append(ulisted);







