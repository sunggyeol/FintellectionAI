import os
from enum import Enum

from dotenv import load_dotenv

load_dotenv()


class ChatModel(str, Enum):
    LLAMA_3_70B = "llama-3-70b"
    LLAMA_3_1_405B = "llama-3.1-405b"
    GPT_4o = "gpt-4o"
    GPT_4O_MINI = "gpt-4o-mini"

    # Local models
    LOCAL_LLAMA_3 = "llama3"
    LOCAL_GEMMA = "gemma"
    LOCAL_MISTRAL = "mistral"
    LOCAL_PHI3_14B = "phi3:14b"

    # Custom models
    CUSTOM = "custom"


model_mappings: dict[ChatModel, str] = {
    ChatModel.GPT_4O_MINI: "gpt-4o-mini",
    ChatModel.GPT_4o: "gpt-4o",
    ChatModel.LLAMA_3_70B: "groq/llama3-70b-8192",
    ChatModel.LOCAL_LLAMA_3: "ollama_chat/llama3",
    ChatModel.LOCAL_GEMMA: "ollama_chat/gemma",
    ChatModel.LOCAL_MISTRAL: "ollama_chat/mistral",
    ChatModel.LOCAL_PHI3_14B: "ollama_chat/phi3:14b",
}


def get_model_string(model: ChatModel) -> str:
    if model == ChatModel.CUSTOM:
        custom_model = os.environ.get("CUSTOM_MODEL")
        if custom_model is None:
            raise ValueError("CUSTOM_MODEL is not set")
        return custom_model

    if model in {ChatModel.GPT_3_5_TURBO, ChatModel.GPT_4o}:
        openai_mode = os.environ.get("OPENAI_MODE", "openai")
        if openai_mode == "azure":
            # Currently deployments are named "gpt-35-turbo" and "gpt-4o"
            name = model_mappings[model].replace(".", "")
            return f"azure/{name}"

    return model_mappings[model]
