import Layout from "../../layout";

export default function Home() {
  return (
    <Layout>
      <div className="px-20">
        <h1 className="font-bold text-5xl mb-2">
          Gerador do Ficheiro SAF-T-AO
        </h1>
        <p className="font-normal text-base text-light mb-6">
          O projeto é uma ferramenta open source desenvolvida para gerar
          ficheiros SAF-T (Standard Audit File for Tax purposes) de forma
          automatizada e fácil. Esses ficheiros são usados para fins fiscais em
          Angola, e o objetivo do projeto é simplificar o processo de criação
          desses ficheiros.
        </p>
        <h1 className="font-bold text-5xl mb-2">Instalação</h1>
        <p className="font-normal text-base text-light mb-2">
          Para utilizar a ferramenta, é necessário ter instalado o NodeJS em sua
          máquina. Em seguida, siga os seguintes passos:
        </p>
        <code className="mb-6">fff</code>
        <h1 className="font-bold text-5xl mb-2">Uso</h1>
        <p className="font-normal text-base text-light mb-6">
          Para utilizar o gerador de arquivos SAF-T, basta executar o seguinte
          comando:
        </p>
        <code></code>
        <h1 className="font-bold text-5xl mb-2">Contribuição</h1>
        <p className="font-normal text-base text-light mb-6">
          Contribuições são sempre bem-vindas! Se você encontrar algum problema
          ou tiver alguma ideia de melhoria para o projeto, fique à vontade para
          enviar um pull request ou reportar um problema na página do projeto no
          GitHub.
        </p>
        <h1 className="font-bold text-5xl mb-2">Suporte</h1>
        <p className="font-normal text-base text-light mb-2">
          Se você precisar de ajuda com o Gerador de Arquivos SAF-T, aqui estão
          algumas opções:
        </p>
        <ul className="mb-6">
          <li className="font-normal text-base text-light mb-2">
            <a href="https://github.com/PEAL-26/gerador-ficheiro-saf-t-ao/issues">
              Relatar um problema
            </a>
            : se você encontrar um problema com o projeto, por favor, crie um
            problema no GitHub. Certifique-se de incluir informações sobre o seu
            sistema operacional, versão do NodeJS e quaisquer outras informações
            relevantes.
          </li>
          <li className="font-normal text-base text-light  mb-2">
            <a href="https://github.com/PEAL-26/gerador-ficheiro-saf-t-ao/issues">
              Solicitar recursos
            </a>
            : se você tiver alguma sugestão de recurso ou melhoria para o
            projeto, por favor, crie uma solicitação de recursos no GitHub.
            Certifique-se de incluir uma descrição clara do recurso que você
            gostaria de ver adicionado ao projeto.
          </li>
          <li className="font-normal text-base text-light">
            <a href="https://github.com/PEAL-26/gerador-ficheiro-saf-t-ao/blob/master/CONTRIBUTING.md">
              Contribuir com o suporte
            </a>
            : se você gostaria de ajudar a responder perguntas dos usuários,
            fornecer exemplos de código ou de outra forma contribuir para o
            suporte do projeto, por favor, siga as instruções em
            CONTRIBUTING.md.
          </li>
        </ul>
        <h1 className="font-bold text-5xl mb-2">Licença</h1>
        <p className="font-normal text-base text-light mb-6">
          O Gerador de Arquivos SAF-T é distribuído sob a licença MIT. Consulte
          o arquivo
          <a href="https://github.com/PEAL-26/gerador-ficheiro-saf-t-ao/blob/master/LICENSE.txt">
            {" LICENSE "}
          </a>
          para mais informações.
        </p>
      </div>
    </Layout>
  );
}
