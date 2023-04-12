
import './form-upload-picture.js';
import './upload-pictures.js';
import './validation-form.js';
import { renderPictures } from './render-pictures.js';
import { getData } from './api.js';
import { initPicturesFilter } from './filter-pictures.js';

getData((pictures) => {
  renderPictures(pictures);
  initPicturesFilter(pictures);
});
