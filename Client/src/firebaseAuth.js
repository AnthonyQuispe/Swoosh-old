import {
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";

// created an export function to be called to create users profile
export const createUser = async (
  firstName,
  lastName,
  email,
  password,
  username
) => {
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

    // Store user profile in Firestore
    await setDoc(
      doc(usersRef, user.uid),
      {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        username: username,
      },
      { merge: true }
    );
    //Set browserSessionPersistence
    setPersistence(auth, browserSessionPersistence);
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

//Get sports collection for select sport
export const getCollection = async (sport) => {
  const collectionRef = collection(db, sport);
  const querySnapshot = await getDocs(collectionRef);
  const collectionData = [];
  querySnapshot.forEach((doc) => {
    collectionData.push(doc.data());
  });
  return collectionData;
};
