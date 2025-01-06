"use client";

import { Brain, Heart, Target, AlertCircle, Lightbulb, History, Filter, Users, ArrowUpRight, Compass } from "lucide-react";

// 步骤数据
const designSteps = [
  {
    id: 1,
    title: "了解自己",
    icon: Brain,
    sections: [
      {
        title: "仪表盘",
        content: [
          {
            category: "工作",
            satisfaction: 4,
            status: "之前主业是前端开发，现在待业，以及周末兼职带带户外队，各种学习也算在里面吧，觉得投入太多精力了，且只是迷茫的瞎忙，并不是很乐在其中，当然也不是很痛苦。",
            problems: "如何找到热爱的工作？"
          },
          // ... 其他仪表盘数据
        ]
      },
      {
        title: "指南针",
        content: {
          workView: "通过工作来向外界换取成就感、价值感、存在感，姿态很低",
          lifeView: "在外界目标下一路追逐，对爱逃避，害怕冲突",
          analysis: [
            "工作观与人生观都过于依赖外界评价",
            "缺乏内在驱动力和自我认同",
            "需要建立更健康的自我价值体系"
          ]
        }
      },
      {
        title: "人生日志",
        content: {
          activities: [
            {
              category: "工作",
              items: [
                { name: "写代码", engagement: 8, energy: -3, energyValue: 7, keywords: ["沉浸", "成就感"] },
                { name: "开会", engagement: 4, energy: -5, energyValue: -1, keywords: ["耗能"] },
                { name: "面试", engagement: 6, energy: -10, energyValue: -4, keywords: ["压力", "焦虑"] },
                { name: "线上沟通", engagement: 2, energy: -5, energyValue: -3, keywords: ["耗能"] },
                { name: "户外规划", engagement: 6, energy: -4, energyValue: 2, keywords: ["创造", "服务"] },
                { name: "户外带队", engagement: 7, energy: -7, energyValue: 0, keywords: ["服务", "表达"] }
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
            {
              category: "娱乐",
              items: [
                { name: "电影", engagement: 5, energy: 5, energyValue: 5, keywords: ["沉浸", "感悟"] },
                { name: "电子游戏", engagement: 8, energy: -6, energyValue: 2, keywords: ["沉浸", "刺激"] },
                { name: "整理", engagement: 7, energy: 3, energyValue: 5, keywords: ["沉浸", "有序"] },
                { name: "看风景", engagement: 7, energy: 4, energyValue: 6, keywords: ["好奇心", "自由"] },
                { name: "骑车", engagement: 9, energy: 8, energyValue: 8, keywords: ["沉浸", "自由"] }
              ]
            }
          ],
          reflections: [
            "喜欢解决与挑战明确且限时的问题，如改bug、修空调、修电脑、装柜子",
            "社交时，喜欢陌生人一起游戏交流，但不要涉及个人隐私与情感相关",
            "好奇心、求知欲、表达欲、成就感",
            "倾向于独处的创造性活动",
            "对于需要长期准备的事情容易焦虑",
            "喜欢即时反馈的活动",
            "通过服务他人获得价值感"
          ],
          lifeHistory: [
            {
              period: "2014-2016",
              title: "探索期",
              events: [
                "尝试快递、自行车店、房地产销售等工作",
                "参加UI设计培训",
                "开始自学前端开发"
              ],
              insights: "尝试多种工作方向,逐渐发现对编程的兴趣"
            },
            {
              period: "2016-2020",
              title: "技术积累期",
              events: [
                "参加前端培训",
                "在优启工作4年",
                "从7.5k涨到16k"
              ],
              insights: "技术能力快速提升,但开始感觉成长瓶颈"
            },
            {
              period: "2021-2023",
              title: "迷茫期",
              events: [
                "在神策数据工作",
                "开始探索户外活动",
                "学习心理学相关知识"
              ],
              insights: "寻找工作以外的兴趣和意义"
            }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: "探索可能性",
    icon: Compass,
    sections: [
      {
        title: "职业探索",
        content: [
          {
            title: "程序员",
            description: "继续程序员生涯，但以更轻松的方式，为自己的项目留出时间和精力",
            timeline: [
              "第一年：找个轻松的工作，开始做自己的项目",
              "第二年：逐步减少工作时间，增加自己项目的投入",
              // ... 更多时间线
            ],
            evaluation: {
              resources: 20,
              likeability: 50,
              confidence: 50,
              coherence: 60
            }
          },
          // ... 其他职业选项
        ]
      }
    ]
  },
  {
    id: 3,
    title: "原型验证",
    icon: Target,
    sections: [
      {
        title: "体验向往生活30%",
        content: [
          "边看面试题，边做自己的软件",
          "找个不忙的远程工作，锻炼独立开发能力",
          "将探索自我与工作结合"
        ]
      }
    ]
  }
];

export default function LifeDesign() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">人生设计</h1>

      {designSteps.map((step) => (
        <section key={step.id} className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <step.icon className="w-6 h-6" />
            <h2 className="text-2xl font-semibold">{step.title}</h2>
          </div>

          {step.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-medium mb-4">{section.title}</h3>

              {/* 根据不同section类型渲染不同内容 */}
              {section.title === "仪表盘" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.content.map((item, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-medium">{item.category}</h4>
                        <span className="text-2xl font-bold">{item.satisfaction}/10</span>
                      </div>
                      <p className="text-gray-600 mb-2">{item.status}</p>
                      {item.problems && (
                        <p className="text-red-600">待解决: {item.problems}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {section.title === "指南针" && (
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">工作观</h4>
                    <p>{section.content.workView}</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">人生观</h4>
                    <p>{section.content.lifeView}</p>
                  </div>
                </div>
              )}

              {section.title === "人生日志" && (
                <div className="space-y-6">
                  {/* 活动列表 */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-4">活动列表</h4>
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
                          {section.content.activities.map((category) =>
                            category.items.map((item, i) => (
                              <tr key={i} className="border-t">
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2">{item.engagement}</td>
                                <td className="px-4 py-2">{item.energy}</td>
                                <td className="px-4 py-2">{item.energyValue || '-'}</td>
                                <td className="px-4 py-2">{item.keywords?.join(', ') || '-'}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 反思总结 */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-4">反思总结</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {section.content.reflections.map((reflection, i) => (
                        <li key={i} className="text-gray-700">{reflection}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 人生历史时间线 */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-4">人生历史</h4>
                    <div className="space-y-6">
                      {section.content.lifeHistory.map((period, i) => (
                        <div key={i} className="relative pl-8 border-l-2 border-gray-200">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></div>
                          <div className="mb-2">
                            <span className="text-sm text-gray-500">{period.period}</span>
                            <h5 className="text-lg font-medium">{period.title}</h5>
                          </div>
                          <ul className="list-disc list-inside space-y-1 mb-2">
                            {period.events.map((event, j) => (
                              <li key={j} className="text-gray-700">{event}</li>
                            ))}
                          </ul>
                          <p className="text-gray-600 italic">{period.insights}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {section.title === "职业探索" && (
                <div className="space-y-6">
                  {section.content.map((career, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <h4 className="text-lg font-medium mb-3">{career.title}</h4>
                      <p className="text-gray-600 mb-4">{career.description}</p>

                      {/* 时间线 */}
                      <div className="mb-4">
                        <h5 className="font-medium mb-2">发展路径</h5>
                        <ul className="list-disc list-inside space-y-2">
                          {career.timeline.map((step, j) => (
                            <li key={j} className="text-gray-700">{step}</li>
                          ))}
                        </ul>
                      </div>

                      {/* 评估指标 */}
                      <div>
                        <h5 className="font-medium mb-2">方案评估</h5>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <span className="text-sm text-gray-500">物力</span>
                            <div className="text-xl font-bold">{career.evaluation.resources}</div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">喜欢程度</span>
                            <div className="text-xl font-bold">{career.evaluation.likeability}</div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">自信心</span>
                            <div className="text-xl font-bold">{career.evaluation.confidence}</div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">一致性</span>
                            <div className="text-xl font-bold">{career.evaluation.coherence}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.title === "体验向往生活30%" && (
                <div className="border rounded-lg p-4">
                  <ul className="list-disc list-inside space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 其他section类型的渲染逻辑... */}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
} 