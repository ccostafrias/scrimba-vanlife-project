import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc,
    getDoc,
    where,
    query,
} from "firebase/firestore/lite" 

const firebaseConfig = {
  apiKey: "AIzaSyCBBK-6GGjLnITsU1Psm2ZS0cwhRrmTZwA",
  authDomain: "vanlife-project-wilso.firebaseapp.com",
  projectId: "vanlife-project-wilso",
  storageBucket: "vanlife-project-wilso.appspot.com",
  messagingSenderId: "1050976546348",
  appId: "1:1050976546348:web:458d910374d86c9f94ab89"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// // API by Firebase

const db = getFirestore(app) // Database

const vansCollectionRef = collection(db, "vans")
const reviewsCollectionRef = collection(db, "reviews")
const transactionsCollectionRef = collection(db, "transactions")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }))

    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const docSnap = await getDoc(docRef)
    return {
        ...docSnap.data(),
        id: docSnap.id,
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", 123))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }))

    return dataArr
}

export async function getReviews() {
    const querySnapshot = await getDocs(reviewsCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }))

    return dataArr
}

export async function getHostTransactions() {
    const querySnapshot = await getDocs(transactionsCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }))

    return dataArr
}

// API by .server

// export async function getVans() {
//     const res = await fetch("/api/vans")
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getVan(id) {
//     const res = await fetch(`/api/vans/${id}`)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getHostVans() {
//     const res = await fetch("/api/host/vans")
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getHostVan(id) {
//     const res = await fetch(`/api/host/vans/${id}`)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function loginUser(creds) {
//     const res = await fetch("/api/login",
//         { method: "post", body: JSON.stringify(creds) }
//     )

//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }


//     return data
// }

// export async function getHostTransactions() {
//     const res = await fetch("/api/host/transactions")
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch transactions", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.transactions
// }

// export async function getReviews() {
//     const res = await fetch("/api/host/reviews")
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch reviews", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.reviews
// }