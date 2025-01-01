"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Target, Mountain, Brain, Compass, Timer, Activity, Sparkles, Book } from "lucide-react";

const happinessLevels = {
  title: "幸福三层次",
  description: "心理学家发现人类可以达到三个层次的幸福水平，愉悦程度逐层递增",
  levels: [
    {
      icon: Heart,
      title: "快乐",
      description: "每时每刻的享乐生活方式",
      details: "通过日常生活中的小确幸获得愉悦感",
      color: "bg-pink-500",
    },
    {
      icon: Zap,
      title: "投入",
      description: "处于高强度心流状态的生活方式",
      details: "通过追求具有挑战性的任务，进入心流状态获得幸福感",
      color: "bg-yellow-500",
    },
    {
      icon: Target,
      title: "目标",
      description: "最高幸福水平",
      details: "将心流状态与影响他人的渴望结合在一起",
      color: "bg-blue-500",
    },
  ],
};

const happinessTypes = {
  title: "快乐的种类",
  description: "基于心流理论，快乐可以分为以下几种类型",
  types: [
    {
      icon: Activity,
      title: "心流快乐",
      description: "在富有挑战性的活动中达到的专注状态",
      details: [
        "技能与挑战平衡",
        "即时反馈",
        "明确目标",
        "深度专注"
      ],
      color: "bg-blue-500",
    },
    {
      icon: Heart,
      title: "感官快乐",
      description: "通过感官体验获得的愉悦感",
      details: [
        "美食带来的味觉享受",
        "音乐带来的听觉愉悦",
        "按摩带来的触觉放松",
        "观赏美景的视觉享受"
      ],
      color: "bg-pink-500",
    },
    {
      icon: Sparkles,
      title: "成就快乐",
      description: "通过达成目标获得的满足感",
      details: [
        "完成工作任务",
        "学习掌握新技能",
        "解决困难问题",
        "实现个人目标"
      ],
      color: "bg-purple-500",
    },
    {
      icon: Brain,
      title: "意义快乐",
      description: "通过创造价值获得的成就感",
      details: [
        "帮助他人",
        "创造有价值的作品",
        "为社会做贡献",
        "实现自我价值"
      ],
      color: "bg-green-500",
    }
  ]
};

const happinessBooks = {
  title: "快乐相关书籍",
  description: "推荐一些探讨快乐本质和获得方法的经典著作",
  books: [
    {
      icon: Book,
      title: "心流：最优体验心理学",
      author: "米哈里·契克森米哈赖",
      description: "探讨如何通过心流体验获得持久的快乐",
      color: "bg-blue-500",
    },
    {
      icon: Book,
      title: "真实的幸福",
      author: "马丁·塞利格曼",
      description: "积极心理学之父讲述获得持久幸福的方法",
      color: "bg-green-500",
    },
    {
      icon: Book,
      title: "幸福的方法",
      author: "泰勒·本-沙哈尔",
      description: "哈佛大学最受欢迎的幸福课程内容",
      color: "bg-yellow-500",
    }
  ]
};

const defenseSystem = {
  title: "心理防御机制",
  description: "了解自己的心理防御机制，避免其阻碍快乐",
  mechanisms: [
    {
      icon: Timer,
      title: "拖延",
      description: "通过推迟行动来逃避焦虑",
      solution: "设定小目标，培养行动习惯",
      color: "bg-red-500",
    },
    {
      icon: Mountain,
      title: "完美主义",
      description: "过分追求完美导致行动瘫痪",
      solution: "接纳不完美，关注进步而非结果",
      color: "bg-purple-500",
    },
    {
      icon: Compass,
      title: "比较心理",
      description: "过分关注与他人的比较",
      solution: "专注自身成长，建立内在标准",
      color: "bg-orange-500",
    }
  ]
};

const placeholders = {
  title: "待完善内容",
  items: [
    {
      icon: Brain,
      title: "快乐的种类",
      description: "需要从心流理论中补充更具体的内容",
      color: "bg-purple-500",
    },
    {
      icon: Mountain,
      title: "如何快乐的书单",
      description: "待整理相关书籍推荐",
      color: "bg-green-500",
    },
    {
      icon: Compass,
      title: "防御机制",
      description: "探索个人的心理防御机制",
      color: "bg-orange-500",
    },
  ],
};

const happinessAttitudes = {
  title: "今天你要选择什么样的快乐？",
  description: "每一天，我们都在做出关于快乐的选择。重要的不是选择什么，而是如何看待这个选择。",
  attitudes: [
    {
      icon: Heart,
      title: "接纳所有快乐",
      description: "感官的低级快乐和探索自我的高级快乐并不冲突，在追求高级快乐时也可以享受感官快乐",
      details: [
        "躺下休息和学习新技术都是有价值的快乐",
        "避免过度比较不同快乐的价值",
        "珍惜当下的每种快乐体验"
      ],
      color: "bg-pink-500",
    },
    {
      icon: Brain,
      title: "积极视角",
      description: "停止思考'我不想要什么'，转而关注'我想要什么'",
      details: [
        "关注事物让你快乐的部分",
        "寻找内心真正渴望的事物",
        "把被迫的任务看作机会"
      ],
      color: "bg-purple-500",
    },
    {
      icon: Target,
      title: "主动选择",
      description: "在不同类型的快乐之间做出明智的选择，但不必过分纠结",
      details: [
        "思考选择背后真正想要的是什么",
        "不同时期可以有不同的选择",
        "接纳并享受自己的选择"
      ],
      color: "bg-blue-500",
    }
  ]
};

export default function HappinessPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        快乐系统
      </motion.h1>

      {/* 幸福三层次部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="text-xl font-semibold mb-4">{happinessLevels.title}</h2>
        <p className="text-muted-foreground mb-6">{happinessLevels.description}</p>
        <div className="grid gap-6 md:grid-cols-3">
          {happinessLevels.levels.map((level, index) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-4 rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${level.color} bg-opacity-10`}>
                  <level.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{level.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {level.description}
              </p>
              <p className="text-sm text-muted-foreground italic">
                {level.details}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 快乐种类部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="text-xl font-semibold mb-4">{happinessTypes.title}</h2>
        <p className="text-muted-foreground mb-6">{happinessTypes.description}</p>
        <div className="grid gap-6 md:grid-cols-2">
          {happinessTypes.types.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex flex-col gap-4 rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${type.color} bg-opacity-10`}>
                  <type.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{type.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {type.description}
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                {type.details.map((detail, i) => (
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

      {/* 书籍推荐部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="text-xl font-semibold mb-4">{happinessBooks.title}</h2>
        <p className="text-muted-foreground mb-6">{happinessBooks.description}</p>
        <div className="grid gap-6 md:grid-cols-3">
          {happinessBooks.books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex flex-col gap-4 rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${book.color} bg-opacity-10`}>
                  <book.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{book.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {book.author}
              </p>
              <p className="text-sm text-muted-foreground italic">
                {book.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 防御机制部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="text-xl font-semibold mb-4">{defenseSystem.title}</h2>
        <p className="text-muted-foreground mb-6">{defenseSystem.description}</p>
        <div className="grid gap-6 md:grid-cols-3">
          {defenseSystem.mechanisms.map((mechanism, index) => (
            <motion.div
              key={mechanism.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex flex-col gap-4 rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${mechanism.color} bg-opacity-10`}>
                  <mechanism.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{mechanism.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {mechanism.description}
              </p>
              <p className="text-sm text-muted-foreground italic">
                {mechanism.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 新增快乐态度部分 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-xl border bg-card p-6"
      >
        <h2 className="text-xl font-semibold mb-4">{happinessAttitudes.title}</h2>
        <p className="text-muted-foreground mb-6">{happinessAttitudes.description}</p>
        <div className="grid gap-6 md:grid-cols-3">
          {happinessAttitudes.attitudes.map((attitude, index) => (
            <motion.div
              key={attitude.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex flex-col gap-4 rounded-lg border p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-full p-2 ${attitude.color} bg-opacity-10`}>
                  <attitude.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{attitude.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {attitude.description}
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                {attitude.details.map((detail, i) => (
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

      {/* 其他提示部分移到最下面 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 space-y-4"
      >
        <h2 className="text-xl font-semibold">其他说明</h2>
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm text-muted-foreground italic">
            提示：快乐不能比较，也不能替换。读书的快乐不能替代打牌的快乐，每种快乐都有其独特的价值。
          </p>
        </div>
      </motion.div>
    </div>
  );
}