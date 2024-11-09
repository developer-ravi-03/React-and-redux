/* eslint-disable react/prop-types */
const ErrorMessage = ({ items }) => {
  return (
    <>{items.length === 0 && <h3 className="r-red">I am still hungry.</h3>}</>
  );
};
export default ErrorMessage;
