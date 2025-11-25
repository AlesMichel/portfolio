export interface Project {
    title: string;
    desc: string;
    img: string;
    tags: string[];
    slug: string;
}

export const projectData: Project[] = [
    {
        title: 'Website for lawyer',
        slug: 'website-for-lawyer',
        desc: 'Single page with contact form https://www.huckova.cz/',
        img: '/assets/projects/huckova.png',
        tags: ['PHP'],
    },
    {
        title: 'Checkout & Payments',
        slug: 'checkout-payments',
        desc: 'Stripe payments, custom checkout flow.',
        img: '/img/project2-2.jpg',
        tags: ['Stripe', 'API'],
    },
    {
        title: 'Admin & CMS',
        slug: 'admin-cms',
        desc: 'Product admin, analytics, inventory.',
        img: '/img/project2-3.jpg',
        tags: ['CMS', 'Dashboard'],
    },
];
