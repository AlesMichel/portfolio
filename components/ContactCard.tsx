import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactCard() {
    return (
        <div className="rounded-2xl p-6 shadow-2xl border bg-white dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-4">
            <div>
                <div className="text-sm opacity-70">Available for freelance / looking for part-time job</div>
                <div className="text-lg font-semibold">Open to new projects</div>
            </div>

            <div className="flex gap-2 flex-wrap text-xs">
                <span className="border px-2 py-1 rounded-md">Bootstrap</span>
                <span className="border px-2 py-1 rounded-md">PHP</span>
            </div>

            <div>
                <a
                    download
                    href="/assets/cv/cs/CV - Aleš Michel (CZ).pdf"
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-md border border-white text-white bg-black dark:bg-white dark:text-black hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                    📄 Download CV
                </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
                <a
                    href="mailto:youremail@example.com"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    <FaEnvelope /> Mail
                </a>

                <a
                    href="https://github.com/yourgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    <FaGithub /> GitHub
                </a>

                <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    <FaLinkedin /> LinkedIn
                </a>
            </div>
        </div>
    );
}
