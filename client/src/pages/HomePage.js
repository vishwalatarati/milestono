import { Link } from "react-router-dom";
import HomeImage from "../images/home.png";
import PropertiesImage from "../images/properties.jpg";
import Prop1 from "../images/prop.jpg";
import { useNavigate  } from 'react-router-dom';
// import Prop2 from "../images/prop2.avif";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="hero_section">
      <div
        className="hero_top_section"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <div className="location">
          <i className="fa-solid fa-location-dot"></i> Delhi
        </div>
        <div className="user">
          <div className="list_property" onClick={()=>{navigate('/form');}}>Post Property</div>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>

      <div className="hero_text" data-aos="fade-in" data-aos-duration="1000">
        <h1>MILESTONO.com</h1>
        <p>Properties to buy in Delhi</p>
      </div>

      <div className="sections" data-aos="fade-in" data-aos-duration="1000">
        <div className="section_mode">
          <Link className="real_estate">Real Estate</Link>
          <Link className="services">Services</Link>
        </div>

        <div
          className="section_links"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <Link className="buy">Buy</Link>
          <Link className="rent">Rent</Link>
          <Link className="commercial">Commercial</Link>
          <Link className="sell">Sell</Link>
          <Link className="pgs">PGs</Link>
        </div>
      </div>

      <div className="search_bar" data-aos="fade-in" data-aos-duration="1000">
        <input type="text" placeholder="Search Products" className="search" />
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-filter"></i>
      </div>

      <div
        className="property_posting"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <p>
          Are you an Onwer? <b>Post you property here.</b>
        </p>
      </div>
    </div>
  );
}

function PopularLandmarks() {
  return (
    <div className="popular_landmarks">
      <div
        className="popular_landmarks_heading"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <i className="fa-solid fa-flag"></i> <p>Popular Landmarks</p>
      </div>
      <div
        className="landmarks_list"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="landmark">Commercial Centre Delhi</div>
        <div className="landmark">Red Fort, Delhi</div>
        <div className="landmark">Gates Of Delhi</div>
        <div className="landmark">Commercial Centre Delhi</div>
        <div className="landmark">Red Fort, Delhi</div>
        <div className="landmark">Gates Of Delhi</div>
      </div>
    </div>
  );
}

function PostYourProperty() {
  return (
    <div className="post_your_property">
      <div
        className="brokerage_banner"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <img src={HomeImage} alt="HomeImage" />
        <div className="content">
          <h4>Zero Brokarage Properties</h4>
          <p>Upgrade to Premium and Get access to Zero Brokarage Properties</p>
        </div>
      </div>

      <div
        className="post_property_link"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <Link>Post Your Property</Link>
      </div>
    </div>
  );
}

function DownlaodApp() {
  return (
    <div className="download_app" data-aos="flip-left" data-aos-duration="1000">
      <div className="download_info">
        <h1>Milestono - Best App On Play Store</h1>
        <p>
          4.6 ⭐ | <span>1 Cr+ Downlaods</span>
        </p>
      </div>
      <div className="download_button">
        <Link>Download App</Link>
      </div>
    </div>
  );
}

function AppExclusiveProperties() {
  return (
    <div className="app_exclusive_properties">
      <div
        className="properties_header"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <div className="properties_header_content">
          <h2>App Exclusive Properties</h2>
          <p>New Properties Available Only On App</p>
        </div>
        <div className="properties_header_imgage">
          <img src={PropertiesImage} alt="PropertiesImage" />
        </div>
      </div>

      <div className="properties_container">
        <div className="property" data-aos="fade-up" data-aos-duration="1000">
          <img src={Prop1} alt="PropertiesImage" />
          <div className="property_content">
            <h1 className="property_title">Residential Plot</h1>
            <h5>By Kiran Kharade</h5>
            <p>1900 Sq. Feet Plot Area</p>
            <p>SS Road, Delhi</p>
            <h4> ₹ 22.0 L</h4>
          </div>
        </div>

        <div className="property" data-aos="fade-up" data-aos-duration="1000">
          <img src={Prop1} alt="PropertiesImage" />
          <div className="property_content">
            <h1 className="property_title">Residential Plot</h1>
            <h5>By Kiran Kharade</h5>
            <p>1900 Sq. Feet Plot Area</p>
            <p>SS Road, Delhi</p>
            <h4> ₹ 22.0 L</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="home_page">
      <HeroSection />
      <PopularLandmarks />
      <PostYourProperty />
      <DownlaodApp />
      <AppExclusiveProperties />
    </div>
  );
}
