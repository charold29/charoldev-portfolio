import CertificationItem from './CertificationItem';
import { CERTIFICATIONS } from '../../data/portfolioData';

export default function Certifications() {
  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto text-center shadow-lg dark:shadow-2xl dark:shadow-emerald-500/20 p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all">
        <img
          src="/medal-dynamic-color.png"
          alt="Medal icon"
          className="w-28 h-28 object-contain mx-auto"
        />
        <h3 className="py-4 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
          Certifications
        </h3>

        <div className="space-y-3">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationItem key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}