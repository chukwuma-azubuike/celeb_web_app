import React from "react";
import FOOTER_DATA from "../../../data/footer.data";
import APP_DATA from "../../../data/index.data";
import { year } from "../../../utils/date";
import Text from "../../atoms/Text";

interface Props {}

export default function Footer(props: Props) {
  return (
    <nav>
      <div className="bg-primaryGrey-400 grid-rows-footer">
        <div className="px-6 py-16 grid grid-cols-2 border-b-2">
          <div className=" flex flex-col justify-items-start" id="footer-social">
            {FOOTER_DATA.social.map((item, index) => (
              <Text key={index} tone="100" small className="my-2">
                {item.title}
              </Text>
            ))}
          </div>
          <div className=" flex flex-col justify-items-start" id="footer-navigation">
            {FOOTER_DATA.navigation.map((item, index) => (
              <Text key={index} tone="100" small className="my-2">
                {item.title}
              </Text>
            ))}
          </div>
        </div>
        <div className="py-6 px-4 border-t-primaryGrey-200 border-solid border-l-0 border-r-0 border-b-0 border-2">
          <Text tone="100">
            © {year() + ""} {APP_DATA.appName}
          </Text>
        </div>
      </div>
    </nav>
  );
}
