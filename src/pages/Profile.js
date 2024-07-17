import React, { useState } from 'react';
import './Profile.css';
import Modal from 'react-bootstrap/Modal';
import horizontalMoreAction from '../images/horizontalMoreAction.PNG';
import sanjay from '../images/sanjay.jpg';  // Corrected import statement
import '../components/Card.css';

const Profile = () => {
  const [show, setShow] = useState(false);
  const [showPost, setShowPost] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePostClose = () => setShowPost(false);
  const handlePostShow = () => setShowPost(true);

  return (
    <div className='container shadow mt-3 p-4'>
      <div className='row'>
        <div className='col-md-6 d-flex flex-column'>
          <img className='p-2 profile-pic img-fluid' alt="profile pic" src={sanjay} />
          <p className='ms-3 fs-5 fw-bold'>Baladara_Sanjay</p>
          <p className='ms-3 fs-5'>Baladara Sanjay</p>
          <p className='ms-3 fs-5'>Frontend Developer @Sanjay | Follow @Baladara_Sanjay</p>
          <p className='ms-3 fs-5'>My portfolio on <a href="https://portfolio-pftc.vercel.app/">https://portfolio-pftc.vercel.app/</a></p>
        </div>
        <div className='col-md-6 d-flex flex-column justify-content-between mt-3'>
          <div className='d-flex justify-content-equal mx-auto'>
            <div className="count-section pe-4 pe-md-5 text-center fw-bold">
              <h4>10</h4>
              <p>Posts</p>
            </div>
            <div className='count-section px-4 px-md-5 text-center fw-bold'>
              <h4>20</h4>
              <p>Followers</p>
            </div>
            <div className='ps-md-5 ps-4 text-center fw-bold'>
              <h4>20</h4>
              <p>Following</p>
            </div>
          </div>
          <div className='mx-auto mt-md-0 mt-4'>
            <button className="custom-btn custom-btn-white me-md-3">
              <span className='fs-6'>Edit Profile</span>
            </button>
            <button className="custom-btn custom-btn-white" onClick={handlePostShow}>
              <span className='fs-6'>Upload Post</span>
            </button>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <div className='col-12'>
          <hr />
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-md-4 col-sm-12'>
          <div className="card" onClick={handleShow}>
            <img src="https://images.unsplash.com/photo-1720440931331-bdc0e7af2045?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="flower" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card" onClick={handleShow}>
            <img src="https://plus.unsplash.com/premium_photo-1719934921343-b89f54604cab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="flower" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card" onClick={handleShow}>
            <img src="https://plus.unsplash.com/premium_photo-1719930222062-5e63c50077cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="flower" />
          </div>
        </div>
      </div>
      <div className='row mb-4'>
        <div className='col-md-4 col-sm-12'>
          <div className="card" onClick={handleShow}>
            <img src="https://images.unsplash.com/photo-1718809070481-a16828fbb61d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNjJ8fHxlbnwwfHx8fHw%3D" className="card-img-top" alt="flower" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card" onClick={handleShow}>
            <img src="https://images.unsplash.com/photo-1718308055947-2f3d8d5ea983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="flower" />
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className="card" onClick={handleShow}>
            <img src="https://images.unsplash.com/photo-1719530910477-182ceb10b681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D" className="card-img-top" alt="flower" />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <div >
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="https://images.unsplash.com/photo-1670387965791-5524e9d1259a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="https://images.unsplash.com/photo-1720096004902-9954af4e2fae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className='d-flex align-items-center'>
                  <img className='profile-pic img-fluid' alt="profile pic" src={sanjay} />
                  <div>
                    <p className='ms-2 fw-bold'>Baladara_Sanjay</p>
                    <p className='ms-2'>@Baladara_Sanjay</p>
                  </div>
                </div>
                <div>
                  <button className="btn btn-link p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className='img-fluid' alt="more actions" src={horizontalMoreAction} />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><button className="dropdown-item" href="#">Action</button></li>
                    <li><button className="dropdown-item" href="#">Another action</button></li>
                    <li><button className="dropdown-item" href="#">Something else here</button></li>
                  </ul>
                </div>
              </div>
              <hr />
              <div>
                <h6 className='fw-bold'>How to become a Frontend Devloper</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                  <button className="btn btn-light me-2">
                    <i className="bi bi-heart-fill"></i>
                  </button>
                  <button className="btn btn-light">
                    <i className="bi bi-chat-fill"></i>
                  </button>
                </div>
                <p className='mb-0'>20 likes</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showPost} onHide={handlePostClose} size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <textarea className="form-control" id="content" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <select className="form-select" id="category">
                <option selected>Choose...</option>
                <option value="1">Tech</option>
                <option value="2">Design</option>
                <option value="3">Life</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Upload Image</label>
              <input type="file" className="form-control" id="image" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Profile;
