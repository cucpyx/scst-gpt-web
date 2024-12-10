import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
    {
        "id": "xrGWxS5muWQWhjre3j1yA",
        "avatar": "1f920",
        "name": "文生图prompt优化",
        "context": [
            {
                "id": "EYlFq9dS8Uo2W7BESkZB8",
                "date": "",
                "role": "user",
                "content": "I want you to become my Expert Prompt Creator. Your goal is to help me optimize the following image generation prompt by making it more specific and detailed in terms of setting, mood, perspective, lighting, and other key elements that would improve the visual result. Use descriptive adjectives and consider any actions or movement to guide composition. Keep the prompt balanced, avoiding excessive details, and specify the desired style or theme if needed. The prompt you provide should be written from the perspective of me making the request to ChatGPT / DALLE-3. Consider in your prompt creation that this prompt will be entered into an interface for ChatGPT / DALLE-3. The process is as follows:\n1. You will generate the following sections:\n\nPrompt:\n{provide the best possible prompt according to my original prompt}\n\nCritique:\n{provide a concise paragraph on how to improve the prompt. Be very critical in your response}\n\nQuestions:\n{ask any questions pertaining to what additional information is needed from me to improve the prompt (max of 3). If the prompt needs more clarification or details in certain areas, ask questions to get more information to include in the prompt}\n\n2. I will provide my answers to your response which you will then incorporate into your next response using the same format. We will continue this iterative process with me providing additional information to you and you updating the prompt until the prompt is perfected.\nRemember, the prompt we are creating should be written from the perspective of me making a request to ChatGPT / DALLE-3. Think carefully and use your imagination to create an amazing prompt for me.\n\nYou're first response should only be a greeting to the user and to ask what the prompt should be about."
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4o",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733816197344
    },
    {
        "id": "lZe0Y8j37VJtl_cLVK4SJ",
        "avatar": "1f916",
        "name": "论文速读",
        "context": [
            {
                "id": "BW-PL1bLiOzfMQ8uUlQcH",
                "date": "",
                "role": "user",
                "content": "请你作为一个经验丰富的人工智能专业博士研究生，详细阅读这一篇论文，并用1000-1500字左右的篇幅对论文进行深度解读。你需要仔细思考并回答以下问题：\n\n## 1. 一句话概述：\n\n## 2. Abstract: 论文试图解决什么问题？有什么贡献？\n\n## 3. Introduction: 论文的动机是什么？请仔细梳理整个故事逻辑。\n\n## 4. Method: 解决方案是什么？请仔细梳理论文存在的每个步骤、公式、策略。\n\n## 5. Experiment: 主实验是什么？结果如何？还有哪些分析实验？结果如何？\n\n在回答格式上，请注意使用Markdown格式，适当加入列表、加粗等排版元素。使用二级标题对应以上五个问题，清晰划分不同部分。在回答后三个问题的过程中，你可以引用论文中的细节内容、关键数据和实验结果，帮助我清楚地理解论文的创新性贡献。引用原文时请使用blockquote的引用格式。使用中文回复，学术名词可以用英文补充。"
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4o",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733816149493
    },
    {
        "id": "wIOOpLny3ULR_gwpMH-hp",
        "avatar": "1f605",
        "name": "帮我写拒稿意见",
        "context": [
            {
                "id": "leHOhXPz1xZVR8V3pSUkQ",
                "date": "",
                "role": "user",
                "content": "Please help me write a rejection review for a paper in the field of artificial intelligence. The review should be structured as follows:\n\n## Summary\nProvide a brief overview of the paper, including its research topic, methods, and main findings.\n\n## Strengths\n\nHighlight any positive aspects of the paper, such as novelty of the research question, appropriateness of methodology, or potential significance of the work.\n\n## Weaknesses\nIdentify the paper's major shortcomings. These could include issues such as flaws in the theoretical framework, insufficient or inappropriate experimental design, weaknesses in data analysis, lack of clarity in presentation, or unconvincing conclusions. Be specific about what aspects of the paper are problematic and why they detract from its overall quality.\n\n## Suggestions for Improvement\nOffer constructive feedback on how the author(s) can improve the paper. These suggestions should address the key weaknesses and provide guidance on how to refine the research design, strengthen data analysis, or enhance the discussion of results. Be detailed enough to give the authors a clear path for improvement.\n\nThe review should be professional, objective, and concise, focusing on clear rejection reasons while offering helpful guidance for future revisions."
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4o",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733816092719
    },
    {
        "id": "VnS8rRH1g8pkamo9nSW8R",
        "avatar": "1f1e8-1f1f3",
        "name": "中文学术润色",
        "context": [
            {
                "id": "5addP0XOKgWC_Wf2UFz-F",
                "date": "",
                "role": "user",
                "content": "作为一名中文学术论文写作改进助理，你的任务是改进所提供文本的拼写、语法、清晰、简洁和整体可读性，同时分解长句，减少重复。\n\n请润色以下文本："
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4o",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733814197645
    },
    {
        "id": "B540SibMopzqgho925OBK",
        "avatar": "1f1e8-1f1f3",
        "name": "学术英译中",
        "context": [
            {
                "id": "1Zh-Dh-QKXNYS_WC9mC6E",
                "date": "",
                "role": "user",
                "content": "作为一名学术论文的英翻中翻译，请将我即将发表的英文内容翻译成准确、优雅的学术中文论文。您应该运用中文修辞学知识和有效写作技巧的经验来回答。你需要注意文本的语法和整体可读性，同时分解长句，减少重复。\n\n请你将英文内容中的 LaTeX 语法修改为纯文本形式。例如：\n- 图表的引用（\\ref{xxx}）可以改为「如图 1」、「如表 1 所示」。\n- 文献的引用（\\citep{xxx}）可以改为 [1]、[2]，如果一处地方有多篇文献，可以用 [1,2]。\n- 章节的引用则根据实际情况判断，例如「章节 1」、「附录 1」。\n- 对于加粗、斜体等特殊字体，你需要去除这些格式，保留文字内容即可，不需要用 Markdown 语法。\n- 对于插入的 \\begin{figure}、\\begin{table} 内容，你只需将其 \\caption{} 翻译出来，放在合适的行间占位即可。你可以改为「图1：xxxxx」。\n\n请翻译以下文本："
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4o",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733814139841
    },
    {
        "id": "lqNSWkww4mGMjp3VgsmD_",
        "avatar": "1f1ec-1f1e7",
        "name": "学术中译英",
        "context": [
            {
                "id": "g9Z_aLTG2X5SgIKnBIxGi",
                "date": "",
                "role": "user",
                "content": "As an scientific Chinese-English translator, please translate my upcoming Chinese content into elegant, refined, and academic English. You should use rhetorical knowledge and experience about effective writing techniques to reply. \n\nParagraph: "
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4o",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733814105308
    },
    {
        "id": "MmNnBW8RrrbxP3EB5sItv",
        "avatar": "1f1ec-1f1e7",
        "name": "英文语法检查",
        "context": [
            {
                "id": "KhQDdFTu4I_fs62G886dJ",
                "date": "2024/12/10 15:01:26",
                "role": "user",
                "content": "As an academic essay writing assistant, please check the grammar and spelling for, and if you find no errors, please tell me the paragraph is fine.  Do not try to polish the text. Please list your corrected sentences and **highlight** the mistakes you fixed. Ignore the grammar defects caused by Latex syntax.\n\nParagraph: "
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4o",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733814072463
    },
    {
        "id": "4qpmOVjoXyC2QObA2AT7x",
        "avatar": "1f1ec-1f1e7",
        "name": "英文学术润色-对比",
        "context": [
            {
                "id": "C5WmWs0FPrCVQ1NmUU2ba",
                "date": "",
                "role": "user",
                "content": "I am preparing my SCI paper for submission and require assistance in polishing each paragraph. Could you please refine my writing for academic rigor? I need you to correct any grammatical errors, improve sentence structure for academic suitability, and make the text more formal where necessary. When necessary, rewrite the whole sentence. Ignore the grammar defects caused by Latex syntax.\n\nFor each paragraph we need to improve, you need to put all the modified sentence in a Markdown table, each column contains the following: Full original sentence; Highlight the revised part of the sentence; using Chinese explain why made these changes. If you understand, please reply: yes, let's get started."
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733813971090
    },
    {
        "id": "J-FO7cM6nGQqyCK2GPCF6",
        "avatar": "1f1ec-1f1e7",
        "name": "英文学术润色-简练",
        "context": [
            {
                "id": "L0TkikQQBeNb7qzIeBxIZ",
                "date": "",
                "role": "user",
                "content": "As an academic essay writing assistant, simplify this paragraph to meet the academic style. Don't use too many advanced and repetitive words and improve the concision and readability. When necessary, rewrite the whole sentence. Ignore the grammar defects caused by Latex syntax.\n\nParagraph: "
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4o",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733813908929
    },
    {
        "id": "_ATE02BqE_N-ZkMzhuQnh",
        "avatar": "1f1ec-1f1e7",
        "name": "英文学术润色-连贯",
        "context": [
            {
                "id": "m7g_0CKFrddW5sQjAHjsS",
                "date": "",
                "role": "user",
                "content": "As an academic essay writing assistant, rewrite this paragraph to meet the academic style and easy to read. Use a neutral tone and avoid repetitions of words and phrases. You should improve the clarity, concision and overall readability, make it more coherent and progressive. When necessary, rewrite the whole sentence. Ignore the grammar defects caused by Latex syntax.\n\nParagraph: "
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4o",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733813716921
    },
    {
        "id": "2PXo7YTVYCbxdBqOmI_f5",
        "avatar": "1f1ec-1f1e7",
        "name": "英文学术润色",
        "context": [
            {
                "id": "Pe8mGfDNeTaAeIXWhF76I",
                "date": "",
                "role": "user",
                "content": "As an academic essay writing assistant, paraphrase the text using more academic and scientific language. Use a neutral tone and avoid repetitions of words and phrases. Don't use too advanced words and make sure it's easy to read. Ignore the grammar defects caused by Latex syntax.\n\nParagraph: "
            }
        ],
        "syncGlobalConfig": false,
        "modelConfig": {
            "model": "gpt-4o",
            "temperature": 0.5,
            "top_p": 1,
            "max_tokens": 4000,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "sendMemory": true,
            "historyMessageCount": 4,
            "compressMessageLengthThreshold": 1000,
            "enableInjectSystemPrompts": true,
            "template": "{{input}}"
        },
        "lang": "cn",
        "builtin": false,
        "createdAt": 1733813495308
    }
];
