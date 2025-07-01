import "./App.css";
import FoodItem from "./commonResource/FoodItem/FoodItem.jsx";
import menu from "./commonResource/data.js";
import "./commonResource/style.css";
function App() {
  return (
    <>
      <header className="title">
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>
      <div class="foods-container">
       {menu.map((food) => {
          const { id, img, title, price, desc } = food;
          return (
            <FoodItem
              key={id}
              img={img}
              title={title}
              price={price}
              desc={
                <span title={desc}>
                  {desc.length > 300 ? desc.substring(0, 300) + "(more read..)" : desc}
                </span>
              }
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
// other method//
// function app(){
//   return(
//     <>
//     {menu1.map((food)=>{
//       return(
//         <FoodItem
//         key={food.id}
//         menu1={food}
//         />
//       )
//     }

//     )

//     }
//     </>
//   )
// }
// export default App;