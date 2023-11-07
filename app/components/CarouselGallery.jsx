import { useState } from "react";
import Image from "next/image";

// Create button for handling when the arrows are clicked
export default function CarouselGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <button>&lt;</button>
      <Image
        src={images[0].image}
        height={500}
        width={500}
        className="rounded-full"
      />
      <button>&gt;</button>
    </div>
  );
}
