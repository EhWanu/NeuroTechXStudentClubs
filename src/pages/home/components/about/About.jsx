import "./about.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const About = () => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 0.3,
				},
			});
		}
		if (!inView) {
			animation.start({ x: "-100vw" });
		}
	}, [inView]);
	return (
		<div className="about" id="about">
			<div className="about-wrapper" ref={ref}>
				<motion.div
					className="about-left"
					animate={animation}
				>
					<h1 className="about-title">
						WHAT WE’RE ALL ABOUT
					</h1>
					<p className="about-text">
						Neurotechnology has never been this
						accessible before. We want to catalyze the
						interest and involvement of skilled students
						by providing them with a precise goal to
						work towards and the resources to get there.
					</p>
					<p className="about-text">
						The NeuroTechX Student Club Competition
						promotes interdisciplinary collaboration,
						preparing the participants for careers and
						excellence in science, technology,
						engineering and mathematics (STEM) through
						self-learning, knowledge sharing, and
						practical experimentation.
					</p>
					<p className="about-text">
						We believe neurotechnology is key to better
						understanding and to improving who we are.
						We aim to inspire a whole new generation of
						neuroengineers, who will be equipped to
						drive the field forward.
					</p>
					{/* <div className="about-button-container">
						<button className="about-button">
							WATCH OUR VIDEO TO LEARN MORE!
						</button>
					</div> */}
				</motion.div>
				<div className="about-right">
					<img
						src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						alt=""
						className="about-img"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
