export interface NetworkMember {
  id: string;
  name: string;
  role: string;
  country: string;
  bio: string;
  photo: string;
}

export const networkMembers: NetworkMember[] = [
  {
    id: "aisha-kamara",
    name: "Dr. Aisha Kamara",
    role: "Health Systems Specialist",
    country: "Sierra Leone",
    bio: "Dr. Kamara brings over 15 years of experience strengthening primary health care infrastructure across West Africa, with deep expertise in digital health readiness assessments and community health worker platforms.",
    photo: "/images/placeholder.jpg",
  },
  {
    id: "marcus-webb",
    name: "Dr. Marcus Webb",
    role: "Health Economist",
    country: "United Kingdom",
    bio: "Dr. Webb specialises in health technology assessment and value-based healthcare, advising NHS trusts and international payers on the economic case for digital health investment.",
    photo: "/images/placeholder.jpg",
  },
  {
    id: "priya-nair",
    name: "Dr. Priya Nair",
    role: "Clinical AI Researcher",
    country: "India",
    bio: "Dr. Nair leads applied research in clinical AI validation and algorithmic fairness, with published work on diagnostic AI performance across heterogeneous patient populations in LMICs.",
    photo: "/images/placeholder.jpg",
  },
  {
    id: "carlos-mendez",
    name: "Dr. Carlos Mendez",
    role: "Digital Health Policy Advisor",
    country: "Mexico",
    bio: "Dr. Mendez advises ministries of health and multilateral agencies on digital health governance frameworks, interoperability standards, and national eHealth strategies across Latin America.",
    photo: "/images/placeholder.jpg",
  },
  {
    id: "sarah-okonkwo",
    name: "Dr. Sarah Okonkwo",
    role: "Implementation Science Lead",
    country: "Nigeria",
    bio: "Dr. Okonkwo applies implementation science methodologies to understand how digital health interventions succeed or fail at scale, with a focus on last-mile delivery contexts in Sub-Saharan Africa.",
    photo: "/images/placeholder.jpg",
  },
];
