import styled from 'styled-components';

export const Imagem = styled.img`
    max-width: 100%;
    display: block;
`
export const MainContainer = styled.div`
    max-width: 1100px;
    margin: auto;

    h2{
        font-size: 1.5rem;
        margin-top: 10px;
        margin-bottom: 10px;

        a{
             color: red;

             &:hover{
                 color: black;
             }
        }
    }
`;

export const ListaPersonagem = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
`
export const ItemPersonagem = styled.li`
    list-style: none;
    padding: 0;
    flex-basis: 20%;
    margin-bottom: 30px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
`

export const DetalheFoto = styled.div`
    display: flex;
`