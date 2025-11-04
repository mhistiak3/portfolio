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

export type EducationSkillType = {
  education_experience: {
    education: {
      degree: string;
      institution: string;
      year: string;
    }[];
    experience: {
      position: string;
      company: string;
      year: string;
    }[];
  };
  skills: {
    name: string;
    level: number;
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
type Testimonial = {
  name: string;
  position: string;
  photo: string;
  feedback: string;
};

export type PortfolioType = {
  testimonials: Testimonial[];
};
