import React, { useEffect } from 'react';
import './Work.css';
import Tilt from 'react-parallax-tilt';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Flash from 'react-reveal/Flash';

const Work = () => {
	useEffect(() => {
		Aos.init({
			offset: 100
		});
	}, []);
	return (
		<div className="work" id="work">
			<div className="worktitle">
				<Bounce left>
					<h2>Works</h2>
				</Bounce>
				<Flash>
					<div className="underline2">
						{' '}
						<h2>Works</h2>
					</div>
				</Flash>
			</div>
			<div className="boxcontainer" style={{ overflow: 'hidden' }}>
				{/* firstbox */}
				<div className="checkingpad">
					<a
						href="https://netflix-clone-basith.netlify.app"
						target="_blank"
						style={{ textDecoration: 'none' }}
					>
						<Tilt className="tiltfirst" perspective={1000} glareEnable={true} glareMaxOpacity={1}>
							<Slide bottom cascade>
								<div className="first">
									<div className="boximg">
										<img src="netflix.jpg" alt="netflex-clone" />
									</div>
									<div className="boxdesc">
										This was my first project its netflix-clone and in this application have
										authendication by using firebase auth,and some of other libraries like router
										for routing ,redux for state management
									</div>
									<div className="boxname1" style={{ color: 'white' }}>
										netflix-clone
									</div>
								</div>
							</Slide>
						</Tilt>
					</a>
				</div>

				{/* //------------------------------------------------------------------------------------ */}
				<div className="checkingpad">
					<a
						href="https://www.youtube.com/watch?v=GM4Vs2RPLoo"
						target="_blank"
						style={{ textDecoration: 'none' }}
					>
						<Tilt
							className="tiltfour"
							perspective={1000}
							glareEnable={true}
							glareMaxOpacity={1}
							style={{ borderRadius: 10, overflow: 'hidden' }}
						>
							<Slide top cascade>
								<div className="four">
									<div className="boximg">
										<img src="basfood.jpg" alt="portfolio" />
									</div>
									<div className="boxdesch">
										This is a full stack mobile application by using react native and this have a
										late of features like check order history and track the order in realtime and
										smooth animation for better user experiance ,late of the package using for this
										projects like socket.io for making realtime order tracking and react navigation
										for routing ,jwt for authendication token and redux for statemanagement and this
										also have the adminpanal to control the application you can check demo of the
										application via click this container to watch the video in youtube
									</div>
									<div className="boxname4" style={{ color: 'white' }}>
										basfood
									</div>
								</div>
							</Slide>
						</Tilt>
					</a>
				</div>
				{/* secondbox */}
				<div className="checkingpad">
					<a
						href="https://whatsapp-clone-basith.netlify.app"
						target="_blank"
						style={{ textDecoration: 'none' }}
					>
						<Tilt
							className="tiltsecond"
							perspective={1000}
							glareEnable={true}
							glareMaxOpacity={1}
							style={{ borderRadius: 10, overflow: 'hidden' }}
						>
							<Slide top cascade>
								<div className="second">
									<div className="boximg">
										<img src="whatsapp.jpg" alt="whatsapp-clone" />
									</div>
									<div className="boxdesc">
										This appliaction is fully mern stack build and its allows user to send text and
										image to other users and also have authendication by using jwt and some of other
										libraries used in this project like pusher for sendig a message to real-time ,
										router for routing ,multer for send images
									</div>
									<div className="boxname2" style={{ color: 'white' }}>
										whatsapp-clone
									</div>
								</div>
							</Slide>
						</Tilt>
					</a>
				</div>
				{/* thirdbox */}
				<div className="checkingpad">
					<a href="https://e-commerce-basith.netlify.app" target="_blank" style={{ textDecoration: 'none' }}>
						<Tilt
							className="tiltthird"
							perspective={1000}
							glareEnable={true}
							glareMaxOpacity={1}
							style={{ borderRadius: 10, overflow: 'hidden' }}
						>
							<Slide bottom cascade>
								<div className="third">
									<div className="boximg">
										<img src="bascart.jpg" alt="bascart" />
									</div>
									<div className="boxdesc">
										This project is e-commerce application and its fully mern stack application and
										its have authendication features by using JWT and using redux for state
										management and this application also have admin dashboard for add,update and
										delete the products
									</div>
									<div className="boxname3" style={{ color: 'white' }}>
										Bascart
									</div>
								</div>
							</Slide>
						</Tilt>
					</a>
				</div>
				{/* fourbox */}
			</div>
		</div>
	);
};

export default Work;
