import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InputFatec from './components/InputFatec/InputFatec'
// import './App.css'
// import ButtonFatec from './components/ButtonFatec'
// import InputFatec from './components/InputFatec/InputFatec'

function App() {

  return (
    <>
    <html>
  <h2>
    Primeira aula de React
  </h2>
  <h6>
  1. Crie um componente para inserir um Input customizado (que deve ter a cor do texto vermelha) que pode receber um valor inicial, um tipo e um texto que será inserido como placeholder
  </h6>
    <h6>
    2. Monte um formulário no App.tsx com os campos de nome, e-mail, telefone e um botão de enviar. Por enquanto o botão não precisa realizar nenhuma ação.
    </h6>
  <div>
  <div className="input-container">
    <InputFatec type='text' placeholder='Nome'/>
  </div>
  <div className="input-container">
    <InputFatec type='email' placeholder='E-mail'/>
  </div>
  <div className="input-container">
    <InputFatec type='tel' placeholder='Telefone'/>
  </div>
  <div className="input-container">
     <ButtonFatec type='button' label='ENVIAR'/>
  </div>
  </div>
    {/* <ButtonFatec type='reset' label='Enviar form'/> */}
    <p>
    Carolaine Raissa Ferraz Alexandre - 4º semestre ADS
  </p>
    </html>
    </>
  )
}
//
//<ButtonFatec ></ButtonFatec>
//para comentar ctrl + ;
export default App
