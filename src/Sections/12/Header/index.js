export default ({ title }) => {
  const styles = {
    background: "linear-gradient(20deg, #6813cb, #2575fc)",
    textAlign: "center",
    borderRadius: "0.2em",
    color: "#FFF",
    padding: "0.3em",
    margin: "1em",
    fontSize: "14px"
  };

  return (
    <header style={styles}>
      <h1>
        {title}
        <span role="img" aria-label="hook emoji">
          ⚓
        </span>
      </h1>
    </header>
  );
};
