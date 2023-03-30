import { getRandomPositiveInteger, getRandomArrayElement } from './utils.js';
import { NAMES, COMMENT_LINES, DESCRIPTIONS, AVATAR_COUNT } from './mocks/mock.js';

const PICTURE_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;

const generateComment = () => ({
  id: getRandomPositiveInteger(1, 1000),
  avatar: `img/avatar-${getRandomPositiveInteger(AVATAR_COUNT.MIN, AVATAR_COUNT.MAX)}.svg`,
  message: getRandomArrayElement(COMMENT_LINES),
  name: getRandomArrayElement(NAMES)
});

const generatePicture = (index = 1) => {
  const comments = Array.from({length: getRandomPositiveInteger(1, 5)}, generateComment);

  return {
    id: index - 1,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
    comments: comments
  };
};

const generatePictures = () => Array.from({length: PICTURE_COUNT}, (element, index) => generatePicture(index + 1));

export { generatePictures };
