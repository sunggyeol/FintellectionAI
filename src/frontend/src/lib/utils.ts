import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ChatModel } from "../../generated";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isLocalModel(model: ChatModel) {
  return !isCloudModel(model);
}

export function isCloudModel(model: ChatModel) {
  return [
    ChatModel.GPT_4O_MINI,
    ChatModel.LLAMA_3_1_405B,
  ].includes(model);
}
