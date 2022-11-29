const Film = ({ filmObj }) => {
  return (
    <>
      <li>
        <img src={filmObj.image} alt="pictureoffilm" width="60px" />
        <a href={filmObj.url}>{filmObj.name}</a>
      </li>
      <hr/>
    </>
  );
};

export default Film;
