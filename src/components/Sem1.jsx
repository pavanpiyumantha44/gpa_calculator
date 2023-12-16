import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const Sem1 = () => {
    const [sem1Credits,setSem1Credits] = useState(18);
    const [sem1TotGPACredits,setSem1TotGPACredits] = useState(0);

    const [sem1,setSem1] = useState({
      HNDIT1101:'0',
      HNDIT1102:'0',
      HNDIT1103:'0',
      HNDIT1104:'0',
      HNDIT1105:'0',
      HNDIT1106:'0',
      HNDIT1107:'0',
      HNDIT1108:'0',
    })
    
    const handleSem1GPA = (e)=>{
        e.preventDefault();
        var totSem1GPA = 0;
        for (const [key, value] of Object.entries(sem1)) {
            totSem1GPA += parseFloat(value);
        }
        console.log(sem1);
        var gpa1 = totSem1GPA/parseFloat(sem1Credits);
        var sem1gpa = gpa1.toFixed(2);
        setSem1TotGPACredits(sem1gpa);
        alertMSG(sem1gpa)
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
    <div>
      <div className='container'>
        <div className='row mt-3'>
            <div className='col-2'></div>
            <div className='col-8 text-center p-3 shadow'>
                  <div>
                  <form onSubmit={handleSem1GPA}>
                    <div className='card'>
                      <div className='card-header'><h2 className='text-center '>Semester I</h2></div>
                      <div className='card-body'>
                        <table className='table'>
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
                              <td>HNDIT1101</td>
                              <td>Personal Computer Applications</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem1({...sem1,HNDIT1101:(parseFloat(e.target.value)*2)})}>
                                  <option disabled selected>__Select__</option>
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
                              <td>HNDIT1102</td>
                              <td>Computer Hardware</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem1({...sem1,HNDIT1102:(parseFloat(e.target.value)*2)})}>
                                  <option disabled selected>__Select__</option>
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
                              <td>HNDIT1103</td>
                              <td>Structured Programming</td>
                              <td>4</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem1({...sem1,HNDIT1103:(parseFloat(e.target.value)*4)})}>
                                  <option disabled selected>__Select__</option>
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
                              <td>HNDIT1104</td>
                              <td>Data Representation and Organization</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem1({...sem1,HNDIT1104:(parseFloat(e.target.value)*2)})}>
                                  <option disabled selected>__Select__</option>
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
                              <td>HNDIT1105</td>
                              <td>Database Management Systems</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem1({...sem1,HNDIT1105:(parseFloat(e.target.value)*2)})}>
                                  <option disabled selected>__Select__</option>
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
                              <td>HNDIT1106</td>
                              <td>Web Development</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem1({...sem1,HNDIT1106:(parseFloat(e.target.value)*2)})}>
                                  <option disabled selected>__Select__</option>
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
                              <td>HNDIT1107</td>
                              <td>Mathematics for IT</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem1({...sem1,HNDIT1107:(parseFloat(e.target.value)*2)})}>
                                  <option disabled selected>__Select__</option>
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
                              <td>HNDIT1108</td>
                              <td>English for Technology I</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem1({...sem1,HNDIT1108:(parseFloat(e.target.value)*2)})}>
                                  <option disabled selected>__Select__</option>
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
                      <div className='card-footer'>
                        <div className='row'>
                          <div className='col-8'>
                            <button type='submit' className='btn btn-success w-50'>Calculate</button>
                          </div>
                          <div className='col-4'>
                            <h3 className='fw-1'>{sem1TotGPACredits} GPA</h3>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                    </form>
                  </div>
            </div>
            <div className='col-2'>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Sem1