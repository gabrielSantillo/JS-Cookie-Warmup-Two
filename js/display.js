let src_img_one = Cookies.get(`img_url_one`);
let src_img_two = Cookies.get(`img_url_two`);
let src_img_three = Cookies.get(`img_url_three`);


document.querySelector(`main`).insertAdjacentHTML(`afterbegin`, 
`<button id="back">back</button>
<img src="${src_img_one}">
<img src="${src_img_two}">
<img src="${src_img_three}">
`);

function clearCookie(details) {
    Cookies.remove(`img_url_one`);
    Cookies.remove(`img_url_two`);
    Cookies.remove(`img_url_three`);
    document.location.href = `index.html`;
}

let back_button = document.getElementById(`back`);
back_button.addEventListener(`click`, clearCookie);