import {
  getDoc,
  doc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { firestore } from "./firebase";

interface ApiResponse {
  success: boolean;
  data?: any;
  error?: any;
}
export const getQuestion = async (
  id: string,
): Promise<ApiResponse | undefined> => {
  try {
    const value = await getDoc(doc(firestore, "feedbackLinks", id));

    if (!value.exists()) throw new Error("Document not found");

    console.log(value.data());

    return { success: true, data: value.data() };
  } catch (error: any) {
    console.error(error.message);
    return { success: false, error: error.message || "something went wrong" };
  }
};

export const submitAnonymousFeedback = async (
  linkId: string,
  content: string,
  question: string,
  userId: string,
): Promise<ApiResponse | undefined> => {
  try {
    const addData = await addDoc(
      collection(firestore, "users", userId, "feedback"),
      {
        linkId,
        content,
        question,
        isAnonymous: true,
        read: false,
        saved: false,
        createdAt: serverTimestamp(),
      },
    );

    console.log("Anonymous Response Sent", addData, "user id", userId);
    return { success: true };
  } catch (error: any) {
    console.error(error.message);
    return { success: false, error: error.message || "something went wrong" };
  }
};
