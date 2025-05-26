import {motion, MotionValue, useTransform} from "framer-motion";

export default function GridLines({scrollYProgress}: { scrollYProgress: MotionValue<number> }) {
    const gridColumns = 16;
    const gridRows = 12;

    const gridLinesScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);
    const gridLinesOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.15, 0.05]);

    return (
        <motion.div
            className="absolute -inset-[50%]"
            style={{
                scale: gridLinesScale,
                opacity: gridLinesOpacity,
            }}
        >
            {[...Array(gridColumns + 1)].map((_, i) => (
                <motion.div
                    key={`v-${i}`}
                    className="absolute top-0 bottom-0 w-[1px] bg-blue-500"
                    style={{left: `${(i / gridColumns) * 100}%`}}
                    initial={{scaleY: 0}}
                    animate={{scaleY: 1}}
                    transition={{
                        duration: 1.2,
                        delay: 0.05 * i,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />
            ))}

            {[...Array(gridRows + 1)].map((_, i) => (
                <motion.div
                    key={`h-${i}`}
                    className="absolute left-0 right-0 h-[1px] bg-blue-500"
                    style={{top: `${(i / gridRows) * 100}%`}}
                    initial={{scaleX: 0}}
                    animate={{scaleX: 1}}
                    transition={{
                        duration: 1.2,
                        delay: 0.05 * i + 0.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />
            ))}
        </motion.div>
    )
}