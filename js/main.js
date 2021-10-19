
let colorsSelector = document.querySelector("#colorsSelector");

colorsSelector.addEventListener('click', choseColor);

function choseColor(e){
   //найдем изображение и data-атрибу выбранного цвета
   let carPicture = document.querySelector("#carImg");
   let color = e.target.dataset.color;
   //убедимся что клик сделан именно по цвету
   if (e.target.classList.contains("colorsSelector")) {
      return
   } 
   //удалим имеющийся класс "colorItem--active" и добавим его элементу по которому кликнули
   colorsSelector.querySelector('.colorItem--active').classList.remove('colorItem--active');
   e.target.classList.add('colorItem--active');
   // изменим картинку в соотсветствии с выбранным цветом
   carPicture.src = `img/${color}.png`;
}

