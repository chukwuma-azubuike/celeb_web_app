import React from "react";
import Header from "../../components/atoms/Header";
import SubHeader from "../../components/atoms/SubHeader";
import { FeaturedSlide, HomeWelcomeSlide } from "../../components/composite/Carousel";
import Page from "../../components/containers/PageContainer";
import Section from "../../components/containers/SectionContainer";
import { featuredCarousel, homeCarousel, newAndHot } from "../../data/home.data";

interface Props {
  status: string;
}
export default function Home({ status, ...props }: Props) {
  return (
    <Page classNames="p-0">
      <Section classNames="p-0">
        <HomeWelcomeSlide items={homeCarousel} />
      </Section>
      <Section classNames="py-4">
        <SubHeader className="mb-4 px-4">⭐ Featured</SubHeader>
        <FeaturedSlide seeAll="See all" id="home-featured" items={featuredCarousel} />
      </Section>
      <Section classNames="mb-4 py-4">
        <SubHeader className="mb-4 px-4">🔥 New and Hot</SubHeader>
        <FeaturedSlide seeAll="See all" id="new-and-hot" items={newAndHot} />
      </Section>
    </Page>
  );
}
