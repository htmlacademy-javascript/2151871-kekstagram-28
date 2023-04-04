/**
 * Функция для проверки длины строки
 * @param {string} string - строка для проверки
 * @param {integer} length - длина строки
 * @param {boolean} - истина в диапозоне
 */
const isCheckStringLength = (string, length) => string.length <= length;
isCheckStringLength('проверяемая строка', 10);


/**
 * Функция для проверки, является ли строка палиндромом.
 * @param {string} string - строка проверки
 * @param {integer} length - длина строки
 * @param {string} tempString - строка приводящая в нижний регистр
 * @param {string} reverseString - строка наоборот
 * @param {boolean} - вывод значения
 */
const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll (' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }

  return tempString === reverseString;
};
isPalindrom('Топот');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в
// виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:

// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
// имяФункции('1 кефир, 0.5 батона'); // 105
// имяФункции('агент 007');           // 7
// имяФункции('а я томат');           // NaN

/**
 *Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
 * @param {string} string - исходная строка
 * @param {integer} result - результат приведения строки в число
 */
const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }

  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};
extractNumber('2023 год');

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с
// добавочными символами — и возвращает исходную строку, дополненную указанными символами
// до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает
// заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.

// Добавочный символ использован один раз
// имяФункции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
// имяФункции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
// имяФункции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
// имяФункции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
// имяФункции('qwerty', 4, '0'); // 'qwerty'

const myPadStart = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }
  return result;
};
myPadStart('1', 2, '0');
