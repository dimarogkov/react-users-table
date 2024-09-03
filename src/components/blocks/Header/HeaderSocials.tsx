import { Link } from 'react-router-dom';
import { HEADER_SOCIALS } from '../../../variables';

export const HeaderSocials = () => {
    return (
        <ul className='flex gap-3 sm:gap-4 w-fit'>
            {HEADER_SOCIALS.map(({ id, href, icon: SocialIcon }) => (
                <li key={id}>
                    <Link
                        to={href}
                        target='_blank'
                        className='group flex items-center justify-center w-10 h-10 rounded-full bg-gray transition-colors duration-300 hover:bg-green'
                    >
                        <SocialIcon className='w-5 h-5 text-black transition-colors duration-300 group-hover:text-white' />
                    </Link>
                </li>
            ))}
        </ul>
    );
};
