import { Component } from "react";
import Headernew from "./Components/Headernew.jsx";
import FoodMenunew from "./Components/FoodMenunew.jsx";
import menu from "./assets/Resources/data.js";
console.log(menu);

class App extends Component {
  render() {
    return (
      <>
        <div className="all-container">
          <Headernew />
          <div class="foods-container">
            {menu.map(function (items, index) {
              //console.log(items.img);
              return (
                <div class="single-food">
                  <FoodMenunew
                    key={items.id}
                    item={items}
                  />
                </div>
               
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
