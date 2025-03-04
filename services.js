import { database, ref, set, get, query, equalTo, orderByChild } from "./firebase";

export function setUserData(data, id, path = "") {
  return set(ref(database, `users/${id}${path}`), data);
}

export async function getUserData(id) {
  const userRef = ref(database, `users/${id}`);
  try {
    const snapshot = await get(userRef);
    return snapshot.val();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function checkEmailExists(email) {
  const usersRef = ref(database, "users");
  const emailQuery = query(usersRef, orderByChild("email"), equalTo(email));
  const snapshot = await get(emailQuery);
  return snapshot.exists();
}
