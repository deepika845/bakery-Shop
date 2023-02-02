import React from "react";
import "./menuContentList.style.css";
import { VegLogo } from "../../Models/ImageConstants";
import { NonVegLogo } from "../../Models/ImageConstants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addToCart,
  increaseToCart,
  decreaseToCart,
  removeFromCart,
} from "../../redux/actions.js";
import { getCartListByName } from "../../redux/selectors.js";
function MenuContentList({
  activeState,
  activeMenuList,
  cartItems,
  addToCart,
  decreaseToCart,
  increaseToCart,
  removeFromCart,
}) {
  function renderMenuItems({
    dishName,
    isVeg,
    qty,
    price,
    desc,
    image,
    inCart,
  }) {
    return (
      <div className="product--desc--details" key={`dishName:${dishName}`}>
        <div className="product-items-details__img">
          <img
            className="border-radius dish-items-width"
            src={image}
            alt="garlic-noodles"
          />
          <div className="product-items-details__name">
            <div>
              <img
                className="veg-symbol"
                src={isVeg ? VegLogo : NonVegLogo}
                alt="veg-symbol"
              />
            </div>
            <div>{dishName}</div>
          </div>
          <div className="product-items-details__price">&#8377;{price}</div>

          {inCart ? (
            <div className="selected-item-quantity">
              <div
                className="in-menu--plus add-remove-1"
                onClick={() => {
                  increaseToCart({ dishName });
                }}
              >
                +
              </div>
              <div className="add-remove-1">{qty}</div>
              <div
                className="in-menu--minus add-remove-1"
                onClick={() => {
                  if (qty === 1) {
                    removeFromCart({ dishName });
                  } else {
                    decreaseToCart({ dishName });
                  }
                }}
              >
                -
              </div>
            </div>
          ) : (
            <div
              className="add-button"
              onClick={() => {
                addToCart({ dishName, isVeg, price, qty: 1 });
              }}
            >
              ADD
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="menuHeading">
      <h1 className="content-List-heading">{activeState}</h1>
      <h3 className="num-items">{activeMenuList.length} Items</h3>
      <div className="menu-content-list">
        {activeMenuList.map((curr) => {
          const { dishName, isVeg, price, desc, image } = curr;
          let inCart = false;
          let qty = 0;
          cartItems &&
            cartItems.find((curr) => {
              if (curr.dishName === dishName) {
                inCart = true;
                qty = curr.qty;
                return 0;
              }
            });

          return renderMenuItems({
            isVeg,
            dishName,
            price,
            image,
            desc,
            inCart,
            qty,
          });
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { activeMenu, activeMenuList } = state;

  const { activeState } = activeMenu;
  const cartItems = getCartListByName(state);

  return { activeState, activeMenuList, cartItems };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { addToCart, increaseToCart, decreaseToCart, removeFromCart },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuContentList);
