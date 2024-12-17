"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Compass,
  Focus,
  Gauge,
  Leaf,
  Lightbulb,
  Mountain,
  Recycle,
  Target,
  Timer,
  Zap,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const flowHistory = [
  {
    year: "1883",
    title: "尼采提出超人计划",
    description: "第一位高效能哲学家尼采提出超人计划",
    icon: Lightbulb,
    color: "bg-yellow-500",
  },
  {
    year: "1970",
    title: "心流概念诞生",
    description: `心理学家米哈里·契克森米哈赖创造了"心流"这个词`,
    icon: Brain,
    color: "bg-blue-500",
  },
  {
    year: "2008",
    title: "大脑扫描研究",
    description: "发现心流状态下前额叶功能降低，而非提升大脑利用率",
    icon: Brain,
    color: "bg-purple-500",
  },
  {
    year: "2015",
    title: "脑电波研究",
    description: "发现心流状态下脑电波从β波转换到α波和θ波",
    icon: Zap,
    color: "bg-green-500",
  },
  {
    year: "2007-2020",
    title: "神经化学研究",
    description: "发现内啡肽、多巴胺、去甲肾上腺素等在心流中的作用",
    icon: Gauge,
    color: "bg-red-500",
  },
];

const flowTriggers = [
  {
    category: "内部触发器",
    items: [
      {
        title: "完全专注",
        description: "心流的关键因素，需要持续的注意力集中",
        icon: Focus,
        color: "bg-blue-500",
      },
      {
        title: "明确目标",
        description: "清晰的目标设定有助于进入心流状态",
        icon: Target,
        color: "bg-green-500",
      },
      {
        title: "即时反馈",
        description: "及时获得行动结果的反馈",
        icon: Timer,
        color: "bg-yellow-500",
      },
      {
        title: "挑战与技能平衡",
        description: "任务难度与个人能力相匹配",
        icon: Gauge,
        color: "bg-purple-500",
      },
    ],
  },
  {
    category: "外部触发器",
    items: [
      {
        title: "严重后果",
        description: "行动具有重要影响时更容易进入心流",
        icon: Target,
        color: "bg-red-500",
      },
      {
        title: "丰富环境",
        description: "大自然环境更容易触发心流体验",
        icon: Leaf,
        color: "bg-green-500",
      },
      {
        title: "深度具身",
        description: "完全置身于场景中的体验",
        icon: Mountain,
        color: "bg-blue-500",
      },
    ],
  },
];

const flowCycle = [
  {
    title: "挣扎",
    description: "放出意识来获取信息，以及应对自我批评",
    icon: Brain,
    color: "bg-red-500",
  },
  {
    title: "放松",
    description: "转移注意力，让潜意识来处理信息",
    icon: Compass,
    color: "bg-blue-500",
  },
  {
    title: "心流",
    description: "完全专注、万物合一、忘我的体验状态",
    icon: Zap,
    color: "bg-yellow-500",
  },
  {
    title: "恢复",
    description: "从心流状态中恢复，准备下一个循环",
    icon: Recycle,
    color: "bg-green-500",
  },
];

export default function FlowPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        心流系统
      </motion.h1>

      {/* 心流历史部分 */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">心流研究历史</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {flowHistory.map((item) => (
            <TooltipProvider key={item.year}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`rounded-full p-2 ${item.color} bg-opacity-10`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{item.year}</div>
                        <div className="text-sm font-medium">{item.title}</div>
                      </div>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-sm">{item.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </motion.section>

      {/* 心流触发器部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">心流触发器</h2>
        <div className="grid gap-6">
          {flowTriggers.map((category) => (
            <div key={category.category}>
              <h3 className="mb-3 text-lg font-medium">{category.category}</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {category.items.map((item) => (
                  <TooltipProvider key={item.title}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="flex flex-col gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`rounded-full p-2 ${item.color} bg-opacity-10`}>
                              <item.icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-medium">{item.title}</h3>
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-sm">{item.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 心流循环部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">心流循环</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {flowCycle.map((phase) => (
            <div
              key={phase.title}
              className="flex flex-col gap-4 rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${phase.color} bg-opacity-10`}>
                  <phase.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{phase.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 