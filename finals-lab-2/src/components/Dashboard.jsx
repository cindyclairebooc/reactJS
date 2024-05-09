import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
        <main className="flex-1 bg-orange-200 p-6">
            <h2 className="text-3xl font-semibold mb-4 font-shrikhand text-emerald-800">Dashboard ✩</h2>
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold font-serif text-orange-500">Sample Table</h1>
              <table className="min-w-full bg-emerald-800">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-indigo-200 text-center text-xs font-bold font-serif text-white uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 border-b-2 border-indigo-200 text-center text-xs font-bold font-serif text-white uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 border-b-2 border-indigo-200 text-center text-xs font-bold font-serif text-white uppercase tracking-wider">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-indigo-200 text-center text-white font-bold font-serif">1</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-indigo-200 text-center text-white font-bold font-serif">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-indigo-200 text-center text-white font-bold font-serif">john.doe@example.com</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-indigo-200 text-center text-white font-bold font-serif">2</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-indigo-200 text-center text-white font-bold font-serif">Jane Smith</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-indigo-200 text-center text-white font-bold font-serif">jane.smith@example.com</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
        </main>
    )
  }
}

export default Dashboard