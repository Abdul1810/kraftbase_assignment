"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card } from "./components/card"

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setScrollProgress)
    return () => unsubscribe()
  }, [scrollYProgress])

  const boxScale = useTransform(scrollYProgress, [0, 0.33, 0.67, 1], [1, 0.8, 0.8, 0.8])

  const boxColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.33, 0.67, 0.75, 1],
    ["#FFFFFF", "#FFFFFF", "#0061FF", "#0061FF", "#FFFFFF", "#FFFFFF"],
  )

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.33, 0.67, 0.75, 1],
    ["#0061FF", "#0061FF", "#FFFFFF", "#FFFFFF", "#0061FF", "#0061FF"],
  )

  const section1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0])
  const section2Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.67, 0.75], [0, 1, 1, 0])
  const section3Opacity = useTransform(scrollYProgress, [0.67, 0.75, 1], [0, 1, 1])

  const logoX = useTransform(scrollYProgress, [0.67, 0.85], [0, 0])
  const logoY = useTransform(scrollYProgress, [0.67, 0.85], [0, 0])
  const logoScale = useTransform(scrollYProgress, [0.67, 0.85], [1, 2])

  const gridLinesScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5])
  const gridLinesOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.15, 0.05])

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          className="w-[80vh] h-[80vh] max-w-[90vw] max-h-[90vw] flex flex-col justify-between p-8 pointer-events-auto"
          style={{
            backgroundColor: boxColor,
            scale: boxScale,
            opacity: useTransform(scrollYProgress, [0.67, 0.75], [1, 0]),
          }}
        >
          <motion.div className="flex flex-col justify-between h-full" style={{ opacity: section1Opacity }}>
            <motion.h1 className="text-2xl md:text-4xl font-bold leading-tight text-left" style={{ color: textColor }}>
              At Kraftbase, our Brand
              <br />
              Guidelines help us
              <br />
              infuse everything we
              <br />
              make with identity.
            </motion.h1>

            <motion.div>
              <DropboxLogo color={textColor} />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-0 flex flex-col justify-between p-8"
            style={{ opacity: section2Opacity }}
          >
            <motion.h1 className="text-xl md:text-3xl font-bold leading-tight text-left" style={{ color: textColor }}>
              From icons to illustration,
              <br />
              logos to language, this
              <br />
              collection is the foundation
              <br />
              for how Kraftbase looks, feels,
              <br />
              and sounds like Kraftbase.
            </motion.h1>

            <motion.div>
              <DropboxLogo color={textColor} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-20 pointer-events-none"
        style={{ opacity: section3Opacity }}
      >
        <div className="w-[95vw] h-[85vh] max-w-[400px] md:max-w-[1200px] pointer-events-auto">
          <div className="grid grid-cols-2 grid-rows-6 gap-2 h-full md:hidden">
            <Card
              className="bg-slate-700 p-4 flex flex-col justify-between text-white row-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-sm font-bold">Framework</h3>
              <div className="flex items-center justify-center flex-1">
                <svg width="60" height="45" viewBox="0 0 60 45" fill="none">
                  <circle cx="12" cy="12" r="3" fill="white" />
                  <circle cx="48" cy="22" r="3" fill="white" />
                  <circle cx="12" cy="33" r="3" fill="white" />
                  <line x1="12" y1="12" x2="48" y2="22" stroke="white" strokeWidth="2" />
                  <line x1="12" y1="33" x2="48" y2="22" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </Card>

            <Card
              className="bg-yellow-400 p-4 flex flex-col justify-between text-amber-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-sm font-bold">Voice & Tone</h3>
              <div className="flex items-center justify-center flex-1">
                <div className="text-4xl font-bold">"</div>
                <div className="text-4xl font-bold ml-4">"</div>
              </div>
            </Card>

            <Card
              className="bg-cyan-400 p-4 flex flex-col justify-between text-cyan-900 row-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-sm font-bold">Logo</h3>
              <div className="flex items-center justify-center flex-1">
                <div>
                  <DropboxLogo color="#0891b2" size={48} />
                </div>
              </div>
            </Card>

            <Card
              className="bg-orange-500 p-4 flex flex-col justify-between text-orange-900 row-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-sm font-bold">Typography</h3>
              <div className="flex items-center justify-center flex-1">
                <div className="text-5xl font-bold">Aa</div>
              </div>
            </Card>

            <Card
              className="bg-blue-500 p-2 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <motion.div
                style={{
                  x: logoX,
                  y: logoY,
                  scale: logoScale,
                }}
              >
                <DropboxLogo color="white" size={24} />
              </motion.div>
            </Card>

            <Card
              className="bg-lime-400 p-4 flex flex-col justify-between text-lime-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-sm font-bold">Iconography</h3>
              <div className="flex items-center justify-center flex-1">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="8" y="14" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </Card>

            <Card
              className="bg-orange-400 p-4 flex flex-col justify-between text-orange-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-sm font-bold">Color</h3>
              <div className="flex items-center justify-center flex-1 gap-1">
                <div className="w-6 h-6 bg-red-600 rounded-full color-item"></div>
                <div className="w-6 h-6 bg-red-800 rounded-full color-item"></div>
              </div>
            </Card>

            <Card
              className="bg-purple-600 p-4 flex flex-col justify-between text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-sm font-bold">Imagery</h3>
              <div className="flex items-center justify-center flex-1">
                <div className="w-16 h-12 bg-pink-300 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                </div>
              </div>
            </Card>

            <Card
              className="bg-purple-300 p-4 flex flex-col justify-between text-purple-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-sm font-bold">Motion</h3>
              <div className="flex items-center justify-center flex-1">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                  <circle cx="8" cy="22" r="2" fill="currentColor" />
                  <circle cx="32" cy="8" r="2" fill="currentColor" />
                  <path d="M8 22 Q20 5 32 8" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </Card>
          </div>

          <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-4 h-full">
            <Card
              className="bg-slate-700 p-6 flex flex-col justify-between text-white row-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-xl font-bold">Framework</h3>
              <div className="flex items-center justify-center flex-1">
                <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                  <circle cx="15" cy="15" r="4" fill="white" />
                  <circle cx="65" cy="30" r="4" fill="white" />
                  <circle cx="15" cy="45" r="4" fill="white" />
                  <line x1="15" y1="15" x2="65" y2="30" stroke="white" strokeWidth="2" />
                  <line x1="15" y1="45" x2="65" y2="30" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </Card>

            <Card
              className="bg-yellow-400 p-6 flex flex-col justify-between text-amber-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-xl font-bold">Voice & Tone</h3>
              <div className="flex items-center justify-center flex-1">
                <div className="text-6xl font-bold">"</div>
                <div className="text-6xl font-bold ml-8">"</div>
              </div>
            </Card>

            <Card
              className="bg-cyan-400 p-6 flex flex-col justify-between text-cyan-900 row-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-xl font-bold">Logo</h3>
              <div className="flex items-center justify-center flex-1">
                <div>
                  <DropboxLogo color="#0891b2" size={64} />
                </div>
              </div>
            </Card>

            <Card
              className="bg-orange-500 p-6 flex flex-col justify-between text-orange-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-xl font-bold">Typography</h3>
              <div className="flex items-center justify-center flex-1">
                <div className="text-6xl font-bold">Aa</div>
              </div>
            </Card>

            <Card
              className="bg-blue-500 p-4 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <motion.div
                style={{
                  x: logoX,
                  y: logoY,
                  scale: logoScale,
                }}
              >
                <DropboxLogo color="white" size={32} />
              </motion.div>
            </Card>

            <Card
              className="bg-lime-400 p-6 flex flex-col justify-between text-lime-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-xl font-bold">Iconography</h3>
              <div className="flex items-center justify-center flex-1">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="12" y="20" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="3" fill="none" />
                  <circle cx="24" cy="16" r="4" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </Card>

            <Card
              className="bg-purple-600 p-6 flex flex-col justify-between text-white col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-xl font-bold">Imagery</h3>
              <div className="flex items-center justify-center flex-1">
                <div className="w-24 h-16 bg-pink-300 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                </div>
              </div>
            </Card>

            <Card
              className="bg-orange-400 p-6 flex flex-col justify-between text-orange-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-xl font-bold">Color</h3>
              <div className="flex items-center justify-center flex-1 gap-2">
                <div className="w-8 h-8 bg-red-500 rounded-full color-item"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full color-item"></div>
              </div>
            </Card>

            <Card
              className="bg-purple-300 p-6 flex flex-col justify-between text-purple-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: scrollProgress > 0.75 ? 1 : 0, y: scrollProgress > 0.75 ? 0 : 20 }}
            >
              <h3 className="text-xl font-bold">Motion</h3>
              <div className="flex items-center justify-center flex-1">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                  <circle cx="10" cy="30" r="3" fill="currentColor" />
                  <circle cx="50" cy="10" r="3" fill="currentColor" />
                  <path d="M10 30 Q30 5 50 10" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>

      <div className="fixed inset-0 pointer-events-none">
        <GridLines
          scrollYProgress={scrollYProgress}
          gridLinesScale={gridLinesScale}
          gridLinesOpacity={gridLinesOpacity}
        />
      </div>

      <div ref={scrollRef} className="h-[300vh]">
        <div className="h-screen" />
        <div className="h-screen" />
        <div className="h-screen" />
      </div>
    </div>
  )
}

function GridLines({
  scrollYProgress,
  gridLinesScale,
  gridLinesOpacity,
}: { scrollYProgress: any; gridLinesScale: any; gridLinesOpacity: any }) {
  const gridColumns = 16
  const gridRows = 12

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
          style={{ left: `${(i / gridColumns) * 100}%` }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
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
          style={{ top: `${(i / gridRows) * 100}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
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

function DropboxLogo({ color, size = 48 }: { color: any; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.0002 9.33334L0.666687 18L14.0002 26.6667L27.3335 18L14.0002 9.33334Z"
        fill="currentColor"
        style={{ color }}
      />
      <path
        d="M14.0002 38.6667L0.666687 30L14.0002 21.3333L27.3335 30L14.0002 38.6667Z"
        fill="currentColor"
        style={{ color }}
      />
      <path
        d="M34.0002 9.33334L47.3335 18L34.0002 26.6667L20.6669 18L34.0002 9.33334Z"
        fill="currentColor"
        style={{ color }}
      />
      <path
        d="M34.0002 38.6667L47.3335 30L34.0002 21.3333L20.6669 30L34.0002 38.6667Z"
        fill="currentColor"
        style={{ color }}
      />
    </svg>
  )
}
