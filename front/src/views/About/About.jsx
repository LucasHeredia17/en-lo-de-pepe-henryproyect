import style from "./About.module.css";

const About = () => {
  return (
    <>
      <h1 className={style.title}>¿Quienes somos?</h1>

      <p className={style.text}>
        En Lo De Pepe, nos enorgullecemos de ofrecer una experiencia culinaria
        auténtica y emocionante que celebra la rica tradición gastronómica de
        Japón. Situado en el corazón de la ciudad, nuestro restaurante es un
        oasis de elegancia y tranquilidad, donde los sabores frescos y los
        ingredientes de primera calidad se fusionan para crear platos que
        deleitan los sentidos.
      </p>
      <p className={style.text}>
        Nuestro talentoso equipo de chefs japoneses expertos, liderado por el
        renombrado Chef Takashi Yamamoto, trabaja diligentemente para presentar
        una variedad de delicias culinarias, desde exquisitos rollos de sushi
        hasta tentadores platos de tempura y sabrosos platos de yakitori. Cada
        plato es una obra maestra de la precisión y la pasión culinaria,
        elaborado con técnicas tradicionales y un toque moderno.
      </p>
      <p className={style.text}>
        En En Lo De Pepe, nos esforzamos por ofrecer una experiencia
        gastronómica excepcional para cada uno de nuestros huéspedes. Ya sea que
        esté buscando una cena íntima para dos, una reunión de negocios o una
        celebración especial, nuestro ambiente acogedor y nuestro servicio
        impecable garantizan una experiencia memorable.
      </p>
      <p className={style.text}>
        Además de nuestra extensa selección de platos de sushi y cocina
        japonesa, también ofrecemos una variedad de bebidas cuidadosamente
        seleccionadas, incluyendo sake premium y cócteles artesanales que
        complementan perfectamente nuestros platos.
      </p>
      <p className={style.text}>
        En En Lo De Pepe, no solo se trata de comida; se trata de una
        experiencia gastronómica que trasciende lo ordinario y transporta a
        nuestros huéspedes a las vibrantes calles de Japón. Únase a nosotros
        mientras exploramos los sabores, la cultura y la hospitalidad japonesa
        en su forma más auténtica.
      </p>
      <p className={style.text}>
        ¡Esperamos darle la bienvenida pronto a En Lo De Pepe para una
        experiencia culinaria verdaderamente inolvidable!
      </p>

      <p className={style.redes}>Nuestras Redes:</p>
      <div className={style.icons}>
        <a href="https://www.instagram.com/" target="_blank">
          <i
            className="fa-brands fa-instagram"
            style={{ color: "#ff4500", fontSize: "3rem", margin: "0 1rem" }}
          ></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <i
            className="fa-brands fa-square-facebook"
            style={{ color: "#ff4500", fontSize: "3rem", margin: "0 1rem" }}
          ></i>
        </a>
        <a href="https://twitter.com/" target="_blank">
          <i
            className="fa-brands fa-square-x-twitter"
            style={{ color: "#ff4500", fontSize: "3rem", margin: "0 1rem" }}
          ></i>
        </a>
      </div>
    </>
  );
};

export default About;
