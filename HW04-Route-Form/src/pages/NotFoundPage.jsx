import React from 'react'
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div >
      404 - Page Not Found.
      <Link
        to="/"
        className="m-6 p-2 text-white text-lg bg-pink-300 rounded-full"
      >
        Home
      </Link>

    </div>
  )
}

export default NotFoundPage
