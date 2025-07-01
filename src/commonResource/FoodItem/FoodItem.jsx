import React, { Component } from 'react'

 class FoodItem extends Component {
  render() {
    return (
      <div className="single-food">
        <div className="img">
          <img src={this.props.img} alt={this.props.title} />
        </div>
        <div className="title-price">
          <h3>{this.props.title}</h3>
          <p>{this.props.price} </p>
        </div>
        <div className="food-desc">{this.props.desc}</div>
      </div>
      
    );
  }
}
export default FoodItem;
// next method//
// import React, { Component } from 'react'
// import '../../src/app.css'
//  function FoodItem({menu1}) {
//   const {id,title,price,img,desc}=menu1;
//     return (
//       <>
//       <div className='single-food'>
//         <div className='img'>
//           <img src={img}/>
//         </div>
//         <div className='title-price'>
//           <h3>{title}</h3>
//           <p>{price}</p>
//         </div>
//         <div className='food-desc'>{desc}</div>
//       </div>
//       </>
//     )
//   }
// }
// export default FoodItem
