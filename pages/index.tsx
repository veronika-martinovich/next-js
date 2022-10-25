import { Heading } from "../components/Heading";
import { Socials } from "../components/Socials";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/socials/`);
  const data = await res.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: { socials: data } };
};

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Home Page" />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
