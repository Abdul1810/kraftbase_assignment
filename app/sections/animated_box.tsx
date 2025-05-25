import { motion, MotionValue, useTransform, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface FirstViewProps {
    scrollYProgress: MotionValue<number>;
}

export default function AnimatedBox({ scrollYProgress }: FirstViewProps) {
    const section1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const section2Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.67, 0.75], [0, 1, 1, 0]);

    const boxScale = useTransform(scrollYProgress, [0, 0.33, 0.67, 1], [1, 0.8, 0.8, 0.8]);

    const boxColor = useTransform(
        scrollYProgress,
        [0, 0.25, 0.33, 0.67, 0.75, 1],
        ["#FFFFFF", "#FFFFFF", "#0061FF", "#0061FF", "#FFFFFF", "#FFFFFF"],
    );

    const textColor = useTransform(
        scrollYProgress,
        [0, 0.25, 0.33, 0.67, 0.75, 1],
        ["#0061FF", "#0061FF", "#FFFFFF", "#FFFFFF", "#0061FF", "#0061FF"],
    );

    // 🔥 Logo animation controller
    const logoControls = useAnimation();

    useEffect(() => {
        logoControls.start({
            x: "0%",
            y: "0%",
            transition: {
                duration: 1.2,
                ease: "easeOut",
            },
        });
    }, [logoControls]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10">
            <motion.div
                className="w-[80vh] h-[80vh] max-w-[90vw] max-h-[90vw] flex flex-col justify-between p-8 border-2 border-blue-500/30"
                style={{
                    backgroundColor: boxColor,
                    scale: boxScale,
                    opacity: useTransform(scrollYProgress, [0.67, 0.75], [1, 0]),
                }}
            >
                <motion.div className="flex flex-col justify-between h-full" style={{ opacity: section1Opacity }}>
                    <motion.h1
                        className="text-2xl md:text-4xl font-bold leading-tight text-left"
                        style={{ color: textColor }}
                    >
                        At Kraftbase, our Brand
                        <br />
                        helps clients to
                        <br />
                        craft their digital
                        <br />
                        experience exceptionally.
                    </motion.h1>

                    {/* 🔄 Logo animates from center to bottom-left on load */}
                    <motion.div
                        className="relative w-24 h-24"
                        initial={{ x: "300%", y: "-250%" }}
                        animate={logoControls}
                    >
                        <motion.img
                            className="w-24 h-24"
                            src="/logo.png"
                            alt="Kraftbase Logo"
                            style={{ color: textColor }}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute inset-0 flex flex-col justify-between p-8"
                    style={{ opacity: section2Opacity }}
                >
                    <motion.h1
                        className="text-xl md:text-3xl font-bold leading-tight text-left"
                        style={{ color: textColor }}
                    >
                        From design to development,
                        <br />
                        SEO to marketing, this
                        <br />
                        collection is the foundation
                        <br />
                        for how Kraftbase works,
                        <br />
                        and sounds like Real Kraft.
                    </motion.h1>

                    <motion.div>
                        <img src="/logo.png" alt="Kraftbase Logo" className="w-24 h-24" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
