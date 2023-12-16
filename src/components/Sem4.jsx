import React, { useState } from 'react'
import Swal from 'sweetalert2';
const Sem4 = () => {

    
  const [sem4Credits,setSem4Credits] = useState(23);
  const [sem4TotGPACredits,setSem4TotGPACredits] = useState(0);

  const [sem4,setSem4] = useState({
    HNDIT2401:'0',
    HNDIT2402:'0',
    HNDIT2403:'0',
    HNDIT2404:'0',
    HNDIT2405:'0',
    HNDIT2411:'0',
    HNDIT2413:'0',
    HNDIT2417:'0',
  })

    const handleSem4GPA = (e)=>{
        e.preventDefault();
        var totSem4GPA = 0;
        for (const [key, value] of Object.entries(sem4)) {
            totSem4GPA += parseFloat(value);
        }
        console.log(sem4);
        var gpa4 = totSem4GPA/parseFloat(sem4Credits);
        var sem4gpa = gpa4.toFixed(2);
        setSem4TotGPACredits(sem4gpa);
        alertMSG(sem4gpa);
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
                  <form onSubmit={handleSem4GPA}>
                    <div className='card'>
                      <div className='card-header'><h2 className='text-center '>Semester IV</h2></div>
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
                              <td>HNDIT2401</td>
                              <td>Computer Architecture</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem4({...sem4,HNDIT2401:(parseFloat(e.target.value)*2)})}>
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
                              <td>HNDIT2402</td>
                              <td>Free and Open Source Systems</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem4({...sem4,HNDIT2402:(parseFloat(e.target.value)*2)})}>
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
                              <td>HNDIT2403</td>
                              <td>Professional Issues in IT</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem4({...sem4,HNDIT2403:(parseFloat(e.target.value)*2)})}>
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
                              <td>HNDIT2404</td>
                              <td>Project(Individual)</td>
                              <td>6</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem4({...sem4,HNDIT2404:(parseFloat(e.target.value)*6)})}>
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
                              <td>HNDIT2405</td>
                              <td>English for Technology IV</td>
                              <td>2</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem4({...sem4,HNDIT2405:(parseFloat(e.target.value)*2)})}>
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
                              <td>HNDIT2411</td>
                              <td>Enterprise Architecture</td>
                              <td>3</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem4({...sem4,HNDIT2411:(parseFloat(e.target.value)*3)})}>
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
                              <td>HNDIT2413</td>
                              <td>Web Application Development</td>
                              <td>3</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem4({...sem4,HNDIT2413:(parseFloat(e.target.value)*3)})}>
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
                              <td>HNDIT2417</td>
                              <td>Mobile Application Development</td>
                              <td>3</td>
                              <td>
                                <select className='form-select' onChange={e=> setSem4({...sem4,HNDIT2417:(parseFloat(e.target.value)*3)})}>
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
                            <h3 className='fw-1'>{sem4TotGPACredits} GPA</h3>
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

export default Sem4