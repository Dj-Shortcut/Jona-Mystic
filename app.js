import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import { motion, useReducedMotion } from "https://esm.sh/framer-motion@11.11.9";

function RevealSection({ children, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <section>{children}</section>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}

function App() {
  const cards = [
    {
      title: "Clarity",
      body: "Subtiele animaties leiden het oog zonder de content te overstemmen.",
    },
    {
      title: "Comfort",
      body: "Reduced-motion respecteert systeeminstellingen en voorkomt overprikkeling.",
    },
    {
      title: "Consistency",
      body: "Hover, focus en active states van .cmd knoppen voelen coherent aan.",
    },
  ];

  return (
    <main>
      <RevealSection>
        <header className="hero">
          <h1>Jona Mystic</h1>
          <p className="tagline">
            Guided interfaces with quiet motion
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </p>
          <div className="btn-row">
            <button className="cmd" type="button">
              Open Dashboard
            </button>
            <button className="cmd" type="button">
              Start Session
            </button>
            <button className="cmd" type="button">
              View Insights
            </button>
          </div>
        </header>
      </RevealSection>

      <RevealSection delay={0.08}>
        <div className="grid">
          {cards.map((card) => (
            <article className="panel" key={card.title}>
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </RevealSection>
    </main>
  );
}

createRoot(document.getElementById("app")).render(<App />);
