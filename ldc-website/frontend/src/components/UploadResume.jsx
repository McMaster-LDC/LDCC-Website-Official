import React, { useState } from "react";

const UploadResume = () => {
    const [file, setFile] = useState(null);
    const [secretCode, setSecretCode] = useState(""); // Store the secret code
    const [isUploading, setIsUploading] = useState(false);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Store selected file in state
    };

    const handleCodeChange = (e) => {
        setSecretCode(e.target.value); // Store secret code in state
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage("Please select a file first.");
            return;
        }

        if (!secretCode) {
            setMessage("Please enter your unique upload code.");
            return;
        }

        setIsUploading(true);
        setMessage("");

        const formData = new FormData();
        formData.append("resume", file);
        formData.append("secretCode", secretCode); // Send the secret code

        try {
            const response = await fetch("https://ldcc-website-official.onrender.com", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Resume uploaded successfully!");
            } else {
                setMessage(data.error || "Upload failed.");
            }
        } catch (error) {
            setMessage("Error uploading file.");
        }

        setIsUploading(false);
    };

    return (

    <main className="flex flex-col bg-gradient-to-b from-blue-50 to-orange-50 pt-5 px-10 pb-10">
      <section className="flex flex-col gap-14 items-center">
        <div className="flex flex-col items-start max-w-screen-lg w-full">
          <h1 className="flex justify-start max-w-screen-lg w-full font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950">
            Student Resume Upload
          </h1>
        </div>

        <article className="flex flex-col items-between max-w-screen-lg w-full -mt-4">
          <h2 className="font-semibold md:text-2xl lg:text-3xl text-xl flex text-red-900 max-w-screen-md">
            Upload your Resume
          </h2>
          <p className="font-medium md:text-md lg:text-lg text-sm mt-2">
            Everyone who has registered through OscarPlus has the opportunity to upload their resume here!          
          </p>
        </article>


      <div className="flex flex-col pt-5 px-10 pb-10 items-center">
        <div className="flex max-w-screen-lg w-full flex-col gap-6 justify-center items-center">

            <div className="flex flex-col w-full">
            <label htmlFor="Unique Code" className="block text-sm font-medium text-purple-950 mb-2">
                Enter Unique Upload Code
            </label>
            <input 
                type="text" 
                placeholder="Enter Upload Code" 
                value={secretCode} 
                onChange={handleCodeChange} 
                className="w-full p-4 rounded-2xl bg-white text-purple-950 placeholder:text-purple-950 text-md border-2 border-red-900 shadow-md"
            />
            </div>

            <div className="flex flex-col w-full">
            <label htmlFor="Upload PDF" className="block text-sm font-medium text-purple-950 mb-2">
                Resume Upload (PDF only)
            </label>
            <input type="file" className="file-input file-input-bordered border-red-900 border-2 w-full rounded-2xl bg-white" onChange={handleFileChange}/>
            </div>

            <button 
                disabled
                onClick={handleUpload} 
                className=" w-full transition p-4 rounded-2xl text-white mt-2 cursor-disabled bg-gray-500"
            >
                Form Closed! Check back soon
            </button>
            {message && <p className="mt-2 text-purple-950">{message}</p>}

        </div>
      </div>
      </section>
    </main>
    );
};

export default UploadResume;
