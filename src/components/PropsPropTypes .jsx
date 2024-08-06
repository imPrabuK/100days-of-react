import PropTypes from "prop-types";

// import PropTypes from "prop-types";

export const PropsPropTypes = (props) => {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name :</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age :</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>Married :</th>
            <td>{props.isMarried ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

PropsPropTypes.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
};

PropsPropTypes.defaultProps = {
  name: "No name",
  age: 0,
  isMarried: false,
};
