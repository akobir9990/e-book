import notFoundImg from "../../assets/images/404.svg";

function Error() {
  return (
    <div>
      <img src={notFoundImg} alt="" />
    </div>
  );
}

export default Error;
