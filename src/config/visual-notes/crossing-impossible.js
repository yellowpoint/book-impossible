export const crossingImpossible = {
  appState: {
    viewBackgroundColor: "transparent",
    theme: "light",
    language: "zh-CN",
  },
  elements: [
    // 中心主题
    {
      id: "center",
      type: "rectangle",
      x: 400,
      y: 200,
      width: 120,
      height: 60,
      backgroundColor: "#FFB6C1",
      strokeColor: "#FF69B4",
      fillStyle: "solid",
      strokeWidth: 2,
      roundness: { type: 3 },
      text: "跨越不可能",
      fontSize: 20,
      textAlign: "center",
      verticalAlign: "middle",
    },
    // 学习力分支
    {
      id: "learning",
      type: "ellipse",
      x: 200,
      y: 100,
      width: 100,
      height: 50,
      backgroundColor: "#B0E0E6",
      strokeColor: "#4682B4",
      fillStyle: "solid",
      strokeWidth: 2,
      text: "学习力",
      fontSize: 16,
      textAlign: "center",
      verticalAlign: "middle",
    },
    // 创造力分支
    {
      id: "creativity",
      type: "ellipse",
      x: 600,
      y: 100,
      width: 100,
      height: 50,
      strokeColor: "#228B22",
      backgroundColor: "#98FB98",
      fillStyle: "solid",
      strokeWidth: 2,
      text: "创造力",
      fontSize: 16,
      textAlign: "center",
      verticalAlign: "middle",
    },
    // 心流分支
    {
      id: "flow",
      type: "ellipse",
      x: 200,
      y: 300,
      width: 100,
      height: 50,
      strokeColor: "#8B008B",
      backgroundColor: "#DDA0DD",
      fillStyle: "solid",
      strokeWidth: 2,
      text: "心流",
      fontSize: 16,
      textAlign: "center",
      verticalAlign: "middle",
    },
    // 动机分支
    {
      id: "motivation",
      type: "ellipse",
      x: 600,
      y: 300,
      width: 100,
      height: 50,
      strokeColor: "#DAA520",
      backgroundColor: "#F0E68C",
      fillStyle: "solid",
      strokeWidth: 2,
      text: "动机",
      fontSize: 16,
      textAlign: "center",
      verticalAlign: "middle",
    },
    // 连接线
    {
      id: "arrow-learning",
      type: "arrow",
      x: 460,
      y: 230,
      points: [
        [0, 0],
        [-160, -100],
      ],
      strokeColor: "#4682B4",
      strokeWidth: 2,
      startBinding: {
        elementId: "center",
        focus: -0.5,
        gap: 1
      },
      endBinding: {
        elementId: "learning",
        focus: 0.5,
        gap: 1
      },
    },
    {
      id: "arrow-creativity",
      type: "arrow",
      x: 460,
      y: 230,
      points: [
        [0, 0],
        [140, -100],
      ],
      strokeColor: "#228B22",
      strokeWidth: 2,
      startBinding: {
        elementId: "center",
        focus: -0.5,
        gap: 1
      },
      endBinding: {
        elementId: "creativity",
        focus: 0.5,
        gap: 1
      },
    },
    {
      id: "arrow-flow",
      type: "arrow",
      x: 460,
      y: 230,
      points: [
        [0, 0],
        [-160, 100],
      ],
      strokeColor: "#8B008B",
      strokeWidth: 2,
      startBinding: {
        elementId: "center",
        focus: -0.5,
        gap: 1
      },
      endBinding: {
        elementId: "flow",
        focus: 0.5,
        gap: 1
      },
    },
    {
      id: "arrow-motivation",
      type: "arrow",
      x: 460,
      y: 230,
      points: [
        [0, 0],
        [140, 100],
      ],
      strokeColor: "#DAA520",
      strokeWidth: 2,
      startBinding: {
        elementId: "center",
        focus: -0.5,
        gap: 1
      },
      endBinding: {
        elementId: "motivation",
        focus: 0.5,
        gap: 1
      },
    },
  ],
  UIOptions: {
    canvasActions: {
      loadScene: false,
      saveAsImage: true,
      saveToActiveFile: false,
      export: false,
      toggleTheme: false,
    },
    defaultSidebarDockedPreference: true,
  }
}; 