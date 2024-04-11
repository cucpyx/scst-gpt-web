import { BuiltinMask } from "./typing";

export const EN_MASKS: BuiltinMask[] = [
  {
    avatar: "1f916",
    name: "Engilsh prompt title 1",
    context: [
      {
        id: "emask-1-0",
        role: "system",
        content:
          'sys message 1',
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4",
      temperature: 0.3,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480410,
  },
  
];
