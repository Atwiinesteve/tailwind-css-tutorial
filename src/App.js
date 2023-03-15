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
			<div className="sizes-and-padding--padding">
				<p className="p-4 bg-red-500">padding all</p>
				<p className="pt-4 bg-blue-500 text-white">padding top</p>
				<p className="pr-4 text-right bg-green-500 text-white">padding right</p>
				<p className="pl-4 bg-orange-500 text-white">padding left</p>
				<p className="pb-4 bg-yellow-500 text-white">padding bottom</p>
			</div>
			<div className="sizes-and-padding--margin">
				<p className="m-4 bg-violet-500 text-white">margin all</p>
				<p className="mt-4 bg-violet-500 text-white">margin top</p>
				<p className="mr-4 bg-violet-500 text-white">margin right</p>
				<p className="ml-4 bg-violet-500 text-white">margin left</p>
				<p className="mb-4 bg-violet-500 text-white">margin bottom</p>
			</div>
			<div className="bg-white p-6">
				<div className="w-40 h-1 bg-blue-200"></div>
				<div className="-mt-4 ml-5 w-20 h-12 bg-blue-500"></div>
			</div>
			<div className="bg-white p-6 flex space-x-1">
				<div className="mb-2 w-40 h-12 bg-blue-200"></div>
				<div className="w-40 h-12 bg-blue-500"></div>
			</div>
		</>
	);
}
