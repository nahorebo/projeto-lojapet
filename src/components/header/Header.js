import React from 'react'

function Header (){
  return(

<header>
<div className="logo">
          <figure>
            <img src= "/images/cachorros e gatos.jpg" alt= "imagem de caes e gatos"> 
            </img>
            </figure>
            <h2 className="nome">Pet Codigos</h2>
        </div>
        
        
<nav className="menu">
        <ul>
          <li class="lista"><a href="#produtos">Produtos</a></li>
          <li class="lista"><a href="#catalogo">Catálogo</a></li>
          <li class="lista"><a href="#adote">Adote</a></li>
          <li class="lista"><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    
</header>
        
)
  }

export default Header
