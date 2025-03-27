import { RevealOnScroll } from "../RevealOnScroll";
import resume from "../../assets/resume.pdf";
import transcipt from "../../assets/transcript.pdf";

export const About = () => {

    const frontend = [
        "React.js",
        "Tailwind",
        "Javascript",
        "HTML",
        "CSS"
    ];

    const backend = [
        "Firebase",
        "MySQL",
        "Express",
        "PHP",
        "Node.js",
        "Python"
    ]


    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl flex justify-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Hi there! I'm a Machine Learning and Web Application Developer passionate about building intelligent systems that can learn and adapt from data. My expertise lies in developing AI-powered solutions, including object detection, predictive analytics, and real-time data processing.
                        </p>
                        <div className=" flex items-center justify-center mb-6 space-x-3" >
                            <a href={resume} target="_blank" rel="noopener noreferrer " className="bg-blue-600 text-white px-4 py-2 rounded font-medium transition relative overflow-hidden
                                                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                
                                    View CV

                            </a>
                            <a href={transcipt} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded font-medium transition relative overflow-hidden
                                                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                View Transcipt
                            </a>
                        </div>


                        <h1 className="text-2xl flex justify-center font-bold">My skills</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="rounded-2xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontend.map((skill, key) => {
                                        return (
                                            <span
                                                key={key}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {skill}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="rounded-2xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backend.map((skill, key) => {
                                        return (
                                            <span
                                                key={key}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {skill}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="p-6 rounded border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-10 space-y-2">
                                <li>
                                    <strong >Computer Electronics Technology</strong> - King Mongkut's Univerity of Technology North Bangkok. (2023-2025)
                                </li>
                                <li>
                                    <strong >Electronics Industrial</strong> - Samutsongkhram Technical College. (2017-2023)
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                            <ul className="list-disc list-inside text-gray-10 space-y-2">
                                <li>
                                    <strong >Internship</strong> - Drone Academy Thailand ( 2025 )<br/>
                                    Position &nbsp;: &nbsp;AI Engineer Intern period ( 03/2025 - 07/2025 )<br/>
                                </li>
                                <li>
                                    <strong >Internship</strong> - NT Fiber Samut Songkhram ( 2021 )<br/>
                                    Position &nbsp;: &nbsp;Network Engineer Intern period ( 04/2021 - 07/2021 )<br/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
} 