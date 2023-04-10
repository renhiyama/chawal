export default function(){
	return(
		<div className="bg-yellow-200 min-h-screen">
		{ /* vertical centering */ }
		<div className="flex flex-col justify-center h-full">
		<h1 className="text-yellow-600 text-4xl font-bold text-center">Welcome Chawal!</h1>
		<p className="text-yellow-700 font-semibold text-center">Yes you - chawal. This website is for you. Enjoy!</p>
		<RiceButton />
		</div>
		</div>
	)
		}

export function RiceButton(){
	return(
		<a href="https://youtu.be/vEz2X8fXizw" target="_blank" rel="noreferrer"
		className="bg-yellow-600 text-yellow-200 font-semibold px-4 py-2 rounded-lg mx-auto text-center">How to make Chawal</a>
	)
}
