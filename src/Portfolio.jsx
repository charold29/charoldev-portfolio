import { 
    BsFillMoonStarsFill,
    BsFillCheckCircleFill 
} from 'react-icons/bs';
import { 
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub
} from 'react-icons/ai'
import { useState } from 'react';
import './Portfolio.css'

export default function Portfolio(){
    const [darkMode, setDarkMode] = useState(false)
    return(
        <div className={darkMode ? "dark" : ""}>
            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 font-karla'>
                <section className='min-h-screen'>
                    <nav className='py-10 mb-10 flex justify-between'>
                        <a href='#' className='text-xl dark:text-gray-200 font-burtons'>CharolDev</a>
                        <ul className='flex items-center space-x-5'>
                            <li>
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer dark:text-gray-400 text-2xl '/>
                            </li>
                            <li>
                                <a className='bg-gradient-to-r from-emerald-500 to-indigo-500 text-white px-4 py-2 rounded-2xl' href='https://drive.google.com/file/d/17H1u3tLOwbX2PPbYZO6rYH5yQbqnEsVd/view?usp=share_link'>Resume</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='text-center p-10 py-10'>
                        <h2 className='text-5xl py-2 text-emerald-600 font-medium dark:text-emerald-400 md:text-6xl'>
                            Harold Rojas
                        </h2>
                        <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
                            Software Developer
                        </h3>
                        <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto'>
                            I am a software developer with experience in projects under agile methodologies such as SCRUM, with analytical capacity, responsibility and willingness to work as a team in different companies.
                        </p>
                    </div>
                    <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-400'>
                        <a href="https://twitter.com/CharoldR29"><AiFillTwitterCircle /></a>
                        <a href="https://www.linkedin.com/in/haroldrojasp/"><AiFillLinkedin /></a>
                        <a href="https://github.com/charold29"><AiFillGithub /></a>
                    </div>
                    <div className='my-image mx-auto bg-gradient-to-b from-emerald-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
                        <img src='../public/images/avatar.webp'></img>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className='text-3xl py-1 dark:text-white'>Last Projects</h3>
                        <ul className='list-disc list-inside'>
                            <li className='flex place-items-center space-x-5'>
                                <BsFillCheckCircleFill className='flex-shrink-0'/>
                                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-justify'>
                                VUCE 2.0 project in <span className='text-emerald-500'><a href="https://www.linkedin.com/company/g&s-gestion-y-sistemas-sac/">G&S</a></span>
                                    ,&nbsp;a technological innovation and digital transformation consultancy, recognized by Microsoft as the best partner of the year. They provide Big Data & Analytics, Infrastructure and Cloud Services, Development and Innovation and Modern Workplace solutions.
                                </p>
                            </li>
                            <li className='flex place-items-center space-x-5'>
                                <BsFillCheckCircleFill />    
                                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-justify'>
                                Development and chatbot maintenance in <span className='text-emerald-500'><a href="https://www.linkedin.com/company/miahhh/">Miah</a></span>
                                ,&nbsp;company that was born to transform health and well-being in organizations.
                                </p>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="lg:flex gap-10 justify-center">
                        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
                            <img src='./public/images/programming-languages.png' className='w-32 mx-auto'></img>
                            <h4 className='py-4 font-bold text-emerald-600'>Programming Languages</h4>
                            <p className='text-gray-800 py-1'>Java</p>
                            <p className='text-gray-800 py-1'>JavaScript</p>
                            <p className='text-gray-800 py-1'>TypeScript</p>
                            <p className='text-gray-800 py-1'>Python</p>
                            <p className='text-gray-800 py-1'>C++</p>
                            <p className='text-gray-800 py-1'>C#</p>
                        </div>
                        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
                            <img src='./public/images/frameworks-and-skills.jpg' className='w-32 h-32 object-contain mx-auto'></img>
                            <h4 className='py-4 font-bold text-emerald-600'>Frameworks and Skills</h4>
                            <p className='text-gray-800 py-1'>Azure / AWS / IBM Cloud</p>
                            <p className='text-gray-800 py-1'>Spring</p>
                            <p className='text-gray-800 py-1'>Maven / Gradle</p>
                            <p className='text-gray-800 py-1'>Angular</p>
                            <p className='text-gray-800 py-1'>Git</p>
                            <p className='text-gray-800 py-1'>Docker</p>
                            <p className='text-gray-800 py-1'>Rasa</p>
                        </div>
                        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
                            <img src='./public/images/certifications.png' className='w-32 h-32 object-contain mx-auto'></img>
                            <h4 className='py-4 font-bold text-emerald-600'>Certifications</h4>
                            <p className='text-gray-800 underline py-1'><a href='https://www.freecodecamp.org/certification/CharolDev/javascript-algorithms-and-data-structures'>JavaScript Algorithms and Data Structures</a></p>
                            <p className='text-gray-800 underline py-1'><a href='https://www.sololearn.com/Certificate/CT-TWT9XQMA/png'>Java - Certified Course</a></p>
                            <p className='text-gray-800 underline py-1'><a href='https://verify.openedg.org/?id=fe2x.TDed.4rCW'>PCEP - Certified Entry-Level Programmer</a></p>
                            <p className='text-gray-800 underline py-1'><a href='https://drive.google.com/file/d/1HhRERYJPB8KIyfqS6vnLpM0QDvuU5HKm/view'>IoT Fundamentals: Big Data & Analytics</a></p>
                            <p className='text-gray-800 underline py-1'><a href='https://drive.google.com/file/d/1iLgNXS08IVb2BxzhfmVb61Rk-MOVaYMF/view'>ICCNA Routing and Switching</a></p>
                        </div>
                    </div>
                </section>
                <footer class="text-gray-600 dark:bg-gray-900 py-4">
                    <div class="text-center dark:text-gray-200">
                        <p>© 2023 - All rights reserved</p>
                    </div>
                </footer>
            </main>
        </div>  
    )
}