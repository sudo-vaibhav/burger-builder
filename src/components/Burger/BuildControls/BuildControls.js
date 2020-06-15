import React from "react"
import classes from "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl"
const buildControls = props =>{
        const controls = [
                {label:"Salad",type:"salad"},
                {label:"Bacon",type:"bacon"},
                {label:"Cheese",type:"cheese"},
                {label:"Meat",type:"meat"}                
        ]

        return(
                <div className={classes.BuildControls}>
                        <p>Current Price: <strong>{props.price}</strong></p>
                        {controls.map(control=>{
                                return(
                                        <BuildControl 
                                                added={()=>props.ingredientAdded(control.type)}
                                                removed={()=>props.ingredientRemoved(control.type)}  
                                                key={control.label} 
                                                label={control.label}
                                                disabled={props.disabled[control.type]}
                                                
                                        />
                                )
                        })}
                        <button onClick={props.purchase} className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
                </div>
        )
}

export default buildControls