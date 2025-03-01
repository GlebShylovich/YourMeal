import { getDatabase, ref, set, get } from "firebase/database";
const db = getDatabase();

export function setUserData(data) {
  const { email, username, id } = data;
  set(ref(db, `users/${id}`), {
    email,
    username,
    id,
    basket: "",
    orders: ""
  });
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