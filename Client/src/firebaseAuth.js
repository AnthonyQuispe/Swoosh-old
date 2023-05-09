import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const auth = getAuth();

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
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};
