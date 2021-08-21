import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import RwandaFlag from "./imgs/rwanda.svg";
import Footer from "./components/Footer";
import Me from "./components/Me";
import Continents from "./components/Continents";
import "./style.css";

function App() {
	const [continents, setContinets] = useState([]);
	const [country, setCountry] = useState("kenya");
	const [date, setDate] = useState("");
	const [cummulative, setCummulative] = useState([]);

	const sumValues = (obj) =>
		obj ? Object.values(obj).reduce((a, b) => a + b) : null;

	const fetchContinents = () => {
		fetch("https://corona.lmao.ninja/v2/continents?yesterday=true&sort")
			.then((res) => res.json())
			.then((res) => setContinets(res));
	};

	useEffect(() => fetchContinents(), []);

	const oneDay = 24 * 60 * 60 * 1000;
	const today = new Date();
	const selectedDay = new Date(date);
	const dateDifference = Math.round(Math.abs((selectedDay - today) / oneDay));

	useEffect(() => {
		const fetchCummulative = () => {
			fetch(
				`https://corona.lmao.ninja/v2/historical/${country}?lastdays=${dateDifference}`
			)
				.then((res) => res.json())
				.then((res) => setCummulative(res));
		};
		fetchCummulative();
	}, [date, country, dateDifference]);

	const totalDeaths = sumValues(cummulative?.timeline?.deaths);
	const totalCases = sumValues(cummulative?.timeline?.cases);
	const totalRecovered = sumValues(cummulative?.timeline?.recovered);
	console.log(cummulative);

	return (
		<div className="container">
			<div className="updates_part">
				<Navbar />
				<div className="updates_section">
					<p className="updates_title white bottom-16">UPDATES</p>

					<p className="white bottom-16">Search a country</p>

					<div className="search_box">
						<img src={RwandaFlag} className="flag" alt="" />

						<select
							className="select"
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						>
							<option value="rwanda">Rwanda</option>
							<option value="kenya">Kenya</option>
							<option value="burundi">Burundi</option>
							<option value="usa">USA</option>
							<option value="uganda">Uganda</option>
							<option value="malawi">Malawi</option>
							<option value="canada">Canada</option>
						</select>

						<input
							type="date"
							className="date_picker"
							onChange={(e) => setDate(e.target.value)}
						/>

						<button className="submit_button white">Submit</button>
					</div>
				</div>

				<div className="sumulative_upper">
					<p className="cumulative_num">
						{totalDeaths + totalCases + totalRecovered}
					</p>
					<p
						style={{
							fontSize: "24px",
							marginTop: "12px",
							fontWeight: "500",
							color: "white",
						}}
					>
						Cummulative
					</p>
				</div>
			</div>

			<div className="sumulative_down">
				<div className="figures">
					<p className="title">11, 270</p>
					<p
						style={{
							fontWeight: "700",
							fontSize: "18px",
							marginBottom: "20px",
						}}
					>
						Tests
					</p>
					<span style={{ fontWeight: "lighter", color: "#888888" }}>
						2,12232
					</span>
				</div>

				<div className="figures">
					<p className="title">{totalCases}</p>
					<p
						style={{
							fontWeight: "700",
							fontSize: "18px",
							marginBottom: "20px",
						}}
					>
						Postive cases
					</p>
					<span style={{ fontWeight: "lighter", color: "#888888" }}>
						{totalCases}
					</span>
				</div>

				<div className="figures">
					<p className="title">0</p>
					<p
						style={{
							fontWeight: "700",
							fontSize: "18px",
							marginBottom: "20px",
						}}
					>
						Hospitalized
					</p>
					<span style={{ fontWeight: "lighter", color: "#888888" }}>0</span>
				</div>

				<div className="figures">
					<p className="title">{totalRecovered}</p>
					<p
						style={{
							fontWeight: "700",
							fontSize: "18px",
							marginBottom: "20px",
						}}
					>
						Recovered
					</p>
					<span style={{ fontWeight: "lighter", color: "#888888" }}>
						{totalRecovered}
					</span>
				</div>

				<div className="figures">
					<p className="title">{totalDeaths}</p>
					<p
						style={{
							fontWeight: "700",
							fontSize: "18px",
							marginBottom: "20px",
						}}
					>
						Deaths
					</p>
					<span style={{ fontWeight: "lighter", color: "#888888" }}>
						{totalDeaths}
					</span>
				</div>

				<div className="figures">
					<p className="title">11, 270</p>
					<p
						style={{
							fontWeight: "700",
							fontSize: "18px",
							marginBottom: "20px",
						}}
					>
						Vaccinated
					</p>
					<span style={{ fontWeight: "lighter", color: "#888888" }}>
						2,12232
					</span>
				</div>
			</div>

			<Continents continents={continents} />

			<Me />
			<Footer />
		</div>
	);
}

export default App;
