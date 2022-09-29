import React from "react";
import { useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useNavigate } from "react-router";

const ContactForm = (props) => {

    const navHome = useNavigate()

    const EmailRef = useRef();
    const nameRef = useRef();
    const contactRef = useRef();
    const companyRef=useRef()
    const locationRef = useRef()
    
    const formFunc = async () => {
        if (
          EmailRef.current.value === "" &&
          nameRef.current.value === "" &&
          contactRef.current.value === "" &&
          locationRef.current.value === ""
        ) {
          alert("Please enter details");
        } else {
          try {
            const docRef = await addDoc(collection(db, "users"), {
              Email: EmailRef.current.value,
              Name: nameRef.current.value,
              Phoneno: contactRef.current.value,
              Location: locationRef.current.value,
              CompanyName: companyRef.current.value,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          navHome("/");
        }
    };
    
    function handleClick() {
        
        formFunc()
    }
  return (
      <div className="w-[50vw] min-w-[280px] m-auto bg-gradient-to-bl from-[#53bcb3ce] to-[#055792cf] rounded-3xl my-10 text-white">
          <img src="https://www.phixer.net/blog/uploads/2020/04/Legit-Real-Estate-Photographer-4.jpg" alt="" className="w-[100vw] h-[100vh] object-cover -z-10 absolute top-0 left-0 opacity-75"/>
      <header className="font-semibold text-2xl py-5">Contact Form</header>
      <section>
        <div className="flex flex-col items-start py-2 md:px-8 px-2">
          <p>Name : </p>
          <input type="text" ref={nameRef} className="w-full rounded-md my-1"/>
        </div>
        <div className="flex flex-col items-start py-2 md:px-8 px-2">
          <p>Email : </p>
          <input type="email" ref={EmailRef}  className="w-full rounded-md my-1"/>
        </div>
        <div className="flex flex-col items-start py-2 md:px-8 px-2">
          <p>Phone : </p>
          <input type="number" ref={contactRef}  className="w-full rounded-md my-1"/>
        </div>
        <div className="flex flex-col items-start py-2 md:px-8 px-2">
          <p>Company Name : </p>
          <input type="text" ref={companyRef}  className="w-full rounded-md my-1"/>
        </div>
        <div className="flex flex-col items-start py-2 md:px-8 px-2">
          <p>Location : </p>
          <input type="text" ref={locationRef}  className="w-full rounded-md my-1"/>
        </div>
          </section>
          <button onClick={handleClick} className="px-4 py-2 bg-slate-200 rounded-md mb-5 text-black">Submit</button>
    </div>
  );
};

export default ContactForm;
