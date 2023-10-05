import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
    params: {project: string}
}

export default async function Project({params} : Props) {

    const slug = params.project

    const project = await getProject(slug)
    return (
                <div className="max-w-3xl mx-auto py-20">
                    <header className="flex items-center justify-between">
                        <h1 className="text-5xl py-5 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                            {project.name}
                        </h1>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                    </header>
                    {/* Content goes here */}

                    <div className="text-lg text-gray-700 mt-5">
                        <PortableText value={project.content} />
                    </div>

                    {/* Image goes here */}
                    <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-e
                    2 border-gray-700 obeject-cover rounded-xl" />


                </div>

            )
}