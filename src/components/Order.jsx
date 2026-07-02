function Order({openhour,closehour}){
 return (
    <div className="order">
      <p>
        We're open from {openhour}:00 to {closehour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );

}
export default Order; 