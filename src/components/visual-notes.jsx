"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Edit, Eye } from "lucide-react";
import { crossingImpossible } from "@/config/visual-notes/crossing-impossible";

export function VisualNotes({ config = crossingImpossible }) {
  const [mounted, setMounted] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    if (mounted && window.ExcalidrawLib) {
      const App = () => {
        return React.createElement(
          "div",
          {
            style: { height: "500px" },
          },
          React.createElement(ExcalidrawLib.Excalidraw, {
            initialData: {
              ...config,
              appState: {
                ...config.appState,
                viewModeEnabled: !isEditable,
              },
            },
            viewModeEnabled: !isEditable,
            langCode: config.appState.language,
            renderTopRightUI: () => {
              return React.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                  },
                },
                null
              );
            },
          })
        );
      };

      const excalidrawWrapper = document.getElementById("excalidraw-container");
      const root = ReactDOM.createRoot(excalidrawWrapper);
      root.render(React.createElement(App));
    }
  }, [mounted, isEditable, config]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsEditable(!isEditable)}
          className="flex items-center gap-2"
        >
          {isEditable ? (
            <>
              <Eye className="h-4 w-4" />
              查看模式
            </>
          ) : (
            <>
              <Edit className="h-4 w-4" />
              编辑模式
            </>
          )}
        </Button>
      </div>
      <>
        <Script
          src="https://unpkg.com/react@18.2.0/umd/react.development.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/@excalidraw/excalidraw/dist/excalidraw.development.js"
          strategy="beforeInteractive"
        />
        <div
          id="excalidraw-container"
          className="h-[500px] w-full rounded-xl border bg-card"
        />
      </>
    </div>
  );
} 