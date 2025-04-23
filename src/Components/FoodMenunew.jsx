import  { Component } from "react";
class FoodMenuNew extends Component {
  render() {
      let { img, title, price, desc,link } = this.props.item;
    return (
      <>
        <div className="img">
          <img src={img} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">{desc}</div>
        {/* conditional rendering if the link is available it will render else it will ignore */}
        {link && (
          <div className="morelink"> <a href=""> {link}</a>
          </div>
        )}
      </>
    );
  }
}

export default FoodMenuNew;
