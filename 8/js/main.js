import { generatePictures } from './data.js';
import { renderPictures } from './render-pictures.js';
import './form-upload-picture.js';
import './validation-form.js';

renderPictures(generatePictures());
