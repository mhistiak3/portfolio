export type HeroType = {
  name: string;
  image: string;
  roles: string[];
  phone: string;
  email: string;
  socials: Social[];
};
export type Social = {
  name: string;
  url: string;
};

export type AboutType = {
  title: string;
  description: string;
  cv: string;
  personal_info: {
    full_name: string;
    date_of_birth: string;
    nationality: string;
    spoken_languages: string;
    interests: string;
  };
};

export type EducationExperienceType = {
  education_experience: {
    education: {
      title: string;
      organization: string;
      year: string;
    }[];
    experience: {
      title: string;
      organization: string;
      year: string;
    }[];
  };
  skills: {
    name: string;
    category: string;
  }[];
};

export type AchievementsType = {
  completed_projects: number;
  happy_clients: number;
  years_of_experience: number;
};

export type ContactType = {
  address: string;
  phone: string;
  email: string;
  form_action: string;
};
export type Testimonial = {
  name: string;
  position: string;
  photo: string;
  feedback: string;
};
export type Project = {
  title: string;
  category: string;
  image: string;
  demo: string;
  github: string;
  description: string;
};
export type PortfolioType = {
  testimonials: Testimonial[];
  projects: Project[];
};
