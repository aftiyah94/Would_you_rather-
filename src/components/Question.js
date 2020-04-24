import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Question extends React.Component {
  render() {
    const { question, auther, answered } = this.props;
    return (
      <div className="ui cards">
        <div
          className="card"
          style={{ width: "60vw", marginLeft: "10vw", marginRight: "-10vw" }}
        >
          <div className="content">
            <img
              className="right floated mini ui image"
              src={auther.avatarURL}
            />
            <div className="header">{auther.name}</div>
            <div className="meta">Asks: Would you rather : </div>
            <div className="description">
            <h3>{question.optionOne.text} </h3> <h5> OR </h5>
              <h3>{question.optionTwo.text} ?</h3> <br />
            </div>

            <div className="extra content">
              <div className="ui two buttons">
                {!answered ? (
                  <NavLink
                    className="ui basic green button"
                    to={`/answerquestion/${question.id}`}
                  >
                    <div>Answer</div>
                  </NavLink>
                ) : (
                  <NavLink
                    className="ui basic blue button"
                    to={`/answerresults/${question.id}`}
                  >
                    <div>Check Answers</div>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Question);