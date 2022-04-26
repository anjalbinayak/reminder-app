import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import useAuth from "../hooks/useAuth";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const { user } = useAuth();

  const refreshData = () => {
    if (!user) {
      setNotes([]);
      return;
    }
    const q = query(collection(db, "notes"), where("user", "==", user.uid));

    onSnapshot(q, (querySnapchot) => {
      let ar = [];
      querySnapchot.docs.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() });
      });
      setNotes(ar);
    });
  };
  useEffect(() => {
    refreshData();
  }, [user]);
  return (
    <div>
      Notes
      {notes.map((note) => (
        <div>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
