import React from "react";

export default function App() {
	return (
		<>
			<div className="text-yellow-600">
				<h1>Hello World</h1>
			</div>
			<div className="text-green-600">
				<h1>Hello World</h1>
			</div>
			<div className="bg-green-600 text-white">
				<h1>Hello World</h1>
			</div>
			<div className="border-4 border-blue-500">
				<h1>Hello World</h1>
			</div>
			<div className="bg-silver">
				<h1>Hello World</h1>
			</div>
			<div className="bg-tahiti-900 text-white">
				<h1>Hello World</h1>
			</div>
			<div className="bg-tahiti-200 text-red-600">
				<h1>Hello World</h1>
			</div>
			<div>
				<p className="mt-1 text-xs sm:text-sm md:text-lg lg:text-3xl">
					This is a long text
				</p>
			</div>
			<div>
				<p className="bg-[#82a709]">This is a long text</p>
			</div>
			<div>
				<p>This is a long text</p>
			</div>
			<div className="leading-8 titles bg-white text-black">
				<h1 className="text-3xl decoration-red-700 italic underline">
					Title 1
				</h1>
				<h2 className="text-2xl line-through">Title 2</h2>
				<h3 className="text-xl overline">Title 3</h3>
				<p className="text-base capitalize">A regular paragraph</p>
				<p className="uppercase text-sm underline decoration-blue-700 decoration-wavy underline-offset-8">
					A description paragraph
				</p>
				<p className="text-xs">A little note</p>
				<p style={{ width: '300px'}} className="truncate">This is a long sentence to explain the trancate functionality</p>
			</div>
		</>
	);
}
