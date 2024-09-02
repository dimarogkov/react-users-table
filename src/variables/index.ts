import { Github, Send, Linkedin } from 'lucide-react';
import { ISocial } from '../types/Social';

export const PROJECT_NAME = 'Users Table';

export const HEADER_SOCIALS: ISocial[] = [
    {
        id: 0,
        href: 'https://t.me/DimaRog1999',
        icon: Github,
    },
    {
        id: 1,
        href: 'https://github.com/dimarogkov',
        icon: Send,
    },
    {
        id: 2,
        href: 'https://www.linkedin.com/in/dmytro-rogkov-3a774021b/',
        icon: Linkedin,
    },
];
