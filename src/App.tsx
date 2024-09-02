import { Outlet } from 'react-router-dom';
import { Header } from './components/elements/Header';

export const App = () => {
    return (
        <>
            <Header />
            <main className='relative w-full max-w-screen-2xl p-4 sm:px-5 sm:py-5 lg:py-8 m-auto'>
                <Outlet />
            </main>
        </>
    );
};
