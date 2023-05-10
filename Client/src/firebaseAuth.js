import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "./firebase-config";
import { doc, setDoc, collection } from "firebase/firestore";

// created an export function to be called to create users profile
export const createUser = async (firstName, lastName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    await updateProfile(user, { displayName: `${firstName} ${lastName}` });
    console.log("User created successfully");

    const usersRef = collection(db, "users");
    console.log("db", db); // log db to the console
    console.log("usersRef", usersRef); // log usersRef to the console

    // Store user profile in Firestore
    await setDoc(
      doc(usersRef, user.uid),
      {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};
