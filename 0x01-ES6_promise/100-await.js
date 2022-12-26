import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  let result;
  if (photo && user) {
    result = { photo, user };
  } else {
    result = { photo: null, user: null };
  }
  return result;
}
