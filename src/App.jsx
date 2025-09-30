import React from 'react';
import './App.css';

function App() {
  const galleryImages = [
    "https://gostops.s3.amazonaws.com/media/images/098_Exterior_02_5ZQZyH0.webp",
    "https://gostops.s3.amazonaws.com/media/images/103_Reception_01_sTjS43W.webp", 
    "https://gostops.s3.amazonaws.com/media/images/026_CommonArea_05_IeUYlfq.webp",
    "https://gostops.s3.amazonaws.com/media/images/072_CommonArea_35_WbBJ8V0.webp",
    "https://gostops.s3.amazonaws.com/media/images/073_CommonArea_36_qpEfO43.webp",
    "https://gostops.s3.amazonaws.com/media/images/074_CommonArea_37_mhTbpbk.webp"
  ];

  const roomTypes = [
    {
      id: 1,
      title: "Dorm Bed",
      price: "₹499",
      originalPrice: "₹999",
      period: "night",
      description: "Shared accommodation with amenities",
      features: ["4-bed mixed dormitory", "AC", "Ensuite bathroom", "Free breakfast", "WiFi"]
    },
    {
      id: 2, 
      title: "Private Room",
      price: "₹1499",
      originalPrice: "₹2999",
      period: "night", 
      description: "Comfort & privacy with ensuite",
      features: ["Private AC room", "King size bed", "Ensuite bathroom", "Mini fridge", "Work desk"]
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>goSTOPS</h1>
            </div>
            <nav className="nav">
              <a href="#" className="nav-link">Destinations</a>
              <a href="#" className="nav-link">Workation</a>
              <a href="#" className="nav-link">Coliving</a>
            </nav>
            <div className="header-actions">
              <button className="btn-secondary">Download App</button>
              <button className="btn-primary">Login</button>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <div className="badge">Popular for long-stays</div>
              <h1 className="hero-title">Bengaluru, HSR Silk Board</h1>
              <p className="hero-subtitle">754/L-185, HSR Layout, Sector 6, behind Silkboard bus stand, Outer Ring road, Bengaluru - 560102</p>
              <div className="hero-features">
                <div className="feature-badge">
                  <span className="feature-icon">👥</span>
                  Booked by 200+ this week
                </div>
                <div className="feature-badge">
                  <span className="feature-icon">🏢</span>
                  Perfect for Stay Near HSR Startup Scene
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="gallery-section">
            <h2 className="section-title">Gallery</h2>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div key={index} className={`gallery-item ${index === 0 ? 'featured' : ''}`}>
                  <img src={image} alt={`Hostel image ${index + 1}`} className="gallery-image" />
                  <div className="image-overlay">
                    <span className="view-more">View Image</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Content Grid */}
          <div className="content-grid">
            {/* Left Column */}
            <div className="content-main">
              {/* Price Section */}
              <section className="price-section">
                <h2 className="section-title">Room types & Pricing</h2>
                <div className="room-cards">
                  {roomTypes.map((room) => (
                    <div key={room.id} className="room-card">
                      <div className="room-image">
                        <img src={galleryImages[room.id]} alt={room.title} />
                        <div className="price-overlay">
                          <div className="price-main">{room.price}</div>
                          <div className="price-details">
                            <span className="original-price">{room.originalPrice}</span>
                            <span className="price-period">/{room.period}</span>
                          </div>
                        </div>
                      </div>
                      <div className="room-details">
                        <h3 className="room-title">{room.title}</h3>
                        <p className="room-description">{room.description}</p>
                        <div className="room-features">
                          {room.features.map((feature, index) => (
                            <span key={index} className="feature-tag">{feature}</span>
                          ))}
                        </div>
                        <button className="book-btn">Book Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Summary Section */}
            <div className="content-sidebar">
              <div className="summary-section">
                <h2 className="summary-title">Summary</h2>
                <div className="summary-content">
                  <p className="summary-text">
                    Fast Wi-Fi, coworking zones, and colourful dorms at budget rates — goSTOPS Bengaluru HSR Layout is your affordable workation hub with a buzzing crowd of travellers and professionals. Enjoy vibrant common areas, community activities, and comfy stays with great connectivity to the city.
                  </p>
                  <div className="summary-features">
                    <div className="summary-feature">
                      <span className="feature-icon">🏢</span>
                      <span>Coworking spaces</span>
                    </div>
                    <div className="summary-feature">
                      <span className="feature-icon">📶</span>
                      <span>High-speed WiFi</span>
                    </div>
                    <div className="summary-feature">
                      <span className="feature-icon">🎯</span>
                      <span>Community events</span>
                    </div>
                    <div className="summary-feature">
                      <span className="feature-icon">🚇</span>
                      <span>Great connectivity</span>
                    </div>
                  </div>
                  <div className="summary-pricing">
                    <div className="starting-text">Starting from</div>
                    <div className="starting-price">₹499</div>
                    <div className="per-night">/night</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>goSTOPS</h3>
              <p>Your affordable workation hub</p>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Contact</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;