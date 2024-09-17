import MyCard from "./components/MyCard";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div>
      <title>Gallery Home</title>
      <MyCard
        title="Welcome to Your Gallery"
        text="All your favorite images in one place!"
        buttonText="Go to gallery"
      ></MyCard>
      <p></p>
      <img src= "https://thumbs.dreamstime.com/z/smiley-yellow-face-emoji-white-background-smiley-yellow-face-emoji-white-background-vector-150787032.jpg" width="1024"></img>
    </div>
  );
}


