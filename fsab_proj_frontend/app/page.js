// We import components from other files like this
import MyCard from "./components/MyCard";

// In a `page.js` file, we usually call the page function `Home`
export default function Home() {
  return (
    <div>
      <title>Gallery Home</title>
      <MyCard
        // Example of passing in props (properties) to the card
        title="Welcome to Your Gallery"
        text="All your favorite images in one place!"
        buttonText="Go to gallery"
      ></MyCard>
    </div>
  );
}
