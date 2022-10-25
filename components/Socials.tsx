import Head from "next/head";
import styles from "../styles/Socials.module.scss";
import { SocialType } from "../types";

type SocialsProps = {
  socials: SocialType[];
};

export const Socials = ({ socials }) => {
  if (!socials) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Socials</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
      </Head>
      <ul className={styles.socials}>
        {socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${icon}`} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
