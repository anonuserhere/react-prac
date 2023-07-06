export default function BorderWindow(props) {
  return (
    <div
      className="container"
      style={{
        border: "1px solid gold",
        margin: "3px",
        padding: "3px",
        height: "auto",
      }}
    >
      <img
        src={props.img}
        style={{
          height: "auto",
          width: "500px",
        }}
        alt="random img"
      />
    </div>
  );
}
