function Pizza({pizzaobj}){
	return(
	<li className={`pizza ${pizzaobj.soldOut?"sold-out":" "}`}>
<img src={pizzaobj.photoName}alt={pizzaobj.name}/>

<div><h3>
	{pizzaobj.name}
	</h3>
	<p>
		{pizzaobj.ingredients}
	</p>
</div>
<span>{pizzaobj.soldOut?"Soldout":pizzaobj.price}</span>

	</li>
	);
}
export default Pizza ; 