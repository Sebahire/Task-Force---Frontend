import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Continents({ continents }) {
	const [scrollNumber, setScrollNumber] = useState(0);
	const [left, setLeft] = useState(0);

	function offset(el) {
		var rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollRight = window.pageXOffset || document.documentElement.scrollRight,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft,
			right: rect.right + scrollRight,
		};
	}

	// APPLY SLIDE EFFECTS

	useEffect(() => {
		const continets_slides = document.querySelector(".continets_slides");
		const slide_icons = document.querySelector(".slide_icons");
		continets_slides.style.transition = "0.5s";

		continets_slides.style.transform = `translateX(-${scrollNumber}px)`;
		slide_icons.style.transform = `translateX(${scrollNumber}px)`;
	}, [scrollNumber]);

	// SET SCROLL BEHAVIOR
	useEffect(() => {
		const left_button = document.querySelector(".slide_left");
		const right_button = document.querySelector(".slide_right");
		const div = document.querySelector(".continets_slides");
		const divOffset = offset(div);

		if (left > -1500 || left === 0) {
			right_button.addEventListener("click", () => {
				setScrollNumber(scrollNumber + 300);
				setLeft(divOffset.left);
			});
		}

		left_button.addEventListener("click", () => {
			setScrollNumber(scrollNumber - 300);
		});
	}, [scrollNumber, left]);

	return (
		<div className="continents">
			<p className="title">PER CONTINENTS</p>

			<div className="continets_slides">
				{/* Slide buttons  */}

				<div className="slide_icons">
					<div className="slide_left">
						<ArrowBackIcon />
					</div>
					<div className="slide_right">
						<ArrowForwardIcon />
					</div>
				</div>

				{continents.map((continent) => (
					<div className="card">
						<div className="card_left">
							<p className="title">{continent.continent}</p>
							<div>
								<p className="num">{continent.todayCases}</p>
								<p style={{ fontWeight: "500" }}>New cases</p>
							</div>
							<p style={{ fontWeight: "lighter", color: "#888888" }}>
								All cases: {continent.cases}
							</p>
						</div>

						<div className="card_right">
							<div className="cont">
								<p style={{ marginBottom: "12px", fontSize: "25px" }}>
									{continent.todayDeaths}
								</p>
								<p style={{ color: "black", marginBottom: "18px" }}>
									New deaths
								</p>
								<p>Total deaths: {continent.deaths}</p>
							</div>

							<div className="cont">
								<p style={{ marginBottom: "12px", fontSize: "25px" }}>
									{continent.todayRecovered}
								</p>
								<p style={{ color: "black", marginBottom: "18px" }}>
									Newly recovered
								</p>
								<p>Total recovered: {continent.recovered}</p>
							</div>

							<div className="cont">
								<p style={{ marginBottom: "12px", fontSize: "25px" }}>629</p>
								<p style={{ color: "black", marginBottom: "18px" }}>
									New vaccinated
								</p>
								<p>Total vaccinated: 8765</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Continents;
