import { HeaderBlock } from './HeaderBlock';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSocials } from './HeaderSocials';

export const Header = () => {
    return (
        <HeaderBlock>
            <HeaderLogo />
            <HeaderSocials />
        </HeaderBlock>
    );
};
