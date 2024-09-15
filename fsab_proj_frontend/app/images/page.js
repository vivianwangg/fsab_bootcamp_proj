import NewImageForm from "../components/NewImageForm";
import ImageList from "../components/ImageList";

export default function Home() {
  return (
    <div>
      <ImageList />
      <hr />
      <NewImageForm />
    </div>
  );
}
