import { isEscapeKey } from './utils.js';

const body = document.querySelector('body');
const bigPicture = body.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('img');
const bigPictureCancel = bigPicture.querySelector('#picture-cancel');
const pictureLikesCount = bigPicture.querySelector('.likes-count');
const pictureCommentsCount = bigPicture.querySelector('.comments-count');
const pictureCaption = bigPicture.querySelector('.social__caption');
const bigPictureCommentsCount = bigPicture.querySelector('.social__comment-count');

const fillBigPicture = ({url, likes, description, comments}) => {
  bigPictureImage.src = url;
  pictureLikesCount.textContent = likes;
  pictureCommentsCount.textContent = comments.length;
  pictureCaption.textContent = description;

  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPictureCommentsCount.classList.add('hidden');

  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  const closeBigPicture = document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
  document.removeEventListener('keydown', closeBigPicture);
};

export { fillBigPicture };
