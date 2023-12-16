import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const App = () => {
  const [display,setDisplay] = useState(false);

  const [totGPA,setTotGPA] = useState({
    HNDIT1101:'0',
    HNDIT1102:'0',
    HNDIT1103:'0',
    HNDIT1104:'0',
    HNDIT1105:'0',
    HNDIT1106:'0',
    HNDIT1107:'0',
    HNDIT1108:'0',
    HNDIT1209:'0',
    HNDIT1210:'0',
    HNDIT1211:'0',
    HNDIT1212:'0',
    HNDIT1213:'0',
    HNDIT1214:'0',
    HNDIT1215:'0',
    HNDIT1216:'0',
    HNDIT2301:'0',
    HNDIT2302:'0',
    HNDIT2303:'0',
    HNDIT2304:'0',
    HNDIT2305:'0',
    HNDIT2310:'0',
    HNDIT2311:'0',
    HNDIT2312:'0',
    HNDIT2401:'0',
    HNDIT2402:'0',
    HNDIT2403:'0',
    HNDIT2404:'0',
    HNDIT2405:'0',
    HNDIT2411:'0',
    HNDIT2413:'0',
    HNDIT2417:'0',
  });

  const [TotGPACredits,setTotGPACredits] = useState(0);
  const [totalCredits,setTotalCredits] = useState(79);
  const [gpa,setGPA] = useState(0);

  const handleTotalGPA = (e)=>{
    e.preventDefault();
    var totSemGPA = 0;
    for (const [key, value] of Object.entries(totGPA)) {
        totSemGPA += parseFloat(value);
    }
    var gpa = totSemGPA/parseFloat(totalCredits);
    var total = gpa.toFixed(2);
    setTotGPACredits(total);
    alertMSG(total);
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
  useEffect(()=>{
    
  },[display])
  return (
    <div>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-2'></div>
            <div className='col-8 text-center p-3 shadow'>
                  <div>
                    <form onSubmit={handleTotalGPA}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1101:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1102:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1103:(parseFloat(e.target.value)*4)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1104:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1105:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1106:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1107:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1108:(parseFloat(e.target.value)*2)})}>
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
                      </div>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1209:(parseFloat(e.target.value)*4)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1210:(parseFloat(e.target.value)*3)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1211:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1212:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1213:(parseFloat(e.target.value)*3)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1214:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1215:(parseFloat(e.target.value)*2)})}>
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
                                <td className='bg-danger text-white'>HNDIT1216</td>
                                <td className='bg-danger text-white'>Human Values and Professional Ethics</td>
                                <td className='bg-danger text-white'>2</td>
                                {/* <td>
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT1216:(parseFloat(e.target.value)*2)})}>
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
                                </td> */}
                                <td className='bg-danger text-white'>NON GPA</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className='card'>
                        <div className='card-header'><h2 className='text-center '>Semester III</h2></div>
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
                                <td>HNDIT2301</td>
                                <td>Operating Systems and Information Security</td>
                                <td>2</td>
                                <td>
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2301:(parseFloat(e.target.value)*2)})}>
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
                                <td>HNDIT2302</td>
                                <td>IT Project Management</td>
                                <td>2</td>
                                <td>
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2302:(parseFloat(e.target.value)*2)})}>
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
                                <td>HNDIT2303</td>
                                <td>Fundamentals of Management and Economics</td>
                                <td>2</td>
                                <td>
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2303:(parseFloat(e.target.value)*2)})}>
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
                                <td>HNDIT2304</td>
                                <td>Project (Group)</td>
                                <td>4</td>
                                <td>
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2304:(parseFloat(e.target.value)*4)})}>
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
                                <td>HNDIT2305</td>
                                <td>English for Technology III</td>
                                <td>2</td>
                                <td>
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2305:(parseFloat(e.target.value)*2)})}>
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
                                <td>HNDIT2310</td>
                                <td>Rapid Application Development</td>
                                <td>3</td>
                                <td>
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2310:(parseFloat(e.target.value)*3)})}>
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
                                <td>HNDIT2311</td>
                                <td>Principals of Software Engineering</td>
                                <td>2</td>
                                <td>
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2311:(parseFloat(e.target.value)*2)})}>
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
                                <td>HNDIT2312</td>
                                <td>Object Oriented Analysis and Design</td>
                                <td>3</td>
                                <td>
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2312:(parseFloat(e.target.value)*3)})}>
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
                      </div>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2401:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2402:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2403:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2404:(parseFloat(e.target.value)*6)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2405:(parseFloat(e.target.value)*2)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2411:(parseFloat(e.target.value)*3)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2413:(parseFloat(e.target.value)*3)})}>
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
                                  <select className='form-select' onChange={e=> setTotGPA({...totGPA,HNDIT2417:(parseFloat(e.target.value)*3)})}>
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
                              <button type='submit' className='btn btn-success w-75'>Calculate</button>
                            </div>
                            <div className='col-4'>
                              
                                  <h4>{TotGPACredits} GPA</h4>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
          </div>
          <div className='col-2'></div>
        </div>
      </div>
    </div>
  )
}

export default App