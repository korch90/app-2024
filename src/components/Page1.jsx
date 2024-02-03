


const Page1 = () => {


  function click(event) {
        if (event.detail === 1) {
          // Одиночный клик
          console.log('Single click');
          // Добавьте свой код для обработки одиночного клика
        } else if (event.detail === 2) {
          // Двойной клик
          console.log('Double click');
          // Добавьте свой код для обработки двойного клика
        }
      }

return (
<div>
<button onClickCapture={click}>+++++</button>
Page 1 here</div>


)

}

export default Page1