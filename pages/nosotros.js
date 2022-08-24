import Link from "next/link";
import Layout from "../components/Layout";

const Nosotros = () => {
  return (
    <div>
      <Layout pagina={"Nosotros"}></Layout>
      <h1>Desde nosotros</h1>
      <Link href="/">Ir a inicio</Link>
    </div>
  );
};

export default Nosotros;
