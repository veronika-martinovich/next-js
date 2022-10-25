import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Heading } from "../../components/Heading";
import { FC } from "react";
import { ContactType } from "../../types";

type ContactsProps = {
  contacts: ContactType[];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  if (!users) {
    return { notFound: true };
  }

  return { props: { contacts: users } };
};

const Contacts: FC<ContactsProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Contacts list" />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
