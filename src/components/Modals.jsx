export default ({ member, handleClose, handleChange }) => {

  return (
    <dialog id="modal-member" open>
      <article>
        <a
          href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
        />
        <hgroup>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "200px" }}
              src={`images/${member.slug}.svg`}
              alt={member.name}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "15px",
              }}
            >
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
              <a className="outline" href="#" role="button"
              onClick={() => {
                handleChange(Number(member.id) - 1)
              }}>
                previous
              </a><a className="outline" href="#" role="button"
              onClick={() => {
                handleChange(Number(member.id) + 1)
              }}>
                next
              </a>
            </div>
          </div>
        </hgroup>
      </article>
    </dialog>
  );

}