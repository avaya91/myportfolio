import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://icon-library.net/images/avatar-png-icon/avatar-png-icon-23.jpg"
              alt="avatar"
              className="avatar-img"
              />
              <br/>
              <br/>
            <div className="banner-text">
            <p><font size="10">Avaya Dhakal</font></p>
            <p><font size="6">Full Stack Developer</font></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am passionate about programming.</p>
              <div className="social-links">
               <a href="https://www.linkedin.com/in/avaya-dhakal-b42902132/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
               </a>
              <div>
            <p>C# | ASP.net | Ruby on Rails | React | Javascript | Microsoft Sql | MongoDB</p>
          </div>
              <a href="https://github.com/avaya91?tab=repositories" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
          </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
