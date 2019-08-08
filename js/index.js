const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Importing Images
let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);  

//Importing Nav

const anchors = document.querySelectorAll('a')

// Array.from(anchors).forEach((anchor, index) => {
//    return anchor[index].textContent = siteContent['nav'][`nav-item-1`]})

anchors[0].textContent= siteContent['nav']['nav-item-1'];
anchors[1].textContent= siteContent['nav']['nav-item-2'];
anchors[2].textContent= siteContent['nav']['nav-item-3'];
anchors[3].textContent= siteContent['nav']['nav-item-4'];
anchors[4].textContent= siteContent['nav']['nav-item-5'];
anchors[5].textContent= siteContent['nav']['nav-item-6'];

//importing 1st section

const h1 = document.querySelector('h1');
const btn1 = document.querySelector('.cta button')

h1.textContent = siteContent['cta']['h1'];
btn1.textContent = siteContent['cta']['button'];

//importing 2nd section
const h4 = document.querySelectorAll('h4');
const par = document.querySelectorAll('p');

h4[0].textContent= siteContent[ "main-content"]["features-h4"];
h4[1].textContent= siteContent[ "main-content"]["about-h4"];
h4[2].textContent= siteContent[ "main-content"]["services-h4"];
h4[3].textContent= siteContent[ "main-content"]["product-h4"];
h4[4].textContent= siteContent[ "main-content"]["vision-h4"];

par[0].textContent = siteContent["main-content"]["features-content"];
par[1].textContent = siteContent["main-content"]["about-content"];
par[2].textContent = siteContent["main-content"]["services-content"];
par[3].textContent = siteContent["main-content"]["product-content"];
par[4].textContent = siteContent["main-content"]["vision-content"];

//importing last section

h4[5].textContent= siteContent[ "contact"]["contact-h4"];
par[5].textContent = siteContent['contact']['address'];
par[6].textContent = siteContent['contact']['phone'];
par[7].textContent = siteContent['contact']['email'];
par[8].textContent = siteContent['footer']['copyright'];

//Add new content

const newAnchor1 = document.createElement('a');
const newAnchor2 = document.createElement('a');

newAnchor1.textContent = 'Sign Up';
newAnchor2.textContent = 'Login';

document.querySelector('nav').appendChild(newAnchor1);
document.querySelector('nav').prepend(newAnchor2);

//Changing nav color

Array.from(document.querySelectorAll('a')).forEach(anchor => anchor.style.color = "PeachPuff");

document.querySelector('body').style.background = 'linear-gradient(to right, #ff9966, #ff5e62)'
document.querySelector('header').style.background = 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'

document.querySelector('.cta button').style.borderRadius = '12px'
document.querySelector('.cta button').style.background = 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)'
document.querySelector('.cta button').style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'


