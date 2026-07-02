import Order from "./Order";
function Footer(){
	const hour=new Date().getHours();
	const openhour=12
	const closehour=22
	const isopen=hour>=openhour&&hour<=closehour
	return(
		<footer className="footer">
			{isopen?(
				<Order openhour={openhour} closehour={closehour}/>
			):(
				<p>  
          We're happy to welcome you between {openhour}:00 and {closehour}:00.
        </p>
			)}
		</footer>

	);
}
export default Footer; 