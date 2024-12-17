"use client";

import { motion } from "framer-motion";
import {
  Book,
  Brain,
  Filter,
  MessageCircle,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const learningSteps = [
  {
    title: "通读五本书",
    description: "从通俗到专业,循序渐进地阅读五本相关书籍",
    details: [
      "第一本: 最流行畅销的入门书",
      "第二本: 较专业但仍通俗易懂的书",
      "第三本: 半技术性的进阶读物",
      "第四本: 真正的专业技术书籍",
      "第五本: 了解领域前沿的深度书籍"
    ],
    icon: Book,
    color: "bg-blue-500",
  },
  {
    title: "把自己当成白痴",
    description: "带着诚意和谦逊向专家请教问题",
    icon: Brain,
    color: "bg-green-500",
  },
  {
    title: "探索空白",
    description: "接受并探索未知领域,保持开放和好奇的心态",
    icon: Target,
    color: "bg-yellow-500",
  },
  {
    title: "不断提问",
    description: "持续提出问题,深入理解知识",
    icon: MessageCircle,
    color: "bg-purple-500",
  },
  {
    title: "找到叙事结构",
    description: "将知识串联成故事,建立因果联系",
    icon: Workflow,
    color: "bg-red-500",
  },
];

const learningPrinciples = [
  {
    title: "成长型思维",
    description: "相信学习是可能的,限制消极自我对话",
    icon: Brain,
    color: "bg-blue-500",
  },
  {
    title: "真相过滤器",
    description: "建立快速、精确的信息评估系统,如第一性原理、科学方法等",
    icon: Filter,
    color: "bg-green-500",
  },
  {
    title: "专注核心内容",
    description: "遵循二八法则,将80%的精力集中在最重要的20%内容上",
    icon: Target,
    color: "bg-yellow-500",
  },
  {
    title: "社交学习",
    description: "通过与他人交流分享,加深理解",
    icon: Users,
    color: "bg-purple-500",
  },
];

const noteTips = [
  "记录历史叙述,帮助大脑整理新信息",
  "关注并记录重要术语",
  "记录让你感到兴奋的内容",
];

export default function LearningPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        学习力系统
      </motion.h1>

      {/* 学习原则部分 */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">学习原则</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {learningPrinciples.map((principle) => (
            <TooltipProvider key={principle.title}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`rounded-full p-2 ${principle.color} bg-opacity-10`}>
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
        </div>
      </motion.section>

      {/* 学习步骤部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">五步学习法</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningSteps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col gap-4 rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${step.color} bg-opacity-10`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{step.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
              {step.details && (
                <ul className="list-inside list-disc text-sm text-muted-foreground">
                  {step.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* 笔记技巧部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">笔记技巧</h2>
        <div className="grid gap-4">
          {noteTips.map((tip, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border p-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                {index + 1}
              </div>
              <p className="text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 