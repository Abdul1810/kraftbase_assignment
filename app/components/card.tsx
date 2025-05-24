"use client"

import type React from "react"
import { motion } from "framer-motion"

interface CardProps {
  className?: string
  children: React.ReactNode
  initial?: any
  animate?: any
}

export const Card: React.FC<CardProps> = ({ className = "", children, initial, animate }) => {
  return (
    <motion.div className={`card-hover-animation ${className}`} initial={initial} animate={animate}>
      {children}
    </motion.div>
  )
}
