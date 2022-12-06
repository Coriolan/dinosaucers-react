import DinoError from "./DinoError";

export default ({cast, onChoice}) => {
  try {
    /* if (true) {
      throw `Example of an error`;
    } */

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {cast.map((member) => (
          <a onClick={ () => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
            <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
          </a>
        ))}
      </div>
    );
  } catch (error) {
    return <DinoError detail={error} />;
  }
};
