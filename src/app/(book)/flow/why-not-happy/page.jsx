"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Target, AlertCircle, Lightbulb, History } from "lucide-react";

const sections = [
  {
    title: "为什么不快乐？",
    icon: AlertCircle,
    content: "宇宙不以人类为中心，世界不为快乐而设计。\n\n因为无止境的欲望，随着生活水准的提升，财富与权力使期望也迅速升高，我们对幸福的定义也越来越模糊，越不满足，提高生活品质成了一件永远没有尽头的苦役。\n\n其实只要我们在奋斗的过程中觉得愉快，设立新目标也没什么不好；但问题就在于一般人总把所有心力放在新目标上，不能享受现在，也因此与知足的快乐绝缘。",
    color: "bg-red-500",
  },
  {
    title: "反思生命",
    icon: Brain,
    content: '人渐渐长大，从满怀希望的无知少年，长成冷静沉稳的大人，他们早晚会面临一个疑问："这就是一切吗？"童年或许令人痛苦，青春期或许令人困惑，但对大多数人而言，痛苦与困惑的背后，至少还有个长大后一切会好转的希望，而这种希望使目标变得有意义。\n\n然而不可避免的是，浴室的镜子照出了第一根白发，多出的那几斤赘肉再也减不掉了，视力开始衰退，全身上下也冒出莫名其妙的疼痛。各种老化的迹象明白地告诉你："你的时间快到了，准备动身吧！"但难得有人这时候就已准备妥当。\n\n我们早晚会有所觉悟，发现这个富裕、科学昌明的复杂世界，根本不可能把幸福拱手奉上。',
    color: "bg-purple-500",
  },
  {
    title: "失效的方法",
    icon: Target,
    content: "觉悟来临时，每个人都以不同的方式面对：\n\n- 有些人继续追求更多所谓美好的东西\n- 有些人则选择直接对症下药\n- 有些人干脆投降认输，躲进自己的小天地\n- 也有越来越多心灵空虚无助的人纷纷求助于宗教\n\n上述这些解决方案都不再管用，我们生存的社会，物质享受虽已至巅峰，却仍受种种疑难杂症所苦。",
    color: "bg-yellow-500",
  },
  {
    title: "社会制约与本能冲动",
    icon: Heart,
    content: "在复杂的社会中求生，绝对有必要为实现外在目标暂时牺牲一时的满足，但不必因此而成为傀儡。\n\n最好的方法是不以社会的奖赏为念，试着以自己所能控制的奖赏取而代之。\n\n从社会制约下解放自我，最重要的步骤就是时时刻刻发掘每一事件中的回馈。\n\n但光是放纵本能的欲望，并不等于摆脱社会制约，我们还得超脱肉体的欲望，学习控制意识。",
    color: "bg-green-500",
  },
  {
    title: "看看老祖宗",
    icon: History,
    content: "生活的品质取决于控制意识的能力，这是人类早已知道的简单事实。\n\n古希腊的古典禁欲主义、基督教僧侣的苦修、印度瑜伽、中国道教及佛教禅宗、以及近年出现的心理分析，目的也是从本能冲动与社会制约下解放意识。\n\n如果人类真的几千年来一直懂得得到自由、控制自己生活的方法，为什么会在这方面毫无进展呢？\n- 首先，解放意识的知识，需要每个人自行从不断的尝试与错误中学习\n- 其次，控制意识的知识在文化背景改变时，也必须进行相应调整",
    color: "bg-blue-500",
  },
  {
    title: "小结",
    icon: Lightbulb,
    content: "我们从生活中得到的快乐，取决于心灵如何过滤与阐释日常体验。快乐与否，端视内心是否和谐，而与我们控制宇宙的能力毫无关系。\n\n控制意识才能控制体验的品质，任何在这方面最起码的进步都足以提升生活的品质，使生活更快乐、更有意义。\n\n在设法改善体验品质之前，下一章将了解下意识的运作方式以及体验的真正意义。",
    color: "bg-indigo-500",
  },
];

export default function WhyNotHappyPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        为什么不快乐
      </motion.h1>

      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-xl border bg-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`rounded-full p-2 ${section.color} bg-opacity-10`}>
              <section.icon className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">{section.title}</h2>
          </div>
          <div className="prose prose-sm max-w-none">
            {section.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-muted-foreground whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
} 