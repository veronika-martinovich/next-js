import { Heading } from "../components/Heading";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Page404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Heading text="404" />
      <Heading tag="p" text="Something went wrong..." />
    </>
  );
};

export default Page404;
