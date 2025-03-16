import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import "./Page.scss";

export default function Page({ data, title }) {
  return (
    <div className="page">
      <Header />
      <Nav />
      <Main data={data} title={title} />
      <Footer />
    </div>
  );
}
