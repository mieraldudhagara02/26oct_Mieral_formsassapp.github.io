import React from "react";
import registration from '../Components/Registration.png'

export default function Form() 
{
  return (
    <>
      <div className="parent">

        <div className="child_1" style={{height : "150px", width : "50%", margin : "auto"}}>
          <img src={registration} alt="registration_img" title="registration" style={{height : "150px", width : "100%"}}/>
        </div>

        <div className="child_2">
          <form>
            <fieldset className="border">
              <label>Name : </label>
              <input type="text" required/><br></br> <br></br>

              <label>Father's Name : </label>
              <input type="text" required/><br></br> <br></br>

              <label>Mother's Name : </label>
              <input type="text" required/><br></br> <br></br>

              <label>Phone Number : </label>
              <input type="text" required/><br></br> <br></br>

              <label>Email : </label>
              <input type="email" required/><br></br> <br></br>

              <label>Gender : </label>
              <input type="radio" />
              <label>Female</label>
              <input type="radio" />
              <label>Male</label>
              <input type="radio" />
              <label>Other</label><br></br><br></br>

              <label for="bloodgroup">Bloodgroup : </label>
                <select name="drop-down" id="">
                  <option value="A-"> A-</option>
                  <option value="A+"> A+</option>
                  <option value="B-"> B-</option>
                  <option value="B+"> B+</option>
                  <option value="O+"> O+</option>
                </select><br></br><br></br>

              <label for="dob">Date Of Birth : </label>
              <input type="date" required/><br></br><br></br>

              <label for="datetimelocal">Date-Time Local : </label>
              <input type="datetime-local" required /><br></br><br></br>

              <label for="address">Address : </label>
              <textarea type="text" required placeholder="Enter your Address" /><br></br><br></br>

              <label for="course">Course : </label>
              <input type="checkbox" name="course" />
              <label for="course">C </label>&nbsp;
              <input type="checkbox" name="course" />
              <label for="course">C++ </label>&nbsp;
              <input type="checkbox" name="course" />
              <label for="course">JAVA </label>&nbsp;
              <input type="checkbox" name="course" />
              <label for="course">PYTHON </label><br></br><br></br>

              <label for="photo">Photo : </label>
              <input type="file" required /><br></br><br></br>

              <input type="submit" name="submit" id="" value="Submit" />&nbsp;
              <input type="reset" name="reset" />
            </fieldset>
          </form>
        </div>
      </div>
    </> )
}
