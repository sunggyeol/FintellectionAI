"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LightningBoltIcon, MagicWandIcon } from "@radix-ui/react-icons";
import {
  AtomIcon,
  BrainIcon,
  FlameIcon,
  Rabbit,
  RabbitIcon,
  SettingsIcon,
  SparklesIcon,
  WandSparklesIcon,
} from "lucide-react";
import { useConfigStore, useChatStore } from "@/stores";
import { ChatModel } from "../../generated";
import { isCloudModel, isLocalModel } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import _ from "lodash";
import { env } from "@/env.mjs";

type Model = {
  name: string;
  description: string;
  value: string;
  smallIcon: React.ReactNode;
  icon: React.ReactNode;
};

export const modelMap: Record<ChatModel, Model> = {
  [ChatModel.GPT_4O_MINI]: {
    name: "Fast",
    description: "OpenAI/GPT-4o-mini",
    value: ChatModel.GPT_4O_MINI,
    smallIcon: <RabbitIcon className="w-4 h-4 text-cyan-500" />,
    icon: <RabbitIcon className="w-5 h-5 text-cyan-500" />,
  },
  [ChatModel.LLAMA_3_1_405B]: {
    name: "Hyper",
    description: "HuggingFace/Llama3.1-405B",
    value: ChatModel.LLAMA_3_1_405B,
    smallIcon: <LightningBoltIcon className="w-4 h-4 text-yellow-500" />,
    icon: <LightningBoltIcon className="w-5 h-5 text-yellow-500" />,
  },
};

const localModelMap: Partial<Record<ChatModel, Model>> = _.pickBy(
  modelMap,
  (_, key) => isLocalModel(key as ChatModel),
);

const cloudModelMap: Partial<Record<ChatModel, Model>> = _.pickBy(
  modelMap,
  (_, key) => isCloudModel(key as ChatModel),
);

const ModelItem: React.FC<{ model: Model }> = ({ model }) => (
  <SelectItem
    key={model.value}
    value={model.value}
    className="flex flex-col items-start p-2"
  >
    <div className="flex items-center space-x-2">
      {model.icon}
      <div className="flex flex-col">
        <span className="font-bold">{model.name}</span>
        <span className="text-muted-foreground">{model.description}</span>
      </div>
    </div>
  </SelectItem>
);

export function ModelSelection() {
  const { localMode, model, setModel, toggleLocalMode } = useConfigStore();
  const selectedModel = modelMap[model] ?? modelMap[ChatModel.GPT_3_5_TURBO];

  return (
    <Select
      defaultValue={model}
      value={model}
      onValueChange={(value) => {
        if (value) {
          setModel(value as ChatModel);
        }
      }}
    >
      <SelectTrigger className="w-fit space-x-2 bg-transparent outline-none border-none select-none focus:ring-0 shadow-none transition-all duration-200 ease-in-out hover:scale-[1.05] text-sm">
        <SelectValue>
          <div className="flex items-center space-x-2">
            {selectedModel.smallIcon}
            <span className="font-semibold">{selectedModel.name}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="w-[250px]">
        <Tabs
          className="w-full"
          defaultValue={localMode ? "local" : "cloud"}
          onValueChange={(value) => {
            if (value === "local" && !localMode) {
              toggleLocalMode();
            } else if (value === "cloud" && localMode) {
              toggleLocalMode();
            }
          }}
        >
          <TabsList className="w-full">
            <TabsTrigger value="cloud" className="flex-1">
              Cloud
            </TabsTrigger>
            <TabsTrigger
              value="local"
              disabled={!env.NEXT_PUBLIC_LOCAL_MODE_ENABLED}
              className="flex-1 disabled:opacity-50"
            >
              Local
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cloud" className="w-full">
            <SelectGroup className="w-full">
              {Object.values(cloudModelMap).map((model) => (
                <ModelItem key={model.value} model={model} />
              ))}
            </SelectGroup>
          </TabsContent>
          <TabsContent value="local" className="w-full">
            <SelectGroup className="w-full">
              {Object.values(localModelMap).map((model) => (
                <ModelItem key={model.value} model={model} />
              ))}
            </SelectGroup>
          </TabsContent>
        </Tabs>
      </SelectContent>
    </Select>
  );
}
