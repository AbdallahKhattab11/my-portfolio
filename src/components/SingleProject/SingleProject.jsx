import { memo } from "react";

const SingleProject = memo(({ project }) => {
  return (
    <div
      className={`project-item ${project.category} max-w-[360px] w-full border-1 border-gray-800 rounded-2xl p-3 md:p-5 justify-self-center`}>
      <div className="img w-full h-[200px] overflow-hidden rounded-[8px]">
        <img
          src={project.img}
          alt={`Preview of ${project.name} project`}
          loading="lazy"
          className="w-full h-full hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="content mt-5">
        <h3 className="text-[20px] md:text-[24px] mb-4 nameFont ">
          {project.name}
        </h3>
        <p className="text-[16px] md:text-[18px] text-secondary leading-7">
          {project.description}
        </p>
      </div>
      <div className="flex gap-4 mt-5">
        <div className="live-demo">
          <button className="cursor-pointer text-secondary flex gap-2 items-center bg-gradient-to-r from-blue-800 to-sky-600 px-4 py-2 rounded-lg font-medium text-[16px] hover:-translate-y-1 transition-all duration-200">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </button>
        </div>
        <div className="github-link">
          <button className="cursor-pointer text-secondary flex gap-2 items-center bg-gray-800 px-4 py-2 rounded-lg font-medium text-[16px] hover:bg-gray-700 hover:-translate-y-1 transition-all duration-200">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 fill-zinc-200"
            >
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
            </svg>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
});

export default SingleProject;
