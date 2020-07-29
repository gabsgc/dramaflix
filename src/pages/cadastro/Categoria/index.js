import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
    const valoresIniciais = {
        nome: ' ',
        descricao: ' ',
        cor: ' ',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues ({
            ...values,
            [chave]: valor //nome: 'valor'
        })
    }

    function handleChange(infosDoEvento) {
        setValue(
          infosDoEvento.target.getAttribute('name'),
          infosDoEvento.target.value
        );
    }

    return (
        <PageDefault>
            <h1>Nova Categoria</h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>

               <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
               />

               <FormField 
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    onChange={handleChange}
               />

                <FormField 
                    label="Cor"
                    type="color"
                    name="cor"
                    onChange={handleChange}
               />

                <button>
                    Cadastrar
                </button>
                <button>
                    Limpar
                </button>
            </form>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;