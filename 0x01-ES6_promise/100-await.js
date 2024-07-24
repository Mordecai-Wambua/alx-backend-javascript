import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let output = {};

  try {
    const photos = await uploadPhoto();
    const users = await createUser();
    output = { photos, users };
  } catch (e) {
    output = { photos: null, users: null };
  }
  return output;
}
