// Copia este archivo como environment.ts y rellena tus propias keys.
// NO subas environment.ts a git.

export const environment = {
  production: false,
  supabase: {
    url: 'https://TU_PROYECTO.supabase.co',
    anonKey: 'TU_SUPABASE_ANON_KEY',
  },
  firebase: {
    apiKey: 'TU_FIREBASE_API_KEY',
    authDomain: 'TU_PROYECTO.firebaseapp.com',
    projectId: 'TU_PROYECTO',
    storageBucket: 'TU_PROYECTO.firebasestorage.app',
    messagingSenderId: 'TU_SENDER_ID',
    appId: 'TU_APP_ID',
    measurementId: 'TU_MEASUREMENT_ID',
  },
};
