import React from 'react';
import Link from 'next/link';

const hash = "21beb75ca82b20e52c8910f3e6599d79"
const apikey = "eb8c78fd1e6e98315a9d42fff3b5c040"

export async function getStaticProps({ params }) {
    const marvel = await fetch(`https://gateway.marvel.com/v1/public/characters/${params.id}?ts=1&apikey=${apikey}&hash=${hash}`)
    const posts = await marvel.json()
  
    //console.log(posts)
  
        
    return {
      props: {
        posts,
      },
    };
  }

export async function getStaticPaths() {
    

    const marvel = await fetch(`https://gateway.marvel.com/v1/public/characters/1011334?ts=1&apikey=${apikey}&hash=${hash}`)
    const posts = await marvel.json();

   //console.log(posts.data.results[0].name);

    return {
      paths: [
            { params: { id: '1011334' } },
            { params: { id: '1017100' } },
            { params: { id: '1009144' } }
        ],
      fallback: true // false or 'blocking'
    };
  }

  

export default function DetalhePersonagem({ posts }) {
 
  return (
    <div>
        <Link href={'/'}>Voltar</Link>
        <h1>{posts.data.results[0].name}</h1>
        <p>{posts.data.results[0].description}</p>
        <img src={posts.data.results[0].thumbnail.path + "/detail.jpg"} alt={posts.data.results[0].name} />
        <h2>Quantidade de quadrinhos: {posts.data.results[0].comics.available}</h2>
        <h2>Quantidade de séries: {posts.data.results[0].series.available}</h2>
        <h2>Último lançamento: {posts.data.results[0].comics.items[0].name}</h2>
        <h2>Todas as aparições:</h2>
        {
            posts.data.results[0].comics.items.map(item => (
              <div>
                <p>{item.name}</p>
              </div>
            ))
        }

    </div>
  );
}

