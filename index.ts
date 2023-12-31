// Import stylesheets
import './style.css';

/*
Функция find_max предназначена для поиска максимального числа в массиве чисел (nums). Функция сначала инициализирует переменную max_num отрицательной бесконечностью, которая является значением меньшим, чем все остальные числа, чтобы гарантировать, что первое число, встречающееся в массиве, будет установлено как максимальное
*/
function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  /*
  функция перебирает каждый элемент массива nums, используя цикл for. Для каждого элемента он проверяет, больше ли он текущего значения max_num. Если это так, переменная max_num обновляется до текущего значения элемента с помощью строки max_num = num;.

  Таким образом, функция отслеживает максимальное число, встречающееся в массиве, пока не будут проверены все элементы.
  */
  for (let num of nums) {
    if (num > max_num) {
      /*
      Эта строка обновляет переменную max_num до текущего числа (num), если num больше текущего max_num. Это гарантирует, что max_num всегда будет содержать максимальное число, найденное на данный момент в массиве nums.      
      */
      max_num = num; /// отсутствующая строка
    }
  }

  /*
  функция возвращает переменную max_num, которая теперь должна содержать максимальное число в массиве. В целом, функция представляет собой простой, но эффективный способ найти максимальное значение в массиве чисел .
  */
  return max_num;
}

console.log(find_max([6, 8, 2, 10, 5, 0, 15]));
