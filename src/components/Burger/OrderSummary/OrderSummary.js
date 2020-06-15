import React from "react"
import Aux from "../../../hoc/Auxillary/Auxillary"
import Button from "../../UI/Button/Button"
const orderSummary = props => {
        const ingredientSummary = Object.keys(props.ingredients)
                                        .map(ingredientKey=>{
                                        return (<li key={ingredientKey}> 
                                                        <span style={{textTransform:"capitalize"}}>
                                                                {ingredientKey}
                                                        </span>
                                                        : {props.ingredients[ingredientKey]}
                                                </li>)
                                        })
        return(
                <Aux>
                        <h3>Your Order</h3>
                        <p>A delicious burger with the following ingredients:</p>
                        <ul>
                                {
                                        ingredientSummary
                                }
                        </ul>
                        <p><strong>Total Price:{props.price}</strong></p>
                        <p>Continue to Checkout?</p>
                        <Button btnType="Danger" clicked={props.cancel}>
                                CANCEL
                        </Button>
                        <Button btnType="Success" clicked={props.continue}>
                                CONTINUE
                        </Button>
                </Aux>
        )
}

export default orderSummary