'use client';

import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Easy Rent',
    description:
      'Interactive MERN Stack Single-Page Application. Tech Used: React, Node, JavaScript, MERN stack, MongoDB, JWT, GraphQL, Nodemailer, Stripe',
    image: '/images/projectsImages/easy_rent.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Fredbian/easy-rent',
    previewUrl: 'https://easy-rent-2022.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Paws For Homes',
    description:
      'Interactive Node-based Full-Stack application following the MVC. Tech Used: Express, Node, Bootstrap, JavaScript, MySQL, ORM, Bcrypt',
    image: '/images/projectsImages/paws_for_homes.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Fredbian/paws',
    previewUrl: 'https://paws-for-home.herokuapp.com/',
  },
  {
    id: 3,
    title: 'tech_blog',
    description:
      'A CMS-style blog site, following the MVC paradigm. Tech Used: JavaScript, MySQL, Node, ORM, Bcrypt',
    image: '/images/projectsImages/tech_blog.png',
    tag: ['All', 'Web'],
    gitUrl:
      'https://github.com/Fredbian/MONU-FSF-Module-14-Challenge-Tech-Blog',
    previewUrl: 'https://module-14-tech-blog-fred.herokuapp.com/',
  },
  {
    id: 4,
    title: 'Cocktail Recipe Finder',
    description:
      'A mobile first interactive Front-end application. Tech Used: HTML, CSS, JavaScript, APIs',
    image: '/images/projectsImages/cocktail_recipe_finder.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/dark40/cocktail-recipe-party-activity',
    previewUrl: 'https://dark40.github.io/cocktail-recipe-party-activity',
  },
  {
    id: 5,
    title: 'Travel App',
    description:
      'A Front-end Travel Application. Tech Used: React, JavaScript, APIs',
    image: '/images/projectsImages/travel_app.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Fredbian/project_travel_app',
    previewUrl: 'https://rococo-belekoy-25c298.netlify.app',
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description: 'Authentication and CRUD operations',
    image: '/images/projectsImages/weather_dashboard.png',
    tag: ['All', 'Web'],
    gitUrl:
      'https://github.com/Fredbian/MONU-FSF-Module-6-Challenge-Weather-Dashboard',
    previewUrl: 'https://fredbian.github.io/Weather-Dashboard/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  // 'useInView()' is a hook from 'framer-motion' package, it can tall if the motion element is in view
  // if elemnt in view, trigger animation
  // need to use this with 'useRef()' hook
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id='projects'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => {
          return (
            <motion.li
              variants={cardVariants}
              key={index}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              // will take the card index, and show cards one by one
              transition={{duration: 0.3, delay: index * 0.4}}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectsSection;
