import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <div>Hello whoever you are!</div>
      <Link to="/contact/">Contact</Link>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
