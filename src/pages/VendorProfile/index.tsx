import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/atoms/Header";
import Page from "../../components/containers/PageContainer";
import Section from "../../components/containers/SectionContainer";
import { connect } from "react-redux";
import ScrollableContainer from "../../components/containers/ScrollableContainer";
import RatingStar from "../../components/atoms/Rating";
import AlignJustifyCenter from "../../components/containers/SectionContainer/alignJustifyCenter";
import TextLink from "../../components/atoms/Link";
import Text from "../../components/atoms/Text";
import BadgeAvatars from "../../components/atoms/Avatar";
import SubHeader from "../../components/atoms/SubHeader";
import { Store } from "redux";
import { AppDispatch, RootState } from "../../redux";
import { getVendorProfile } from "../../redux/ActionCreators/Profile";

interface Props {
  status?: string;
  data?: any;
}

function VendorProfile({ status, ...props }: Props) {
  let params = useParams();
  React.useEffect(() => {
    getVendorProfile(`${params.celeb}`);
  }, []);
  return (
    <Page>
      <Header>Hello, {params.celeb || "there"}!</Header>
      <Section>
        <ScrollableContainer id={`${props.data.name}-welcome-videos`}>
          {props.data.video.map((item: string, i: number) => (
            <video key={i} src={item} className="rounded-lg ml-4" height={290} width={196} />
          ))}
        </ScrollableContainer>
        <AlignJustifyCenter>
          <RatingStar rating={props.data.rating} />
          <TextLink className="text-primaryBlue-200">{`${props.data.reviews.length} Reviews`}</TextLink>
          <Text>{`${props.data.fans} Fans`}</Text>
        </AlignJustifyCenter>
        <AlignJustifyCenter>
          <BadgeAvatars imageURL={props.data.imageURL} alert={props.data.online} />
          <SubHeader>{props.data.name}</SubHeader>
        </AlignJustifyCenter>
        <Text tone="200" small bold>
          {props.data.category}
        </Text>
        <Text tone="200">{props.data.bio}</Text>
      </Section>
    </Page>
  );
}

const mapStateToProps = (state: RootState) => {
  const data = state.vendorProfile;
  return {
    status: data.status,
    name: data.name,
    video: data.video,
    rating: data.rating,
    reviews: data.reviews,
    fans: data.fans,
    imageURL: data.imageURL,
    category: data.category,
    bio: data.bio,
  };
};

// const mapDispatchToProps = (dispatch: AppDispatch) => {
//   return {
//   };
// };

export default connect(mapStateToProps, { getVendorProfile })(VendorProfile);
