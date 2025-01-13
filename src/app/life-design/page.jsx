"use client";

import { motion } from "framer-motion";
import {
  Map,
  Compass,
  Target,
  Brain,
  Users,
  Lightbulb,
  Heart,
  Crosshair,
  Sparkles,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const journeyMap = {
  title: "人生设计",
  description: "通过设计思维探索和迭代,找到属于自己的人生道路",
  stages: [
    {
      title: "分析现状",
      subtitle: "了解你在哪里",
      icon: Compass,
      content: [
        {
          subtitle: "人生仪表盘",
          text: "评估四个维度的满意度：\n- 健康：身心状态\n- 工作：参与的人类探险活动\n- 娱乐：纯粹的快乐追求\n- 爱：与他人的情感联结",
        },
        {
          subtitle: "发现真实问题",
          text: `避免在错误的问题上浪费时间，如成功灾难。
          不要纠结于无法改变的"重力问题"，专注于可以付诸行动的问题。`
        },
        {
          text: "人生设计是为了改进完善当前的生活，而不是重新设计一种全新的生活。",
          emphasis: true
        }
      ],
      color: "bg-blue-500",
    },
    {
      title: "价值观探索",
      subtitle: "确认你的方向",
      icon: Brain,
      content: [
        {
          subtitle: "工作观",
          text: "思考以下问题：\n- 工作对你意味着什么？\n- 为什么要工作？\n- 什么是好工作？\n- 工作与个人成长的关系？",
        },
        {
          subtitle: "人生观",
          text: "探索核心议题：\n- 生活的意义和目的\n- 与他人的关系\n- 善恶的定义\n- 快乐与痛苦的作用"
        },
        {
          text: `当你清楚"你是谁，你信仰什么，你正在做什么"三者之间的联系，就能知道自己是否在正确的轨道上。`,
          emphasis: true
        }
      ],
      color: "bg-purple-500",
    },
    {
      title: "能量地图",
      subtitle: "发现你的动力",
      icon: Map,
      content: [
        {
          subtitle: "思维地图",
          text: "通过词汇联想扩展可能性：\n- 列出感兴趣的关键词\n- 进行3-5分钟快速联想\n- 寻找词汇间的意外连接",
        },
        {
          subtitle: "能量追踪",
          text: "记录并分析：\n- 让你全身心投入的时刻\n- 充满能量的活动\n- 消耗精力的情境"
        },
        {
          text: "通过思维发散和能量追踪,找到隐藏的机会和方向。",
          emphasis: true
        }
      ],
      color: "bg-yellow-500",
    },
    {
      title: "方案设计",
      subtitle: "探索多种可能",
      icon: Target,
      content: [
        {
          subtitle: "三个版本的五年计划",
          text: "设计三个真正不同的人生方案：\n1. 当前路径 - 你已经在做的事\n2. 备选方案 - 如果无法继续当前工作\n3. 狂想方案 - 不考虑金钱和形象的理想生活",
        },
        {
          text: "这不是同一个主题的三个版本，而是真正不同的生活选择。每个都应该是可能实现的计划A。"
        },
        {
          text: "不要等待完美方案出现，重要的是拥有多个可能性。",
          emphasis: true
        }
      ],
      color: "bg-green-500",
    },
    {
      title: "原型测试",
      subtitle: "小规模尝试",
      icon: Sparkles,
      content: [
        {
          subtitle: "人生采访",
          text: "与已经在理想道路上的人交流：\n- 了解他们的日常生活\n- 倾听职业发展历程\n- 获取实用建议",
        },
        {
          subtitle: "实地体验",
          text: "在投入前进行测试：\n- 一天观摩体验\n- 短期义务尝试\n- 三个月实习计划"
        },
        {
          text: "就像买车要试驾一样，改变人生也需要先进行体验。",
          emphasis: true
        }
      ],
      color: "bg-red-500",
    },
    {
      title: "决策执行",
      subtitle: "明智地选择",
      icon: Users,
      content: [
        {
          subtitle: "四步决策法",
          text: "1. 收集和创建选项\n2. 缩小列表范围\n3. 深入体验每个选择\n4. 放手继续前进",
        },
        {
          subtitle: "体验式决策",
          text: "对每个选项进行1-3天的生活体验，让身心都参与决策过程。休息1-2天后尝试下一个选项。"
        },
        {
          text: "记录决策过程，当感到困惑时回顾当初的选择理由。选择后就要放手，专注于当下。",
          emphasis: true
        }
      ],
      color: "bg-pink-500",
    }
  ]
};

export default function LifeDesignPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">{journeyMap.title}</h1>
        <p className="text-muted-foreground">{journeyMap.description}</p>
      </motion.div>

      <Tabs defaultValue="chapter-1" className="w-full">
        <TabsList className="grid grid-cols-6 h-auto">
          {journeyMap.stages.map((stage, index) => (
            <TabsTrigger
              key={`chapter-${index + 1}`}
              value={`chapter-${index + 1}`}
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary/10"
            >
              <div className={`rounded-full p-2 ${stage.color} bg-opacity-10`}>
                <stage.icon className="h-5 w-5" />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium">{stage.title}</div>
                <div className="text-xs text-muted-foreground">{stage.subtitle}</div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {journeyMap.stages.map((stage, index) => (
          <TabsContent
            key={`chapter-${index + 1}`}
            value={`chapter-${index + 1}`}
            className="mt-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="rounded-xl border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`rounded-full p-3 ${stage.color} bg-opacity-10`}>
                  <stage.icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{stage.title}</h2>
                </div>
              </div>

              <div className="space-y-6">
                {stage.content.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-2"
                  >
                    {item.subtitle && (
                      <h3 className="text-lg font-medium text-primary">
                        {item.subtitle}
                      </h3>
                    )}
                    <p className={`
                      ${item.highlight ? 'text-xl font-medium' : 'text-muted-foreground'}
                      ${item.emphasis ? 'italic text-lg' : ''}
                      whitespace-pre-line
                    `}>
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
} 