# FintellectionAI

**FintellectionAI** is a full-stack AI-powered search engine designed to fetch and display real-time financial data from the internet. By leveraging advanced machine learning techniques such as Retrieval-Augmented Generation (RAG), embeddings, and similarity searching, it delivers accurate and insightful financial information in real time.

## Table of Contents

1. [Technology Stack](#technology-stack)
   - [Machine Learning and Natural Language Processing](#machine-learning-and-natural-language-processing)
   - [Backend Framework](#backend-framework)
   - [Search APIs](#search-apis)
   - [Reader API](#reader-api)
   - [Charting APIs](#charting-apis)
2. [License](#license)
3. [Contact](#contact)
4. [Live Demo](#live-demo)
5. [Overview](#overview)
6. [Tech Stack](#tech-stack)
7. [Features](#features)
8. [Getting Started Locally](#getting-started-locally)
   - [Prerequisites](#prerequisites)
   - [Get API Keys](#get-api-keys)
   - [Quick Start](#quick-start)
9. [Deploy](#deploy)
   - [Backend](#backend)
   - [Frontend](#frontend)
10. [Acknowledgements](#acknowledgements)

## Technology Stack

### Machine Learning and Natural Language Processing

- **LangChain**: A framework for building applications with language models.
- **Transformers**: Hugging Face library for state-of-the-art NLP models.
- **OpenAI Embeddings**: For generating vector representations of text.
- **Generative AI Models**:
  - **GPT-4o Mini**: Advanced cost-efficient model.
  - **Llama 3.1 405B**: World's largest and most capable openly available foundation model.

### Backend Framework

- **FastAPI**: Modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.

### Search APIs

- **Tavily AI**: Financial data search engine.
- **Serper**: A versatile search API.

### Reader API

- **Jina AI Reader**: For document and data ingestion and retrieval.

### Charting APIs

- **Awesome Charting**: A library for creating interactive charts.
- **Lightweight Charts**: High-performance charting library.

## License

This project is licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For more details, see the LICENSE file.

## Contact

For queries or suggestions, please open an issue on the repository or contact the maintainers at [sunggyeol@vt.edu](mailto:sunggyeol@vt.edu).

## Live Demo

Check out the live demo at [fintellection.com](https://fintellection.com/).

## Overview

- [Tech Stack](#tech-stack)
- [Getting Started Locally](#getting-started-locally)
- [Deploy](#deploy)

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/)
- **Logging**: [Logfire](https://pydantic.dev/logfire)
- **Rate Limiting**: [Redis](https://redis.io/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)

## Features

- Search with multiple providers (Tavily, Searxng, Serper, Bing)
- Answer questions with LLMs (GPT-4o-mini, Llama-405b)
- Agent-based search for enhanced results

## Getting Started Locally

### Prerequisites

- **Docker**: For containerization. [Get Docker](https://docs.docker.com/get-docker/)
- **Ollama**: For local models. [Download Ollama](https://ollama.com/download)
  - Supported models: **llama3**, **mistral**, **gemma**, **phi3**
  - Start Ollama server: `ollama serve`

### Get API Keys

- **Tavily**: [Get API Key](https://app.tavily.com/home) (Optional)
- **Serper**: [Get API Key](https://serper.dev/dashboard) (Optional)
- **OpenAI**: [Get API Key](https://platform.openai.com/api-keys) (Optional)
- **Bing**: [Get API Key](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api) (Optional)
- **Groq**: [Get API Key](https://console.groq.com/keys) (Optional)

### Quick Start

```bash
git clone https://github.com/sunggyeol/FintellectionAI.git
cd FintellectionAI && cp .env-template .env
```

Modify `.env` with your API keys (Optional, not required if using Ollama).

Start the app:

```bash
docker-compose -f docker-compose.dev.yaml build
docker-compose -f docker-compose.dev.yaml up -d
```

Wait for the app to start then visit [http://localhost:3000](http://localhost:3000).

For custom setup instructions, see [custom-setup-instructions.md](/custom-setup-instructions.md).

## Deploy

### Backend

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/rashadphz/farfalle)

After deploying the backend, copy the web service URL. It should look something like: `https://some-service-name.onrender.com`.

### Frontend

Use the backend URL in the `NEXT_PUBLIC_API_URL` environment variable when deploying with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frashadphz%2Ffarfalle&env=NEXT_PUBLIC_API_URL&envDescription=URL%20for%20your%20backend%20application.%20For%20backends%20deployed%20with%20Render%2C%20the%20URL%20will%20look%20like%20this%3A%20https%3A%2F%2F%5Bsome-hostname%5D.onrender.com&root-directory=src%2Ffrontend)

And you're done! 🥳

## Acknowledgements

We would like to acknowledge the repository [farfalle](https://github.com/rashadphz/farfalle) for providing the foundation and inspiration for this project. We are grateful for their contributions to the open-source community.

If you find their work valuable, please consider giving them a star on GitHub to show your support.
