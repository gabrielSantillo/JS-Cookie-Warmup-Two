document.querySelector(`main`).insertAdjacentHTML(`afterbegin`, `
<img id="img_one" src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
<img id="img_two" src="https://images.pexels.com/photos/97082/weimaraner-puppy-dog-snout-97082.jpeg?auto=compress&cs=tinysrgb&w=400">
<img id="img_three" src ="https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&w=400">
`);

function addCookieOne(details) {
    Cookies.set(`img_url_one`, `https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`);
}

let img_one = document.getElementById(`img_one`);
img_one.addEventListener(`click`, addCookieOne);

function addCookieTwo(details) {
    Cookies.set(`img_url_two`, `https://images.pexels.com/photos/97082/weimaraner-puppy-dog-snout-97082.jpeg?auto=compress&cs=tinysrgb&w=400`);
}

let img_two = document.getElementById(`img_two`);
img_two.addEventListener(`click`, addCookieTwo);

function addCookieThree(details) {
    Cookies.set(`img_url_three`, `https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&w=400`);
}

let img_three = document.getElementById(`img_three`);
img_three.addEventListener(`click`, addCookieThree);