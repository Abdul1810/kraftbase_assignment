"use client"

import type React from "react"
import {motion, MotionValue} from "framer-motion"

interface CardProps {
    className?: string
    children: React.ReactNode
    scrollProgress: number
}

export const Card: React.FC<CardProps> = ({className = "", children, scrollProgress}) => {
    return (
        <motion.div
            className={`card-hover-animation cursor-pointer ${className}`}
            initial={{opacity: 0, y: 20, scale: 1.1}}
            animate={{
                opacity: scrollProgress > 0.75 ? 1 : 0,
                y: scrollProgress > 0.75 ? 0 : 20,
                scale: scrollProgress > 0.75 ? 1 : 1.1
            }}
            transition={{duration: 0.5, ease: "easeOut"}}
        >
            {children}
        </motion.div>
    )
}
