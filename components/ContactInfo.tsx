import { FC } from "react";
import Head from "next/head";
import { Heading } from "./Heading";
import { ContactType } from "../types";

type ContactInfoProps = {
  contact: ContactType;
};

export const ContactInfo: FC<ContactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Heading tag="h3" text={name} />
      <div>
        <div>
          <strong>Email:</strong>
          {email}
        </div>
        <div>
          <strong>Address:</strong>
          {`${street}, ${suite}, ${city}, ${zipcode}`}
        </div>
      </div>
    </>
  );
};
