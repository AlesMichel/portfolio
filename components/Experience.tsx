export default function Experience() {
    return (
        <section id="experience" className="mt-16">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="mt-6 space-y-4">
                <div className="p-5 rounded-lg border dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium">PHP developer • ISSA Czech</div>
                            <div className="text-sm opacity-70">2022 — 2025 • Ostrava</div>
                        </div>
                    </div>
                    <div className="mt-3 text-sm opacity-80">
                        Developing websites with CMS backend, later developing CMS
                    </div>
                </div>

                <div className="p-5 rounded-lg border dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium">Freelancer</div>
                            <div className="text-sm opacity-70">2023 — presence</div>
                        </div>
                    </div>
                    <div className="mt-3 text-sm opacity-80">
                        Developing fullstack websites using my own PHP CMS, side quests on webtrh.cz
                    </div>
                </div>
            </div>
        </section>
    );
}
