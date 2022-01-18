import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/atoms/Header";
import Page from "../../components/containers/PageContainer";
import Section from "../../components/containers/SectionContainer";

interface Props {
  status?: string;
}

export default function VendorProfile({ status, ...props }: Props) {
  let params = useParams();
  return (
    <Page>
      <Header>Hello, {params.celeb ? params.celeb : "there"}!</Header>
    </Page>
  );
}
