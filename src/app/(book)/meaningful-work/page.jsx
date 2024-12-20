"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Search,
  Compass,
  Target,
  Heart,
  Brain,
  Coins,
  Users,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const workStrategies = [
  {
    level: "上策",
    title: "发明自己的工作",
    description: "主动发现世界的真实需求，用自己的能力去满足",
    steps: [
      {
        title: "需求调研",
        description: "观察、发掘、总结社会消费市场的真实需求",
        icon: Search,
        color: "bg-blue-500",
      },
      {
        title: "能力匹配",
        description: "思考自己的天赋和能力，寻找与需求的最佳匹配点",
        icon: Compass,
        color: "bg-green-500",
      },
      {
        title: "价值创造",
        description: "提供产品或服务，让人愿意为之付费",
        icon: Target,
        color: "bg-purple-500",
      },
    ],
  },
  {
    level: "中策",
    title: "提升工作自主性",
    description: "在现有工作中争取更多自主权和掌控感",
    principles: [
      {
        title: "自主性",
        description: "工作中的决策权和选择自由",
        icon: Brain,
        color: "bg-yellow-500",
      },
      {
        title: "能力感",
        description: "感受到自己在不断成长和进步",
        icon: ArrowUpRight,
        color: "bg-red-500",
      },
      {
        title: "关联性",
        description: "与他人建立有意义的连接",
        icon: Users,
        color: "bg-pink-500",
      },
    ],
  },
  {
    level: "下策",
    title: "财务自由",
    description: "寻找能够摆脱金钱束缚的工作方式",
    methods: [
      {
        title: "被动收入",
        description: "通过租金、利息、股权等获得稳定收入",
        icon: Coins,
        color: "bg-orange-500",
      },
      {
        title: "零边际成本",
        description: "开发书籍、软件等可复制产品",
        icon: Lightbulb,
        color: "bg-cyan-500",
      },
    ],
  },
];

export default function MeaningfulWorkPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        有意义的工作
      </motion.h1>

      {workStrategies.map((strategy, index) => (
        <motion.section
          key={strategy.level}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="rounded-xl border bg-card p-6"
        >
          <h2 className="mb-4 text-xl font-semibold">
            {strategy.level}：{strategy.title}
          </h2>
          <p className="mb-6 text-muted-foreground">{strategy.description}</p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {strategy.steps?.map((step) => (
              <TooltipProvider key={step.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex flex-col gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-full p-2 ${step.color} bg-opacity-10`}
                        >
                          <step.icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-medium">{step.title}</h3>
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-sm">{step.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}

            {strategy.principles?.map((principle) => (
              <TooltipProvider key={principle.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex flex-col gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-full p-2 ${principle.color} bg-opacity-10`}
                        >
                          <principle.icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-medium">{principle.title}</h3>
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-sm">{principle.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}

            {strategy.methods?.map((method) => (
              <TooltipProvider key={method.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex flex-col gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-full p-2 ${method.color} bg-opacity-10`}
                        >
                          <method.icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-medium">{method.title}</h3>
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-sm">{method.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </motion.section>
      ))}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="rounded-xl border bg-card p-6"
      >
        <div className="text-center text-muted-foreground">
          <p>工作不应该是被动接受的任务，而是主动创造的价值。</p>
          <p>通过发现真实需求、提升自主性或获得财务自由，让工作变得更有意义。</p>
        </div>
      </motion.section>
    </div>
  );
} 