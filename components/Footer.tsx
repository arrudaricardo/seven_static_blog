import styles from "../styles/footer.module.css";

type Props = {
  display: 'relative' | 'fixed',
  footer?: {
    year: number;
    author: string;
    link: string;
    copyRight: string;
  };
}
export default function Footer({footer, display}:Props) {
  return (
    <>
      {footer && (
        <footer className={ display === 'relative'?styles.footerRelative: styles.footerFixed}>
          <p className={styles.footerP}>
            © {footer.year} <a href={footer.link}>{footer.author}</a>
            {" · "}
            {footer.copyRight === "CC" && (
              <a
                href="https://creativecommons.org/licenses/by-nc/4.0/"
                target="_blank"
                rel="noopener"
              >
                CC BY-NC 4.0
              </a>
            )}
            {" · "}
            <a href="rss.xml" target="_blank" title="rss">
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 11a9 9 0 0 1 9 9"> </path>
                <path d="M4 4a16 16 0 0 1 16 16"></path>{" "}
                <circle cx="5" cy="19" r="1"></circle>
              </svg>
            </a>
          </p>
        </footer>
      )}
      </>
  )}
