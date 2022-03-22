import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from "next";
import { MainContainer, ListaPersonagem, ItemPersonagem, Imagem } from './../styles/estilo.js';

const hash = "21beb75ca82b20e52c8910f3e6599d79"
const apikey = "eb8c78fd1e6e98315a9d42fff3b5c040"

export default function Home({ marvel }) {
  return (
    <div>
      <MainContainer>
        <ListaPersonagem>
        {marvel.data.results.map(personagem => (
          <ItemPersonagem key={personagem.name}>

            <Link href={`detalhe-personagem/${personagem.id}`}>
              <Imagem src={personagem.thumbnail.path + "/standard_fantastic.jpg"} alt={personagem.name} />
            </Link>
            
            <h2><Link href={`detalhe-personagem/${personagem.id}`}>{personagem.name}</Link></h2>
          </ItemPersonagem>
        ))}
        </ListaPersonagem>
      
      </MainContainer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`);
  const data = await response.json();

  return {
    props: {
      marvel: data,
    },
    revalidate: 10
  }
};