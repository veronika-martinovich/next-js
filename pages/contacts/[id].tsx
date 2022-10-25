import Head from "next/head";
import { FC } from "react";
import { GetServerSideProps } from "next";
import { ContactInfo } from "../../components/ContactInfo";
import { ContactType } from "../../types";

type ContactProps = {
  contact: ContactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: { contact: data } };
};

const Contact: FC<ContactProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
