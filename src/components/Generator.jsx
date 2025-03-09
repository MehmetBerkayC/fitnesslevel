import React from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import { useState } from "react";
import Button from "./Button";

function Header(props) {
	const { index, title, description } = props;
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-center gap-2">
				<p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-sky-300">
					{index}
				</p>
				<h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
			</div>
			<p className="text-sm sm:text-base mx-auto">{description}</p>
		</div>
	);
}

export default function Generator(props) {
	const [showModal, setShowModal] = useState(false);
	const {
		poison,
		setPoison,
		muscles,
		setMuscles,
		goals,
		setGoals,
		updateWorkout,
	} = props;

	function toggleModal() {
		setShowModal(!showModal);
	}

	function updateMuscles(muscleGroup) {
		/* What is going on? 
            - When selected the "Individual" muscles you can select up to 3
            - Any other muscle workouts/groups you can only select 1
            */

		// Already have the muscle in the list, remove it
		if (muscles.includes(muscleGroup)) {
			setMuscles(muscles.filter((value) => value !== muscleGroup));
			console.log("Removing muscles: ", muscleGroup);
			return;
		}

		// Individual muscles limit
		if (muscles.length > 2) {
			console.log("Muscles.length > 2", muscles);
			return;
		}

		// Other than individual is selected
		if (poison !== "individual") {
			/* On the database it is 
                individual: []
                bro_split: {
                    push:[exercise 1, 2, 3],
                    pull:[],
                    legs:[]
                } 
            */
			setMuscles([muscleGroup]);
			return;
		}

		// Add muscle from Individual to the list
		setMuscles([...muscles, muscleGroup]);
		console.log(
			"Individual is selected, adding muscles to the array:",
			muscleGroup
		);
	}

	function resetMuscles() {
		console.log("Resetting muscles array:", muscles);
		setMuscles([]);
	}

	return (
		<SectionWrapper
			id={"generate"}
			header="generate your workout"
			title={["It's", "Huge", "o'clock"]}
		>
			<Header
				index={"01"}
				title={"Pick your poison"}
				description={"Select the workout you wish to endure"}
			/>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
				{Object.keys(WORKOUTS).map((type, typeIndex) => {
					return (
						<button
							onClick={() => {
								setPoison(type);
								setShowModal(false); // Changin modal info so hide it
								resetMuscles(); // Reset muscle info
							}}
							className={
								"bg-slate-950 border py-3 rounded-lg duration-200 hover:border-sky-800 " +
								(type === poison
									? " border-sky-800"
									: " border-sky-600")
							}
							key={typeIndex}
						>
							<p className="capitalize">
								{type.replaceAll("_", " ")}
							</p>
						</button>
					);
				})}
			</div>
			<Header
				index={"02"}
				title={"Lock on targets"}
				description={"Select the muscles judged for annihilation"}
			/>
			<div className="flex flex-col bg-slate-950 border border-solid border-sky-600 rounded-lg p-3">
				<button
					onClick={toggleModal}
					className="relative flex py-3 items-center justify-center"
				>
					<p className="capitalize">
						{muscles.length === 0
							? "Select muscle groups"
							: muscles.join(" ")}
					</p>
					<i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
				</button>
				{showModal && (
					<div className="flex flex-col px-3 pb-3">
						{(poison === "individual"
							? WORKOUTS[poison]
							: Object.keys(WORKOUTS[poison])
						).map((muscleGroup, muscleGroupIndex) => {
							return (
								<button
									onClick={() => updateMuscles(muscleGroup)}
									key={muscleGroupIndex}
									className={
										"hover:text-sky-400 duration-200 " +
										(muscles.includes(muscleGroup)
											? " text-sky-400"
											: " ")
									}
								>
									<p className="capitalize">
										{muscleGroup.replaceAll("_", " ")}
									</p>
								</button>
							);
						})}
					</div>
				)}
			</div>
			<Header
				index={"03"}
				title={"Become a Juggernaut"}
				description={"Select your ultimate objective"}
			/>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				{Object.keys(SCHEMES).map((scheme, schemeIndex) => {
					return (
						<button
							onClick={() => {
								setGoals(scheme);
							}}
							className={
								"bg-slate-950 border py-3 rounded-lg duration-200 hover:border-sky-800 " +
								(scheme === goals
									? " border-sky-800"
									: " border-sky-600")
							}
							key={schemeIndex}
						>
							<p className="capitalize">
								{scheme.replaceAll("_", " ")}
							</p>
						</button>
					);
				})}
			</div>
			<Button func={updateWorkout} text={"Formulate"} />
		</SectionWrapper>
	);
}
