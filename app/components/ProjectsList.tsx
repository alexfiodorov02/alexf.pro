'use client';

interface Project {
  id: number;
  name: string;
  url: string;
  description: string;
}

const ProjectsList: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "Expensely",
      url: "https://github.com/jackSeigerman/Expensely",
      description: "Managing your finances never looked so good."
    },
    {
      id: 2,
      name: "Glyphwitch",
      url: "https://github.com/memphis-iis/glyphwitch",
      description: "Annotate, transcribe, and explore historical documents for research, education, and preservation."
    }
  ];

  return (
    <div className="projects-list">
    <h2>Projects</h2>
    <p>Here's some of what I've built:</p>
    <ul className="postlist">
      {projects.map(project => (
        <li key={project.id}>
          <a tabIndex={0} href={project.url}>{project.name}</a>
          <span className="postlist__date">{project.description}</span>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ProjectsList;
