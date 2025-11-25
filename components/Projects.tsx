'use client'
import { projectData } from "@/components/data/projects";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ProjectsSlider() {
    const swiperRef = useRef<HTMLDivElement>(null);


    // Nastavení stejné výšky pro všechny slidery
    useEffect(() => {
        if (!swiperRef.current) return;
        const slides = swiperRef.current.querySelectorAll('.swiper-slide > div');
        let maxHeight = 0;
        slides.forEach(slide => {
            maxHeight = Math.max(maxHeight, (slide as HTMLElement).offsetHeight) + 10;
        });
        slides.forEach(slide => {
            (slide as HTMLElement).style.height = `${maxHeight}px`;
        });
    }, [projectData]);

    return (
        <section id="projects" className="mt-16">
            <div className="flex items-end justify-between">
                <h2 className="text-2xl font-semibold">Selected projects</h2>
                <div className="text-sm opacity-70">Most recent work</div>
            </div>

            <div className="mt-6" ref={swiperRef}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={false}
                    pagination={{ clickable: true }}
                    autoplay={false}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    <>
                    {projectData.map((project, i) => (
                        <SwiperSlide key={i}>
                            <Link
                                href={`/projects/${project.slug}`}
                                className="block p-6 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] flex flex-col h-full no-underline"
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-xl"
                                />
                                <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
                                <div className="mt-2 flex gap-2 flex-wrap text-xs">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="border px-2 py-1 rounded-md">{tag}</span>
                                    ))}
                                </div>
                                <p className="mt-3 text-sm opacity-80 flex-1">{project.desc}</p>
                            </Link>
                        </SwiperSlide>

                    ))}
                    </>
                </Swiper>
            </div>
        </section>
    );
}
