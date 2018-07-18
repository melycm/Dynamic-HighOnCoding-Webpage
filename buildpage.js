function buildAPage() {
    var bar1 = document.createElement("div");

    
    bar1.setAttribute("class", "bar")
    // myHeading.style.color="green";
    // myHeading.style.backgroundColor = "yellow";
    // myHeading.style.fontFamily = "arial";


    document.body.appendChild(bar1);


    var nav = document.createElement("nav");
    nav.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-primary ml-3 mr-3 mb-3");

    bar1.appendChild(nav);

    var navLink = document.createElement("a");
    navLink.setAttribute("class", "navbar-brand");
    navLink.textContent = "HighOnCoding"
    navLink.setAttribute("href", "#");
    navLink.setAttribute("style", "color: white; font-size: 30px;")

    nav.appendChild(navLink);

    var navbutton = document.createElement("button");
    navbutton.setAttribute("class", "navbar-toggler");
    navbutton.setAttribute("type", "button");
    navbutton.setAttribute("data-toggle", "collapse");
    navbutton.setAttribute("data-target", "#navbarNavAltMarkup");
    navbutton.setAttribute("aria-controls", "navbarNavAltMarkup");
    navbutton.setAttribute("aria-expanded", "false");
    navbutton.setAttribute("aria-label", "Toggle navigation");

    navLink.appendChild(navbutton);

    var span1 = document.createElement("span");
    span1.setAttribute("class", "navbar-toggler-icon");

    navbutton.appendChild(span1);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "collapse navbar-collapse");
    div2.setAttribute("id", "navbarNavAltMarkup");

    nav.appendChild(div2);

    var div3 = document.createElement("div");
    div3.setAttribute("class", "navbar-nav");

    div2.appendChild(div3);

    var link1 = document.createElement("a");
    link1.setAttribute("style", "color: white; font-size: 20px;");
    link1.setAttribute("class", "nav-item nav-link");
    link1.setAttribute("href", "#");
    link1.textContent = "Home"

    div3.appendChild(link1);

    var link2 = document.createElement("a");
    link2.setAttribute("style", "color: white; font-size: 20px;");
    link2.setAttribute("class", "nav-item nav-link");
    link2.setAttribute("href", "#");
    link2.textContent = "Categories"

    div3.appendChild(link2);

    var div4 = document.createElement("div");
    div4.setAttribute("style", "background-color: #c7c4c4d2; margin-left:50px; margin-right: 50px; padding: 8px;");
    div4.setAttribute("class", "box1");

    document.body.appendChild(div4);

    var heading1 = document.createElement("h4");
    heading1.setAttribute("style", "margin-left: 10px; margin-top: 10px;");
    heading1.textContent = "Curse of the Current Reviews"

    div4.appendChild(heading1)

    var par1 = document.createElement("p");
    par1.setAttribute("style", "margin-left: 10px; margin-top: 10px; font-size: 15px;");
    par1.textContent = "When you want to buy any aplication from the Apple iTunes store you have more choices than you can handle. Most users scroll past the application description completly avoiding it like ads displayed on the right column of your webpage. their choice is dependent on the three important factors price, screnshot and reviews."

    div4.appendChild(par1);

    var div5 = document.createElement("div");
    div5.setAttribute("class", "par1");

    document.body.appendChild(div5);

    var par2 = document.createElement("p");
    par2.setAttribute("style", "font-size: 20px; margin-left: 53px; margin-top: 15px; color: blue");
    par2.textContent = "Hello WatchKit"

    div5.appendChild(par2);

    var par3 = document.createElement("p");
    par3.setAttribute("style", "margin-top: -10px; margin-left: 50px; margin-right: 55px; font-size: 13px;");
    par3.textContent = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."

    div5.appendChild(par3);

    var par4 = document.createElement("p");
    par4.setAttribute("style", "margin-top: -10px; margin-left: 50px; margin-right: 50px; padding: 3px; font-size: 13px; color: white; background-color: #fa7c28d7");
    par4.textContent = "12 comments 124 likes"

    div5.appendChild(par4);

    var div6 = document.createElement("div");
    div6.setAttribute("class", "par2");

    document.body.appendChild(div6);

    var par5 = document.createElement("p");
    par5.setAttribute("style", "font-size: 20px; margin-left: 53px; margin-top: 15px; color: blue");
    par5.textContent = "Introduction to Swift"

    div6.appendChild(par5);

    var par6 = document.createElement("p");
    par6.setAttribute("style", "margin-top: -10px; margin-left: 50px; margin-right: 55px; font-size: 13px;");
    par6.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."

    div6.appendChild(par6);

    var par7 = document.createElement("p");
    par7.setAttribute("style", "margin-top: -10px; margin-left: 50px; margin-right: 50px; padding: 3px; font-size: 13px; color: white; background-color: #fa7c28d7");
    par7.textContent = "15 comments 45 likes"

    div6.appendChild(par7);

}