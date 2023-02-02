import { withRouter } from "react-router-dom";

import MiddleContainer from "./MiddleContainer/MiddleContainer";
import SearchFilter from "./SearchFilter/SearchFilter";
import MenuList from "./MenuList/MenuList";
import MenuContentList from "./MenuContentList/MenuContentList";
import CartItems from "./CartItems/CartItems";
import {
  MiddleContainerImage1,
  MiddleContainerImage2,
  MiddleContainerImage3,
} from "../Models/ImageConstants";

const ContentSection = ({ history }) => {
  return (
    <div>
      <MiddleContainer>
        <img
          src={MiddleContainerImage1}
          className="container-image"
          alt="food-offer"
        ></img>
        <img
          src={MiddleContainerImage2}
          className="container-image"
          alt="food-offer"
        ></img>
        <img
          src={MiddleContainerImage3}
          className="container-image"
          alt="food-offer"
        ></img>
      </MiddleContainer>
      <SearchFilter></SearchFilter>
      <div className="test">
        <MenuList />
        <MenuContentList />
        <CartItems history={history} />
      </div>
    </div>
  );
};
export default withRouter(ContentSection);
