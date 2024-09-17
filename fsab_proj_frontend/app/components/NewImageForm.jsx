'use client'
import { useState } from "react"
import classes from "./new-image-form-styles.module.css";

<new></new>
function NewImageForm() {
    const [status, setStatus] = useState("ready for upload");

    async function handleFileUpload(event){
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:8080/images', {
            method: 'POST',
            body: formData,
        });

        if(response.status == 200){
            setStatus("success! refresh to see your image.");
        }
        else{
            setStatus("error");
        }

        await new Promise(r => setTimeout(r, 5000));
        setStatus("ready for upload");
        event.target.value = "";

        console.log(response);
    }
    

    return (
        <div>
            <p>{`current image status: ${status}`}</p>
            <input type= "file" onChange= {handleFileUpload}></input>
        </div>
    )
}
export default NewImageForm