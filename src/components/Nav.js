import React from 'react'

export default function Nav({isNavOpen}) {
  return (
    <nav className={`navBar ${isNavOpen ? 'active' : ''}`}>
    <a href="#home">Home</a>
    <a href="#vehicles">Vehicles</a>
    <a href="#services">Services</a>
    <a href="#featured">Featured</a>
    <a href="#reviews">Reviews</a>
    <a href="#contact">Contact</a>
</nav>
  )
}
