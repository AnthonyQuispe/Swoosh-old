import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase-config";
import { firestore } from "./firebase-config";

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

    // // Store user profile in Firestore
    // const userDocRef = firestore().collection("users").doc(user.uid);
    // await userDocRef.set({
    //   displayName: user.displayName,
    //   // Add other profile information you want to store in Firestore
    // }, { merge: true });
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};
