"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { platformFeatures } from "@/data/platform"
import { MonitorPlay, Route, Users, Sparkles, FlaskConical, Award } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  "monitor-play": <MonitorPlay size={48} strokeWidth={1} />,
  route: <Route size={48} strokeWidth={1} />,
  users: <Users size={48} strokeWidth={1} />,
  sparkles: <Sparkles size={48} strokeWidth={1} />,
  "flask-conical": <FlaskConical size={48} strokeWidth={1} />,
  award: <Award size={48} strokeWidth={1} />,
}

// Map platformFeatures to Card data
const cardData = platformFeatures.map((feature, index) => ({
  id: index,
  title: feature.title,
  description: feature.description,
  icon: feature.icon,
  // We can use an abstract tech image for the background or just a nice gradient
  image: `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3`,
}))

// We'll use 6 features, so the indices are 0 to 5.
const initialCards = [
  { id: 0, contentIndex: 0 },
  { id: 1, contentIndex: 1 },
  { id: 2, contentIndex: 2 },
]

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
  opacity: 0,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
  opacity: 0,
}

function CardContent({ contentIndex }: { contentIndex: number }) {
  const data = cardData[contentIndex]
  const icon = data.icon ? iconMap[data.icon] : null

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
        {/* Usando gradiente bonito em vez de placeholder para ficar premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-neutral-900 to-indigo-500/20 opacity-50" />
        <div className="relative z-10 text-white/50">
          {icon}
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-semibold text-white">{data.title}</span>
          <span className="text-sm text-white/60">{data.description}</span>
        </div>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: { id: number; contentIndex: number }
  index: number
  isAnimating: boolean
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale, opacity: 1 }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[300px] w-[324px] items-center justify-center overflow-hidden rounded-t-2xl border-x border-t border-white/10 bg-neutral-950 p-2 shadow-2xl will-change-transform sm:w-[420px]"
    >
      <CardContent contentIndex={card.contentIndex} />
    </motion.div>
  )
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(3)

  const handleAnimate = () => {
    if (isAnimating) return
    setIsAnimating(true)

    // Move to the next feature in the array (looping)
    const nextContentIndex = (cards[2].contentIndex + 1) % cardData.length

    setCards([...cards.slice(1), { id: nextId, contentIndex: nextContentIndex }])
    setNextId((prev) => prev + 1)
    setTimeout(() => setIsAnimating(false), 1000) // matches transition duration
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative h-[360px] w-full overflow-hidden sm:w-[440px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} isAnimating={isAnimating} />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-white/10 py-4">
        <button
          onClick={handleAnimate}
          className="flex h-10 cursor-pointer select-none items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-[0.98]"
        >
          Próximo
        </button>
      </div>
    </div>
  )
}
