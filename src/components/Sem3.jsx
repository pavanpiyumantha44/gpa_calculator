import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Sem3 = () => {

    const [sem3Credits,setSem3Credits] = useState(20);
    const [sem3TotGPACredits,setSem3TotGPACredits] = useState(0);

    const [sem3,setSem3] = useState({
      HNDIT2301:'0',
      HNDIT2302:'0',
      HNDIT2303:'0',
      HNDIT2304:'0',
      HNDIT2305:'0',
      HNDIT2310:'0',
      HNDIT2311:'0',
      HNDIT2312:'0',
    })
    
    const handleSem3GPA = (e)=>{
        e.preventDefault();
        var totSem3GPA = 0;
        for (const [key, value] of Object.entries(sem3)) {
            totSem3GPA += parseFloat(value);
        }
        console.log(sem3);
        var gpa3 = totSem3GPA/parseFloat(sem3Credits);
        var sem3gpa = gpa3.toFixed(2);
        setSem3TotGPACredits(sem3gpa);
        alertMSG(sem3gpa)
      }
      const alertMSG = (val)=>{
        if(val>=3.7){
          Swal.fire({
            title: "Distinction Pass",
            html:`<span style="font-size:38px">${val} GPA</span>`,
            imageUrl: "https://shorturl.at/oCUW5",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Custom image"
          });
        }
        else if(val>=3.3){
          Swal.fire({
            title: "Merit Pass",
            html:`<span style="font-size:38px">${val} GPA</span>`,
            imageUrl: "https://shorturl.at/puwO5",
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
        }
        else if(val>=2){
          Swal.fire({
            title: "General Pass",
            html:`<span style="font-size:38px">${val} GPA</span>`,
            imageUrl: "https://shorturl.at/almtZ",
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: "Custom image"
          });
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Check Again!!",
          });
        }
      }
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-2"></div>
        <div className="col-md-8 col-sm-12 text-center p-3 shadow">
          <div>
            <form onSubmit={handleSem3GPA}>
              <div className="card">
                <div className="card-header">
                  <h2 className="text-center">Semester III</h2>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Subject Code</th>
                          <th>Subject</th>
                          <th>Credit</th>
                          <th>Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>HNDIT2301</td>
                          <td>Operating Systems and Information Security</td>
                          <td>2</td>
                          <td>
                            <select
                              className="form-select"
                              onChange={(e) =>
                                setSem3({
                                  ...sem3,
                                  HNDIT2301: parseFloat(e.target.value) * 2,
                                })
                              }
                            >
                              <option disabled selected>
                                __Select__
                              </option>
                              <option value={4}>A+</option>
                              <option value={4}>A</option>
                              <option value={3.7}>A-</option>
                              <option value={3.3}>B+</option>
                              <option value={3}>B</option>
                              <option value={2.7}>B-</option>
                              <option value={2.3}>C+</option>
                              <option value={2}>C</option>
                              <option value={1.7}>C-</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>HNDIT2302</td>
                          <td>IT Project Management</td>
                          <td>2</td>
                          <td>
                            <select
                              className="form-select"
                              onChange={(e) =>
                                setSem3({
                                  ...sem3,
                                  HNDIT2302: parseFloat(e.target.value) * 2,
                                })
                              }
                            >
                              <option disabled selected>
                                __Select__
                              </option>
                              <option value={4}>A+</option>
                              <option value={4}>A</option>
                              <option value={3.7}>A-</option>
                              <option value={3.3}>B+</option>
                              <option value={3}>B</option>
                              <option value={2.7}>B-</option>
                              <option value={2.3}>C+</option>
                              <option value={2}>C</option>
                              <option value={1.7}>C-</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>HNDIT2303</td>
                          <td>Fundamentals of Management and Economics</td>
                          <td>2</td>
                          <td>
                            <select
                              className="form-select"
                              onChange={(e) =>
                                setSem3({
                                  ...sem3,
                                  HNDIT2303: parseFloat(e.target.value) * 2,
                                })
                              }
                            >
                              <option disabled selected>
                                __Select__
                              </option>
                              <option value={4}>A+</option>
                              <option value={4}>A</option>
                              <option value={3.7}>A-</option>
                              <option value={3.3}>B+</option>
                              <option value={3}>B</option>
                              <option value={2.7}>B-</option>
                              <option value={2.3}>C+</option>
                              <option value={2}>C</option>
                              <option value={1.7}>C-</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>HNDIT2304</td>
                          <td>Project (Group)</td>
                          <td>4</td>
                          <td>
                            <select
                              className="form-select"
                              onChange={(e) =>
                                setSem3({
                                  ...sem3,
                                  HNDIT2304: parseFloat(e.target.value) * 4,
                                })
                              }
                            >
                              <option disabled selected>
                                __Select__
                              </option>
                              <option value={4}>A+</option>
                              <option value={4}>A</option>
                              <option value={3.7}>A-</option>
                              <option value={3.3}>B+</option>
                              <option value={3}>B</option>
                              <option value={2.7}>B-</option>
                              <option value={2.3}>C+</option>
                              <option value={2}>C</option>
                              <option value={1.7}>C-</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>HNDIT2305</td>
                          <td>English for Technology III</td>
                          <td>2</td>
                          <td>
                            <select
                              className="form-select"
                              onChange={(e) =>
                                setSem3({
                                  ...sem3,
                                  HNDIT2305: parseFloat(e.target.value) * 2,
                                })
                              }
                            >
                              <option disabled selected>
                                __Select__
                              </option>
                              <option value={4}>A+</option>
                              <option value={4}>A</option>
                              <option value={3.7}>A-</option>
                              <option value={3.3}>B+</option>
                              <option value={3}>B</option>
                              <option value={2.7}>B-</option>
                              <option value={2.3}>C+</option>
                              <option value={2}>C</option>
                              <option value={1.7}>C-</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>HNDIT2310</td>
                          <td>Rapid Application Development</td>
                          <td>3</td>
                          <td>
                            <select
                              className="form-select"
                              onChange={(e) =>
                                setSem3({
                                  ...sem3,
                                  HNDIT2310: parseFloat(e.target.value) * 3,
                                })
                              }
                            >
                              <option disabled selected>
                                __Select__
                              </option>
                              <option value={4}>A+</option>
                              <option value={4}>A</option>
                              <option value={3.7}>A-</option>
                              <option value={3.3}>B+</option>
                              <option value={3}>B</option>
                              <option value={2.7}>B-</option>
                              <option value={2.3}>C+</option>
                              <option value={2}>C</option>
                              <option value={1.7}>C-</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>HNDIT2311</td>
                          <td>Principals of Software Engineering</td>
                          <td>2</td>
                          <td>
                            <select
                              className="form-select"
                              onChange={(e) =>
                                setSem3({
                                  ...sem3,
                                  HNDIT2311: parseFloat(e.target.value) * 2,
                                })
                              }
                            >
                              <option disabled selected>
                                __Select__
                              </option>
                              <option value={4}>A+</option>
                              <option value={4}>A</option>
                              <option value={3.7}>A-</option>
                              <option value={3.3}>B+</option>
                              <option value={3}>B</option>
                              <option value={2.7}>B-</option>
                              <option value={2.3}>C+</option>
                              <option value={2}>C</option>
                              <option value={1.7}>C-</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>HNDIT2312</td>
                          <td>Object Oriented Analysis and Design</td>
                          <td>3</td>
                          <td>
                            <select
                              className="form-select"
                              onChange={(e) =>
                                setSem3({
                                  ...sem3,
                                  HNDIT2312: parseFloat(e.target.value) * 3,
                                })
                              }
                            >
                              <option disabled selected>
                                __Select__
                              </option>
                              <option value={4}>A+</option>
                              <option value={4}>A</option>
                              <option value={3.7}>A-</option>
                              <option value={3.3}>B+</option>
                              <option value={3}>B</option>
                              <option value={2.7}>B-</option>
                              <option value={2.3}>C+</option>
                              <option value={2}>C</option>
                              <option value={1.7}>C-</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <button type="submit" className="btn btn-success w-100">
                        Calculate
                      </button>
                    </div>
                    <div className="col-4">
                      <h3 className="fw-1">{sem3TotGPACredits} GPA</h3>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Sem3