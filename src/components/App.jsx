import { useState } from 'react'
import styles from './App.module.css'
import logo from '../assets/suglogo.svg'

import api from '../services/api.js'

function App() {
let [repo, setRepo] = useState('');
let [repos, setRepos] =  useState([]);

async function pesquisar(){
if(!repo){
  alert('Digite o autor/nome do repositório!');
  return;
}
try {
  const resposta = await api.get(`users/${repo}/repos`);
  setRepos(resposta.data);
} catch (error) {
  alert('Erro ao buscar o respositório');
}
}
  return (
    <>
    <img src={logo} alt='Github Explorer'/>
    <div className={styles.form}>
      <input 
        value={repo} onChange={(e)=> setRepo(e.target.value)}
        placeholder='Digite o nome do repositório' />
      <button onClick={pesquisar}>Pesquisar</button>

    </div>
    <div className={styles.repo}>
        
    {repos.map((x, i)=>{

        return <a key={i} href={x.html_url} target="_blank">
          <img src={x.owner.avatar_url}/>
          <div>
            <strong>{x.full_name}</strong>
            <p>{x.name}</p>
          </div>
        </a>
      
    })}
    
    </div>
    

    
    </>
  )
}

export default App
