"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Eye,
  Lightbulb,
  Timer,
  Mountain,
  User,
  Box,
  BookOpen,
  Sparkles,
  Heart,
  Workflow,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const networks = [
  {
    title: "注意网络",
    description: "负责信息收集和处理，帮助我们专注于重要信息",
    icon: Eye,
    color: "bg-blue-500",
  },
  {
    title: "想象网络",
    description: "负责创意生成和远距离联想，帮助我们产生新想法",
    icon: Lightbulb,
    color: "bg-yellow-500",
  },
  {
    title: "突显网络",
    description: "负责筛选和整合信息，帮助我们找到最有价值的创意",
    icon: Sparkles,
    color: "bg-purple-500",
  },
];

const strategies = [
  {
    title: "善待前扣带皮层",
    description: "通过感恩练习、正念练习、运动和充足睡眠来保持好心情，激活前扣带皮层",
    icon: Heart,
    color: "bg-pink-500",
    details: [
      "每日感恩练习",
      "日常正念练习",
      "定期运动",
      "保证充足睡眠",
    ],
  },
  {
    title: "拓宽视野",
    description: "置身大自然，让目光和思维都更加开阔",
    icon: Mountain,
    color: "bg-green-500",
  },
  {
    title: "保持独处",
    description: "创造非时间，给自己独处的空间",
    icon: User,
    color: "bg-blue-500",
  },
  {
    title: "尝试陌生",
    description: "从不熟悉的事物入手，迫使大脑扩大搜索范围",
    icon: Eye,
    color: "bg-purple-500",
  },
  {
    title: "框定边界",
    description: "设定明确的开始和结束条件，让限制激发创造力",
    icon: Box,
    color: "bg-orange-500",
  },
  {
    title: "跨界阅读",
    description: "每天阅读25-50页与专业无关的书籍",
    icon: BookOpen,
    color: "bg-cyan-500",
  },
  {
    title: "潜意识法",
    description: "通过潜意识来解决问题",
    icon: Brain,
    color: "bg-indigo-500",
    steps: [
      {
        title: "问题识别",
        description: "详细写下问题，不必太在意逻辑关联",
      },
      {
        title: "孕育期",
        description: "暂时搁置问题，做一些轻松的体力活动",
      },
      {
        title: "自由创作",
        description: "回到工作，写任何内容，答案会自然浮现",
      },
    ],
  },
];

export default function CreativityPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        创造力系统
      </motion.h1>

      {/* 创造力网络部分 */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">创造力的三个网络</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {networks.map((network) => (
            <TooltipProvider key={network.title}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`rounded-full p-2 ${network.color} bg-opacity-10`}>
                        <network.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">{network.title}</h3>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-sm">{network.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </motion.section>

      {/* 创造力策略部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">提升创造力的七个策略</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {strategies.map((strategy) => (
            <div
              key={strategy.title}
              className="flex flex-col gap-4 rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${strategy.color} bg-opacity-10`}>
                  <strategy.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{strategy.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {strategy.description}
              </p>
              {strategy.details && (
                <ul className="list-inside list-disc text-sm text-muted-foreground">
                  {strategy.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
              {strategy.steps && (
                <div className="mt-2 space-y-2">
                  {strategy.steps.map((step, index) => (
                    <div key={index} className="rounded-lg bg-muted p-3">
                      <h4 className="font-medium">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* 创造力引导语 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="rounded-xl border bg-card p-6"
      >
        <div className="text-center text-muted-foreground">
          <p>梦想越大，道路就越不清晰。</p>
          <p>动机让你开启游戏，学习让你继续玩下去，而创造力才是你掌舵的方式。</p>
        </div>
      </motion.section>
    </div>
  );
} 