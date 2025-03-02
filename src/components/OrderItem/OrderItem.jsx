import "./OrderItem.scss"

export default function OrderItem({ data }) {
  const { date, total } = data;
  const formattedDate = new Date(date).toLocaleDateString("en-EN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <div className="order-item">
      <p className="order-item__date">{formattedDate}</p>
      <p className="order-item__number">{date}</p>
      <p className="order-item__total">{total}</p>
    </div>
  );
}
