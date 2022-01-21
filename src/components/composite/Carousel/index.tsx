import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import WelcomeSection from "../../../pages/Home/WelcomeSection";
import Button from "../../atoms/Button";
import TextLink from "../../atoms/Link";
import ScrollableContainer from "../../containers/ScrollableContainer";
import AlignJustifyCenter from "../../containers/SectionContainer/alignJustifyCenter";
import Item from "../Item";

interface HomeWelcomeProps {
  items: {
    brief: string;
    header: string;
    description: string;
    onClick: () => void;
    imageURL: string;
  }[];
}

interface FeaturedSlideProps {
  id: string;
  seeAll?: string;
  items: {
    name: string;
    imageURL: string;
    rating: number;
    fee: number;
    category: string;
    online: boolean;
  }[];
}

export function HomeWelcomeSlide(props: HomeWelcomeProps) {
  return (
    <Carousel indicators={false}>
      {props.items.map((item, i) => (
        <WelcomeSection
          key={i}
          brief={item.brief}
          header={item.header}
          description={item.description}
          onClick={item.onClick}
          imageURL={item.imageURL}
        />
      ))}
    </Carousel>
  );
}

export function FeaturedSlide(props: FeaturedSlideProps) {
  const handleScroll = (id: string, direction: "-" | "+") => () => {
    let scrollMenu = document.getElementById(id);
    if (scrollMenu !== null)
      direction === "-" ? (scrollMenu.scrollLeft -= 500) : (scrollMenu.scrollLeft += 500);
  };

  return (
    <div className="relative">
      <div className=" md:flex absolute -top-12 right-3 hidden">
        {props.seeAll && (
          <TextLink bold tone="400" url={props.seeAll}>
            See all
          </TextLink>
        )}
        <Button
          plain
          className=" rounded-full mx-1 ml-2 py-1 w-8 h-8"
          onClick={handleScroll(props.id, "-")}
        >
          <ArrowLeft color="action" />
        </Button>
        <Button
          plain
          className=" rounded-full mx-1 py-1 h-8 w-8"
          onClick={handleScroll(props.id, "+")}
        >
          <ArrowRight color="action" />
        </Button>
      </div>
      <ScrollableContainer id={props.id} className='grid gap-4 grid-flow-col' >
        {props.items.map((item, i) => (
          <Item
            key={i}
            name={item.name}
            imageURL={item.imageURL}
            status="Loaded"
            rating={5}
            fee={item.fee}
            category={item.category}
            online={item.online}
            small
          />
        ))}
      </ScrollableContainer>
    </div>
  );
}
