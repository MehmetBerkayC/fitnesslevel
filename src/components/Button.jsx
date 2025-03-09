import React from "react";

export default function Button(props) {
	const { func = () => {}, text } = props;

	return (
		<button
			onClick={func}
			className="mx-auto px-8 py-4 rounded-3xl border-2 bg-slate-800 button-blueShadow"
		>
			<p>{text}</p>
		</button>
	);
}
