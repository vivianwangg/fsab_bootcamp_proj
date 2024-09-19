'use client'
import { useEffect, useState } from "react"
import classes from "./my-card-styles.module.css";

function ImageList() {
    const [images, setImage] = useState([])
    async function getAllImages() {
        const res = await fetch("http://localhost:8080/images", {
            method: "GET",
        })
        const resJSON = await res.json()
        setImage(resJSON)
    }

    useEffect(() => {
        getAllImages()
    }, [])

    function changePage() {
        window.location.href = ("http://localhost:3000/");
    }

    
    return (
        <div>
            <title>My Gallery</title>
            <h1>This is your gallery!</h1>
            <p>Refresh to see uploaded images :D</p>
            <p>Warning: image size must be smaller than 1 megabyte</p>
            <button onClick={changePage}>Back to Home</button>
            <p></p>
            {images.map((image) =>
                <img src= {`data:image/png;base64, ${image.B64}`} className= {classes.center}></img>
            )}
        </div>
    )
}
export default ImageList;