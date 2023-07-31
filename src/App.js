import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Nav(props){
  let lis = [];
  lis.push(<li key="1"><a href="/read/1">html</a></li>);
  lis.push(<li key="2"><a href="/read/2">css</a></li>);
  lis.push(<li key="3"><a href="/read/3">js</a></li>);
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Article(){
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}

function Header(props){
  return <header>
    <h1>
      <a href="/" onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode();
          }
      }>
      {props.title}
      </a>
    </h1>
    <p>{props.category}</p>
  </header>
}

function App() { 
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]

  return (
    <div className="App">
      <Header title="제목" category="목차" onChangeMode={()=>{
    
        }
      }>
      </Header>
      <Nav topics={topics}></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
