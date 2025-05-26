"use client"
import {useRef, useEffect, useState} from "react"
import {motion, useScroll, useTransform} from "framer-motion"
import {Card} from "@/src/components/card"
import GridLines from "@/src/components/grid_lines";
import AnimatedBox from "@/src/sections/animated_box";

export default function Page() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const {scrollYProgress} = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });
    const section3Opacity = useTransform(scrollYProgress, [0.67, 0.75, 1], [0, 1, 1]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", setScrollProgress);
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div className="relative">
            <AnimatedBox scrollYProgress={scrollYProgress}/>
            <motion.div
                className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-20 p-2"
                style={{opacity: section3Opacity}}
            >
                <div className="w-screen h-screen">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 grid-rows-6 md:grid-rows-3 gap-2 md:gap-4 h-full p-2">
                        <Card className="bg-slate-700 p-4 md:p-6 flex flex-col justify-between text-white row-span-2"
                              scrollProgress={scrollProgress}>
                            <h3 className="text-sm md:text-xl font-bold">Framework</h3>
                            <div className="flex items-center justify-center flex-1">
                                <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                                    <circle cx="15" cy="15" r="4" fill="white"/>
                                    <circle cx="65" cy="30" r="4" fill="white"/>
                                    <circle cx="15" cy="45" r="4" fill="white"/>
                                    <line x1="15" y1="15" x2="65" y2="30" stroke="white" strokeWidth="2"/>
                                    <line x1="15" y1="45" x2="65" y2="30" stroke="white" strokeWidth="2"/>
                                </svg>
                            </div>
                        </Card>

                        <Card
                            className="bg-yellow-400 p-4 md:p-6 flex flex-col justify-between text-amber-800"
                            scrollProgress={scrollProgress}
                        >
                            <h3 className="text-sm md:text-xl font-bold">Voice & Tone</h3>
                            <div className="flex items-center justify-center flex-1">
                                <div className="text-4xl md:text-6xl font-bold">❝</div>
                                <div className="text-4xl md:text-6xl font-bold ml-4 md:ml-8">❞</div>
                            </div>
                        </Card>

                        <Card
                            className="bg-orange-500 p-4 md:p-6 flex flex-col justify-between text-orange-900 row-span-2 md:row-span-1"
                            scrollProgress={scrollProgress}
                        >
                            <h3 className="text-sm md:text-xl font-bold">Typography</h3>
                            <div className="flex items-center justify-center flex-1">
                                <div className="text-5xl md:text-6xl font-bold">Aa</div>
                            </div>
                        </Card>

                        <Card
                            className="bg-cyan-400 p-4 md:p-6 flex flex-col justify-between text-cyan-900 row-span-2"
                            scrollProgress={scrollProgress}
                        >
                            <h3 className="text-sm md:text-xl font-bold">Logo</h3>
                            <div className="flex items-center justify-center flex-1">
                                <img src="/logo.png" alt="Kraftbase Logo" className="w-12 h-12 md:w-24 md:h-24"/>
                            </div>
                        </Card>

                        <Card
                            className="bg-blue-500 p-2 flex items-center justify-center"
                            scrollProgress={scrollProgress}
                        >
                            <img src="/logo.png" alt="Kraftbase Logo" className="w-12 h-12  "/>
                        </Card>

                        <Card
                            className="bg-lime-400 p-4 md:p-6 flex flex-col justify-between text-lime-800"
                            scrollProgress={scrollProgress}
                        >
                            <h3 className="text-sm md:text-xl font-bold">Iconography</h3>
                            <div className="flex items-center justify-center flex-1">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <rect x="12" y="20" width="24" height="16" rx="2" stroke="currentColor"
                                          strokeWidth="3"/>
                                    <circle cx="24" cy="16" r="4" stroke="currentColor" strokeWidth="3"/>
                                </svg>
                            </div>
                        </Card>

                        <Card
                            className="bg-purple-600 p-4 md:p-6 flex flex-col justify-between text-white col-span-1 md:col-span-2"
                            scrollProgress={scrollProgress}
                        >
                            <h3 className="text-sm md:text-xl font-bold">Imagery</h3>
                            <div className="flex items-center justify-center flex-1">
                                <div
                                    className="w-16 h-12 md:w-24 md:h-16 bg-pink-300 rounded flex items-center justify-center">
                                    <div className="w-3 h-3 md:w-4 md:h-4 bg-pink-500 rounded-full"></div>
                                </div>
                            </div>
                        </Card>

                        <Card
                            className="bg-orange-400 p-4 md:p-6 flex flex-col justify-between text-orange-900"
                            scrollProgress={scrollProgress}
                        >
                            <h3 className="text-sm md:text-xl font-bold">Color</h3>
                            <div className="flex items-center justify-center flex-1 gap-1 md:gap-2">
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full"></div>
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-red-800 rounded-full"></div>
                            </div>
                        </Card>

                        <Card
                            className="bg-purple-300 p-4 md:p-6 flex flex-col justify-between text-purple-800"
                            scrollProgress={scrollProgress}
                        >
                            <h3 className="text-sm md:text-xl font-bold">Motion</h3>
                            <div className="flex items-center justify-center flex-1">
                                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                                    <circle cx="10" cy="30" r="3" fill="currentColor"/>
                                    <circle cx="50" cy="10" r="3" fill="currentColor"/>
                                    <path d="M10 30 Q30 5 50 10" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                        </Card>
                    </div>
                </div>
            </motion.div>

            <div className="fixed inset-0">
                <GridLines scrollYProgress={scrollYProgress}/>
            </div>
            <div ref={scrollRef} className="h-[300vh]">
                <div className="h-screen"/>
                <div className="h-screen"/>
                <div className="h-screen"/>
            </div>
        </div>
    )
}
