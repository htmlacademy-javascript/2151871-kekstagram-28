import { getRandomIntFromRange } from './utils.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'описание номер 1',
  'описание номер 2',
  'описание номер 3',
  'описание номер 4',
  'описание номер 5'
];

const NAMES = [
  'Игорь',
  'Антон',
  'Александр',
  'Марина',
  'Сергей',
  'Наташа',
  'Николай',
  'Светлана',
];

const getRandomArrayElement = (array) =>
  array[getRandomIntFromRange(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const getRandomMessage = () =>
  Array.from({ length: getRandomIntFromRange(1, 2) }, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomIntFromRange(1, AVATAR_COUNT)}.svg`,
  message: getRandomMessage(),
  name: getRandomArrayElement(NAMES),
});

const сreatePicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntFromRange(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomIntFromRange(0, COMMENT_COUNT) },
    createComments
  ),
});

const getPicture = Array.from({ length: PICTURE_COUNT }, (_, pictureIndex) =>
  сreatePicture(pictureIndex + 1)
);

getPicture();
