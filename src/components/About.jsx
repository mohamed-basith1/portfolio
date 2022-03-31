import React from 'react';
import './About.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import LightSpeed from 'react-reveal/LightSpeed';
const About = () => {
	return (
		<div className="about" id="about">
			<div className="abouttitle">
				<LightSpeed left>
					<h2>About Me</h2>
				</LightSpeed>
				<LightSpeed right>
					<div className="underline">
						<h2>About Me</h2>
					</div>
				</LightSpeed>
			</div>
			<div className="aboutmain">
				<div className="leftside">
					<Fade top>
						<p className="whoiam">Who i am </p>
					</Fade>
					<Fade right>
						<p className="aboutdec">
							I have done my schooling at Al-Mubeen matric hr sec school with 73% in HSC.Currently I am
							fourth-year student pursuing my UG degree in Computer Science and Engineering at Prist
							University , Thanjavur. I'm a{' '}
							<span style={{ color: 'green', fontSize: 20, fontWeight: 500 }}>MERN</span> stack developer
							and developed a lot of beginner level projects such as Tic Tac Toe, Todo app, small frontend
							websites,etc. in my learning period. I developed Web Apps like Whatsapp clone with chating
							functionality and E-commerce with Admin panel using React and also developed a mobile
							appliaction like basfood its a food delivery app using react native . I have been learning
							both Web & app development using React js and react native for 1 year.
						</p>
					</Fade>
					<RubberBand>
						<a href="resume.pdf" download>
							<div className="cvbtn" style={{ color: 'white' }}>
								Download Resume
							</div>
						</a>
					</RubberBand>
				</div>

				<Fade bottom>
					<div className="centerline" />
				</Fade>

				<div className="rightside">
					<div className="follow">
						<h2>Follow Me</h2>
						<div className="iconsmain">
							<a
								style={{ padding: 10, borderRadius: '50%' }}
								href="https://www.instagram.com/mohamed_basith__/"
								target="_blank"
							>
								<Fade top>
									<div className="icons">
										<InstagramIcon className="insta" />
									</div>
								</Fade>
							</a>
							<a
								style={{ padding: 10, borderRadius: '50%' }}
								href="https://www.linkedin.com/in/mohamed-basith-14243022a"
								target="_blank"
							>
								<Fade right>
									<div className="icons">
										<LinkedInIcon className="link" />
									</div>
								</Fade>
							</a>
						</div>
					</div>
					<div className="follow">
						<h2>Contact Me</h2>
						<div className="iconsmain">
							<a style={{ padding: 10, borderRadius: '50%' }} href="tel:+917010809398">
								<Fade left>
									<div className="icons">
										<PhoneIcon className="phone" />
									</div>
								</Fade>
							</a>
							<a
								style={{ padding: 10, borderRadius: '50%' }}
								href="mailto:mbbasith456@gmail.com"
								target="_blank"
							>
								<Fade bottom>
									<div className="icons">
										<EmailIcon className="email" />
									</div>
								</Fade>
							</a>
						</div>
					</div>
				</div>
			</div>
			<RubberBand>
				<p className="footer">Build & Design by Basith</p>
			</RubberBand>
		</div>
	);
};

export default About;
