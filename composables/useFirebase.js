import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged 
} from "firebase/auth";

export const createUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  return credentials;
}

export const signInUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  return credentials;
}

export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("onAuthStateChanged: LoggedIn:", user);
      } else {
        console.log("onAuthStateChanged: LoggedOut", user);
      }
      firebaseUser.value = user;
    });
}
export const signOutUser = async () => {
  const auth = getAuth()
  const result = await auth.signOut();
  return result;
}


