"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Videos from "yet-another-react-lightbox/plugins/video";
import Image from "next/image";
import { useEffect } from "react";

export default function ImageGallery({
  images,
  lightboxImages,
  lightboxOpen,
  setLightboxOpen,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightboxAt = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const isSingleImage = images.length === 1;

  const handleImageClick = (index) => {
    const lightboxIndex = lightboxImages.findIndex(
      (lightboxImage) => lightboxImage.src === images[index].src
    );
    openLightboxAt(lightboxIndex);
  };

  useEffect(() => {
    if (!lightboxOpen) {
      setSelectedIndex(0);
    }
  }, [lightboxOpen]);

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={images.length === 1 ? 770 : 300}
          height={images.length === 1 ? 600 : 200}
          onClick={() => handleImageClick(index)}
          className={`rounded-lg max-w-full object-cover cursor-pointer ${
            isSingleImage ? "h-auto" : "h-52"
          }`}
        />
      ))}
      {lightboxOpen && (
        <Lightbox
          plugins={[Videos]}
          slides={lightboxImages.map((item) => {
            if (item.type === "video") {
              return {
                type: "video",
                sources: [
                  {
                    src: item.src,
                    type: "video/mp4",
                  },
                ],
              };
            } else {
              return {
                src: item.src,
                alt: item.alt,
              };
            }
          })}
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          initialSlide={selectedIndex}
        />
      )}
    </>
  );
}
