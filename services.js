import { getDatabase, ref, set, get } from "firebase/database";
const db = getDatabase();

export function setUserData(data, id, path = "") {
  return set(ref(db, `users/${id}${path}`), data);
}

export async function getUserData(id) {
  const userRef = ref(db, `users/${id}`);
  try {
    const snapshot = await get(userRef);
    return snapshot.val();
  } catch (error) {
    console.error(error);
    return null;
  }
}