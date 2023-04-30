import { v4 as uuidv4 } from 'uuid';

import { Replace } from "../../helpers/replace";
import { TableProps, DataPros } from "./interface";

export default function Table({ data }: TableProps) {
  const tableData = (input: Replace<DataPros, { children: boolean }>) => {
    const { index, obrigatorio, campo, notas, formato, children } = input;

    return (
      <tr
        key={uuidv4()}
        className={`border-b border-blue ${
          children ? "bg-gray/50" : "bg-gray"
        }`}
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {index}
        </th>
        <td className="px-6 py-4 text-center">
          {obrigatorio === "*"
            ? "Sim"
            : obrigatorio === "#"
            ? "Opcional"
            : "Não"}
        </td>
        <td className="px-6 py-4">{campo}</td>
        <td className="px-6 py-4">
          {
            <div
              dangerouslySetInnerHTML={{
                __html: notas.replace(/<<|>>/g, function (match) {
                  return match === "<<" ? "&lt;&lt;" : "&gt;&gt;";
                }),
              }}
            ></div>
          }
        </td>
        <td className="px-6 py-4 whitespace-nowrap ">{formato}</td>
      </tr>
    );
  };

  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg border border-blue">
      <table className="w-full text-sm text-left text-light">
        <thead className="sticky top-0 text-xs text-light bg-blue uppercase  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Índice
            </th>
            <th scope="col" className="px-6 py-3">
              Obrigatório
            </th>
            <th scope="col" className="px-6 py-3">
              Campo
            </th>
            <th scope="col" className="px-6 py-3">
              Notas
            </th>
            <th scope="col" className="px-6 py-3">
              Formato
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({ index, obrigatorio, campo, notas, formato, children }, key) => {
              const data: JSX.Element[] = [
                tableData({
                  index,
                  obrigatorio,
                  campo,
                  notas,
                  formato,
                  children: false,
                }),
              ];

              if (children && children.length > 0) {
                children.forEach((child) => {
                  data.push(tableData({ ...child, children: true }));
                });
              }

              return data;
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
