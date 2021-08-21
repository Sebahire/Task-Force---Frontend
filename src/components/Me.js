import React from "react";
import MePicture from "../imgs/pexels-cottonbro-5081971.jpg";

function Me() {
	return (
		<div className="me_section">
			<div className="me_left">
				<img src={MePicture} alt="" />
			</div>
			<div className="me_right">
				<div>
					<p className="title">Mustafa</p>
					<p className="skill">Frontend Engineer</p>
					<span style={{ fontWeight: "lighter" }}>23 August 2021</span>
				</div>
			</div>
		</div>
	);
}

export default Me;
