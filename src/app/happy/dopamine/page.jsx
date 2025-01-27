"use client";

import { motion } from "framer-motion";
import { Brain, Target, ListTodo, Calendar, Timer } from "lucide-react";

const dopamineRecovery = [
  {
    icon: Timer,
    title: "多巴胺休息",
    description: "让多巴胺奖励回路休息一下",
    details: [
      "有意识地断开与容易人为提高多巴胺的活动的联系",
      "如过度使用社交媒体、观看网络色情片或玩视频游戏",
      "给最沉迷的习惯放30天假",
      "让大脑有时间习惯于在现实世界活动中寻找快感"
    ],
    color: "bg-red-500",
  },
  {
    icon: Target,
    title: "设定微目标",
    description: "通过小目标建立适度的期待",
    details: [
      "安排每周一次的定期小点心",
      "以更有分寸的方式建立期待",
      "把想做的事情列清单",
      "每周都和计划约时间"
    ],
    color: "bg-yellow-500",
  },
  {
    icon: Brain,
    title: "具体目标",
    description: "避免模糊抽象的目标设定",
    details: [
      "追求具体的、触手可及的目标",
      '例如"我想在这个周末去骑5公里自行车"',
      '而不是"我想要快乐"这样模糊的目标',
      "具体目标更容易激活多巴胺系统"
    ],
    color: "bg-blue-500",
  },
  {
    icon: ListTodo,
    title: "易管理清单",
    description: "通过完成小任务获得成就感",
    details: [
      "创建容易管理的待办事项清单",
      "选择几个小时就能完成的DIY任务",
      "每天朝着目标迈出一小步",
      "每完成一步都会分泌多巴胺"
    ],
    color: "bg-green-500",
  }
];

export default function DopaminePage() {
  return (
    <div className="container mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <Brain className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold">多巴胺恢复</h1>
        </div>

        <p className="text-muted-foreground">
          以下是一些让你的多巴胺回路恢复正常的方法。通过这些方法，你可以重建健康的奖励系统，找回对生活的热情。
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {dopamineRecovery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border p-6 space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className={`rounded-full p-2 ${item.color} bg-opacity-10`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>

              <p className="text-muted-foreground">{item.description}</p>

              <ul className="space-y-2">
                {item.details.map((detail, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    <span className="text-muted-foreground">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="rounded-lg bg-muted p-4 mt-8">
          <p className="text-sm text-muted-foreground italic">
            提示：恢复多巴胺敏感性是一个渐进的过程，需要耐心和持续的努力。重要的是找到适合自己的节奏，而不是急于求成。
          </p>
        </div>
      </motion.div>
    </div>
  );
} 