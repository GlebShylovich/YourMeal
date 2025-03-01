import Nav from "../../components/Nav/Nav";
import Main from "../../components/Main/Main";

export default function Page({ data, title }) {
  return (
    <div className="page">
      <Nav />
      <Main data={data} title={title} />
    </div>
  );
}
