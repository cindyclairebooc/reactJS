import React, { Component } from 'react'

export class Admin extends Component {
  render() {
    return (
        <main className="flex-1 bg-orange-200 p-6">
            <h2 className="text-3xl font-semibold mb-4 font-shrikhand text-emerald-800">Admin ✩</h2>
            <p className="font-bold font-serif text-emerald-800">This is the main content area of the Admin.</p>
        </main>
    )
  }
}

export default Admin