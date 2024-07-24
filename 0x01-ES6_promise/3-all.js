import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      const output = [
        photoResponse.body,
        userResponse.firstName,
        userResponse.lastName,
      ];
      console.log(output.join(' '));
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
