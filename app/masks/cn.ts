import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  // prompt in Chinese
  {
    avatar: "1f916",
    name: "prompt title 1",
    context: [
      {
        id: "mask-1-0",
        role: "system",
        content: "sys message 1",
        date: "",
      },
      {
        id: "mask-1-1",
        role: "user",
        content: "usr message 1",
        date: "",
      },
      {
        id: "mask-1-2",
        role: "assistant",
        content: "gpt message 1",
        date: "",
      },
      {
        id: "mask-1-3",
        role: "system",
        content: "sys message 2",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo", // 默认模型
      temperature: 1, // 随机性
      max_tokens: 2000, // 单次回复最大 tokens 限制
      presence_penalty: 0, // 话题新鲜度
      frequency_penalty: 0, // 重复词惩罚
      sendMemory: true, // 附带历史消息
      historyMessageCount: 32, // 历史消息附带条数
      compressMessageLengthThreshold: 1000, // 历史消息阈值
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480510,
  },
  {
    avatar: "1f916",
    name: "prompt title 2",
    context: [
      {
        id: "mask-2-0",
        role: "user",
        content: "usr message 1",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-turbo-preview", // 默认模型
      temperature: 1, // 随机性
      max_tokens: 2000, // 单次回复最大 tokens 限制
      presence_penalty: 0, // 话题新鲜度
      frequency_penalty: 0, // 重复词惩罚
      sendMemory: true, // 附带历史消息
      historyMessageCount: 32, // 历史消息附带条数
      compressMessageLengthThreshold: 1000, // 历史消息阈值
    },
    lang: "cn",
    builtin: true,
    createdAt: 1688899480510,
  },
];
