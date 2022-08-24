import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <div>
      <Layout pagina={"Nosotros"}>
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              alt="Imagen sobre nosotros"
              layout="responsive"
              width={600}
              height={450}
            />
            <div>
              <p>
                Nunc neque lacus, fringilla auctor neque in, sodales tempor mi.
                Aenean lorem quam, aliquet ut nisl at, aliquet mollis orci. Duis
                a massa vel ipsum mollis bibendum. Cras non leo fringilla,
                efficitur quam at, blandit neque. Quisque id nunc sagittis,
                rutrum sapien vitae, cursus ante. Phasellus enim sapien, ornare
                id orci sed, aliquam tincidunt sapien. Cras pretium efficitur
                libero, maximus posuere quam efficitur vel. Duis ac arcu felis.
              </p>
              <p>
                Nunc neque lacus, fringilla auctor neque in, sodales tempor mi.
                Aenean lorem quam, aliquet ut nisl at, aliquet mollis orci. Duis
                a massa vel ipsum mollis bibendum. Cras non leo fringilla,
                efficitur quam at, blandit neque. Quisque id nunc sagittis,
                rutrum sapien vitae, cursus ante. Phasellus enim sapien, ornare
                id orci sed, aliquam tincidunt sapien. Cras pretium efficitur
                libero, maximus posuere quam efficitur vel. Duis ac arcu felis.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Nosotros;
