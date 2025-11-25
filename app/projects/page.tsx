'use client'

import { projectData } from "@/components/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <section className="max-w-6xl mx-auto mt-16 px-4">
            <div className="flex items-end justify-between mb-8">
                <h2 className="text-3xl font-bold">All Projects</h2>
                <div className="text-sm opacity-70">Explore my work</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.map((project, i) => (
                    <Link
                        key={i}
                        href={`/projects/${project.slug}`}
                        className="block p-6 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl flex flex-col h-full no-underline"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
                        <div className="mt-2 flex gap-2 flex-wrap text-xs">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="border px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mt-3 text-sm opacity-80 flex-1">{project.desc}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
