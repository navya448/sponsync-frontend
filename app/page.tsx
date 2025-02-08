'use client';

import { Button } from "@/components/ui/button";
//import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="w-full flex justify-between items-center py-5 px-8">
          <div className="text-2xl font-bold">Sponsorship Hub</div>
          <div className="flex gap-6">
            <Button variant="outline" className="bg-black text-white">Home</Button>
            <Button variant="outline" className="bg-black text-white">For Companies</Button>
            <Button variant="outline" className="bg-black text-white">For Colleges</Button>
          </div>
        </nav>
      </header>

      {/* Main Content*/}
      <main className="flex flex-col items-center justify-center flex-grow w-full text-center px-6">
        {/* Hero Section */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">
            Welcome to The Sponsorship Ecosystem
          </h1>
          <p className="text-xl text-gray-600 mt-3">
            Where College Events Meet Corporate Sponsors
          </p>
        </div>

        {/* Main Buttons*/}
        <div className="flex flex-col gap-6 mt-8">
          <Button className="w-72 h-16 text-lg flex items-center justify-center">
            Company
          </Button>
          <Button className="w-72 h-16 text-lg flex items-center justify-center">
            College Event Organizer
          </Button>
        </div>

        {/* Contact Section 
        <Card className="mt-10 p-6 w-full max-w-md text-center">
          <CardContent>
            <h3 className="text-xl font-medium">Contact Us</h3>
            <p className="text-base text-gray-600 mt-3">
              +91 81302 77940, +91 93183 01351
            </p>
            <p className="text-base text-blue-600 mt-2">contactus@sponsync.com</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="text-blue-500 hover:underline text-base">LinkedIn</a>
              <a href="#" className="text-blue-500 hover:underline text-base">Instagram</a>
            </div>
          </CardContent>
        </Card>*/}

        {/* Footer */}
        <footer className="mt-10 text-base text-gray-500">
          &copy; 2025 sponsync. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
