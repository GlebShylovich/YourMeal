import { getAuth, signOut } from "firebase/auth";

export default function Page() {
  const auth = getAuth();
  
  return (
    <div className="page">
      <h1>YourMeal</h1>
      <button type="button" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </div>
  );
}
