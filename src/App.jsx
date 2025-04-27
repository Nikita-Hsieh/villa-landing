import React from 'react'
import { motion } from 'framer-motion'

import villaImage from './assets/villa.jpg'
import profileImg1 from './assets/profile-1.jpg'
import profileImg2 from './assets/profile-2.jpg'
import propertyImg from './assets/property1.jpg'
import locationImg from './assets/locationImg.webp'

// animation variants by staggererChildren
const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.2,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
}

const backgroundImage = {
	hidden: { scale: 1.1 },
	show: { scale: 1, transition: { duration: 1 } },
}

const stats = [
	{ value: '115k+', label: 'Capital Raised' },
	{ value: '65k+', label: 'Happy Customers' },
	{ value: '85k+', label: 'Property Options' },
]

const App = () => {
	return (
		<div className="h-screen w-screen overflow-hidden relative py-5 px-10">
			<motion.img
				variants={backgroundImage}
				initial="hidden"
				animate="show"
				src={villaImage}
				alt="Background Image"
				className="h-full w-full object-center object-cover absolute inset-0 z-0"
			/>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="h-full w-full bg-transparent z-10 relative rounded-2xl border-[20px] border-white flex"
			>
				{/* Left Main Content */}
				<div className="w-1/2 h-full flex flex-col bg-white px-5 py-5 pr-10 overflow-hidden">
					<div className="flex w-full">
						<div className="tracking-tight text-6xl font-[500] w-fit flex flex-col mr-2">
							<h2 className="h-18 items-center flex overflow-hidden">
								<motion.span variants={item}>Reserve Your</motion.span>
							</h2>
							<h2 className="h-18 items-center flex overflow-hidden">
								<motion.span variants={item}>Ideal Villa</motion.span>
							</h2>
						</div>

						{/* Small Profile Images */}
						<motion.div
							variants={item}
							className="w-[80px] h-[80px] flex flex-wrap gap-1"
						>
							<div className="h-14 w-14 rounded-full overflow-hidden">
								<img
									src={profileImg1}
									alt="Profile Img"
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="h-9 w-9 rounded-full overflow-hidden">
								<img
									src={profileImg2}
									alt="Profile Img"
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="h-7 w-7 rounded-full overflow-hidden">
								<img
									src={profileImg1}
									alt="Profile Img"
									className="h-full w-full object-cover"
								/>
							</div>
						</motion.div>
					</div>

					<motion.div
						variants={item}
						className="flex mt-5 mb-5 items-center w-full gap-5"
					>
						<p className="text-nowrap text-sm font-bold">Let's go explore!</p>
						<div className="h-[1px] w-full bg-black/10"></div>
					</motion.div>

					<motion.div variants={item} className="flex w-full gap-6">
						<span className="text-sm font-black">01</span>
						<p className="leading-[1.3] text-sm">
							Escape to a world of luxury and tranquility. Our exclusive villas
							offer breathtaking views, private pools, and top-tier amenities to
							make your stay unforgettable.
						</p>
						<motion.button className="w-96 h-10 rounded-full flex items-center justify-center text-white bg-black font-light text-sm">
							Explore
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-move-up-right ml-2"
							>
								<path d="M13 5H19V11" />
								<path d="M19 5L5 19" />
							</svg>
						</motion.button>
					</motion.div>

					<div className="flex w-full my-5 items-center justify-between">
						{stats.map((stat, index) => (
							<React.Fragment key={stat.label}>
								<motion.div variants={item} className="flex flex-col gap-0">
									<p className="text-2xl font-bold">{stat.value}</p>
									<span className="text-sm text-black/80">{stat.label}</span>
								</motion.div>
								{index < stats.length - 1 && (
									<div className="h-7 w-[2px] bg-black/20" />
								)}
							</React.Fragment>
						))}
					</div>

					<motion.div
						variants={item}
						className="w-[90%] min-h-64 max-h-[50%] mx-auto mt-auto rounded-3xl overflow-hidden"
					>
						<img
							src={propertyImg}
							alt="Property"
							className="w-full h-full object-cover"
						/>
					</motion.div>
				</div>

				{/* Right Side Content */}
				<div className="w-1/2 h-full relative flex flex-col">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 1.8 }}
						className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"
					>
						<div className="text-sm z-10 relative bg-white w-56 font-medium leading-[1.2] border-[10px] border-white rounded-2xl mt-5 ms-5 flex flex-row gap-3 p-3">
							<div>
								<p>Cupertino, CA</p>
								<div className="h-8 w-8 rounded-full flex items-center justify-center bg-black text-white mt-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-move-up-right"
									>
										<path d="M13 5H19V11" />
										<path d="M19 5L5 19" />
									</svg>
								</div>
							</div>
							<img
								src={locationImg}
								alt="Location"
								className="w-24 h-20 object-cover rounded-2xl"
							/>
						</div>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 2.2 }}
							className="absolute bottom-24 left-5 text-white/70 text-sm leading-relaxed z-10 w-1/2"
						>
							Whether nestled in a tropical paradise, perched on a scenic
							hillside, or located by the ocean, each villa is a sanctuary
							designed for those who appreciate the finer things in life.
						</motion.p>

						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 2.6 }}
							className="absolute bottom-5 left-5 z-10 bg-amber-400 text-black px-10 h-10 rounded-full flex items-center justify-center font-medium text-sm"
						>
							Get Villa Today!
						</motion.button>
					</motion.div>
				</div>
			</motion.div>
		</div>
	)
}

export default App
