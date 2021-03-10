import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <>
        <section className="skills-area" id="skill">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-6 main-skill">
                               <h1 className="title-mi">skills</h1>
                              <div className="os">
                                  <h3>Operating system</h3>
                                  <ul>
                                      <li>Windows</li>
                                      <li>Android</li>
                                      <li>iOS</li>
                                      <li>Ubuntu</li>
                                  </ul>
                              </div>
                              <div className="os">
                                  <h3>Tools</h3>
                                  <ul>
                                      <li>microsoft visual studio code</li>
                                      <li>sublime</li>
                                  </ul>
                              </div>
                          </div>
                        <div className="col-md-6 bar">
                            <h3 className="title-text">progress-bar</h3>
                            <div className="text-center line">
                                <div className="one1">
                                <b >HTML</b>
                                <div className="progress ">
                                <div className="progress-bar bg-danger" style={{width:"90%",color:"black"}}>90%</div>
                                 </div> 
                                </div>
                                <div className="one1">
                            <b>CSS</b>
                            <div className="progress ">
                                <div className="progress-bar bg-danger" style={{width:"80%",color:"black"}}>80%</div>
                            </div>
                            </div>
                            <div className="one1">
                            <b>BOOTSTRAP</b>
                            <div className="progress ">
                                <div className="progress-bar bg-danger"style={{width:"75%",color:"black"}}>75%</div>
                            </div>
                            </div>
                            <div className="one1">
                            <b>JAVASCRIPT</b>
                            <div className="progress ">
                                <div className="progress-bar bg-danger" style={{width:"70%",color:"black"}}>70%</div>
                            </div>
                            </div>
                            <div className="one1">
                            <b>REACT</b>
                            <div className="progress ">
                                <div className="progress-bar bg-danger" style={{width:"70%",color:"black"}}>70%</div>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                      </div>
              </section>
            
        </>
    )
}

export default Skills
