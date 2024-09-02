import { StoreRedux } from '../elements/StoreRedux';
import { BtnLink, Subtitle, Text, Title } from '../ui';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <Title className='mb-4 last:mb-0'>Home Page</Title>
                <Subtitle className='mb-4 last:mb-0'>Some Subtitle from this Page</Subtitle>

                <Text className='mb-5 last:mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur corrupti voluptatum itaque
                    similique, quisquam ex aperiam rem ab laborum veritatis vitae eos maxime autem culpa beatae deleniti
                    necessitatibus reprehenderit praesentium!
                </Text>

                <BtnLink href='/'>Home Page</BtnLink>
            </div>

            <StoreRedux />
        </section>
    );
};
