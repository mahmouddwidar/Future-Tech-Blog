interface NavigationLink {
    id: number,
    href: string,
    text: string
}

interface articlesCards {
    id: number,
    title: string,
    imgLink: string,
    detailsExpanded: boolean,
    details?: {
        description: string,
        publicationDate: string,
        author: string,
    },
    category: string,
    likes: number,
    shares: number,
}

interface FeatureItem {
    id: number;
    title: string;
    desc: string;
}

interface FeatureGroup {
    id: number;
    title: string;
    desc: string;
    icon: string;
    features: FeatureItem[];
}

interface Category {
    id: number;
    name: string;
    isActive: boolean;
}

interface BlogAuthor {
    name: string;
    profileLink: string;
}

interface Blog {
    author: BlogAuthor;
    title: string;
    description: string;
    date: string;
    category: string;
    likes: number;
    comments: number;
    shares: number;
}

interface FooterLink {
    id: number;
    href: string;
    name: string;
    isNew: boolean;
    externalLink?: boolean;
}

interface FooterCol {
    id: number;
    heading: string;
    links: FooterLink[];
}

export type { NavigationLink, articlesCards, FeatureItem, FeatureGroup, Category, Blog, FooterCol }