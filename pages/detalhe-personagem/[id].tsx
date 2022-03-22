import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MainContainer, DetalheFoto, Imagem } from '../../styles/estilo.js';

const hash = "21beb75ca82b20e52c8910f3e6599d79"
const apikey = "eb8c78fd1e6e98315a9d42fff3b5c040"

export default function Personagem({ marvel }){
  const { query } = useRouter();
  const { isFallback } = useRouter();

  //console.log(marvel);

  if(isFallback){
    return <p>Carregando...</p>;
  }

  return(
    <div>
      <MainContainer>
      
        <DetalheFoto>
          <div>
            <h1>{marvel.data.results[0].name}</h1>
            <p>{marvel.data.results[0].description}</p>
            <h2>Quantidade de quadrinhos: {marvel.data.results[0].comics.available}</h2>
            <h2>Quantidade de séries: {marvel.data.results[0].series.available}</h2>
            <h2>Último lançamento: {marvel.data.results[0].comics.items[0].name}</h2>
            <h2>Todas as aparições:</h2>
            {
                marvel.data.results[0].comics.items.map(item => (
                  <div>
                    <p>{item.name}</p>
                  </div>
                ))
            }
            <p>Personagem id: {query.id}</p>

            <Link href={'/'}>Voltar</Link>
          </div>
          <div><Imagem src={marvel.data.results[0].thumbnail.path + "/detail.jpg"} alt={marvel.data.results[0].name} /></div>
        </DetalheFoto>
        
      </MainContainer>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`);
  const data = await response.json();

  return{
    paths: [
      { params: { id: '1011334' } },
      { params: { id: '1017100' } },
      { params: { id: '1009144' } }
  ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const { id } = context.params;

  const response = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${apikey}&hash=${hash}`);
  const data = await response.json();


  return {
    props: {
      marvel: data,
    },
    revalidate: 10,
  }
}

/*
 variável login - troquei por id

 */