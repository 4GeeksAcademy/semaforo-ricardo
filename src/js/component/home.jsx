import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [red,setRed]=useState("secondary")
	const[yellow,setYellow]=useState("secondary")
	const[green, setGreen]= useState("secondary")
	function rojo(){
		setRed("danger")
		setYellow("secondary")
		setGreen("secondary")
	}
	function amarillo (){
		setRed("secondary")
		setYellow("warning")
		setGreen("secondary")
	}
	function verde () {
		setGreen("success")
		setRed("secondary")
		setYellow("secondary")
	}

	return (
		<div className="text-center">
			<div className={"bg-"+ red + " border rounded-circle"} style= {{height:"100px" , width:"100px"}} onClick={rojo}></div>

			<div className={"bg-"+ yellow + " border"} style= {{height:"100px"}} onClick={amarillo}></div>
			<div className={"bg-"+ green + " border"}style= {{height:"100px"}} onClick={verde}></div>
		</div>
	);
};

export default Home;
