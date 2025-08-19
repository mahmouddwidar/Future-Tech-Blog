import { type articlesCards, Blog, Category, FeatureGroup, FooterCol, NavigationLink } from "./contentTypes";

const navigationLinks: NavigationLink[] = [
    {
        id: 1,
        href: "/",
        text: "Home"
    },
    {
        id: 2,
        href: "/blogs",
        text: "Blogs"
    },
    {
        id: 3,
        href: "/podcasts",
        text: "Podcasts"
    },
    {
        id: 4,
        href: "/resources",
        text: "Resources"
    },
]

const articlesCards: articlesCards[] = [
    {
        id: 1,
        title: "Global Climate Summit Addresses Urgent Climate Action",
        imgLink: "/imgs/articles/article1.png",
        detailsExpanded: true,
        details: {
            description: "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions.",
            publicationDate: "10/10/2023",
            author: "Jane Smith",
        },
        category: "Environment",
        likes: 14000,
        shares: 204
    },
    {
        id: 2,
        title: "A Decisive Victory for Progressive Policies",
        imgLink: "/imgs/articles/article2.png",
        detailsExpanded: false,
        category: "Politics",
        likes: 2200,
        shares: 60
    },
    {
        id: 3,
        title: "Tech Giants Unveil Cutting-Edge AI Innovations",
        imgLink: "/imgs/articles/article3.png",
        detailsExpanded: false,
        category: "Technology",
        likes: 6000,
        shares: 92
    },
    {
        id: 4,
        title: "COVID-19 Variants",
        imgLink: "/imgs/articles/article4.png",
        detailsExpanded: false,
        category: "Health",
        likes: 10000,
        shares: 124
    },
]

const features: FeatureGroup[] = [
    {
        id: 1,
        title: "Future Technology Blog",
        desc: "Stay informed with our blog section dedicated to future technology.",
        icon: "/imgs/icons/feature1.svg",
        features: [
            {
                id: 1,
                title: "Quantity",
                desc: "Over 1,000 articles on emerging tech trends and breakthroughs.",
            },
            {
                id: 2,
                title: "Variety",
                desc: "Articles cover fields like AI, robotics, biotechnology, and more.",
            },
            {
                id: 3,
                title: "Frequency",
                desc: "Fresh content added daily to keep you up to date.",
            },
            {
                id: 4,
                title: "Authoritative",
                desc: "Written by our team of tech experts and industry professionals.",
            }
        ]
    },
    {
        id: 2,
        title: "Research Insights Blogs",
        desc: "Dive deep into future technology concepts with our research section.",
        icon: "/imgs/icons/feature2.svg",
        features: [
            {
                id: 1,
                title: "Depth",
                desc: "500+ research articles for in-depth understanding.",
            },
            {
                id: 2,
                title: "Graphics",
                desc: "Visual aids and infographics to enhance comprehension.",
            },
            {
                id: 3,
                title: "Trends",
                desc: "Explore emerging trends in future technology research.",
            },
            {
                id: 4,
                title: "Contributors",
                desc: "Contributions from tech researchers and academics.",
            }
        ]
    },
]

const categories: Category[] = [
    {
        id: 1,
        name: "All",
        isActive: true,
    },
    {
        id: 2,
        name: "Quantum Computing",
        isActive: false,
    },
    {
        id: 3,
        name: "AI Ethics",
        isActive: false,
    },
    {
        id: 4,
        name: "Space Exploration",
        isActive: false,
    },
    {
        id: 5,
        name: "Biotechnology",
        isActive: false,
    },
    {
        id: 6,
        name: "Renewable Energy",
        isActive: false,
    },
];

const blogs: Blog[] = [
    {
        author: {
            name: "John Techson",
            profileLink: "/imgs/authors/author1.svg"
        },
        title: "The Quantum Leap in Computing",
        description: "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
        date: "15/10/2023",
        category: "Quantum Computing",
        likes: 24500,
        comments: 50,
        shares: 20,
    },
    {
        author: {
            name: "Sarah Ethicist",
            profileLink: "/imgs/authors/author2.svg"
        },
        title: "The Ethical Dilemmas of AI",
        description: "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
        date: "05/11/2023",
        category: "Quantum Computing",
        likes: 32000,
        comments: 72,
        shares: 18,
    },
    {
        author: {
            name: "Astronomer X",
            profileLink: "/imgs/authors/author3.svg"
        },
        title: "The Mars Colonization Challenge",
        description: "Exploring the technical and logistical challenges of human colonization on Mars.",
        date: "10/11/2023",
        category: "Quantum Computing",
        likes: 20000,
        comments: 31,
        shares: 12,
    },
];


const footerCols: FooterCol[] = [
    {
        id: 1,
        heading: "Home",
        links: [
            { id: 1, href: "#", name: "Features", isNew: false },
            { id: 2, href: "#", name: "Blogs", isNew: false },
            { id: 3, href: "#", name: "Resources", isNew: true },
            { id: 4, href: "#", name: "Testimonials", isNew: false },
            { id: 5, href: "#", name: "Contact Us", isNew: false },
            { id: 6, href: "#", name: "Newsletter", isNew: false },
        ],
    },
    {
        id: 2,
        heading: "News",
        links: [
            { id: 1, href: "#", name: "Trending Stories", isNew: false },
            { id: 2, href: "#", name: "Featured Videos", isNew: false },
            { id: 3, href: "#", name: "Technology", isNew: false },
            { id: 4, href: "#", name: "Health", isNew: false },
            { id: 5, href: "#", name: "Politics", isNew: false },
            { id: 6, href: "#", name: "Environment", isNew: false },
        ],
    },
    {
        id: 3,
        heading: "Blogs",
        links: [
            { id: 1, href: "#", name: "Quantum Computing", isNew: false },
            { id: 2, href: "#", name: "AI Ethics", isNew: false },
            { id: 3, href: "#", name: "Space Exploration", isNew: false },
            { id: 4, href: "#", name: "Biotechnology", isNew: true },
            { id: 5, href: "#", name: "Renewable Energy", isNew: false },
            { id: 6, href: "#", name: "Biohacking", isNew: false },
        ],
    },
    {
        id: 4,
        heading: "Podcasts",
        links: [
            { id: 1, href: "#", name: "AI Revolution", isNew: false },
            { id: 2, href: "#", name: "AI Revolution", isNew: true },
            { id: 3, href: "#", name: "TechTalk AI", isNew: false },
            { id: 4, href: "#", name: "AI Conversations", isNew: false },
        ],
    },
    {
        id: 5,
        heading: "Resources",
        links: [
            { id: 1, href: "#", name: "Whitepapers", isNew: false, externalLink: true, },
            { id: 2, href: "#", name: "Ebooks", isNew: false, externalLink: true, },
            { id: 3, href: "#", name: "Reports", isNew: false, externalLink: true, },
            { id: 4, href: "#", name: "Research Papers", isNew: false, externalLink: true, },
        ],
    },
];

export { navigationLinks, articlesCards, features, categories, blogs, footerCols }