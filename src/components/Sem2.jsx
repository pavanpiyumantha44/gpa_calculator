import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const Sem2 = () => {
    
  const [sem2Credits,setSem2Credits] = useState(20);
  const [sem2TotGPACredits,setSem2TotGPACredits] = useState(0);

  const [sem2,setSem2] = useState({
    HNDIT1209:'0',
    HNDIT1210:'0',
    HNDIT1211:'0',
    HNDIT1212:'0',
    HNDIT1213:'0',
    HNDIT1214:'0',
    HNDIT1215:'0',
    HNDIT1216:'0',
  })

    const handleSem2GPA = (e)=>{
        e.preventDefault();
        var totSem2GPA = 0;
        for (const [key, value] of Object.entries(sem2)) {
            totSem2GPA += parseFloat(value);
        }
        console.log(sem2);
        var gpa2 = parseFloat(totSem2GPA)/parseFloat(sem2Credits);
        var sem2gpa = gpa2.toFixed(2);
        setSem2TotGPACredits(sem2gpa);
        alertMSG(sem2gpa)
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
                  <form onSubmit={handleSem2GPA}>
                    <div className='card'>
                      <div className='card-header'><h2 className='text-center '>Semester II</h2></div>
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
                              <td>HNDIT1209</td>
                              <td>Object Oriented Programming</td>
                              <td>4</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem2({...sem2,HNDIT1209:(parseFloat(e.target.value)*4)})}>
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
                              <td>HNDIT1210</td>
                              <td>Graphics and Multimedia</td>
                              <td>3</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem2({...sem2,HNDIT1210:(parseFloat(e.target.value)*3)})}>
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
                              <td>HNDIT1211</td>
                              <td>Data Structures and Algorithms</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem2({...sem2,HNDIT1211:(parseFloat(e.target.value)*2)})}>
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
                              <td>HNDIT1212</td>
                              <td>Systems Analysis and Design</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem2({...sem2,HNDIT1212:(parseFloat(e.target.value)*2)})}>
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
                              <td>HNDIT1213</td>
                              <td>Data Communications and Networks</td>
                              <td>3</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem2({...sem2,HNDIT1213:(parseFloat(e.target.value)*3)})}>
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
                              <td>HNDIT1214</td>
                              <td>Statistics for IT</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem2({...sem2,HNDIT1214:(parseFloat(e.target.value)*2)})}>
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
                              <td>HNDIT1215</td>
                              <td>English for Technology II</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem2({...sem2,HNDIT1215:(parseFloat(e.target.value)*2)})}>
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
                              <td>HNDIT1216</td>
                              <td>Human Values and Professional Ethics</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem2({...sem2,HNDIT1216:(parseFloat(e.target.value)*2)})}>
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
                            <h3 className='fw-1'>{sem2TotGPACredits} GPA</h3>
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

export default Sem2