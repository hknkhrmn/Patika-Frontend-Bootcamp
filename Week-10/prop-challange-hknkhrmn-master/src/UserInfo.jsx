function UserInfo({ name, age }) {
  return (
    <div>
      <p>Ad: {name}</p>
      <p>Yaş: {age || "Bilinmiyor"}</p>
    </div>
  );
}

export default UserInfo;