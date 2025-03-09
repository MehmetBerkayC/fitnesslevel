import React from "react";
import Button from "./Button";

export default function Hero() {
	return (
		<div className="min-h-screen max-w-[900px] w-full mx-auto p-4 flex flex-col gap-10 items-center justify-center text-center">
			<div className="flex flex-col gap-2 sm:gap-4">
				<p>IT'S ABOUT TIME TO</p>
				<span className="bg-gradient-to-r from-transparent via-sky-900 via-55% to-transparent rounded-2xl p-1.5 ">
					<h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl">
						GET
						<sub className="text-4xl"> IN</sub>{" "}
						<span className="text-blue-400 font-semibold text-6xl sm:text-7xl md:text-8xl">
							SHAPE
						</span>
					</h1>
				</span>
			</div>
			<p className="text-sm md:text-base font-light">
				<span className="text-blue-400 font-medium">
					Terms & Conditions:
				</span>{" "}
				We are not responsible with any occurences of; severe body
				dismorphia, excessive mass gain, everlasting spinal or joint
				issues.
			</p>
			<p>
				Only you are to blame for becoming a local muscle monster that
				can't get through{" "}
				<span className="inline italic text-slate-300">
					"normal sized"
				</span>{" "}
				passages!.
			</p>
			<Button
				func={() => {
					// Scroll to generate section
					window.location.href = "#generate";
				}}
				text={"Accept & Begin"}
			/>
		</div>
	);
}
