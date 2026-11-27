export interface CaseStudySlot {
  title: string;
  description: string;
  placeholderText: string;
}

export interface CaseStudyFlowStep {
  step: string;
  title: string;
  description: string;
  badge?: string;
}

export interface CaseStudyArchitectureRow {
  layer: string;
  technologies: string;
  details: string;
}

export interface CaseStudyChallenge {
  title: string;
  problem: string;
  whatIDid: string;
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description?: string;
  category: "Flagship" | "Agentic & Backend" | "Deep Learning";
  date: string;
  problem: string;
  built: string;
  result: string;
  tags: string[];
  image: string;
  github?: string;
  githubLabel?: string;
  demo?: string;
  demoLabel?: string;
  youtubeUrl?: string;
  futureImprovements?: string;
  role: string;
  timeline: string;
  keyFeatures: string[];
  architecture: string;
  challenges: string;
  outcome: string;
  color: "tomato" | "yellow" | "green" | "blue";
  rotation: string; // e.g. "-rotate-1", "rotate-2" for scrapbook feel
}

export const projects: Project[] = [
  {
    slug: "lumora",
    title: "Lumora",
    tagline: "Deployed AI-powered RAG knowledge platform with source-cited answers",
    category: "Flagship",
    date: "Deployed",
    problem: "Knowledge locked inside documents and GitHub repositories is hard to search and hard to trust. Lumora ingests it, retrieves the right context and answers with citations back to the sources.",
    built: "A full-stack RAG platform built with Next.js, TypeScript and FastAPI: document ingestion, workspace management, Google authentication, persistent conversations and source-cited AI responses generated with Gemini.",
    result: "Deployed end to end on Vercel, Render, Neon PostgreSQL, Qdrant Cloud and Cloudflare R2.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "Qdrant", "Jina Embeddings v3", "Gemini", "Cloudflare R2"],
    image: "/projects/lumora.png",
    github: "https://github.com/NANDAGOPALNG/Lumora/tree/free_deployment",
    githubLabel: "NANDAGOPALNG/Lumora",
    demo: "https://lumora-frontend-git-freedeployment-nandagopalngs-projects.vercel.app/",
    demoLabel: "lumora.vercel.app",
    role: "Full-Stack Developer",
    timeline: "Full-stack build",
    keyFeatures: [
      "Hybrid retrieval: Jina Embeddings v3 + Qdrant vector search combined with PostgreSQL full-text search using Reciprocal Rank Fusion (RRF)",
      "Jina reranking before context-grounded generation with Gemini, returning source citations",
      "Document pipeline: parsing, chunking, indexing and retrieval, with files stored in Cloudflare R2",
      "Incremental GitHub repository synchronization for added, modified and deleted files",
      "Google OAuth, workspace management and persistent conversations",
      "Asynchronous FastAPI backend with SQLAlchemy and PostgreSQL"
    ],
    architecture: "Next.js + TypeScript frontend (Vercel) talking to an asynchronous FastAPI backend (Render). PostgreSQL on Neon holds application data and full-text indexes, Qdrant Cloud holds embeddings, Cloudflare R2 stores documents. Queries run through vector search and full-text search in parallel, are merged with RRF, reranked with Jina and passed to Gemini for a cited answer.",
    challenges: "Keeping the knowledge index consistent with a changing GitHub repository, handled by synchronizing added, modified and deleted files incrementally instead of re-ingesting everything.",
    outcome: "A deployed, working RAG platform spanning document ingestion, hybrid retrieval and cited answer generation.",
    color: "tomato",
    rotation: "-rotate-1"
  },
  {
    slug: "sentinal-sre",
    title: "Sentinal-SRE",
    tagline: "Local-first agentic AI incident response system",
    category: "Flagship",
    date: "Agentic AI",
    problem: "Incident response means reading logs, finding the root cause and writing a fix under pressure. Sentinal-SRE automates that loop while keeping a human in control of what gets merged.",
    built: "A local-first multi-agent SRE system using Python, LangGraph and Ollama that analyzes incident logs, identifies root causes and generates code patches, with human-approved GitHub pull request creation through MCP.",
    result: "322.73 s end-to-end runtime recorded in a live incident run on an RTX 3050.",
    tags: ["Python", "LangGraph", "Ollama", "MCP", "Multi-Agent", "Async"],
    image: "/projects/Sentinal-sre.png",
    github: "https://github.com/NANDAGOPALNG/Sentinal-SRE",
    githubLabel: "NANDAGOPALNG/Sentinal-SRE",
    role: "Developer",
    timeline: "Agentic AI build",
    keyFeatures: [
      "Multi-agent workflow (LangGraph) for incident-log analysis, root-cause identification and patch generation",
      "Cyclic patch validation with bounded retries and semantic review",
      "PII redaction before data is processed",
      "Human-approved GitHub pull request creation through MCP",
      "Runs locally with Ollama, so incident data does not have to leave the machine",
      "Asynchronous backend for incident-log processing"
    ],
    architecture: "A LangGraph multi-agent graph running on local Ollama models: analysis and root-cause agents feed a patch-generation agent, whose output loops through validation and semantic review with bounded retries. Approved patches become GitHub pull requests through MCP, only after a human signs off.",
    challenges: "Making automated patch generation safe to trust: bounded retries to avoid endless loops, semantic review of generated patches, PII redaction and a human approval gate before any pull request is created.",
    outcome: "Recorded 322.73 s end-to-end in a live incident run on an RTX 3050.",
    color: "yellow",
    rotation: "rotate-1"
  },
  {
    slug: "orchestrix",
    title: "Orchestrix",
    tagline: "Asynchronous multi-agent orchestration framework",
    category: "Agentic & Backend",
    date: "Backend",
    problem: "Running many agent tasks reliably needs more than scripts: asynchronous execution, orchestration, persisted state and live visibility into what is running.",
    built: "A modular backend framework for asynchronous task execution, agent orchestration and real-time event streaming, with REST APIs and PostgreSQL-backed execution persistence and workflow management.",
    result: "Modular framework with REST APIs and PostgreSQL-backed execution persistence.",
    tags: ["Async", "REST APIs", "PostgreSQL", "Event Streaming", "Agent Orchestration"],
    image: "/projects/orchestrix.png",
    github: "https://github.com/NANDAGOPALNG/Orchestrix",
    githubLabel: "NANDAGOPALNG/Orchestrix",
    role: "Backend Developer",
    timeline: "Backend build",
    keyFeatures: [
      "Asynchronous task execution",
      "Agent orchestration across tasks and workflows",
      "Real-time event streaming of execution progress",
      "REST APIs for starting and managing workflows",
      "PostgreSQL-backed execution persistence"
    ],
    architecture: "A modular backend: REST API layer, an asynchronous execution and orchestration core, an event-streaming channel for real-time updates, and PostgreSQL persistence for execution state and workflow management.",
    challenges: "Coordinating concurrent asynchronous tasks and agents while keeping execution state persisted and observable in real time.",
    outcome: "A modular orchestration backend with persisted executions and live event streaming.",
    color: "green",
    rotation: "-rotate-1"
  },
  {
    slug: "vision-transformer",
    title: "Vision Transformer",
    tagline: "ViT paper replication from scratch in PyTorch",
    category: "Deep Learning",
    date: "Paper replication",
    problem: "Reading a paper is not the same as understanding it. This project rebuilds the original Vision Transformer from scratch to learn how every component works.",
    built: "A custom Vision Transformer implemented from scratch following the original ViT paper: patch embeddings, class token, multi-head self-attention and transformer encoder blocks, trained as an image classifier.",
    result: "Trained and evaluated on FoodVision Mini (pizza, steak and sushi) and compared against pretrained ViT transfer learning.",
    tags: ["PyTorch", "Vision Transformer", "Transfer Learning", "Python"],
    image: "/projects/vision-transformer.png",
    github: "https://github.com/NANDAGOPALNG/Vision_Transformer_Paper_Replication",
    githubLabel: "NANDAGOPALNG/Vision_Transformer_Paper_Replication",
    role: "Developer",
    timeline: "Paper replication",
    keyFeatures: [
      "Patch embeddings and class token implemented from scratch",
      "Multi-head self-attention and transformer encoder blocks",
      "Image classifier trained and evaluated on FoodVision Mini (pizza, steak, sushi)",
      "Pretrained ViT transfer learning explored and compared against the from-scratch model"
    ],
    architecture: "A PyTorch implementation of the ViT architecture: image patches are embedded, a class token is prepended, and the sequence passes through stacked transformer encoder blocks with multi-head self-attention before a classification head.",
    challenges: "Faithfully reproducing the architecture described in the paper (patch embedding, class token, attention and encoder blocks) without relying on a prebuilt ViT.",
    outcome: "A working from-scratch ViT, with its performance compared against pretrained ViT transfer learning.",
    color: "blue",
    rotation: "rotate-1"
  }
];

export const flagshipProjects = projects.filter(p => p.category === "Flagship");
export const secondaryProjects = projects.filter(p => p.category !== "Flagship");
