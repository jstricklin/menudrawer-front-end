import firebase from 'firebase'

export default function firebaseInit(){
    const config = {
        apiKey: "AIzaSyCXEOLc5rsyt7xQl2jc6m6HRtKZYOBk86E",
        authDomain: "menu-drawer-8c601.firebaseapp.com",
        databaseURL: "https://menu-drawer-8c601.firebaseio.com",
        projectId: "menu-drawer-8c601",
        storageBucket: "menu-drawer-8c601.appspot.com",
        messagingSenderId: "422122074123"
}
firebase.initializeApp(config);
}
