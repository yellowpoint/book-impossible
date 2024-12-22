"use client";

import { motion } from "framer-motion";
import { Target, Mountain, ListTodo, Brain, Bot, Book, Code } from "lucide-react";

const goalSystem = {
  grandGoal: {
    title: "宏大目标",
    items: [
      {
        icon: Bot,
        title: "软件结合AI实现轻松高效学习",
        description: "开发智能学习助手，让学习更轻松高效",
      },
      {
        icon: Book,
        title: "书籍-学习助手-应用指南",
        description: "将经典书籍转化为交互式学习材料",
      }
    ],
    color: "bg-blue-500",
  },
  hardGoal: {
    title: "高难目标",
    items: [
      {
        icon: Code,
        title: "独立快速软件开发与AI应用",
        description: "掌握软件开发技能，了解AI特点与应用",
      },
      {
        icon: Brain,
        title: "学习内容转化",
        description: "将经典书籍转换为直观的学习材料，优化知识结构",
        subItems: [
          "拆书分段总结，开发微信读书插件",
          "知识点说明与领域相关例子",
          "可视化知识结构，突出重点章节"
        ]
      }
    ],
    color: "bg-purple-500",
  },
  dailyTasks: {
    title: "每日清单",
    items: [
      {
        icon: Code,
        title: "开发技能训练",
        description: "每天练习开发技能1小时",
      },
      {
        icon: Bot,
        title: "AI产品研究",
        description: "每天了解一个AI产品或特性",
      }
    ],
    color: "bg-green-500",
  }
};

export default function LearningAssistantPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        学习助手目标系统
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
    </div>
  );
}