import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import Loader from '../../../components/Loader';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://dramaflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Nova Categoria
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        if (values.titulo !== '') {
          setCategorias([
            ...categorias,
            values,
          ]);
          toast.success('Categoria cadastrada com sucesso!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.warning('Campo(s) obrigatório(s) em branco!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }

        clearForm();
      }}
      >

        <FormField
          label="*Título da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <h6>*Campo Obrigatório</h6>

        <Button type="submit">
          Cadastrar
        </Button>

        <ToastContainer />
      </form>

      {categorias.length === 0 && (
        <Loader />
      )}

      <div className="container">
        <h1>Categorias Registradas</h1>
        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`} style={{ listStyle: 'none', display: 'inline', padding: '5px' }}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
      </div>

      <Link to="/cadastro/video" className="linkPage" style={{ padding: '10px' }}>
        Voltar
      </Link>
      <Link to="/" className="linkPage">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
