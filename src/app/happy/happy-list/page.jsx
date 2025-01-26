"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const happyList = [
  {
    category: "居家享受",
    items: [
      "躺在床单刚刚洗过的床上",
      "感受阳光洒在脸上",
      "喝一杯新泡的茶或咖啡",
      "与一本好书相伴",
      "拥有属于自己的时间",
      "闻着新鲜面包的香味",
      "享受按摩",
      "享受沐浴后的洁净感觉",
      "在室内聆听雨声",
      "洗一个长长的热水澡",
      "使用新的清洁海绵",
      "享受刚刚整理好的房间",
      "烤蛋糕",
      "戳破气泡膜",
      "旁若无人地跳舞",
      "洗澡时唱歌",
      "穿上新袜子或新内衣",
      "在家中感到安全和温暖",
      "整理抽屉",
      `打开新瓶子时听到"啪"的一声`,
      "品尝巧克力"
    ]
  },
  {
    category: "户外活动",
    items: [
      "仰望天空",
      "闻刚割过的青草味",
      "到户外活动",
      "做一些运动",
      "看到狗把头伸出车窗外",
      "在海里游泳",
      "在拥挤的公交车或火车上抢到座位",
      "逛农贸市场"
    ]
  },
  {
    category: "购物乐趣",
    items: [
      "淘到便宜货",
      "逛书店",
      "抢购特价商品",
      "使用新文具"
    ]
  },
  {
    category: "社交娱乐",
    items: [
      "播放自己喜欢的歌曲",
      "工作结束后，打开你的下班留言",
      "赞美他人",
      "欣赏美丽的照片",
      "观看喜剧片段",
      "围桌共进晚餐",
      "深夜与朋友聊天",
      "计划假期或请客",
      "观看音乐表演或音乐视频",
      "重温喜爱的电影"
    ]
  },
  {
    category: "创造与成就",
    items: [
      "在待办事项清单上打钩",
      "亲手制作物件",
      "抚摸宠物",
      "照料植物",
      "绘画/涂鸦/填色"
    ]
  }
];

// 将所有项目展平为一个数组，方便随机选择
const allItems = happyList.reduce((acc, category) => {
  return [...acc, ...category.items.map(item => ({
    category: category.category,
    text: item
  }))];
}, []);

export default function HappyListPage() {
  const [highlightedItem, setHighlightedItem] = useState(null);

  const handleRandomHighlight = () => {
    const randomIndex = Math.floor(Math.random() * allItems.length);
    setHighlightedItem(allItems[randomIndex]);
  };

  useEffect(() => {
    handleRandomHighlight();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 text-pink-500" />
            <h1 className="text-3xl font-bold">好心情清单</h1>
          </div>
          <Button
            onClick={handleRandomHighlight}
            className="flex items-center gap-2"
          >
            <Shuffle className="h-4 w-4" />
            随机一个快乐
          </Button>
        </div>

        <p className="text-muted-foreground">
          做你喜欢的事情，即使你不能马上感觉到效果。不要局限于事情的大小，它可能只是像一滴水这么小，但一滴一滴就能汇成大海。
        </p>

        {highlightedItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-lg border border-yellow-500/50 bg-yellow-500/10 p-4"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span className="font-medium text-yellow-500">今日推荐的快乐：</span>
            </div>
            <p className="mt-2 text-lg">{highlightedItem.text}</p>
            <p className="mt-1 text-sm text-muted-foreground">来自：{highlightedItem.category}</p>
          </motion.div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {happyList.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border p-6 space-y-4"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-semibold">{category.category}</h2>
              </div>

              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className={`flex items-center gap-2 transition-colors duration-300 ${highlightedItem?.text === item ? 'bg-yellow-500/10 -mx-2 px-2 py-1 rounded' : ''
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${highlightedItem?.text === item ? 'bg-yellow-500' : 'bg-pink-500'
                      }`} />
                    <span className={`${highlightedItem?.text === item ? 'text-yellow-500' : 'text-muted-foreground'
                      }`}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 