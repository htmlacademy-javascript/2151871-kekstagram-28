import { getRandomIntFromRange } from './utils.js';
import { NAMES, COMMENT_LINES, DESCRIPTIONS } from './mocks/mock.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;

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

const getCreatePictures = Array.from({ length: PICTURE_COUNT }, (_, pictureIndex) =>
  сreatePicture(pictureIndex + 1)
);

export { getCreatePictures, сreatePicture };
