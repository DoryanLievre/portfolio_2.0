import { GetStaticProps } from 'next';
import { fetchSkills } from './fetchSkills';
import {fetchSocials} from "./fetchSocials";
import {fetchStudies} from "./fetchStudy";
import {fetchExperiences} from "./fetchExperiences";
import {fetchPageInfo} from "./fetchPageInfo";
import {fetchProjects} from "./fetchProjects";
import {Experience, PageInfo, Project, Skill, Social, Study} from "@/typings";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    studies: Study[];
    skills: Skill[];
    socials: Social[];
    projects:Project[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const skills:Skill[] = await fetchSkills();
    const socials:Social[] = await fetchSocials();
    const studies:Study[] = await fetchStudies();
    const experiences:Experience[] = await fetchExperiences();
    const pageInfo:PageInfo = await fetchPageInfo();
    const projects:Project[] = await fetchProjects();

    return {
        props: {
            skills,
            socials,
            studies,
            experiences,
            pageInfo,
            projects
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10,
    };
};
