import React, { Component } from "react";

class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "", // textbox
      t2: "", // textbox
      t3: "", // textbox
      t4: "", // radio (gender)
      t5: "", // dropdown (city)
      t6: "", // checkbox (branch)
      t7: "", // color picker
      t8: "", // date picker (dob)
      t9: "", // textarea (about you)
      index: 0,
    };
  }

  onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };

  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };

  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;

    return (
      <div>
        {/* PART 1 */}
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part 1</h1>

          <input
            type="text"
            placeholder="First Name"
            value={t1}
            onChange={(e) => this.setState({ t1: e.target.value })}
          />
          <br />

          <input
            type="text"
            placeholder="Last Name"
            value={t2}
            onChange={(e) => this.setState({ t2: e.target.value })}
          />
          <br />

          <input
            type="text"
            placeholder="Mobile Number"
            value={t3}
            onChange={(e) => this.setState({ t3: e.target.value })}
          />
          <br />
        </div>

        {/* PART 2 */}
        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1>Part 2</h1>

          <label>Gender:</label><br />
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={t4 === "Male"}
            onChange={(e) => this.setState({ t4: e.target.value })}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={t4 === "Female"}
            onChange={(e) => this.setState({ t4: e.target.value })}
          /> Female
          <br /><br />

          <label>City:</label><br />
          <select
            value={t5}
            onChange={(e) => this.setState({ t5: e.target.value })}
          >
            <option value="">Select City</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
          </select>
          <br /><br />

          <label>Branch:</label><br />
          <input
            type="checkbox"
            value="CE"
            checked={t6 === "CE"}
            onChange={(e) =>
              this.setState({ t6: e.target.checked ? e.target.value : "" })
            }
          /> CE
          <input
            type="checkbox"
            value="CV"
            checked={t6 === "CV"}
            onChange={(e) =>
              this.setState({ t6: e.target.checked ? e.target.value : "" })
            }
          /> CV
          <input
            type="checkbox"
            value="EE"
            checked={t6 === "EE"}
            onChange={(e) =>
              this.setState({ t6: e.target.checked ? e.target.value : "" })
            }
          /> EE
           
           <input
            type="checkbox"
            value="ME"
            checked={t6 === "ME"}
            onChange={(e) =>
              this.setState({ t6: e.target.checked ? e.target.value : "" })
            }
          /> ME
          <br />
        </div>

        {/* PART 3 */}
        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1>Part 3</h1>

          <label>Favorite Color:</label><br />
          <input
            type="color"
            value={t7}
            onChange={(e) => this.setState({ t7: e.target.value })}
          />
          <br /><br />

          <label>Date of Birth:</label><br />
          <input
            type="date"
            value={t8}
            onChange={(e) => this.setState({ t8: e.target.value })}
          />
          <br /><br />

          <label>About You:</label><br />
          <textarea
            value={t9}
            onChange={(e) => this.setState({ t9: e.target.value })}
          />
          <br />
        </div>

        {/* BUTTONS */}
        <div>
          <button disabled={index === 2} onClick={this.onclicknext}>
            Next
          </button>
          <button disabled={index === 0} onClick={this.onclickprevious}>
            Previous
          </button>
        </div>

        {/* OUTPUT */}
        <hr />
        <h3>Entered Data:</h3>

        <div>
          <div>{t1}</div>
          <div>{t2}</div>
          <div>{t3}</div>
        </div>

        <div>
          <div>{t4}</div>
          <div>{t5}</div>
          <div>{t6}</div>
        </div>

        <div>
          <div>{t7}</div>
          <div>{t8}</div>
          <div>{t9}</div>
        </div>
      </div>
    );
  }
}

export default MultiPart;
