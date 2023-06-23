import styles from "../css/Contact.css";

function Contact() {

  function submit() {
    return alert('teste')
  }
  return (
    <div className="contact_cont">
      <br />
      <section id="contact">
        <h1>CONTATO</h1>

        <form action="https://api.staticforms.xyz/submit" method="post">
          <label>Nome</label> {/*Formulario para o Nome*/}
          <input type="text" name="name" placeholder="Digite seu nome" />
          <label>Email</label> {/*Formulario para o Email*/}
          <input type="text" name="email" placeholder="Digite seu email" />
          <label>Mensagem</label> {/*Formulario para o envio de mensagem*/}
          <textarea
            name="message"
            cols="30"
            placeholder="Digite sua mensagem"
          ></textarea>
          <button type="submit">Enviar</button> {/*Botao de envio*/}

          <input type="hidden" name="accessKey" value="c2324439-cae1-4c22-b696-54802975256c"></input>
          <input type="hidden" name="redirectTo" value="http://localhost:5173/"></input>
        </form>
      </section>
    </div>
  );
}

export default Contact;
