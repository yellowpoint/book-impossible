"use client";

import { motion } from "framer-motion";
import { Brain, Flame, Lightbulb, Target, Download } from "lucide-react";
import { VisualNotes } from "@/components/visual-notes";
import { Button } from "@/components/ui/button";
const abilities = [
  {
    icon: Target,
    name: "动机",
    description: "让你投入游戏",
    value: 80,
    angle: 0,
    delay: 0,
  },
  {
    icon: Brain,
    name: "学习力",
    description: "帮助持续参与",
    value: 85,
    angle: 90,
    delay: 0.2,
  },
  {
    icon: Lightbulb,
    name: "创造力",
    description: "指明前行方向",
    value: 75,
    angle: 180,
    delay: 0.4,
  },
  {
    icon: Flame,
    name: "心流",
    description: "帮助火力全开",
    value: 90,
    angle: 270,
    delay: 0.6,
  },
];

// 计算雷达图的点坐标
const getPoint = (angle, value, size) => {
  const radian = ((angle - 90) * Math.PI) / 180;
  const radius = (value / 100) * (size / 2);
  const x = Math.cos(radian) * radius + size;
  const y = Math.sin(radian) * radius + size;
  return { x, y };
};

export default function OverviewPage() {
  const size = 250; // 调整雷达图的大小从150到250
  const points = abilities.map((ability) =>
    getPoint(ability.angle, ability.value, size),
  );
  const pathD = `M ${points?.[0]?.x} ${points?.[0]?.y} ${points
    .map((point) => `L ${point.x} ${point.y}`)
    .join(" ")} Z`;

  return (
    <div className="flex flex-1 flex-col gap-6 p-8">
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="text-xl font-semibold mb-4">视觉笔记</h2>
        <VisualNotes />
      </motion.div> */}
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        能力关系概览
      </motion.h1>

      <div className="relative mx-auto flex  w-full max-w-2xl items-center justify-center">
        <div className="relative h-[500px] w-[500px]">
          {/* 调整 SVG 尺寸 */}
          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            className="absolute inset-0"
          >
            {/* 背景圆圈 */}
            {[1, 2, 3, 4].map((level) => (
              <motion.circle
                key={level}
                cx={250}
                cy={250}
                r={(200 * level) / 4}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.1}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 * level, duration: 0.5 }}
              />
            ))}

            {/* 能力轴线 */}
            {abilities.map((ability) => {
              const endPoint = getPoint(ability.angle, 100, size);
              return (
                <motion.line
                  key={ability.name}
                  x1={250}
                  y1={250}
                  x2={endPoint.x}
                  y2={endPoint.y}
                  stroke="currentColor"
                  strokeOpacity={0.2}
                  strokeWidth={1}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: ability.delay, duration: 0.5 }}
                />
              );
            })}

            {/* 能力多边形 */}
            <motion.path
              d={pathD}
              fill="currentColor"
              fillOpacity={0.1}
              stroke="currentColor"
              strokeWidth={2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            />

            {/* 能力点和标签 */}
            {abilities.map((ability) => {
              const point = getPoint(ability.angle, ability.value, size);
              const labelOffset = 60;
              const labelPoint = getPoint(ability.angle, 130, size);
              const Icon = ability.icon;

              return (
                <motion.g key={ability.name}>
                  {/* 能力点 */}
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r={6}
                    fill="currentColor"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: ability.delay + 1, duration: 0.3 }}
                  />

                  {/* 能力标签 */}
                  <motion.foreignObject
                    x={labelPoint.x - labelOffset}
                    y={labelPoint.y - labelOffset}
                    width={labelOffset * 2}
                    height={labelOffset * 2}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: ability.delay + 1.2, duration: 0.3 }}
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{ability.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {ability.description}
                        </div>
                      </div>
                    </div>
                  </motion.foreignObject>
                </motion.g>
              );
            })}
          </svg>
        </div>
      </div>

      <motion.div
        className="mx-auto mt-8 max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <p className="text-muted-foreground">
          这四种能力形成一个良性循环：
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            动机驱动参与，
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            学习力保持进步，
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
          >
            创造力开拓方向，
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          >
            心流带来突破。
          </motion.span>
          <motion.span
            className="mt-2 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            它们相互促进、相辅相成，共同推动个人的持续成长与发展。
          </motion.span>
        </p>
      </motion.div>

      <motion.div
        className="mx-auto mt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
      >
        <Button
          onClick={() => {
            // 这里添加下载epub的逻辑
            window.location.href = "/跨越不可能 ([美]史蒂芬·科特勒) .epub";
          }}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          下载完整书籍 (EPUB)
        </Button>
      </motion.div>
    </div>
  );
}
