import { getParams } from "@/lib/utils";
import { streamText } from "ai";
import { NextResponse } from "next/server";
import { DEFAULT_MODEL, registry } from "../../providers";
export const maxDuration = 30;
export async function POST(request) {
  try {
    const { messages, model = DEFAULT_MODEL } = await getParams(request);

    // 验证输入
    if (!messages?.length) {
      return NextResponse.json(
        { error: "缺少必要参数" },
        { status: 400 },
      );
    }

    const llmModel = registry.languageModel(model);
    const response = streamText({
      model: llmModel,
      messages,
    });

    return response.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API 错误:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 },
    );
  }
} 