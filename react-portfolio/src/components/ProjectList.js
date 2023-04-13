import Project from './Project';
import projects from '../projects';

export default function ProjectList() {
    const projects = [
        {
            name: "Groupie Gang",
            link: "https://github.com/emmaparis/Groupie-Gang",
        },
        {
            name: "Life Log",
            link: "hhttps://github.com/emmaparis/Project-2",
        },
    ];
    return (
        <div className="project-list">
            <h1>Projects</h1>
            <p>
                Here are some of my projects. I am currently working on my portfolio and will be adding more projects soon.
            </p>
            {projects.map((project) => (
                <Project name={project.name} link={project.link} />
            ))}
        </div>
    );
}

        