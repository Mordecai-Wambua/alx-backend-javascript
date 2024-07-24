import { uploadPhoto } from './utils';

export default function getResponseFromAPI() {
  const output = uploadPhoto();
  return output;
}
