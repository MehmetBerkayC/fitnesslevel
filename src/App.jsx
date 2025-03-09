import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { useState } from "react";
import { generateWorkout } from "./utils/functions";

function App() {
	const [workout, setWorkout] = useState(null);
	const [poison, setPoison] = useState("individual");
	const [muscles, setMuscles] = useState([]);
	const [goals, setGoals] = useState("strength_power");

	function updateWorkout() {
		if (muscles.length === 0) {
			alert("Please select at least 1 muscle group to work on!");
			return;
		}

		let newWorkout = generateWorkout({ poison, muscles, goals });
		console.log("Generated workout: ", newWorkout);
		setWorkout(newWorkout);

		// Scroll to workout section
		window.location.href = "#workout";
	}

	return (
		<main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
			<Hero />
			<Generator
				poison={poison}
				setPoison={setPoison}
				muscles={muscles}
				setMuscles={setMuscles}
				goals={goals}
				setGoals={setGoals}
				updateWorkout={updateWorkout}
			/>
			{workout && <Workout workout={workout} />}
		</main>
	);
}

export default App;
