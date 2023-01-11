import { RichText } from '@graphcms/rich-text-react-renderer';

const Project = ({ project }) => {
  return (
    <div
      tabIndex={0}
      className='collapse-plus rounded-box collapse border border-base-300 bg-base-100'
    >
      <div className='collapse-title flex flex-col items-center text-xl font-medium md:flex-row'>
        <span className='flex-shrink-0 basis-48'>{project.name}</span>
        <span className='text-xl font-normal'>{project.shortDescription}</span>
      </div>
      <div className='collapse-content'>
        <article>
          <RichText content={project?.content?.raw} />
        </article>
      </div>
    </div>
  );
};

export default Project;
