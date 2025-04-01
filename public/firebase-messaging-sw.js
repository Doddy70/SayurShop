importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyA3lFknjE3vp8rVZsg5ab83CxGLb6BCHz4",
  authDomain: "pitara-sejasa.firebaseapp.com",
  projectId: "pitara-sejasa",
  storageBucket: "pitara-sejasa.appspot.com",
  messagingSenderId: "81515021398",
  appId: "1:81515021398:web:3783d2fa2edcfef99167f7",
  measurementId: "G-ED7LCR20KJ",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
