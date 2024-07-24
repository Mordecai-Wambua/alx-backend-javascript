import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let output = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    output = { photo, user };
  } catch (e) {
    output = { photo: null, user: null };
  }
  return output;
}
