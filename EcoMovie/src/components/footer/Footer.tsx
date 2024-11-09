// @ts-nocheck
import React from "react";
import {
	FaDiscord,
	FaInstagram,
	FaVk,
	FaLinkedin,
	FaGithub
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper.js";

import "./style.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<ContentWrapper>
				<ul className="menuItems">
					<li className="menuItem">Terms Of Use</li>
					<li className="menuItem">Privacy-Policy</li>
					<li className="menuItem">About</li>
					<li className="menuItem">Blog</li>
					<li className="menuItem">FAQ</li>
				</ul>
				<div className="infoText">
					EcoMovie - a unique website providing fascinating information about
					movies and TV shows. Here you can discover all the necessary details
					about your favorite films, actors, directors, ratings, and much more.
					EcoMovie boasts a stylish and intuitive interface that makes your
					search for cinematic masterpieces as convenient and enjoyable as
					possible.
				</div>
				<div className="socialIcons">
					<span className="icon">
						<FaDiscord />
					</span>
					<a href="https://www.instagram.com/7chyngyz/" target="_blank">
						<span className="icon">
							<FaInstagram />
						</span>
					</a>
					<span className="icon">
						<FaVk />
					</span>
					<span className="icon">
						<FaLinkedin />
					</span>
					<span className="icon">
						<FaGithub />
					</span>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
