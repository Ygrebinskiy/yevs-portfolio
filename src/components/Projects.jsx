import {motion} from "framer-motion"
import {Link} from "react-router"
import {projectsData} from "./../Project";

const ProjectCard = ({project}) => {
    return (
        <ScrollReveal>
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
                
                <Link to={`/${project.windowURL}`}>
                <img src={project.image} alt="" className="projectPhoto cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[500px]" />
                </Link>
                
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <div className="text-xl font-semibold">{project.title}</div>
                        <p className="text-gray-400">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-5">
                        {
                            project.technologies.map((tech, index) => (
                                <span key={index} className="rounded-lg bg-black p-3">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

const ScrollReveal = ({children}) => {
    return (
        <motion.div
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
        >
            {children}
        </motion.div>
    )
}


const Projects = () => {
    return (
        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
            <ScrollReveal>    
                <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
            </ScrollReveal>
            
            <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">{projectsData.map((project, index) => (
                <ProjectCard key={index} project={project}/>
            ))}</div>
        </div>
    )
   }
   
   export default Projects