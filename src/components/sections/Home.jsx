import { RevealOnScroll } from "../RevealOnScroll"
import pic from '../../assets/img/pic.jpg'

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-1xl font-bold mb-5 bg-gradient-to-r from-blue-100 to-blue-600 bg-clip-text text-transparent leading-right">
                        Hi, This is my Portfolio
                    </h1>

                    <p className="text-lg mb-8 max-w-lg mx-auto">
                        Hello! My name is Kamol Boonma.
                        I am a student in the Electronics Technology (ECT)
                        program at King Mongkut's University of Technology North Bangkok (KMUTNB)

                    </p>

                    <div className="flex justify-center mb-8">
                        <img src={pic} alt="pic" className="w-50 h-auto rounded-full border-4 border-blue-700" />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden
                                                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-blue-500 px-6 py-3 rounded font-medium transition relative duration-200
                                                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                            Contact Me
                        </a>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    )
}