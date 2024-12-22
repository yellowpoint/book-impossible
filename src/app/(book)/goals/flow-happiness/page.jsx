"use client";

import { motion } from "framer-motion";
import { Target, Mountain, ListTodo, Brain, Heart, Book, Edit } from "lucide-react";

const goalSystem = {
  grandGoal: {
    title: "宏大目标",
    items: [
      {
        icon: Heart,
        title: "通过目标与心流实现日常快乐",
        description: "建立可持续的快乐生活模式",
      }
    ],
    color: "bg-blue-500",
  },
  hardGoal: {
    title: "高难目标",
    items: [
      {
        icon: Book,
        title: "心流理论研究与实践",
        description: "深入研究心流理论并实践验证",
        subItems: [
          "研读《心流》等相关书籍",
          "以《跨越不可能》为框架练习",
          "撰写个人心得与见解"
        ]
      }
    ],
    color: "bg-purple-500",
  },
  dailyTasks: {
    title: "每日清单",
    items: [
      {
        icon: Book,
        title: "阅读与听书",
        description: "每天阅读或听书30分钟",
      },
      {
        icon: Edit,
        title: "写作练习",
        description: "每天进行写作练习",
      }
    ],
    color: "bg-green-500",
  }
};

export default function FlowHappinessPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        心流快乐目标系统
      </motion.h1>

      {Object.entries(goalSystem).map(([key, section], index) => (
        <motion.section
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="rounded-xl border bg-card p-6"
        >
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {section.items.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.2) + (itemIndex * 0.1) }}
                className="flex flex-col gap-4 rounded-lg border p-4"
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-full p-2 ${section.color} bg-opacity-10`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                {item.subItems && (
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-4 rounded-lg bg-muted"
      >
        <p className="text-sm text-muted-foreground italic">
          提示：目标设定要遵循"大目标优于小目标"原则，同时保持挑战与技能的平衡，
          这样更容易进入心流状态，获得持续的快乐体验。
        </p>
      </motion.div>
    </div>
  );
}