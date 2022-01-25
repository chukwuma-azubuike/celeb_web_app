import React from "react";
import SubHeader from "../../components/atoms/SubHeader";
import { FeaturedSlide, HomeWelcomeSlide } from "../../components/composite/Carousel";
import Page from "../../components/containers/PageContainer";
import Section from "../../components/containers/SectionContainer";
import { featuredCarousel, homeCarousel, newAndHot, trending } from "../../data/home.data";

interface Props {
  status: string;
}
export default function Home({ status, ...props }: Props) {
  return (
    <Page classNames="p-0">
      <Section classNames="p-0 mb-4">
        <HomeWelcomeSlide items={homeCarousel} />
      </Section>
      <Section classNames="py-4 lg:px-8 3xl:px-16">
        <SubHeader className="mb-4 px-4">⭐ Featured</SubHeader>
        <FeaturedSlide
          seeAll="/login"
          id="home-featured"
          status={featuredCarousel ? "loaded" : "loading"}
          items={featuredCarousel}
        />
      </Section>
      <Section classNames="mb-4 py-4 lg:px-8 3xl:px-16">
        <SubHeader className="mb-4 px-4">🔥 New and Hot</SubHeader>
        <FeaturedSlide
          seeAll="/login"
          id="new-and-hot"
          status={newAndHot ? "loaded" : "loading"}
          items={newAndHot}
        />
      </Section>
      <Section classNames="mb-4 py-4 lg:px-8 3xl:px-16">
        <SubHeader className="mb-4 px-4">📈 Trending</SubHeader>
        <FeaturedSlide
          seeAll="/login"
          id="trending"
          status={trending ? "loaded" : "loading"}
          items={trending}
        />
      </Section>
    </Page>
  );
}
