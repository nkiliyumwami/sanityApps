// all functions we need to get data from sanity

import { Project } from "@/types/Projects";
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config';

export async function getProjects(): Promise<Project[]> {
  //fetch all projects: using groq query
  return createClient(clientConfig).fetch(groq`*[ _type == "project"]{
    _id,
    _createdAt,
    name,
    'slug': slug.current,
    'image': image.asset ->url,
    url,
    content,
     }`);
}

export async function getProject(slug: string) : Promise<Project> {
  
  //fetch single project: using groq query
  return createClient(clientConfig).fetch(groq`*[ _type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    'slug': slug.current,
    'image': image.asset ->url,
    url,
    content,
     }`,
     //passing the slug 
     {slug}
     );
}
