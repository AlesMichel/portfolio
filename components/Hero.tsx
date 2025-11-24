import ContactCard from "@/components/ContactCard";

export default function Hero() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
            <div>
                <p className="text-indigo-500 font-medium">Hi — I build fast websites</p>
                <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                    Typical PhpStorm enthusiast & on-scroll animation enjoyer.
                </h1>
                <p className="mt-4 text-lg opacity-80">
                    My lifelong mission: hitting 100/100 on Lighthouse without sacrificing a single pixel.
                </p>

                <div className="mt-6 flex gap-3 flex-wrap">
                    <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:opacity-90">See projects</a>
                    <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg">Hire me</a>
                </div>
            </div>
          <ContactCard/>
        </section>
    );
}
