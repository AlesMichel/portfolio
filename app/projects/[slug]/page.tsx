'use client'

import { useParams } from 'next/navigation';
import { projectData } from '@/components/data/projects';

export default function ProjectDetailClient() {
    const params = useParams();
    const slug = params?.slug;

    const project = projectData.find((p) => p.slug === slug);

    if (!project) return <div>Project not found</div>;

    return <div>{project.title}</div>;
}
