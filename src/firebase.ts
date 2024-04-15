import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyD5rh2fGFkpqXuWm3kZ4F5QhgM7H3aPtbk",
  authDomain: "agro-garden-95e8f.firebaseapp.com",
  projectId: "agro-garden-95e8f",
  storageBucket: "agro-garden-95e8f.appspot.com",
  messagingSenderId: "141545830510",
  appId: "1:141545830510:web:07bc8a2b4a240c3b084e7f"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const visitorsCollection = db.collection('visitors')
const counterDoc = db.collection('counters').doc('visitorCounter');

export const createVisitor = async (visitor: firebase.firestore.DocumentData) => {
  const counterSnapshot = await counterDoc.get();
  const counterData = counterSnapshot.data();
  const currentCount = counterData ? counterData.count : 0;

  await db.runTransaction(async (transaction) => {
    transaction.set(counterDoc, { count: currentCount + 1 });
    transaction.set(visitorsCollection.doc(), { ...visitor, order: currentCount + 1 });
  });
}

export const geVisitor = async (id: string | undefined) => {
  const visitor = await visitorsCollection.doc(id).get()
  return visitor.exists ? visitor.data() : null
}

export const updateVisitor = (id: string | undefined, visitor: firebase.firestore.UpdateData) => {
  return visitorsCollection.doc(id).update(visitor)
}

export const deleteVisitor = (id: string | undefined) => {
  return visitorsCollection.doc(id).delete()
}

export const useLoadVisitors = () => {
  const visitors = ref<{ id: string; order: number; fullname: string; company: string; group: string; presence: boolean; }[]>([])

  const close = visitorsCollection.onSnapshot(snapshot => {
    visitors.value = snapshot.docs.map(doc => ({ 
      id: doc.id,
      order: doc.data().order,
      fullname: doc.data().fullname, 
      company: doc.data().company, 
      group: doc.data().group, 
      presence: doc.data().presence 
    }))
  })
  onUnmounted(close)
  return visitors
}
