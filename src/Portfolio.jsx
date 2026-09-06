import {
    BsFillMoonStarsFill,
    BsFillCheckCircleFill
} from 'react-icons/bs';
import {
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineMail
} from 'react-icons/ai'
import { useState } from 'react';
import './Portfolio.css'

export default function Portfolio(){
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 font-karla select-none transition-colors duration-300'>
                <section className='min-h-screen'>
                    <nav className='py-10 mb-10 flex justify-between items-center'>
                        <a href='#' className='text-xl dark:text-gray-200 font-burtons'>CharolDev</a>
                        <ul className='flex items-center space-x-5'>
                            <li>
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer dark:text-gray-400 text-2xl '/>
                            </li>
                            <li>
                                <a className='bg-gradient-to-r from-emerald-500 to-indigo-500 text-white px-4 py-2 rounded-2xl' href='https://drive.google.com/file/d/17H1u3tLOwbX2PPbYZO6rYH5yQbqnEsVd/view?usp=share_link' target='_blank' rel='noopener noreferrer'>Resume</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='text-center p-10 py-10'>
                        <h2 className='text-5xl py-2 text-emerald-600 font-medium dark:text-emerald-400 md:text-6xl'>
                            Harold Rojas
                        </h2>
                        <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
                            Senior Java Backend Engineer
                        </h3>
                        <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto'>
                            Java backend engineer with 6+ years building mission-critical systems for banking, fintech, retail, and government. Currently at NTT DATA delivering consumer-lending microservices for Banco de Crédito del Perú (BCP) on Quarkus and Spring, with OAuth 2.0 / OIDC authentication and JWT-based entitlements. Advanced English; available for remote work fully aligned with US Central Time.
                        </p>
                    </div>
                    <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-400'>
                        <a href="mailto:harolrop14@gmail.com"><AiOutlineMail /></a>
                        <a href="https://www.linkedin.com/in/haroldrojasp/"><AiFillLinkedin /></a>
                        <a href="https://github.com/charold29"><AiFillGithub /></a>
                    </div>
                    <div className='my-image mx-auto bg-gradient-to-b from-emerald-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
                        <img src='/avatar.webp' alt='Harold Rojas Avatar' className='object-cover w-full h-full' />
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className='text-3xl py-1 dark:text-white'>Professional Experience</h3>
                        <ul className='list-disc list-inside'>
                            <li className='flex place-items-center space-x-5'>
                                <BsFillCheckCircleFill className='text-emerald-600 font-medium dark:text-emerald-400 flex-shrink-0' />
                                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-justify'>
                                <span className='text-emerald-600 dark:text-emerald-400'>Lead Engineer, NTT DATA Europe & Latam</span> (Oct 2024 – Present) — building consumer-lending microservices for Banco de Crédito del Perú (BCP), Peru&apos;s largest bank, on Quarkus and Spring: OAuth 2.0 / OIDC authentication with RS256 JWT entitlements, Jenkins CI/CD with canary releases and Fortify SAST gates, and Elasticsearch/Kibana and Grafana observability.
                                </p>
                            </li>
                            <li className='flex place-items-center space-x-5'>
                                <BsFillCheckCircleFill className='text-emerald-600 font-medium dark:text-emerald-400 flex-shrink-0' />
                                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-justify'>
                                <span className='text-emerald-600 dark:text-emerald-400'>Senior Developer, Whiz / 10Pearls</span> (Aug 2023 – Sep 2024) — owned the order and shipping microservices for Elektra&apos;s supplier portal end to end on AWS ECS with Docker and Kubernetes, event-driven flows with Kafka, and VTEX commerce platform integration.
                                </p>
                            </li>
                            <li className='flex place-items-center space-x-5'>
                                <BsFillCheckCircleFill className='text-emerald-600 font-medium dark:text-emerald-400 flex-shrink-0' />
                                <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-justify'>
                                <span className='text-emerald-600 dark:text-emerald-400'>Earlier Experience</span> (2020 – 2023) — Java/Spring Boot systems across payments (Redeban, Colombia), government (MINCETUR VUCE 2.0, Peru), healthcare (Hospital Belén de Trujillo), and enterprise modernization (NEKSYS Servicios Empresariales).
                                </p>
                            </li>
                        </ul>

                    </div>
                    <div className="lg:flex gap-10 justify-center">
                        <div className='text-center shadow-lg dark:shadow-emerald-900/40 p-10 rounded-xl my-10 bg-white dark:bg-gray-800 flex-1 border border-gray-100 dark:border-gray-700'>
                            <img src='/computer-dynamic-color.png' alt='Languages icon' className='w-32 mx-auto' />
                            <h4 className='py-4 font-bold text-emerald-600'>Languages & Frameworks</h4>
                            <p className='text-gray-800 dark:text-gray-300 py-1'>Java 8 / 11 / 17</p>
                            <p className='text-gray-800 dark:text-gray-300 py-1'>Spring Boot / Spring Security</p>
                            <p className='text-gray-800 dark:text-gray-300 py-1'>Quarkus</p>
                            <p className='text-gray-800 dark:text-gray-300 py-1'>OAuth 2.0 / OIDC / JWT</p>
                            <p className='text-gray-800 dark:text-gray-300 py-1'>TypeScript / Angular</p>
                            <p className='text-gray-800 dark:text-gray-300 py-1'>Node.js</p>
                        </div>
                        <div className='text-center shadow-lg dark:shadow-emerald-500 p-10 rounded-xl my-10 dark:bg-white flex-1'>
                            <img src='./bookmark-fav-dynamic-color.png' className='w-32 h-32 object-contain mx-auto'></img>
                            <h4 className='py-4 font-bold text-emerald-600'>Cloud, Data & DevOps</h4>
                            <p className='text-gray-800 py-1'>AWS (ECS / ECR / Secrets Manager)</p>
                            <p className='text-gray-800 py-1'>Azure / Azure DevOps</p>
                            <p className='text-gray-800 py-1'>Docker / Kubernetes</p>
                            <p className='text-gray-800 py-1'>Kafka</p>
                            <p className='text-gray-800 py-1'>PostgreSQL / MySQL / Oracle PL/SQL</p>
                            <p className='text-gray-800 py-1'>Jenkins / Git / Fortify</p>
                        </div>
                        <div className='text-center shadow-lg dark:shadow-emerald-500 p-10 rounded-xl my-10 dark:bg-white flex-1'>
                            <img src='./medal-dynamic-color.png' className='w-32 h-32 object-contain mx-auto'></img>
                            <h4 className='py-4 font-bold text-emerald-600'>Certifications</h4>
                            <p className='text-gray-800 underline py-1'><a href='https://learn.microsoft.com/en-us/users/charoldev/credentials/d7d70f4178a2d6c0'>Microsoft Certified: Azure Fundamentals (AZ-900) — 2025</a></p>
                            <p className='text-gray-800 underline py-1'><a href='https://learn.microsoft.com/es-es/users/charoldev/credentials/92854bca3ea7a319'>GitHub Foundations — 2026</a></p>
                            <p className='text-gray-800 underline py-1'><a href='https://verify.openedg.org/?id=fe2x.TDed.4rCW'>PCEP – Certified Entry-Level Python Programmer</a></p>
                        </div>
                    </div>
                </section>
                <footer className="text-gray-600 dark:bg-gray-900 py-4">
                    <div className="text-center dark:text-gray-200">
                        <p>© 2026 - All rights reserved</p>
                    </div>
                </footer>
            </main>
        </div>
    )
}
