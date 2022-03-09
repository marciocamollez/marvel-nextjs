import React from 'react';
import Link from 'next/link';


export async function getStaticProps() {
  const hash = "21beb75ca82b20e52c8910f3e6599d79"
  const apikey = "eb8c78fd1e6e98315a9d42fff3b5c040"

  const marvel = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`)
  const posts = await marvel.json();

  //console.log(posts.data.results);
      
  return {
    props: {
      posts
    },
  };
}

export default function Home({ posts }) {
 
  return (
    <div>
      <ul>
      {posts.data.results.map(personagem => (
        <li key={personagem.name}>
          <Link href={`detalhe-personagem/${personagem.id}`}>{personagem.name}</Link>
        </li>
      ))}
      </ul>
    </div>
  );
}