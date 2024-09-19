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
      <img src= "https://www.1st-art-gallery.com/media/wysiwyg/back-mob-min2.jpg" className = {classes.center}></img>
    </div>
  );
}


