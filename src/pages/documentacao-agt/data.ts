import { DataPros } from "../../components/table/interface";

export const headerData: DataPros[] = [
  {
    index: "1.1.",
    obrigatorio: "*",
    campo: "AuditFileVersion",
    notas: "Versão do arquivo de XML",
    formato: "TEXTO 10",
    children: null,
  },
  {
    index: "1.2.",
    obrigatorio: "*",
    campo: "CompanyID",
    notas: "Registro comercial da empresa",
    formato: "TEXTO 50",
    children: null,
  },
  {
    index: "1.3.",
    obrigatorio: "*",
    campo: "TaxRegistrationNumber",
    notas: "Número de Identificação Fiscal da empresa (NIF)",
    formato: "TEXTO 15",
    children: null,
  },
  {
    index: "1.4.",
    obrigatorio: "*",
    campo: "TaxAccountBasis",
    notas: `Tipo de programa: 
                <br/><<I>> Contabilidade integrada com facturação 
                <br/><<C>> Contabilidade 
                <br/><<F>> Facturação 
                <br/><<P>> Facturação parcial 
                <br/><<R>> Recibos 
                <br/><<S>> Auofacturação 
            <br/>OBS: Se o programa emitir apenas um tipo de Documento, deve 
            ser indicado com uma das opções acima, caso contrário, deve ser 
            utilizado <<C>>, <<F>>.
            `,
    formato: "TEXTO 1",
    children: null,
  },
  {
    index: "1.5.",
    obrigatorio: "*",
    campo: "CompanyName",
    notas: `Denominação social da empresa ou nome do sujeito passivo`,
    formato: "TEXTO 100",
    children: null,
  },
  {
    index: "1.6.",
    obrigatorio: "",
    campo: "BusinessName",
    notas: `Designação comercial do sujeito passivo`,
    formato: "TEXTO 60",
    children: null,
  },
  {
    index: "1.7.",
    obrigatorio: "*",
    campo: "CompanyAddress",
    notas: `Endereço da empresa`,
    formato: "",
    children: [
      {
        index: "1.7.1.",
        obrigatorio: "",
        campo: "BuildingNumber",
        notas: `Número da porta`,
        formato: "TEXTO 10",
        children: null,
      },
      {
        index: "1.7.2.",
        obrigatorio: "",
        campo: "StreetName",
        notas: `Nome da rua`,
        formato: "TEXTO 200",
        children: null,
      },
      {
        index: "1.7.3.",
        obrigatorio: "*",
        campo: "AddressDetail",
        notas: `Endereço detalhado: Deve incluir nome da rua, numero da porta e andar, se aplicável`,
        formato: "TEXTO 210",
        children: null,
      },
      {
        index: "1.7.4.",
        obrigatorio: "*",
        campo: "City",
        notas: `Cidade`,
        formato: "TEXTO 50",
        children: null,
      },
      {
        index: "1.7.5.",
        obrigatorio: "",
        campo: "PostalCode",
        notas: `Código postal`,
        formato: "TEXTO 10",
        children: null,
      },
      {
        index: "1.7.6.",
        obrigatorio: "",
        campo: "Province",
        notas: `Província`,
        formato: "TEXTO 50",
        children: null,
      },
      {
        index: "1.7.7.",
        obrigatorio: "*",
        campo: "Country",
        notas: `Código ISO do País. Ex: AO`,
        formato: "TEXTO 2",
        children: null,
      },
    ],
  },
  {
    index: "1.8.",
    obrigatorio: "*",
    campo: "FiscalYear",
    notas: `Ano fiscal`,
    formato: "",
    children: null,
  },
  {
    index: "1.9.",
    obrigatorio: "*",
    campo: "StartDate",
    notas: `Data do início do período do ficheiro`,
    formato: "Data",
    children: null,
  },
  {
    index: "1.10.",
    obrigatorio: "*",
    campo: "EndDate",
    notas: `Data do fim do período do ficheiro`,
    formato: "Data",
    children: null,
  },
  {
    index: "1.11.",
    obrigatorio: "*",
    campo: "CurrencyCode",
    notas: `Códigos ISO para moedas. Ex: AOA`,
    formato: "Data",
    children: null,
  },
  {
    index: "1.12.",
    obrigatorio: "*",
    campo: "DateCreate",
    notas: `Data de criação do ficheiro SAFT `,
    formato: "Data",
    children: null,
  },
  {
    index: "1.13.",
    obrigatorio: "*",
    campo: "TaxEntity",
    notas: `No caso do ficheiro de facturação, deve ser especificado 
            a que estabelecimento (posto de venda) diz respeito o ficheiro 
            produzido, se aplicável. Caso contrário, deve ser preenchido com 
            a especificação <<Global>>.
            <br>No caso do ficheiro de contabilidade ou integração, este campo 
            deve ser preenchido com a especificação <<Sede>>.`,
    formato: "TEXTO 20",
    children: null,
  },
  {
    index: "1.14.",
    obrigatorio: "*",
    campo: "ProductCompanyTaxID",
    notas: `NIF da entidade produtora do software`,
    formato: "TEXTO 20",
    children: null,
  },
  {
    index: "1.15.",
    obrigatorio: "*",
    campo: "SoftwareValidationNumber",
    notas: `Número da validação, atribuída a entidade produtora do software. 
            Se não aplicável, deve ser preenchido com <<0>> (zero).`,
    formato: "Inteiro",
    children: null,
  },
  {
    index: "1.16.",
    obrigatorio: "*",
    campo: "ProductID",
    notas: `Nome da aplicação que gera o SAFT. Deve ser indicado o nome 
            comercial do software e o da empresa produtora do software. 
            <<Nome da aplicação/nome da empresa>>`,
    formato: "TEXTO 255",
    children: null,
  },
  {
    index: "1.17.",
    obrigatorio: "*",
    campo: "ProductVersion",
    notas: `Versão da aplicação produtora do SAFT.`,
    formato: "TEXTO 30",
    children: null,
  },
  {
    index: "1.18.",
    obrigatorio: "",
    campo: "HeaderComment",
    notas: ``,
    formato: "TEXTO 255",
    children: null,
  },
  {
    index: "1.19.",
    obrigatorio: "",
    campo: "Telephone",
    notas: ``,
    formato: "TEXTO 20",
    children: null,
  },
  {
    index: "1.20.",
    obrigatorio: "",
    campo: "Fax",
    notas: ``,
    formato: "TEXTO 20",
    children: null,
  },
  {
    index: "1.21.",
    obrigatorio: "",
    campo: "Email",
    notas: ``,
    formato: "TEXTO 20",
    children: null,
  },
  {
    index: "1.22.",
    obrigatorio: "",
    campo: "Website",
    notas: ``,
    formato: "TEXTO 20",
    children: null,
  },
];
