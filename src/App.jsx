import React, { useState, useEffect } from "react";
import "./App.css";


export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      const response = await fetch('https://fakestoreapi.com/products');
      const date = await response.json();
      setStudents(date)
    }
    fetchStudents();
  }, [])
  return (
    <div>

      <div className="app">
        <header className="header">
          <div className="logo">MyStore</div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#products" className="nav-link">Products</a></li>
              <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        </header>
        {students.map((s) => {
          return (
            <li key={s.id} className="product-item">
              <img src={s.image} alt={s.title} className="product-image" />
            </li>
          )
        })}
      </div>
      <footer class="multi-column-footer">
    <div class="footer-content">
        <div class="footer-column">
            <h4>Company</h4>
            <ul class="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h4>Support</h4>
            <ul class="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Support</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h4>Legal</h4>
            <ul class="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
            </ul>
        </div>
    </div>
</footer>

    </div>
  )
}