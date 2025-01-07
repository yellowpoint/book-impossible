"use client";

import { Brain, Heart, Target, AlertCircle, Lightbulb, History, Filter, Users, ArrowUpRight, Compass, Globe } from "lucide-react";

const bookInfo = {
  title: "斯坦福大学人生设计课",
  meta: {
    author: "Bill Burnett / Dave Evans",
    publisher: "中信出版社",
    date: "2023-06-25",
    status: "阅读中",
    tags: ["人生设计", "职业规划"],
    recommendation: "来自海诗的推荐: https://mp.weixin.qq.com/s/jt2crjP3WMBQOkj4f1INhQ"
  }
};

const designSteps = [
  {
    id: 1,
    title: "了解自己",
    icon: Brain,
    sections: [
      {
        title: "仪表盘",
        subtitle: "健康/工作/娱乐/爱",
        content: [
          {
            category: "工作",
            satisfaction: 4,
            status: "之前主业是前端开发，现在待业，以及周末兼职带带户外队...",
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
            status: "身体经常运动还行吧就是小肥了些，心理现在主要是焦虑迷茫...",
            problems: "减肥锻炼，心理如何更平稳？"
          }
        ]
      },
      {
        title: "指南针",
        subtitle: "工作观与人生观",
        content: {
          workView: {
            title: "工作观",
            questions: [
              {
                question: "为什么工作？",
                answer: "为了赚钱生存，为了实现自我的价值，为了看上去是符合社会主流的正常人，为了安全感"
              },
              {
                question: "工作意味着什么？",
                answer: "意味着有明确目标、有规律生活、有外界反馈"
              },
              // ... 更多工作观问题
            ]
          },
          lifeView: {
            title: "人生观",
            questions: [
              {
                question: "我为什么在这里？",
                answer: "不知道，一路闭着眼被拉或被推到了这里，被鞭子抽到这"
              },
              {
                question: "生活的意义或者目的是什么？",
                answer: "当下的幸福"
              }
              // ... 更多人生观问题
            ]
          }
        }
      },
      {
        title: "人生日志",
        subtitle: "记录活动投入度与能量",
        content: {
          activities: [
            {
              date: "2023-06-25",
              items: [
                {
                  time: "早上",
                  name: "处理群里问题",
                  engagement: 6,
                  energy: -5,
                  notes: "聊天为啥会让我有压力，不知道说什么，怕没说好"
                },
                {
                  time: "中午",
                  name: "打游戏",
                  engagement: 9,
                  energy: -4
                },
                {
                  time: "晚上",
                  name: "朋友聚餐",
                  engagement: 10,
                  energy: 9
                }
                // ... 更多活动
              ]
            }
          ],
          patterns: [
            "线上沟通容易耗能，面对面交流反而充满能量",
            "创造性活动和明确目标的任务更容易投入",
            "户外运动和社交活动能带来正向能量"
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
        title: "词汇联想",
        subtitle: "根据关键词进行多层联想",
        content: {
          keywords: ["户外", "编程", "创造", "探索", "自由"],
          mindMap: {
            center: "人生方向",
            branches: [
              {
                key: "户外探索",
                connections: ["旅行", "带队", "露营", "摄影"]
              },
              {
                key: "技术创造",
                connections: ["编程", "独立开发", "工具设计"]
              },
              {
                key: "心理成长",
                connections: ["正念", "冥想", "心理学"]
              }
            ]
          }
        }
      },
      {
        title: "人生计划",
        subtitle: "设想三种五年计划",
        content: [
          {
            title: "继续现有路线",
            description: "技术发展路线",
            timeline: [
              {
                year: 1,
                goals: [
                  "在中小公司工作,积累经验",
                  "准备大厂面试",
                  "开始做个人项目"
                ]
              },
              // ... 更多年份
            ],
            evaluation: {
              resources: 70,
              likeability: 60,
              confidence: 80,
              coherence: 75
            }
          },
          {
            title: "转型路线",
            description: "户外探索+技术结合",
            timeline: [
              {
                year: 1,
                goals: [
                  "找个轻松的远程技术工作",
                  "发展户外带队业务",
                  "开发户外相关工具"
                ]
              }
            ],
            evaluation: {
              resources: 50,
              likeability: 85,
              confidence: 60,
              coherence: 70
            }
          }
          // ... 第三个方案
        ]
      }
    ]
  },
  {
    id: 3,
    title: "了解世界",
    icon: Globe,
    sections: [
      {
        title: "人生采访",
        subtitle: "采访正在过向往生活的人",
        content: {
          interviews: [
            {
              person: "汪海诗",
              role: "内容创作者",
              questions: [
                {
                  q: "现在的热爱是什么？",
                  a: "目前来说我很喜欢做内容 因为我很喜欢思考和表达 无论是文字 视频 舞蹈 都是我向世界的表达方式"
                }
              ]
            }
          ]
        }
      },
      {
        title: "原型体验",
        subtitle: "体验30%的向往生活",
        content: {
          experiments: [
            {
              title: "远程工作+户外探索",
              duration: "2周",
              activities: [
                "找个咖啡馆远程办公",
                "周末带队徒步",
                "开发户外小工具"
              ],
              reflections: [
                "工作节奏更自由",
                "能量更充沛",
                "但需要更好的时间管理"
              ]
            }
          ]
        }
      }
    ]
  }
];

export default function LifeDesign() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{bookInfo.title}</h1>
        <div className="mt-2 text-gray-600">
          <p>作者: {bookInfo.meta.author}</p>
          <p>出版: {bookInfo.meta.publisher}</p>
          <p>日期: {bookInfo.meta.date}</p>
        </div>
      </div>

      {designSteps?.map((step) => (
        <section key={step.id} className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            {step.icon && <step.icon className="w-6 h-6" />}
            <h2 className="text-2xl font-semibold">{step.title}</h2>
          </div>

          {step.sections?.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-medium mb-4">
                {section.title}
                {section.subtitle && (
                  <span className="text-gray-500 text-base ml-2">
                    {section.subtitle}
                  </span>
                )}
              </h3>

              {/* 仪表盘部分 */}
              {section.title === "仪表盘" && section.content && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.content.map((item, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-medium">{item.category}</h4>
                        <span className="text-2xl font-bold">
                          {item.satisfaction}/10
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{item.status}</p>
                      {item.problems && (
                        <p className="text-red-600">待解决: {item.problems}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* 指南针部分 */}
              {section.title === "指南针" && section.content && (
                <div className="space-y-4">
                  {section.content.workView && (
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-4">{section.content.workView.title}</h4>
                      <div className="space-y-3">
                        {section.content.workView.questions?.map((q, i) => (
                          <div key={i}>
                            <p className="font-medium text-gray-700">{q.question}</p>
                            <p className="text-gray-600 pl-4">{q.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {section.content.lifeView && (
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-4">{section.content.lifeView.title}</h4>
                      <div className="space-y-3">
                        {section.content.lifeView.questions?.map((q, i) => (
                          <div key={i}>
                            <p className="font-medium text-gray-700">{q.question}</p>
                            <p className="text-gray-600 pl-4">{q.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 人生日志部分 */}
              {section.title === "人生日志" && section.content && (
                <div className="space-y-6">
                  {section.content.activities?.map((day, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <h4 className="font-medium mb-4">{day.date}</h4>
                      <div className="space-y-3">
                        {day.items?.map((item, j) => (
                          <div key={j} className="flex justify-between items-start">
                            <div>
                              <span className="text-gray-500">{item.time}</span>
                              <p className="font-medium">{item.name}</p>
                              {item.notes && (
                                <p className="text-gray-600 text-sm">{item.notes}</p>
                              )}
                            </div>
                            <div className="text-right">
                              <div>投入度: {item.engagement}</div>
                              <div className={item.energy >= 0 ? "text-green-600" : "text-red-600"}>
                                能量: {item.energy}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {section.content.patterns && (
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-4">规律发现</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {section.content.patterns.map((pattern, i) => (
                          <li key={i} className="text-gray-700">{pattern}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

// 添加辅助函数用于计算思维导图分支位置
function getBranchPosition(index, total) {
  const angle = (360 / total) * index;
  const radius = 160; // 可以调整以改变分支到中心的距离
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return `transform translate-x-[${x}px] translate-y-[${y}px]`;
} 