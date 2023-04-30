import Table from "../../components/table";
import Layout from "../../layout";
import { headerData } from "./data";

export default function DocumentacaoAgt() {
  return (
    <Layout>
      <div className="px-20">
        <h1 className="font-bold text-5xl mb-2">Documentação AGT</h1>

        <h1 className="font-bold text-5xl mb-2">Cabeçalho</h1>
        <p className="font-normal text-base text-light mb-6">
          Esta tabela apresenta informações gerais sobre o sujeito passivo em
          relação ao arquivo SAFT
        </p>
        <Table data={headerData} />
      </div>
    </Layout>
  );
}
