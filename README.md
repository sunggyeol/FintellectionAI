# Fintellection Chat

This repository provides a full stack setup for the [Fintellection Engine](https://github.com/Fintellection/FintellectionEngine), which includes both the frontend and backend components necessary to run the engine. It utilizes technologies such as Next.js for the frontend and FastAPI for the backend, along with various search APIs and components for enhanced functionality.

## Live Demo

[fintellection.com](https://fintellection.com/)

## Overview

- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Getting Started](#%EF%B8%8F-getting-started)
- [Deploy](#-deploy)

## Tech Stack

- Frontend: [Next.js](https://nextjs.org/)
- FintellectionEngine: [Fintellection Engine](https://github.com/Fintellection/FintellectionEngine)
- Logging: [Logfire](https://pydantic.dev/logfire)
- Rate Limiting: [Redis](https://redis.io/)
- Components: [shadcn/ui](https://ui.shadcn.com/)

## Features
- Search with multiple search providers (Tavily, Searxng, Serper, Bing)
- Answer questions with cloud models (OpenAI/gpt4-o, OpenAI/gpt3.5-turbo, Groq/Llama3)
- Answer questions with local models (llama3, mistral, gemma, phi3)
- Answer questions with any custom LLMs through [LiteLLM](https://litellm.vercel.app/docs/providers)
- Search with an agent that plans and executes the search for better results

## Getting Started Locally

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Ollama](https://ollama.com/download) (If running local models)
  - Download any of the supported models: **llama3**, **mistral**, **gemma**, **phi3**
  - Start ollama server `ollama serve`

### Get API Keys

- [Tavily (Optional)](https://app.tavily.com/home)
- [Serper (Optional)](https://serper.dev/dashboard)
- [OpenAI (Optional)](https://platform.openai.com/api-keys)
- [Bing (Optional)](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api)
- [Groq (Optional)](https://console.groq.com/keys)

### Quick Start:
```
git clone https://github.com/sunggyeol/FintellectionAI.git
cd FintellectionAI && cp .env-template .env
```
Modify .env with your API keys (Optional, not required if using Ollama)

Start the app:
```
docker-compose -f docker-compose.dev.yaml build
docker-compose -f docker-compose.dev.yaml up -d
```

Wait for the app to start then visit [http://localhost:3000](http://localhost:3000).

For custom setup instructions, see [custom-setup-instructions.md](/custom-setup-instructions.md)

## Deploy

### Backend

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/rashadphz/farfalle)

After the backend is deployed, copy the web service URL to your clipboard.
It should look something like: https://some-service-name.onrender.com.

### Frontend

Use the copied backend URL in the `NEXT_PUBLIC_API_URL` environment variable when deploying with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frashadphz%2Ffarfalle&env=NEXT_PUBLIC_API_URL&envDescription=URL%20for%20your%20backend%20application.%20For%20backends%20deployed%20with%20Render%2C%20the%20URL%20will%20look%20like%20this%3A%20https%3A%2F%2F%5Bsome-hostname%5D.onrender.com&root-directory=src%2Ffrontend)

And you're done! 🥳

## Acknowledgements

We would like to acknowledge the repository, [farfalle](https://github.com/rashadphz/farfalle), for providing the foundation and inspiration for this project. Without their hard work and dedication, this stack setup would not have been possible. We are grateful for their contributions to the open source community.

If you find their work valuable, please consider giving them a star on GitHub to show your support.
