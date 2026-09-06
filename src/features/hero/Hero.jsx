import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function Hero() {
  return (
    <section className="min-h-screen">
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-emerald-600 font-medium dark:text-emerald-400 md:text-6xl">
          Harold Rojas
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Senior Java Backend Engineer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto">
          Java backend engineer with 6+ years building mission-critical systems for banking, fintech, retail, and government. Currently at NTT DATA delivering consumer-lending microservices for Banco de Crédito del Perú (BCP) on Quarkus and Spring, with OAuth 2.0 / OIDC authentication and JWT-based entitlements. Advanced English; available for remote work fully aligned with US Central Time.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-400">
        <a href="mailto:harolrop14@gmail.com"><AiOutlineMail /></a>
        <a href="https://www.linkedin.com/in/haroldrojasp/"><AiFillLinkedin /></a>
        <a href="https://github.com/charold29"><AiFillGithub /></a>
      </div>
      <div className="my-image mx-auto bg-gradient-to-b from-emerald-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
        <img src="/avatar.webp" alt="Harold Rojas Avatar" className="object-cover w-full h-full" />
      </div>
    </section>
  );
}