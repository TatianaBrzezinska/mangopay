import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout/Layout';
import ContactDetailsPage from '@/pages/ContactDetailsPage';
import HomePage from '@/pages/HomePage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact/:id" element={<ContactDetailsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
