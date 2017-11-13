import React from 'react';
import Cartao from './cartao';

class ListaCartao extends React.Component {
    render() {
        var noticias = [
            {titulo:'Titulo1', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo2', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo3', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo4', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo5', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo6', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo7', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'},
            {titulo:'Titulo8', descricao:'Uma descrição', detalhe:'Detalhe', imagem:'http://materializecss.com/images/office.jpg', link:'#teste'}
        ];
        var aux = [];
        var novaLista = [];
        var tamanhoCol = "col m" + this.props.tamanhoColuna;
        for(var i = 0; i<noticias.length; i++){
            aux.push(noticias[i]);
            if(aux.length == this.props.qtdLinha){
                novaLista.push(aux);
                aux = [];
            } else if(i == noticias.length - 1){
                novaLista.push(aux);
            }
        }
        var listaCartoes = function(grupo){
            return grupo.map(function(item){
                return(
                    <div className={tamanhoCol}>
                        <Cartao dados={item}/>
                    </div>
                );
            });
        };

        var linha = novaLista.map(function(grupo){
            return(
                <div className="row">
                    {listaCartoes(grupo)}
                </div>
            );
        });


        return(
            <div>
                {linha}
            </div>
        );
    }
}

export default ListaCartao;
