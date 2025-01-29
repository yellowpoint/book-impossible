"use client"

import { motion } from "framer-motion"
import { Gift, Sun, Star, Moon } from "lucide-react"
import { useCallback } from "react"
import { triggerFirework } from "./firework"

export function SpringFestivalDecoration() {
  const onClickFirework = useCallback(() => {
    triggerFirework()
  }, [])

  return (
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group-data-[collapsible=icon]:hidden">
      {/* 祝福语 */}
      <motion.div
        className="relative cursor-pointer select-none"
        onClick={onClickFirework}
      >
        <motion.div
          className="whitespace-nowrap text-sm font-medium text-red-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          蛇年大吉
        </motion.div>
      </motion.div>

      {/* 装饰图标 */}
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <Gift className="h-4 w-4 text-red-500" />
        </motion.div>
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -2, 2, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Sun className="h-4 w-4 text-yellow-500" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
        >
          <Star className="h-4 w-4 text-yellow-500" />
        </motion.div>
        <motion.div
          animate={{
            rotate: [0, -10, 10, 0],
            y: [0, 2, -2, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        >
          <Moon className="h-4 w-4 text-blue-500" />
        </motion.div>
      </div>
    </div>
  )
} 