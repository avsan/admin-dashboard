// Sample Admin Dashboard UI using React and Bootstrap

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Admin Panel</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-light text-center text-lg-start mt-auto w-100" style={{ position: 'absolute', bottom: 0 }}>
    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2024 Admin Dashboard: Built with React and Bootstrap
    </div>
  </footer>
);

const MainContent1 = () => (
  <div className="container-fluid mt-3">
    <h3>Welcome to the Dashboard</h3>
    <div className="row row-cols-5 mt-4">
      <div className="col">
        <div className="card">
          <div className="card-body">
            
            <p className="card-text">150GB</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
           
            <p className="card-text">$1,345</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
           
            <p className="card-text">23</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            
            <p className="card-text">5K</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
          
            <p className="card-text">75%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const MainContent2 = () => (
  <div className="container-fluid mt-3">
    <div className="row row-cols-4 mt-4">

      <div className="col">
        <div className="card">
          <div className="card-body">
           
            <p className="card-text">$1,345</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
           
            <p className="card-text">23</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            
            <p className="card-text">5K</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
          
            <p className="card-text">75%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const MainContent = () => (
  <div className="container-fluid mt-3">
    <div className="row mt-4">
      <div className="col-md-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Capacity</h5>
            <p className="card-text">150GB</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Capacity</h5>
            <p className="card-text">150GB</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Capacity</h5>
            <p className="card-text">150GB</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Revenue</h5>
            <p className="card-text">$1,345</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Errors</h5>
            <p className="card-text">23</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Followers</h5>
            <p className="card-text">5K</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Users Behavior</h5>
            <div className="chart" style={{ height: '200px', background: 'linear-gradient(to right, #ffcc80, #ffab91, #a5d6a7)' }}>
              {/* Simulated chart area */}
            </div>
            <p className="text-muted mt-2">Updated 3 minutes ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
    <div className="d-flex">
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar />
        <MainContent1/>
        <MainContent />
        <MainContent2/>
        <Footer />
      </div>
    </div>
  </div>
);

export default Dashboard;
