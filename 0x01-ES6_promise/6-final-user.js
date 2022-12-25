import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const photo = uploadPhoto(fileName);
  const user = signUpUser(firstName, lastName);
  return Promise.allSettled([photo, user]).then((values) => {
    values.map((o) => ({
      status: o.status,
      value: o.status === 'fulfilled' ? o.value : o.reason,
    }));
  });
}
