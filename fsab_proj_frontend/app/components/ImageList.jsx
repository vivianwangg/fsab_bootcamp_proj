'use client'
import { useEffect, useState } from "react"

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

    
    return (
        <div>
            {images.map((image) =>
                <img src= {`data:image/png;base64, ${image.B64}`}></img>
            )}
        </div>
    )
}
export default ImageList;