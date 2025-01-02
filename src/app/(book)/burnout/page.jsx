"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Battery,
  Scale,
  Users,
  Heart,
  Target,
  Gauge,
  Coins,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const burnoutFactors = {
  title: "职业倦怠的六大诱因",
  description: "根据马斯拉赫职业倦怠量表(MBI)研究，职业倦怠主要由以下因素导致",
  factors: [
    {
      icon: Target,
      title: "自主失控",
      description: "过度管理导致工作缺乏自主权",
      solution: "争取更多工作自主权，参与决策过程",
      color: "bg-blue-500",
    },
    {
      icon: Gauge,
      title: "工作过载",
      description: "工作量超出个人承受能力",
      solution: "学会说不，设定合理边界",
      color: "bg-red-500",
    },
    {
      icon: Heart,
      title: "价值冲突",
      description: "个人价值观与工作环境不匹配",
      solution: "寻找与个人价值观一致的工作环境",
      color: "bg-purple-500",
    },
    {
      icon: Coins,
      title: "回报不足",
      description: "付出得不到相应的认可和回报",
      solution: "主动沟通期望，寻找多元回报",
      color: "bg-yellow-500",
    },
    {
      icon: Users,
      title: "社会支持不足",
      description: "缺乏同事支持和职场人际关系",
      solution: "建立职场支持网络，寻求导师指导",
      color: "bg-green-500",
    },
    {
      icon: Scale,
      title: "不公正感",
      description: "感受到工作环境中的不公平对待",
      solution: "关注自身成长，避免过度比较",
      color: "bg-orange-500",
    },
  ]
};

const recoveryStrategies = {
  title: "恢复策略",
  description: "应对职业倦怠需要多管齐下，建立系统性的恢复策略",
  strategies: [
    {
      icon: Brain,
      title: "高位扫描",
      description: "跳出当前视角，以更宏观的视角审视现状",
      details: [
        "关注整体职业发展方向",
        "思考工作对生活的意义",
        "避免陷入细节的比较"
      ],
      color: "bg-blue-500",
    },
    {
      icon: Target,
      title: "主动选择",
      description: "在现有条件下，找回对工作的控制感",
      details: [
        "选择最适合自己的工作内容",
        "建立健康的职场关系",
        "设定个人发展边界"
      ],
      color: "bg-purple-500",
    },
    {
      icon: Heart,
      title: "心形地图",
      description: "建立自我关照体系，预防精神耗竭",
      details: [
        "规律作息和运动习惯",
        "培养工作之外的兴趣",
        "保持社交支持网络"
      ],
      color: "bg-pink-500",
    },
  ]
};

const burnoutSigns = {
  title: "倦怠信号",
  description: "及早识别职业倦怠的警示信号",
  signs: [
    {
      icon: Battery,
      title: "情绪耗竭",
      description: "感觉精力耗尽，对工作失去热情",
      details: "即使休息后仍感疲惫，难以恢复活力",
      color: "bg-red-500",
    },
    {
      icon: Users,
      title: "人格解体",
      description: "对他人变得冷漠，缺乏同理心",
      details: "工作中机械应对，失去情感连接",
      color: "bg-yellow-500",
    },
    {
      icon: ArrowUpRight,
      title: "成就感降低",
      description: "对工作成果缺乏满足感",
      details: "质疑工作价值，失去职业信心",
      color: "bg-purple-500",
    },
  ]
};

export default function BurnoutPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        职业倦怠
      </motion.h1>

      {/* 倦怠信号部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="text-xl font-semibold mb-4">{burnoutSigns.title}</h2>
        <p className="text-muted-foreground mb-6">{burnoutSigns.description}</p>
        <div className="grid gap-6 md:grid-cols-3">
          {burnoutSigns.signs.map((sign, index) => (
            <motion.div
              key={sign.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-4 rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${sign.color} bg-opacity-10`}>
                  <sign.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{sign.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {sign.description}
              </p>
              <p className="text-sm text-muted-foreground italic">
                {sign.details}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 六大诱因部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="text-xl font-semibold mb-4">{burnoutFactors.title}</h2>
        <p className="text-muted-foreground mb-6">{burnoutFactors.description}</p>
        <div className="grid gap-6 md:grid-cols-3">
          {burnoutFactors.factors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex flex-col gap-4 rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${factor.color} bg-opacity-10`}>
                  <factor.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{factor.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {factor.description}
              </p>
              <p className="text-sm text-muted-foreground italic">
                {factor.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 恢复策略部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="text-xl font-semibold mb-4">{recoveryStrategies.title}</h2>
        <p className="text-muted-foreground mb-6">{recoveryStrategies.description}</p>
        <div className="grid gap-6 md:grid-cols-3">
          {recoveryStrategies.strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
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
              <ul className="text-sm text-muted-foreground space-y-2">
                {strategy.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 提示部分 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 space-y-4"
      >
        <h2 className="text-xl font-semibold">其他说明</h2>
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm text-muted-foreground italic">
            提示：职业倦怠不是个人失败，而是对长期慢性压力的正常反应。及早识别并采取行动很重要。
          </p>
        </div>
      </motion.div>
    </div>
  );
}