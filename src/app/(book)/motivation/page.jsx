"use client";

import { motion } from "framer-motion";
import {
  Brain,
  ClipboardCheck,
  Filter,
  Flame,
  Heart,
  Lightbulb,
  ListTodo,
  Target,
  Timer,
  Zap,
} from "lucide-react";
import { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea"

const chemicals = [
  {
    icon: Zap,
    name: "多巴胺",
    description: "驱动参与欲望相关活动，带来兴奋和热情",
    color: "bg-yellow-500",
  },
  {
    icon: Flame,
    name: "去甲肾上腺素",
    description: "产生巨大能量，提升警觉性",
    color: "bg-red-500",
  },
  {
    icon: Heart,
    name: "催产素",
    description: "带来信任、爱和友谊感",
    color: "bg-pink-500",
  },
  {
    icon: Brain,
    name: "5-羟色胺",
    description: "镇静舒缓，缓和情绪",
    color: "bg-blue-500",
  },
  {
    icon: Lightbulb,
    name: "内啡肽",
    description: "产生止痛功效，释放幸福感",
    color: "bg-purple-500",
  },
  {
    icon: Target,
    name: "大麻素",
    description: "强力减压，带来放松愉悦",
    color: "bg-green-500",
  },
];

const drives = [
  {
    name: "金钱",
    description: "外在驱动，来自物质奖励",
    type: "external",
  },
  {
    name: "名声",
    description: "外在驱动，来自社会认可",
    type: "external",
  },
  {
    name: "好奇心",
    description: "内在驱动，源自探索欲望",
    type: "internal",
  },
  {
    name: "激情",
    description: "内在驱动，源自强烈兴趣",
    type: "internal",
  },
  {
    name: "使命感",
    description: "内在驱动，源自目标追求",
    type: "internal",
  },
];

const goals = [
  {
    title: "大目标优于小目标",
    description: `大目标带来的成效明显优于小目标、中等目标和模糊目标。宏大变革目标如"终结世界饥荒"，高难度目标如"获得营养学学位"。`,
    icon: Target,
    color: "bg-blue-500",
  },
  {
    title: "目标是过滤器",
    description:
      "目标是第一个过滤器。当遇到新的发展机会时，如果不能对核心目标做出贡献，就说明这个机会并不适合。",
    icon: Filter,
    color: "bg-purple-500",
  },
  {
    title: "分解为待办清单",
    description:
      "将宏大目标分解为每天的具体任务。每项任务都源自宏大变革目标，通过完成小任务来推动整体目标的达成。",
    icon: ListTodo,
    color: "bg-green-500",
  },
  {
    title: "测试清单数量",
    description:
      "通过实验找出最适合的每日任务数量。记录每天能完成的事项数，并在每件事上做到最好。",
    icon: ClipboardCheck,
    color: "bg-yellow-500",
  },
  {
    title: "适时停止工作",
    description:
      "完成待办事项后要学会停止工作。恢复元气是保持巅峰表现的关键，避免成为工作狂。",
    icon: Timer,
    color: "bg-red-500",
  },
];

const curiositySteps = [
  {
    title: "开列清单",
    description:
      "写下25件你最好奇的事情，要尽可能具体。比如不要只写'对足球感兴趣'，而应该写'对左内边锋拦截传球的技巧感到好奇'。",
    icon: ClipboardCheck,
    color: "bg-blue-500",
    inputPlaceholder: "在此输入你感兴趣的具体事物...",
  },
  {
    title: "寻找交集",
    description:
      "观察这25件事情之间的交集。比如'昆虫作为食物来源'和'足球训练营养'之间的关联。重点是寻找3-4项内容的交集，这样才能激发真正的能量。",
    icon: Filter,
    color: "bg-purple-500",
    inputPlaceholder: "记录你发现的有趣交集...",
  },
  {
    title: "深入研究",
    description:
      "在确定的交集领域上，每天花20-30分钟深入学习。关注该领域的历史研究和专业术语，通过播客、视频、文章等多种方式汲取知识。",
    icon: Brain,
    color: "bg-green-500",
    inputPlaceholder: "记录你的学习计划和笔记...",
  },
  {
    title: "社交互动",
    description:
      "通过与他人分享和交流你的研究，获得反馈来增强激情。可以从简单的社交对话开始，与陌生人分享你正在研究的内容。",
    icon: Heart,
    color: "bg-pink-500",
    inputPlaceholder: "记录你的分享计划和收获...",
  },
];

const passionMissionSteps = [
  {
    title: "记录宏大问题",
    description:
      "写下15个你想要解决的宏大问题，要尽可能具体。比如不要只写'保护生物多样性'，而应该写'建立保护生物多样性的超级景观带'。记录那些让你夜不能寝的问题，如饥荒问题、贫穷问题等。",
    icon: ClipboardCheck,
    color: "bg-blue-500",
    inputPlaceholder: "在此记录你关心的宏大问题...",
  },
  {
    title: "寻找使命交集",
    description:
      "在最能激起你激情的事物中，找到与这些全球性重大挑战的交集。这些交集将是你的使命所在，让你能用个人的热情去解决重大问题。",
    icon: Target,
    color: "bg-purple-500",
    inputPlaceholder: "记录激情与使命的交集...",
  },
];

export default function MotivationPage() {
  const [selectedType, setSelectedType] = useState(null);
  const [curiosityInputs, setCuriosityInputs] = useState({});
  const [passionMissionInputs, setPassionMissionInputs] = useState({});

  return (
    <div className="flex flex-1 flex-col gap-8 p-8">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        动机系统
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* 化学物质部分 */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border bg-card p-6"
        >
          <h2 className="mb-4 text-xl font-semibold">奖励性化学物质</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {chemicals.map((chemical) => (
              <TooltipProvider key={chemical.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-2 rounded-lg p-4 transition-colors hover:bg-accent"
                    >
                      <div
                        className={`rounded-full p-2 ${chemical.color} bg-opacity-10`}
                      >
                        <chemical.icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-medium">
                        {chemical.name}
                      </span>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-sm">{chemical.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </motion.section>

        {/* 驱动力部分 */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-xl border bg-card p-6"
        >
          <h2 className="mb-4 text-xl font-semibold">驱动力类型</h2>
          <div className="mb-4 flex gap-4">
            <button
              onClick={() => setSelectedType("external")}
              className={`rounded-lg px-4 py-2 transition-colors ${selectedType === "external"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary"
                }`}
            >
              外在驱动
            </button>
            <button
              onClick={() => setSelectedType("internal")}
              className={`rounded-lg px-4 py-2 transition-colors ${selectedType === "internal"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary"
                }`}
            >
              内在驱动
            </button>
          </div>
          <div className="grid gap-4">
            {drives
              .filter((drive) => !selectedType || drive.type === selectedType)
              .map((drive) => (
                <TooltipProvider key={drive.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border p-4 transition-colors hover:bg-accent"
                      >
                        <h3 className="font-medium">{drive.name}</h3>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-sm">{drive.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
          </div>
        </motion.section>
      </div>

      {/* 目标部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">目标系统</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <TooltipProvider key={goal.title}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`rounded-full p-2 ${goal.color} bg-opacity-10`}
                      >
                        <goal.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium">{goal.title}</h3>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-sm">
                  <p className="text-sm">{goal.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </motion.section>

      {/* 好奇心培养部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">培养好奇心与激情</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {curiositySteps.map((step) => (
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
              <Textarea
                className="min-h-[100px] w-full rounded-lg border bg-background p-3 text-sm"
                placeholder={step.inputPlaceholder}
                value={curiosityInputs[step.title] ?? ""}
                onChange={(e) =>
                  setCuriosityInputs((prev) => ({
                    ...prev,
                    [step.title]: e.target.value,
                  }))
                }
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* 激情转化部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="mb-4 text-xl font-semibold">激情转化为使命感</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {passionMissionSteps.map((step) => (
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
              <Textarea
                className="min-h-[100px] w-full rounded-lg border bg-background p-3 text-sm"
                placeholder={step.inputPlaceholder}
                value={passionMissionInputs[step.title] ?? ""}
                onChange={(e) =>
                  setPassionMissionInputs((prev) => ({
                    ...prev,
                    [step.title]: e.target.value,
                  }))
                }
              />
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
