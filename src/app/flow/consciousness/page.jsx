"use client";

import { Brain, Eye, Filter, Target, Heart, Sparkles, Zap, Lightbulb } from "lucide-react";
import FlowPageLayout from "@/components/flow-page-layout";

const sections = [
  {
    title: "意识是什么？",
    icon: Brain,
    content: [
      {
        text: "意识是某些我们能感觉到，而且有能力引导其方向的事件，诸如情绪、感觉、思想、企图等。",
        highlight: true
      },
      {
        text: "意识虽然像一面镜子，反映外界与神经系统之间的变化，但它是选择性的反映，会主动塑造事件，并把主观的真实加诸事件之上。"
      },
      {
        text: "意识能控制自己的情绪，但也不是万能的，什么知晓过去与未来、意念折弯勺子啥的，暂无证据，对现在的问题来说，这些超能力也不重要。"
      },
      {
        text: "大致而言，我们顶多能同时应付七组资讯，诸如分辨声音、影像、情绪或思想中可辨识的弦外之音等。"
      },
      {
        text: "无论如何，每个人能经历的事情就这么多，所以准许哪些资讯进入意识就显得格外重要。实际上，这就决定了生活的内涵与品质。",
        emphasis: true
      }
    ],
    color: "bg-blue-500",
  },
  {
    title: "注意力是什么？",
    icon: Eye,
    content: [
      {
        text: "注意力决定哪些资讯进入意识，控制意识最明显的指标就是能随心所欲地集中注意力，不因任何事情而分心。",
        highlight: true
      },
      {
        text: "若能做到这一点，就能在日常生活中找到乐趣。",
        emphasis: true
      }
    ],
    color: "bg-purple-500",
  },
  {
    title: "资讯无好坏",
    icon: Filter,
    content: [
      {
        text: "我们接收的每一条资讯本身是中性的，意识的阐释决定了其好坏，判断标准是与我们目标的关系。",
        highlight: true
      },
      {
        subtitle: "精神熵",
        text: `每当资讯对意识的目标构成威胁，就会发生内在失序的现象，也可称之为"精神熵"，它会导致自我解体，注意力难以集中。`
      },
      {
        subtitle: "心流体验",
        text: `当发觉收到的资讯与目标亲和，精神能量就会源源不断，没有担心的必要，也无须猜疑自己的能力，可以投入全部的注意力，以求实现目标，我们把它称为"心流体验"。`
      },
      {
        subtitle: "资讯解读",
        text: "股市下跌的消息往往令银行家担忧，但对政治异议分子却可能是振奋人心的好消息。一条新资讯可能会使我们付出所有心力应付威胁，造成意识的失序；但它也可能强化我们的目标，激发出更多的精神能量。"
      },
      {
        text: "我们为保卫自我而战，对抗的是使意识失序的精神熵，这是一场控制注意力的斗争，那份深沉的快乐是严格的自律、集中注意力换来的。",
        emphasis: true
      }
    ],
    color: "bg-yellow-500",
  },
  {
    title: "外在条件与目标",
    icon: Target,
    content: [
      {
        text: "改善生活品质的主要策略有两种：一是使外在条件符合我们的目标；二是改变我们体验外在条件的方式，使它与我们的目标相契合。",
        highlight: true
      },
      {
        subtitle: "改变外在条件",
        text: "比方说，安全感是幸福的一大要素，装一组坚固的锁、搬到治安较好的地区等都不失为增进安全感的方法，目的都是要使环境与我们的目标更契合。"
      },
      {
        subtitle: "改变主观体验",
        text: "另一个则是调整对安全感的定义，如果我们并不期望拥有绝对的安全感，承认危险不可避免，在一个不可预测的世界里，就照样能活得很愉快，不安全感对幸福构成的威胁也会小得多。"
      },
      {
        subtitle: "两种策略的平衡",
        text: "然而，这两种策略都不能单独采用。改变外在条件一开始可能很奏效，但一个人若控制不住自己的意识，过去的恐惧与欲望很快就又会浮现，并唤醒旧有的焦虑，即使到加勒比海买一座小岛，满布武装保镖和警犬，也不能创造内心的安全感。"
      },
      {
        text: "与其为如何赚100万或结交有权有势的朋友而烦恼，不如把心思放在使日常生活更和谐充实上，这才是一条比追求象征物更直接的道路。",
        emphasis: true
      }
    ],
    color: "bg-green-500",
  },
  {
    title: "享乐与乐趣",
    icon: Heart,
    content: [
      {
        subtitle: "享乐",
        text: "享乐，是意识中的资讯告诉我们已经达到生物程序或社会制约的要求时，所产生的一种满足感。无须耗费精神能量，只要大脑特定中枢受到电击或药物的刺激，就能产生享受的快感，但转瞬即逝，不能带动自我成长。",
        highlight: true
      },
      {
        subtitle: "乐趣",
        text: "乐趣，是指一个人不仅需求和欲望得到满足，更超越既有制约，完成了一些意料之外的事。具有向前发展的特性，并蕴涵新鲜感和成就感，让人回味无穷。必须运用高度的注意力，如打网球、看书、谈话，若不全神贯注，就会觉得索然无味，毫无乐趣可言。",
        highlight: true
      },
      {
        subtitle: "享乐转化为乐趣",
        text: "享乐的体验也能带来乐趣，如吃喝对每个人来说都是一种享受，但要想从中得到乐趣却比较困难。唯有在吃喝时投入足够多的注意力，分辨各种不同口味、作料之间细微差别的人，才会跟美食家一样，觉得这件事乐趣无穷。"
      },
      {
        text: "所以，核心不在做什么，而是做的时候有没有投入精神能量，让自己全神贯注。",
        emphasis: true
      }
    ],
    color: "bg-pink-500",
  },
  {
    title: "小结",
    icon: Lightbulb,
    content: [
      {
        text: "意识是所有内外资讯的加工厂，如看到的花、一闪而过的念头、突然升起的恐惧等。注意力是门卫，决定哪些资讯进入意识。",
        highlight: true
      },
      {
        text: "快乐或痛苦取决于资讯是否有助于自身目标，资讯本身无好坏，想要快乐，要么让客观资讯符合目标，要么改变主观对资讯的解释，二者需结合。"
      },
      {
        text: "只满足本能或社会要求的目标，得转瞬即逝的享乐型快乐；在此基础上投入精神能量，全神贯注其中，便可得回味无穷的乐趣型快乐。",
        emphasis: true
      },
      {
        text: "下一章研究如何全神贯注。",
        emphasis: true
      }
    ],
    color: "bg-indigo-500",
  },
];

export default function ConsciousnessPage() {
  return <FlowPageLayout title="控制意识" sections={sections} />;
} 