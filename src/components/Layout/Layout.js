import React, { Component } from "react"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
import Aux from "../../hoc/Auxillary"
import classes from "./Layout.css"
class Layout extends Component{
        state={
                showSideDrawer: false
        }
        sideDrawerClosedHandler = ()=>{
                this.setState({showSideDrawer: false})
        }
        sideDrawerToggleHandler = ()=>{
                
                this.setState((prevState)=>{
                        const oldValue = this.state.showSideDrawer
                        return({
                                ...prevState,
                                showSideDrawer: !oldValue 
                        })
                })
        }
        render(){
                return(
                        <Aux>
                                
                                <Toolbar toggleSidebar={this.sideDrawerToggleHandler}/>
                                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                                <main className={classes.Content}>
                                        {this.props.children}
                                </main>
                        </Aux>
                )
        }
}

export default Layout