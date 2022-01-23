import React from "react";
import BadgeAvatars from "../../atoms/Avatar";
import RatingStar from "../../atoms/Rating";
import SubHeader from "../../atoms/SubHeader";
import Text from "../../atoms/Text";

interface Props {
  status: string;
  name: string;
  fee?: number;
  rating: number;
  imageURL: string;
  small?: boolean;
  category: string;
  online: boolean;
}

export default function Item({ status, ...props }: Props) {
  return (
    <div
      className={`
      rounded-[36px] p-3 grid-rows-[auto auto auto] grid gap-1 box-border
      ${props.small ? "w-56 md:w-60" : "w-80"}
      `}
    >
      <div
        className={`
        ${props.small ? "h-56 md:h-64" : "h-96"}
         rounded-[30px] w-full bg-no-repeat bg-center bg-cover
         `}
        style={{ backgroundImage: `url(${props.imageURL})` }}
      />
      {props.small ? (
        <Text className="m-0" bold small>
          {props.name}
        </Text>
      ) : (
        <SubHeader>{props.name}</SubHeader>
      )}
      <RatingStar
        size="small"
        readOnly
        label={false}
        handleRating={() => null}
        rating={props.rating}
      />
      <div className="flex gap-2">
        <BadgeAvatars alert={props.online} imageURL={props.imageURL} />
        <div>
          <Text className="my-0" medium bold>
            From NGN {props.fee?.toLocaleString("en-US")}
          </Text>
          <Text className="my-0" xSmall>
            {props.category}
          </Text>
        </div>
      </div>
    </div>
  );
}
