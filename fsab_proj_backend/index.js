import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import {db} from "./util/FirebaseInit.js";
import {collection, getDocs, addDoc} from "firebase/firestore";
import multer from "multer";

//middleware - processes request body in form data format
const upload = multer();

const app = express();
const port = 8080;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.get("/images", async(req, res) => {
    const collectionRef = collection(db, "Images");
    const collectionSnap = await getDocs(collectionRef);
    const docs = [];
    collectionSnap.forEach((doc) => {
        docs.push(doc.data());
    });
    res.send(docs);
});


app.post("/images", upload.single("file"), async (req, res) => {
    const collectionRef = collection(db, "Images");
    const imgRecord = {"B64" : req.file.buffer.toString('base64')}
    const docRef = await addDoc(collectionRef, imgRecord);
    res.send(docRef.id);
})

app.listen(port, () => {
    console.log("Listening on port", port);
});

