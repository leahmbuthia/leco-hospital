import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Travesy Media</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
      </li>
      </ul>
    </div>
  );
}

export default HomePage;