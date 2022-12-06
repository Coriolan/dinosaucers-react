export default ({ cast, onChoice}) => {
  return (
    <nav className="container">
      <ul>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox" role="link">
              cast
            </summary>
            <ul aria-haspopup="listbox">
              {cast.map((member) => (
                <li key={member.id}>
                  <a data-tooltip={member.name}
                    onClick={() => {
                      onChoice(member);
                    }}
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <img
              style={{ height: "50px" }}
              src="images/logo_bug_stargazers.svg"
              alt="Dinosaucers logo"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}