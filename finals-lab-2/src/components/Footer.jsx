import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer className="bg-emerald-900 text-white py-2">
            <div className="container mx-auto px-4 text-center font-serif">
            <p>&copy; 2024 My Footer</p>
            </div>
        </footer>
    )
  }
}

export default Footer