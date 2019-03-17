import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
    return (
<div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{height: '176px', background: 'url(https://az720974.vo.msecnd.net/blog/core2.0.png) center / cover'}} ></CardTitle>
          <CardText>
          A modern replacement for an existing legacy
          Enterprise System for ESP receivable Management a Commercial Collection Agencies based on Mandeville,
          LA . Web app based on ASP.net Core framework.Custom Architecture with Restfull API. React js on the
          backend with Ant UI framework. MS sql on database.
          </CardText>
          <CardActions border>
          <Button colored><a href="https://bitbucket.org/ryancraft_selu/enterprise.core/src/master/" rel="noopener noreferrer" target="_blank">ESP receivable Managagment</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
  
       
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://az720974.vo.msecnd.net/blog/core2.0.png) center / cover'}} ></CardTitle>
            <CardText>
            A web app to record and store your oral histories and quickly share
            with other people. Based on ASP.NET core web API with PostGres database. Onion Architectures design
            patterns. Other technology used Automapper, SimpleInjector, FakeItEasy to help code the backend and
            OData for querying (paging, filtering, sorting) the database. 
            </CardText>
            <CardActions border>
            <Button colored><a href="https://spokenpast.com/" rel="noopener noreferrer" target="_blank">SpokenPast</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://az720974.vo.msecnd.net/blog/core2.0.png) center / cover'}} ></CardTitle>
            <CardText>
            Website for an on campus housing organization called Resident Hall
            Association for southeastern lousiana university. Fully responsive with eCommerce functionality based on
            Asp.net Framework, bootstrap and JavaScript. User function included:Email verification,
            authentication,Paypal payment integration. 
            </CardText>
            <CardActions border>
            <Button colored><a href="" rel="noopener noreferrer" target="_blank">RHA eCommerce Website</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          
      </div>     
      
    )
    } else if(this.state.activeTab === 1){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#607b8b', height: '176px', background: 'url(https://www.goodworklabs.com/wp-content/uploads/2017/07/Ruby-on-Rails.png) center / cover'}} ></CardTitle>
            <CardText>
            A web application that helps students to trade old books with each other. This web
            app is created on Ruby Rails Framework which is based MVC architecture, bootstrap and JavaScript. Devise
            gems used for authentication and bootstrap SaaS and JavaScript for frontend styling 
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/avaya91/BookTradeApp" rel="noopener noreferrer" target="_blank">Book Trade App</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
             )
    
    } else if(this.state.activeTab === 2) {
      return (
<div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '176px', background: 'url(https://cdn-images-1.medium.com/max/800/1*EntHChgUyirgbZ9A3zTxkA.png) center / cover'}} ></CardTitle>
            <CardText>
              A simple Login page based on React Js.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/avaya91/ReactSimpleLogin" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>      )
    } else if(this.state.activeTab === 3) {
      return (
<div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '176px', background: 'url(https://www.adrianprieto.com/wp-content/uploads/2016/12/php-leader-1024x524.png) center / cover'}} ></CardTitle>
            <CardText>
             Assist the web development team in both back end and front-end web development on company’s official
             website. The official website uses MVC design pattern, Data driven programming model, PHP User frosting
             components and MySql for database.             
            </CardText>
            <CardActions border>
            <Button colored><a href="https://evolutionthroughtheages.com/" rel="noopener noreferrer" target="_blank">Evolution Through the Ages</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>      )
    }

  }

 render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Asp.net Core 2</Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>React</Tab>
          <Tab>Php User Frosting</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
