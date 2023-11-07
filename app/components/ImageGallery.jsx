import CarouselGallery from "./CarouselGallery";
import projectList from "./ProjectList";

export default function ImageGallery() {
  return (
    <div>
      <h1>Projects</h1>
      <CarouselGallery images={projectList} />
    </div>
  );
}
