export type Projects = [{
    name: string,
    description: string,
    techStack: string[],
    githubLink: string,
    urlLink?: string
}]

export type Email = {
    email: string,
    message: string,
}

export type Experiences = {
    name: string,
    role: string,
    description: string[]
}

export type MetaProps = {
    title: string,
    description: string,
    favicon: string,
    type: string
}