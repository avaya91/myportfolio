import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';

class About extends Component {
render() {
  
  return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Avaya Dhakal</h2>
            <h3 style={{color: 'grey'}}>Full Stack Developer</h3>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>In various project classes I took in my undergrad, I experienced working as Software developer, I was involved with project research, planning, design and testing within the Software Product Development. Through innovative thinking I used computer aided devices to perform routine calculations creating an efficient project development time line. During the design stage I met with the client provided by my professors to better understand their needs and perspectives. As I became more familiar with the needs of different kinds of clientele I suggested, implemented and maintained test procedures and test scripts for new products. I am graduating with a Bachelor of Computer Science with Math’s minor from Southeastern Louisiana University. My solid knowledge of computer software design and project development has given me the foundation to succeed in the software engineering industry. During my program I became interested in machine learning and artificial intelligence as well as its implementation on average consumers efficiency</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1301 SGA Drive, Hammond, LA 70401</p>
            <h5>Phone</h5>
            <p>(662)-570-9442</p>
            <h5>Email</h5>
            <p>avayadhakal@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

          <Education
              startYear={2016}
              endYear={2019}
              schoolName="My Southeastern Louisiana University"
              schoolDescription="Bachelors in Science: Computer Science & Minor in Mathematics"
               />
           <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="C# / Dot Net Core"
                progress={85}
                />
                <Skills
                  skill="React"
                  progress={90}
                  />
                  <Skills
                    skill="Ruby"
                    progress={80}
                    />
                    <Skills
                      skill="Sql Server"
                      progress={85}
                      />

                      <Skills
                        skill="Python"
                        progress={60}
                        />
                                  </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
