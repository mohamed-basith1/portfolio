import React from 'react';
import './Skills.css';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Tilt from 'react-parallax-tilt';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';
const Skills = () => {
	return (
		<div className="skills" id="skills">
			<div className="skillstitle">
				<Bounce top>
					<h2>Skills</h2>
				</Bounce>
				<LightSpeed right>
					<div className="underline3">
						<h2>
							<Bounce top>Skills</Bounce>
						</h2>
					</div>
				</LightSpeed>
			</div>
			{/* frontend fhdl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;k */}
			<div className="frontend">
				<div className="frontendtitle">
					<Bounce left>
						<p>Frontend</p>
					</Bounce>
				</div>
				<div className="circles">
					{/* html */}
					<RubberBand>
						<div className="circlein">
							<div
								className="circleimagehtml"
								style={{
									overflow: 'hidden',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<img
									src="html.svg"
									style={{
										objectFit: 'contain',
										height: '80%',
										objectPosition: ' 50% 50%'
									}}
									alt="logo"
								/>
							</div>
							<p style={{ marginTop: 10 }}>HTML</p>
						</div>
					</RubberBand>
					{/* css */}
					<RubberBand>
						<div className="circlein">
							<div
								className="circleimagecss"
								style={{
									overflow: 'hidden',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<img
									src="css.svg"
									style={{
										objectFit: 'cover',
										width: '80%'
									}}
									alt="logo"
								/>
							</div>
							<p style={{ marginTop: 10 }}>CSS</p>
						</div>
					</RubberBand>
					{/* js */}
					<RubberBand>
						<div className="circlein">
							<div
								className="circleimagejs"
								style={{
									overflow: 'hidden',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<img
									src="javascript.svg"
									style={{
										objectFit: 'contain',
										height: '80%',
										objectPosition: 'center'
									}}
									alt="logo"
								/>
							</div>
							<p style={{ marginTop: 10 }}>Javascript</p>
						</div>
					</RubberBand>
					{/* react */}
					<RubberBand>
						<div className="circlein">
							<div
								className="circleimagereact"
								style={{
									overflow: 'hidden',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<img
									src="react.svg"
									style={{
										objectFit: 'contain',
										width: '80%',
										objectPosition: 'center'
									}}
									alt="logo"
								/>
							</div>
							<p style={{ marginTop: 10 }}>React</p>
						</div>
					</RubberBand>
					{/* redux */}
					<RubberBand>
						<div className="circlein">
							<div
								className="circleimageredux"
								style={{
									overflow: 'hidden',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<img
									src="redux.svg"
									className="checkingimage"
									alt="logo"
									style={{
										objectFit: 'contain',
										width: '80%',
										objectPosition: 'center'
									}}
								/>
							</div>
							<p style={{ marginTop: 10 }}>Redux</p>
						</div>
					</RubberBand>
					{/* mate */}
					<RubberBand>
						<div className="circlein">
							<div
								className="circleimagemate"
								style={{
									overflow: 'hidden',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<img
									src="materialui.svg"
									style={{
										objectFit: 'contain',
										width: '80%',
										objectPosition: 'center'
									}}
									alt="logo"
								/>
							</div>
							<p style={{ marginTop: 10 }}>Materialui</p>
						</div>
					</RubberBand>
					{/* boot */}
					<RubberBand>
						<div className="circlein">
							<div
								className="circleimageboot"
								style={{
									overflow: 'hidden',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<img
									src="bootstrap.svg"
									style={{
										objectFit: 'contain',
										width: '80%',
										objectPosition: 'center'
									}}
									alt="logo"
								/>
							</div>
							<p style={{ marginTop: 10 }}>Bootstrap</p>
						</div>
					</RubberBand>
				</div>
			</div>
			{/* backend jrfgjpijgtpujrpugpfuopgpofopgpjdfpjphoiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiijsjjjossshjssssssssssssssshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshjshj */}
			<div className="backend">
				<div className="frontendtitle">
					<Bounce right>
						<p>Backend</p>
					</Bounce>
				</div>
				<div className="circles">
					<RubberBand>
						{/* express */}
						<div className="circlein">
							<div
								className="circleimageexpress"
								style={{
									overflow: 'hidden',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<p className="express">express</p>
							</div>
							<p style={{ marginTop: 10 }}>Express</p>
						</div>

						{/* node */}

						<div className="circlein">
							<div
								className="circleimagenode"
								style={{
									overflow: 'hidden',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<img
									src="nodejs.svg"
									style={{
										objectFit: 'contain',
										width: '80%',
										objectPosition: 'center'
									}}
									alt="logo"
								/>
							</div>
							<p style={{ marginTop: 10 }}>Node</p>
						</div>

						{/* mongodb*/}

						<div className="circlein">
							<div
								className="circleimagemongodb"
								style={{
									overflow: 'hidden',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<img
									src="mongodb.svg"
									style={{
										objectFit: 'contain',
										width: '80%',
										objectPosition: 'center'
									}}
									alt="logo"
								/>
							</div>
							<p style={{ marginTop: 10 }}>Mongodb</p>
						</div>
					</RubberBand>
				</div>
			</div>
			{/* other    oifddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}
			<div className="other">
				<div className="frontendtitle">
					<Bounce left>
						<p>Others</p>
					</Bounce>
				</div>
				<div className="circles">
					{/* html */}

					{/* other */}
					<Zoom top>
						<div className="circlein">
							<div className="circleimagefirebase" style={{ overflow: 'hidden' }}>
								<img
									src="firebase.svg"
									style={{
										objectFit: 'contain',
										width: '100%',
										objectPosition: 'center'
									}}
									alt="logo"
								/>
							</div>
							<p style={{ marginTop: 10 }}>Firebase</p>
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	);
};

export default Skills;
