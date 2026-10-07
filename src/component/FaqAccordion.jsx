"use client";

import { useId, useState } from "react";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion({ title, items, sectionId }) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id={sectionId ?? `${id}-section`}
      className={styles.section}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.container}>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 id={`${id}-title`}>{title}</h2>
        </header>
        <div className={styles.list}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `${id}-answer-${index}`;

            return (
              <article key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={answerId}
                  className={`${styles.answerPanel} ${isOpen ? styles.answerPanelOpen : ""}`}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className={styles.answerContent}>
                    <div className={styles.answer}>{item.answer}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
