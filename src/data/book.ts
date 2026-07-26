/** "The AI Handbook for Product Design" — structure shown on the book page. */

export interface BookPart {
  n: string;
  title: string;
  sub: string;
  chapters: readonly string[];
}

export const parts: BookPart[] = [
  {
    "n": "01",
    "title": "Foundations",
    "sub": "How Intelligence Became Computable",
    "chapters": [
      "The Anatomy of Intelligence",
      "First Sparks of Intelligence: Classical Machine Learning and the Birth of Predictive UX",
      "The Awakening of the Machine: Deep Learning",
      "Machines That Speak: Transformers and the Rise of Large Language Models",
      "The Imagining Machine: Diffusion Models and Augmented Creation"
    ]
  },
  {
    "n": "02",
    "title": "Practice",
    "sub": "How Combinations of Theories Lead to New Experiences",
    "chapters": [
      "Beyond LLM: RAG & Knowledge-Augmented Interfaces",
      "Chain of Thought: Self-Explaining UIs",
      "Multimodal UIs: Translating User Intent",
      "AI Collaboration: Agents & Orchestrated Experiences"
    ]
  },
  {
    "n": "03",
    "title": "Future",
    "sub": "Post Science-Fiction User Experiences",
    "chapters": [
      "The Future of Software: Generative Interfaces",
      "The Future of Tech Jobs: Full-Stack Creators",
      "The Future of Intelligence: AGI & Autonomous Software"
    ]
  },
  {
    "n": "04",
    "title": "Principles",
    "sub": "Building the Digital World You Want to Live In",
    "chapters": [
      "Trust: Transparency & Explainability",
      "Safety: Designing for the Safety of People",
      "Responsibility: Limited Computational Cost",
      "Alignment: Designing for Survival"
    ]
  }
];
