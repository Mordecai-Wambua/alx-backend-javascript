import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const photo = uploadPhoto(fileName);
  const sign = signUpUser(firstName, lastName);

  return Promise.allSettled([photo, sign])
    .then((result) => (result.map((item) => ({
      status: item.status,
      value: item.status === 'fulfilled' ? item.value : String(item.reason),
    }))
    ));
}
