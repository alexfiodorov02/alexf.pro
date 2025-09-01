'use client';

import React, { useState } from 'react';
import GalleryModal from './GalleryModal';

interface Project {
  id: number;
  name: string;
  url: string | null;
  description: string;
  images?: string[];
}

const ProjectsList: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "Expensely",
      url: "https://github.com/jackSeigerman/Expensely",
      description: "Managing your finances never looked so good.",
      images: ["/assets/expensely1.png", "/assets/expensely2.png", "/assets/expensely3.png"]
    },
    {
      id: 2,
      name: "EchoRead",
      url: "https://github.com/alexfiodorov02/EchoRead",
      description: "Turn any ebook into an audiobook, with dyslexia-friendly fonts for easier reading.",
      images: ["/assets/echoread1.png", "/assets/echoread2.png", "/assets/echoread3.png"]
    },
    {
      id: 3,
      name: "Glyphwitch",
      url: "https://github.com/memphis-iis/glyphwitch",
      description: "Annotate, transcribe, and explore historical documents for research, education, and preservation.",
      images: ["/assets/glyphwitch1.png", "/assets/glyphwitch2.png", "/assets/glyphwitch3.png"]
    },
    {
      id: 4,
      name: "Emprinnos",
      url: "https://web.archive.org/web/20220407160228/https://www.emprinnos.com/",
      description: "Spanish-language CS education startup focused on teaching web development skills (defunct).",
      images: ["/assets/emprinnos1.png", "/assets/emprinnos2.png"]
    },
  ]

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (images: string[], index: number = 0) => {
    setGalleryImages(images);
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setGalleryImages([]);
    setGalleryIndex(0);
  };

  const nextImage = () => {
    setGalleryIndex((i) => (i + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setGalleryIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
  <section className="projects-list" aria-label="Projects">
      <h2>Projects</h2>
      <p>Here's some of what I've built:</p>
      <ul className="postlist">
        {projects.map(project => (
          <li key={project.id} className="project-item projects-list-item">
            <div className="projects-list-info">
              {project.url ? (
                <a tabIndex={0} href={project.url}>{project.name}</a>
              ) : (
                <span>{project.name}</span>
              )}
              <span className="postlist__date">{project.description}</span>
            </div>
            {project.images && project.images.length > 0 && (
              <div className="projects-list-image-container">
                <img
                  src={project.images[0]}
                  alt={project.name + ' screenshot'}
                  className="project-image projects-list-image"
                  width={320}
                  height={180}
                  onClick={() => project.images ? openGallery(project.images) : undefined}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      {galleryOpen && (
        <GalleryModal
          images={galleryImages}
          open={galleryOpen}
          index={galleryIndex}
          onClose={closeGallery}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
  </section>
  );
};

export default ProjectsList;
