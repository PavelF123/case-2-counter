document.addEventListener("DOMContentLoaded", () => {
  const resultWindow = document.getElementById("result");
  const plusBtn = document.getElementById("plus-btn");
  const minusBtn = document.getElementById("minus-btn");
  const extremeMessageWindow = document.getElementById("extreme-message");

  let count = 0;

  function updateUI() {
    resultWindow.textContent = count;

    // Изменение фона окошка результата в зависимости от знака числа
    if (count > 0) {
      resultWindow.style.backgroundColor = "#ffeb3b"; // Жёлтый при положительных
    } else if (count < 0) {
      resultWindow.style.backgroundColor = "#4caf50"; // Зелёный при отрицательных
    } else {
      resultWindow.style.backgroundColor = "#f44336"; // Красный при нуле
    }

    // Блокировка / разблокировка кнопок на экстремальных значениях 10 и -10
    plusBtn.disabled = count >= 10;
    minusBtn.disabled = count <= -10;

    // Вывод сообщения в отдельном окне ниже кнопок
    if (count === 10 || count === -10) {
      extremeMessageWindow.textContent = "вы достигли экстремального значения";
    } else {
      extremeMessageWindow.textContent = "";
    }
  }

  plusBtn.addEventListener("click", () => {
    if (count < 10) {
      count += 1;
      updateUI();
    }
  });

  minusBtn.addEventListener("click", () => {
    if (count > -10) {
      count -= 1;
      updateUI();
    }
  });

  // Инициализация начального состояния
  updateUI();
});
