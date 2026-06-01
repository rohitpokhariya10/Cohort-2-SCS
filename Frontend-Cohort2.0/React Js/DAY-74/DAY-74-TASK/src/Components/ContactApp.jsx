import { useState } from "react";

function ContactApp() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    //contact store karne ke lie aarray
    //har contct ko react state me store kar ske tabhi useState() use kiya
    const [contacts, setContacts] = useState([]);

    function submitHandler(e) {
        e.preventDefault();
        // console.log("submitted");

        //ye islie bna rhe hai ki hum multiple  comntacts ko manage kar ske
        //newContact --> isme value name,phone state variable se arhi hai and ye donu state varaibles two way binding se connect hai input filed me
        const newContact = {
            //left name variable : name ye state se aya hoga
            //left phone
            name: name,
            phone: phone,
        };

        //jab tak refresh nahi krenge contacts contact state array me store rhenge
        setContacts([...contacts, newContact]);

        console.log(contacts)

        // Optionally clear input fields
        setName("");
        setPhone("");
    }

    return (
        <div className="min-h-screen bg-black flex justify-center p-6">

            {/* Main Card */}
           <div className="h-[85vh] bg-gray-200 w-full max-w-md rounded-xl shadow-lg p-6 flex flex-col">

                {/* Heading */}
                <h1 className="text-2xl font-bold text-center mb-6">
                    Contact App
                </h1>

                {/* Form */}
                <form onSubmit={submitHandler} className="mb-6">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => {
                            //console.log(e.target.value);
                            setName(e.target.value);
                        }}
                        className="border p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => {
                            // console.log(e.target.value);
                            setPhone(e.target.value)
                        }}
                        className="border p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {/*type="submit" --> best practise browser ko btane ke lie ye buttom form submit karne ke lie hai  */}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded w-full font-semibold transition"
                    >
                        Add Contact
                    </button>
                </form>

                {/* Contact List */}
                <div className="space-y-3 overflow-y-auto mt-2 flex-1 pr-1  scrollbar-hide">

                    {
                        contacts.map(function (elem, index) {
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-white p-3 rounded-lg shadow"
                                >
                                    {/* Profile Circle */}
                                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                        {elem.name
                                            .split(" ")

                                            .map(word => {
                                                return word[0];
                                            })
                                            .join("")
                                            .substring(0, 2)
                                            .toUpperCase()
                                        }
                                    </div>

                                    {/* User Info */}
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            {elem.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {elem.phone}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default ContactApp;
