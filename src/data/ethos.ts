/** Design ethos cards on the About page. */

export interface EthosCard {
  n: string;
  label: string;
  title: string;
  text: string;
}

export const ethos: EthosCard[] = [
  {
    "n": "01",
    "label": "Foundations",
    "title": "Design for alignment",
    "text": "Great software exists at the exact intersection where technology aligns perfectly with human intent. My purpose as a leader is to find and secure that point of alignment to deliver exceptional product experiences."
  },
  {
    "n": "02",
    "label": "Leadership",
    "title": "Setting the standard",
    "text": "Scaling a high-performing organization requires a leader who stays deeply connected to the actual work. I lead by example, keeping a hands-on understanding of the craft to cultivate continuous learning across the team."
  },
  {
    "n": "03",
    "label": "Vision",
    "title": "Design for the next frontier",
    "text": "Shaping the future of design demands rolling up our sleeves to experiment with emerging technology and actively define the vision — so that as software grows exponentially more complex, the human experience stays grounded and intuitive."
  }
];
