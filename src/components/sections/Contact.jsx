import { useState } from "react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaInstagram, } from "react-icons/fa";

export const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    return (
        <section id="contact" className="flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="min-w-full mx-auto px-4 items-center grid grid-cols-1 md:grid-cols-2 gap-9">
                    <div className="max-w-md">
                        <h1 className="text-xl font-bold mb-3">Contatct me for Collaboration</h1>
                        <p className="text-gray-300 mb-15">
                            Reach out today to discuss your project needs and start collaborating on something amazing!
                        </p>
                        <div className=" flex space-x-4">
                            <div className="rounded-xl p-2 border-white/10 border">
                                <a href="https://github.com/k4m01" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaGithub/></a>
                            </div>
                            <div className="rounded-xl p-2 border-white/10 border">
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaInstagram/></a>
                            </div>  
                        </div>
                    </div>

                    <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg ">
                        <form  className="flex flex-col space-y-4">
                            <input type="text" name="name" placeholder="Name" className="p-3 bg-gray-700 rounded text-white w-full" />
                            <input type="email" name="email" placeholder="Email" className="p-3 bg-gray-700 rounded text-white w-full" />
                            <textarea name="message" placeholder="Message" className="p-3 bg-gray-700 rounded text-white h-32 w-full" />
                            <button type="submit" disabled={loading} className="p-3 bg-blue-500 hover:bg-blue-600 rounded transition text-white w-full">
                                {loading ? "Sending..." : "Submit"}
                            </button>
                            {success && <p className="text-center mt-2 text-green-400">{success}</p>}
                        </form>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
