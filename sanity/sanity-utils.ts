// all functions we need to get data from sanity

import { Project } from "@/types/Projects";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "xnosmchu",
    dataset: "production",
    apiVersion: "2023-09-28",
    useCdn: false,
  });
  //fetch all projects: using groq query
  return client.fetch(groq`*[ _type == "project"]{
    _id,
    _createdAt,
    name,
    'slug': slug.current,
    'image': image.asset ->url,
    url,
    content,
     }`);
}
