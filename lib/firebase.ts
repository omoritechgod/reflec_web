import { initializeApp, getApps } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

// Hardcoded Firebase config (recommended for production)
// This ensures environment variables work in all environments
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyC6X9Rpp9vQTTYP_c5iLBtcZlodeXrnTEs",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "reflexa-30b38.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "reflexa-30b38",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "reflexa-30b38.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "594619889812",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:594619889812:web:2576b17f071e72bb619c81",
};

console.log('🔥 Initializing Firebase with config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
});

// Initialize Firebase (only once)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Functions
const functions = getFunctions(app);

// Callable function to submit feedback
export const submitAnonymousFeedback = httpsCallable(functions, 'submitAnonymousFeedback');

export { app, functions };