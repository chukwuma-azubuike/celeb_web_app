import React from "react";
import Header from "../../components/atoms/Header";
import Page from "../../components/containers/PageContainer";
import Section from "../../components/containers/SectionContainer";

interface Props {
  status: string;
}
export default function Home({ status, ...props }: Props) {
  return (
    <Page classNames="px-0">
      <Header>Home Page Here!</Header>
    </Page>
  );
}