import { h } from "preact";

type Description = string;
type Getter = () => string;

interface DataRowProps {
  children: [Description, Getter];
}

export const DataRow = ({ children: [description, getter] }: DataRowProps) => {
  const data = getter() || "No data found. Well done 😀";
  return (
    <tr>
      <td>{description}</td>
      <td>{data}</td>
    </tr>
  );
};
