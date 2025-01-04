"use client";

import { Brain, Heart, Target, AlertCircle, Lightbulb, History, Filter, Users, ArrowUpRight } from "lucide-react";

const dashboardData = [
  {
    category: "工作",
    satisfaction: 4,
    status: "之前主业是前端开发，现在待业，以及周末兼职带带户外队，各种学习也算在里面吧，觉得投入太多精力了，且只是迷茫的瞎忙，并不是很乐在其中，当然也不是很痛苦。",
    problems: "如何找到热爱的工作？"
  },
  {
    category: "娱乐",
    satisfaction: 3,
    status: "看电影、玩游戏没之前那么投入放松了，和朋友聚会、户外还不错",
    problems: "如何找回放肆投入的感觉？"
  },
  {
    category: "爱",
    satisfaction: 1,
    status: "大多是一个人",
    problems: ""
  },
  {
    category: "健康",
    satisfaction: 6,
    status: "身体经常运动还行吧就是小肥了些，心理现在主要是焦虑迷茫，但也一直在学习心理学相关书籍，以及做正念冥想。",
    problems: "减肥锻炼，心理如何更平稳？"
  }
];

const activities = [
  {
    category: "工作",
    items: [
      { name: "写代码", engagement: 8, energy: -3, energyValue: 7, keywords: ["沉浸", "成就感"] },
      { name: "开会", engagement: 4, energy: -5 },
      { name: "面试", engagement: 6, energy: -10 },
      { name: "线上沟通", engagement: 2, energy: -5 },
      { name: "户外规划", engagement: 6, energy: -4 },
      { name: "户外带队", engagement: 7, energy: -7 }
    ]
  },
  {
    category: "学习",
    items: [
      { name: "正念", engagement: 8, energy: 6, energyValue: 8, keywords: ["沉浸", "平静"] },
      { name: "看书", engagement: 6, energy: -4, energyValue: 6, keywords: ["价值感"] },
      { name: "看知识视频", engagement: 7, energy: -2, energyValue: 2, keywords: ["求知欲", "新奇感"] }
    ]
  },
  // ... 其他活动类别
];

const strengths = [
  {
    title: "擅长",
    items: [
      "好奇心、想象力、动手能力、组织规划能力",
      "创意类、创造类的事情会让我兴奋一些，如搞怪",
      "一个人专注做事",
      "面对面沟通与体验",
      "细心、认真",
      "喜欢整洁有序，尽量少的物品",
      "有能力处理突发情况",
      "自我安慰",
      "寻找乐趣"
    ]
  },
  {
    title: "不擅长",
    items: [
      "线上聊天沟通能力弱",
      "害怕考试、面试",
      "做选择",
      "不喜欢处理要提前很多时间准备的"
    ]
  }
];

export default function LifeDesign() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">人生设计</h1>

      {/* 仪表盘部分 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">生活仪表盘</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboardData.map((item, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{item.category}</h3>
                <span className="text-2xl font-bold">{item.satisfaction}/10</span>
              </div>
              <p className="text-gray-600 mb-2">{item.status}</p>
              {item.problems && (
                <p className="text-red-600">待解决: {item.problems}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 活动分析部分 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">活动分析</h2>
        {activities.map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-medium mb-3">{category.category}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2">活动</th>
                    <th className="px-4 py-2">投入度</th>
                    <th className="px-4 py-2">精力值</th>
                    <th className="px-4 py-2">能量值</th>
                    <th className="px-4 py-2">关键词</th>
                  </tr>
                </thead>
                <tbody>
                  {category.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="border-t">
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">{item.engagement}</td>
                      <td className="px-4 py-2">{item.energy}</td>
                      <td className="px-4 py-2">{item.energyValue || '-'}</td>
                      <td className="px-4 py-2">{item.keywords?.join(', ') || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      {/* 能力分析部分 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">能力分析</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strengths.map((category, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="text-xl font-medium mb-3">{category.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 