import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsToggled] = useState(false);

	function toggleMenu(e) {
		isOpen ? setIsToggled(false) : setIsToggled(true);
	}

	return (
		<header className="border-b border-grayishblue">
			<div className="font-antonio font-base uppercase text-white flex flex-wrap items-center sm:flex-col lg:flex-row justify-between lg:px-10 pb-6 max-w-7xl mx-auto">
				<span className="text-2xl mt-5 sm:text-center px-4">
					the planets
				</span>
				{/* hamburger menu button */}
				<button className="mt-6 px-4 sm:hidden" onClick={toggleMenu}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
						<g fill={isOpen ? "#38384F" : "#fff"} fillRule="evenodd">
							<path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
						</g>
					</svg>
				</button>
				{/* mobile menu */}
				<div className="relative w-full sm:hidden">
					<nav
						className={`absolute font-spartan w-full mt-4 px-4 pt-10 sm:hidden transform transition-transform duration-300 ease-in-out ${
							isOpen ? "translate-x-0" : "-translate-x-full"
						}`}
					>
						<button className="flex w-full pb-6 border-b border-grayishblue">
							<span className="w-5 h-5 bg-skyblue rounded-full mr-5"></span>
							<span className="font-spartan font-semibold uppercase text-lg">
								mercury
							</span>
							<div className="flex-1 flex justify-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-700"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</button>
						<button className="flex w-full mt-6 pb-6 border-b border-grayishblue">
							<span className="w-5 h-5 bg-lightorange rounded-full mr-5"></span>
							<span className="font-spartan font-semibold uppercase text-lg">
								venus
							</span>
							<div className="flex-1 flex justify-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-700"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</button>
						<button className="flex w-full mt-6 pb-6 border-b border-grayishblue">
							<span className="w-5 h-5 bg-purple rounded-full mr-5"></span>
							<span className="font-spartan font-semibold uppercase text-lg">
								earth
							</span>
							<div className="flex-1 flex justify-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-700"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</button>
						<button className="flex w-full mt-6 pb-6 border-b border-grayishblue">
							<span className="w-5 h-5 bg-lightred rounded-full mr-5"></span>
							<span className="font-spartan font-semibold uppercase text-lg">
								mars
							</span>
							<div className="flex-1 flex justify-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-700"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</button>
						<button className="flex w-full mt-6 pb-6 border-b border-grayishblue">
							<span className="w-5 h-5 bg-red rounded-full mr-5"></span>
							<span className="font-spartan font-semibold uppercase text-lg">
								jupiter
							</span>
							<div className="flex-1 flex justify-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-700"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</button>
						<button className="flex w-full mt-6 pb-6 border-b border-grayishblue">
							<span className="w-5 h-5 bg-orange rounded-full mr-5"></span>
							<span className="font-spartan font-semibold uppercase text-lg">
								saturn
							</span>
							<div className="flex-1 flex justify-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-700"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</button>
						<button className="flex w-full mt-6 pb-6 border-b border-grayishblue">
							<span className="w-5 h-5 bg-aqua rounded-full mr-5"></span>
							<span className="font-spartan font-semibold uppercase text-lg">
								uranus
							</span>
							<div className="flex-1 flex justify-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-700"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</button>
						<button className="flex w-full mt-6 pb-6">
							<span className="w-5 h-5 bg-blue rounded-full mr-5"></span>
							<span className="font-spartan font-semibold uppercase text-lg">
								neptune
							</span>
							<div className="flex-1 flex justify-end">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-gray-700"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</button>
					</nav>
				</div>

				{/* tablet and desktop nav that starts at sm breakpoint */}
				<nav className="hidden sm:flex justify-center flex-wrap space-x-8 text-2xs font-spartan font-semibold tracking-wider opacity-80">
					<Link href="/">
						<a className="pt-8 relative overflow-hidden group">
							<div className="absolute inset-0 transform -translate-y-14 bg-skyblue group-hover:-translate-y-12 transition-transform duration-300 ease-in-out"></div>
							mercury
						</a>
					</Link>
					<Link href="/venus">
						<a className="pt-8 relative overflow-hidden group">
							<div className="absolute inset-0 transform -translate-y-14 bg-lightorange group-hover:-translate-y-12 transition-transform duration-300 ease-in-out"></div>
							venus
						</a>
					</Link>
					<Link href="/earth">
						<a className="pt-8 relative overflow-hidden group">
							<div className="absolute inset-0 transform -translate-y-14 bg-purple group-hover:-translate-y-12 transition-transform duration-300 ease-in-out"></div>
							earth
						</a>
					</Link>
					<Link href="/mars">
						<a className="pt-8 relative overflow-hidden group">
							<div className="absolute inset-0 transform -translate-y-14 bg-lightred group-hover:-translate-y-12 transition-transform duration-300 ease-in-out"></div>
							mars
						</a>
					</Link>
					<Link href="/jupiter">
						<a className="pt-8 relative overflow-hidden group">
							<div className="absolute inset-0 transform -translate-y-14 bg-red group-hover:-translate-y-12 transition-transform duration-300 ease-in-out"></div>
							jupiter
						</a>
					</Link>
					<Link href="/saturn">
						<a className="pt-8 relative overflow-hidden group">
							<div className="absolute inset-0 transform -translate-y-14 bg-orange group-hover:-translate-y-12 transition-transform duration-300 ease-in-out"></div>
							saturn
						</a>
					</Link>
					<Link href="/uranus">
						<a className="pt-8 relative overflow-hidden group">
							<div className="absolute inset-0 transform -translate-y-14 bg-aqua group-hover:-translate-y-12 transition-transform duration-300 ease-in-out"></div>
							uranus
						</a>
					</Link>
					<Link href="/neptune">
						<a className="pt-8 relative overflow-hidden group">
							<div className="absolute inset-0 transform -translate-y-14 bg-blue group-hover:-translate-y-12 transition-transform duration-300 ease-in-out"></div>
							neptune
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
}
