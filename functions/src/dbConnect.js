import { initializeApp, cert } from "firebase-admin/app";
import { credentials } from "../credentials.js";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
  credential: cert(credentials)
});

export const db = getFirestore()
