import Link from "next/link";
import styles from "./ContentNavigation.module.css";

export function SectionJumpLinks({ sections }) {
  return (
    <nav className={styles.jumpNav} aria-label="On this page">
      <span className={styles.navLabel}>Jump to:</span>
      {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`}>
          {section.label}
        </a>
      ))}
    </nav>
  );
}

export function RelatedServiceLinks({ title, items }) {
  return (
    <nav className={styles.related} aria-label="Related academic support services">
      <div className={styles.relatedInner}>
        <h2>{title}</h2>
        <div className={styles.relatedLinks}>
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
