import pizzaData from "../data/pizzaData";
import Pizza from "./Pizza";

function Menu(){
	const pizzas =pizzaData;
	const numpizza=pizzas.length;
	return (
		<main className="menu">
          <h2>OUR MENU</h2>
		  {
			numpizza>0?(
				<>
				<p>
					   Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
				</p>

				<ul className="pizzas">
					{pizzas.map((pizza)=>(
<Pizza pizzaobj={pizza} key={pizza.name}/>
					))}
				</ul>
				</>
			):(
				 <p>We're still working on our menu. Please come back later :)</p>
			)
		  }
		</main>
	);
}
export default Menu; 