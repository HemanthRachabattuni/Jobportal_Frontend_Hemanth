import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import { Button } from 'antd';

const Managejobs = () => {

    return (
      <div >
        <div >
          <section style={{ marginLeft: 100, backgroundColor: '#cfd8dc', marginRight: 100, marginTop: 25, borderRadius: 25, paddingTop: 10, paddingBottom: 20 }}>
            <section style={{ backgroundColor: '#c8c7b7', height: 150, borderRadius: 25, width: "80%", marginLeft: 85, marginTop: 10 }}>
              <div style={{ color: 'black', display: 'flex', flexDirection: 'row', fontFamily: 'Quicksand', marginLeft: 20, }}>
                <div style={{ marginTop: 30, }}>
                  <strong style={{ marginLeft: 4 }}>Job Title</strong> : Data Engineer<br />
                  <strong>Experience</strong> : 0-1 Years<br />
                  <strong>Salary</strong> : Not Disclosed<br />
                </div >
                <div style={{ marginLeft: 20, marginTop: 45 }}>
                  <strong>Description</strong> : Core Compete is looking for a Data Engineer with data background.... <br />
                  <div>
                    <div  style={{ display: 'flex', marginTop: 5, flexDirection: 'row' }}>
                      <strong >Location</strong> : Hyderabad<br /><br />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontFamily: 'Quicksand', }}>
                <Button type="primary" style={{ backgroundColor: '#78909c' }}>Manage</Button>
                <Button type="primary" style={{ marginLeft: 10, backgroundColor: '#78909c' }}>Delete</Button>
              </div>


            </section>
            <section style={{ backgroundColor: '#c8c7b7', height: 150, borderRadius: 25, width: "80%", marginLeft: 85, marginTop: 10 }}>
              <div style={{ color: 'black', display: 'flex', flexDirection: 'row', fontFamily: 'Quicksand', marginLeft: 20, }}>
                <div style={{ marginTop: 30, }}>
                  <strong style={{ marginLeft: 4 }}>Job Title</strong> : Project Manager<br />
                  <strong>Experience</strong> : 10-12 Years<br />
                  <strong>Salary</strong> : Not Disclosed<br />
                </div >
                <div style={{ marginLeft: 20, marginTop: 45 }}>
                  <strong>Description</strong> : Job duties and Responsibilities defining and validating.... <br />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 391, marginTop: 5 }}>
                    <strong >Location</strong> : Pune<br /><br />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontFamily: 'Quicksand' }}>
                <Button type="primary" style={{ backgroundColor: '#78909c' }}>Manage</Button>
                <Button type="primary" style={{ marginLeft: 10, backgroundColor: '#78909c' }}>Delete</Button>
              </div>


            </section>
            <section style={{ backgroundColor: '#c8c7b7', height: 150, borderRadius: 25, width: "80%", marginLeft: 85, marginTop: 10 }}>
              <div style={{ color: 'black', display: 'flex', flexDirection: 'row', fontFamily: 'Quicksand', marginLeft: 20, }}>
                <div style={{ marginTop: 30, }}>
                  <strong style={{ marginLeft: 4 }}>Job Title</strong> : Project Manager<br />
                  <strong>Experience</strong> : 10-12 Years<br />
                  <strong>Salary</strong> : Not Disclosed<br />
                </div >
                <div style={{ marginLeft: 20, marginTop: 45 }}>
                  <strong>Description</strong> : Job duties and Responsibilities defining and validating.... <br />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 391, marginTop: 5 }}>
                    <strong >Location</strong> : Pune<br /><br />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontFamily: 'Quicksand' }}>
                <Button type="primary" style={{ backgroundColor: '#78909c' }}>Manage</Button>
                <Button type="primary" style={{ marginLeft: 10, backgroundColor: '#78909c' }}>Delete</Button>
              </div>


            </section>
            <section style={{ backgroundColor: '#c8c7b7', height: 150, borderRadius: 25, width: "80%", marginLeft: 85, marginTop: 10 }}>
              <div style={{ color: 'black', display: 'flex', flexDirection: 'row', fontFamily: 'Quicksand', marginLeft: 20, }}>
                <div style={{ marginTop: 30, }}>
                  <strong style={{ marginLeft: 4 }}>Job Title</strong> : Project Manager<br />
                  <strong>Experience</strong> : 10-12 Years<br />
                  <strong>Salary</strong> : Not Disclosed<br />
                </div >
                <div style={{ marginLeft: 20, marginTop: 45 }}>
                  <strong>Description</strong> : Job duties and Responsibilities defining and validating.... <br />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: 391, marginTop: 5 }}>
                    <strong >Location</strong> : Delhi<br /><br />
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontFamily: 'Quicksand' }}>
                <Button type="primary" style={{ backgroundColor: '#78909c' }}>Manage</Button>
                <Button type="primary" style={{ marginLeft: 10, backgroundColor: '#78909c' }}>Delete</Button>
              </div>


            </section>
          </section>
        </div>
      </div>
    )
  }
export default Managejobs;
