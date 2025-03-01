import data from "../../data.json";
export function getPaths() {
  return data.map((item) => ({
    path: item.path,
    title: item.title,
    img: item.img,
  }));
}