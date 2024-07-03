'use client'
import Footer from '../components/Footer';
import Header from '../components/Header';
import AdminUpload from './upload';

const AdminPage = () => {
  return (
    <div>
      <Header/>
     
      <main className="p-4">
        <AdminUpload />
      </main>
     
      <Footer/>
    </div>
  );
};

export default AdminPage;
