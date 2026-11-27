export interface SkillCategory {
  title: string;
  tagline: string;
  color: "tomato" | "yellow" | "green" | "blue";
  skills: {
    name: string;
    usedIn: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI, RAG & Agentic Systems",
    tagline: "Retrieval pipelines, multi-agent workflows & local inference",
    color: "tomato",
    skills: [
      { name: "RAG & Hybrid Retrieval (RRF, reranking)", usedIn: "Lumora" },
      { name: "LLM Integration (Gemini)", usedIn: "Lumora" },
      { name: "Embeddings & Vector Databases", usedIn: "Lumora" },
      { name: "Agentic AI & LangGraph", usedIn: "Sentinal-SRE" },
      { name: "Ollama (Local LLMs)", usedIn: "Sentinal-SRE" },
      { name: "MCP (Model Context Protocol)", usedIn: "Sentinal-SRE" },
      { name: "PyTorch", usedIn: "Vision Transformer" }
    ]
  },
  {
    title: "Backend & Systems Engineering",
    tagline: "REST APIs, auth, async workflows & caching",
    color: "yellow",
    skills: [
      { name: "Python", usedIn: "Sentinal-SRE & Vision Transformer" },
      { name: "FastAPI", usedIn: "Lumora" },
      { name: "Django & REST APIs", usedIn: "Polygnan" },
      { name: "JWT, OTP & Google SSO", usedIn: "Polygnan" },
      { name: "Asynchronous Programming", usedIn: "Orchestrix & Sentinal-SRE" },
      { name: "Cloudflare Cache Invalidation", usedIn: "TheWordofMouth" }
    ]
  },
  {
    title: "Databases & Storage",
    tagline: "Relational, document & vector stores",
    color: "green",
    skills: [
      { name: "PostgreSQL & SQLAlchemy", usedIn: "Lumora & Polygnan" },
      { name: "MongoDB", usedIn: "TheWordofMouth" },
      { name: "Qdrant", usedIn: "Lumora" },
      { name: "PostgreSQL Full-Text Search", usedIn: "Lumora" },
      { name: "Cloudflare R2", usedIn: "Lumora" }
    ]
  },
  {
    title: "Frontend, DevOps & Tools",
    tagline: "Shipping and deploying what I build",
    color: "blue",
    skills: [
      { name: "Next.js & TypeScript", usedIn: "Lumora" },
      { name: "JavaScript", usedIn: "Lumora" },
      { name: "Docker", usedIn: "Resume skills" },
      { name: "Git & GitHub", usedIn: "All projects" },
      { name: "Vercel, Render, Neon & Qdrant Cloud", usedIn: "Lumora deployment" }
    ]
  }
];

export const marqueeRow1 = [
  "Python", "FastAPI", "Django", "REST APIs", "Next.js", "TypeScript",
  "JavaScript", "LangGraph", "RAG", "MCP", "Ollama"
];

export const marqueeRow2 = [
  "PostgreSQL", "MongoDB", "Qdrant", "SQLAlchemy", "Cloudflare",
  "Docker", "PyTorch", "Embeddings", "Agentic AI", "Git"
];
