let categories = document.querySelector("#categories");
// console.log(categories);
console.log(`В списке ${categories.children.length} категории`);
let items = document.querySelectorAll(".item");
let h2 = document.querySelectorAll('h2');

items.forEach((easy) => {
    console.log(`Категория: ${easy.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${easy.querySelector('ul').children.length}`);
});