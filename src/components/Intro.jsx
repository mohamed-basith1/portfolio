import React from 'react';
import './Intro.css';
import PanToolRoundedIcon from '@mui/icons-material/PanToolRounded';
import Typical from 'react-typical';
import Tilt from 'react-parallax-tilt';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
const Intro = () => {
	return (
		<div className="intro" id="intro">
			<div className="left">
				<Fade top>
					<p className="hi">
						Hi there{'  '}
						<span>
							<PanToolRoundedIcon className="hand" style={{ fontSize: 15 }} />
						</span>
						{'   '}i'm
					</p>
				</Fade>
				<h1 className="name">
					<Typical steps={[ 'b', 1000, 'basith', 5000 ]} loop={Infinity} wrapper="b" />
				</h1>
				<p className="webdev">Web & App developer </p>
				<Fade top>
					<p className="description">
						I'm a programmer. I have expert level knowledge in App and Web Development. Please take time to
						peruse my pages to know about my works, skills, dedication and out of the box thinking towards
						developing Apps and Websites. I intend to secure a firm where my depth of skills set is
						recognized and utilized in a constructive manner to add value to the companey and to my career
						development as well.
					</p>
				</Fade>
				<a href="#about" className="hireme">
					Hire me
				</a>
			</div>
			<LightSpeed right>
				<div className="right" style={{ overflowY: 'hidden' }}>
					<Tilt perspective={500} glareEnable={true} glareMaxOpacity={0.45} style={{ borderRadius: '50%' }}>
						<div className="rightimage">
							<img className="profile" src="profile.jpeg" alt="profile" />
						</div>
					</Tilt>
				</div>
			</LightSpeed>
			<a className="downarray" href="#skills">
				{' '}
				<KeyboardArrowDownRoundedIcon className="array" style={{ fontSize: 50 }} />{' '}
			</a>
		</div>
	);
};

export default Intro;
