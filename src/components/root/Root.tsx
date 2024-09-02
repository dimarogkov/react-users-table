import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../../App';
import { HomePage, NotFoundPage } from '../pages';

export const Root = () => {
    return (
        <Router basename='/react-users-table'>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
