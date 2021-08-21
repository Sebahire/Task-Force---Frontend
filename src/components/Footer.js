import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div className="contacts white">
				<p className="contact_title">REACH ME</p>
				<p className="contact_label">Email</p>
				<p className="value">sebahire@gmail.com</p>
				<p className="contact_label">Phone</p>
				<p className="value">0788662786</p>
				<p className="contact_label">Profile</p>
				<p className="value">
					<a href="/">CLick here</a>
				</p>
			</div>

			<div className="small_footer">
				<div className="footer_contents">
					<p className="white">
						Developed by <span className="footer_bold">Mustaf</span>
					</p>
					<p className="white">
						Designed by <span className="footer_bold">Awesomity</span>
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
