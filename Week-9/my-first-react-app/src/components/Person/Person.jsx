import "./Person.style.css";

function Person({ data }) {
  return (
    <div className="person-card">
      <img src={data.avatar} alt={data.name} className="avatar" />
      <div className="info">
        <h3>{data.name}</h3>
        <p><strong>Telefon:</strong> {data.phoneNumbers[0].number}</p>
        <p><strong>Email:</strong> {data.emails[0].email}</p>
        <p><strong>Adres:</strong> {data.addresses[0].address}</p>
      </div>
    </div>
  );
}

export default Person;