const app = function() {

  const cats = [{
    "name": "Name: Boba",
    "favourite_food": "Favourite food: Sock fluff",
    "img": "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
  },
  {
    "name": "Name: Barnaby",
    "favourite_food": "Favourite food: Tuna",
    "img": "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
  },
  {
    "name": "Name: Max",
    "favourite_food": "Favourite food: Whiskas Temptations",
    "img": "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
  },
  {
    "name": "Name: Jacky",
    "favourite_food": "Favourite food: catfish",
    "img": "./images/grief-and-loss.jpg"
  }
]

  for(let cat of cats) {
    addCat(cat.name, cat.favourite_food, cat.img );
  }
};

//   addCat("Name: Jacky", "Favourite food: catfish", './images/grief-and-loss.jpg');
// }

// const li1 = document.createElement('li');
// li1.innerText = "Name: Jack";
// const li2 = document.createElement('li');
// li2.innerText = "Favourite food: catfish";
// const li3 = document.createElement('li');
// const img = document.createElement('img');
// img.width = 500;
// img.src = './images/grief-and-loss.jpg';
// li3.appendChild(img);
//
// const ul = document.createElement('ul');
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
//
// const section = document.getElementById('cats');
// section.appendChild(ul);

const createTextLi = function(content) {
  const li = document.createElement('li');
  li.innerText = content;
  return li;
}

const createImageLi = function(imageSource){
  const img = document.createElement('img');
  img.classList.add('catimage');
  img.src = imageSource;
  return img;
}

const createUl= function() {
  const ul = document.createElement('ul');
  ul.classList.add('cat')
  return ul;
}

const appendElements = function(textLi1, textLi2, imageLi, ul){
  const section = document.querySelector('#cats');
  ul.appendChild(textLi1);
  ul.appendChild(textLi2);
  ul.appendChild(imageLi);
  section.appendChild(ul);
}

const addCat = function(content1, content2, imageSource){
  const textLi1 = createTextLi(content1);
  const textLi2 = createTextLi(content2);
  const imgLi = createImageLi(imageSource);
  const ul = createUl();
  appendElements(textLi1, textLi2, imgLi, ul);
}

document.addEventListener("DOMContentLoaded", app);
