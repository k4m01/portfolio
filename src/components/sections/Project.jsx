import { RevealOnScroll } from "../RevealOnScroll"
export const Project = () => {

    const useDMS = [
        "Python",
        "React.js",
        "node.js",
        "Firebase",
        "Rasberry Pi"

    ]

    const useSoilless = [
        "C++",
        "Esp32",
    ]

    const useBooking = [
        "HTML",
        "PHP",
        "Javascript",
        "CSS",
        "MySQL"
    ]

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl flex justify-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                            <h3 className="text-xl font-bold mb-2">DMS - Driver Monitering Systeam</h3>
                            <p className="text-gray-400 mb-4">
                                <ul className="list-disc list-inside text-gray-10 space-Y-2">
                                    <li>
                                        system that uses AI to detect drowsiness, smoking, using the phone while driving, and
                                        picking up water bottles to drink. to monitor behavior using image processing techniques
                                    </li>
                                    <li>
                                        Develop real-time alert systems to notify drivers in case of unsafe
                                    </li>
                                </ul>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {useDMS.map((skill, key) => {
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
                            <div className="flex justify-between items-center" >
                                <a href="https://github.com/k4m01/driver_monitoring_system" target="_blank" rel="noopener noreferrer" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ⮕</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                            <h3 className="text-xl font-bold mb-2">Soilless Vegetable Growing Control Systems</h3>
                            <p className="text-gray-400 mb-4">
                                <ul className="list-disc list-inside text-gray-10 space-Y-2">
                                    <li>
                                        This system is a hydroponic farming system using ESP32 and C++ to monitor and control pH levels in nutrient solutions. The system automatically adjusts pH levels and sends real-time alerts via LINE Notify when abnormalities occur. It helps reduce farmers' workload and enhances cultivation efficiency 🌱
                                    </li>
                                    <li>
                                        real-time alert systems to notify 
                                    </li>
                                </ul>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {useSoilless.map((skill, key) => {
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
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ⮕</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
                            <h3 className="text-xl font-bold mb-2">Booking System Web App</h3>
                            <p className="text-gray-400 mb-4">
                                <ul className="list-disc list-inside text-gray-10 space--2">
                                    <li>
                                        This Web App is an online booking platform developed using HTML, PHP, JavaScript, CSS, and MySQL. It allows users to book services efficiently while managing user data in a database. The system features real-time notifications, booking management, and a user-friendly interface, enhancing accessibility and convenience 📅
                                    </li>
                      
                                </ul>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {useBooking.map((skill, key) => {
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
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ⮕</a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
} 