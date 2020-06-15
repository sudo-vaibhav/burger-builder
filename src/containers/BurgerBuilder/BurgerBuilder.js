import React, {Component} from "react"
import Aux from "../../hoc/Auxillary"

import Burger from  "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
const INGREDIENT_PRICES = {
        "salad": 0.5,
        "cheese": 0.4,
        "meat" : 1.3,
        "bacon": 0.7
}
class BurgerBuilder extends Component{
        state = {
                ingredients : {
                        "salad" : 0,
                        "bacon": 0,
                        "cheese": 0,
                        "meat": 0
                },
                totalPrice: 4,
                purchasable : false,
                purchasing : false 
        }

        updatePurchaseState = ()=>{
                const ingredients = {
                                ...this.state.ingredients
                }
                const sum = Object.keys(ingredients)
                                .map(ingredientKey=>ingredients[ingredientKey])
                                .reduce((sum,el)=>{
                                        return sum+el
                                },0)
                this.setState({
                        purchasable : sum>0
                })
        }
        purchaseContinueHandler=()=>{
                alert("You continue")
        }
        purchaseHandler=()=>{
                const currentValue = this.state.purchasing
                this.setState({
                                purchasing: !currentValue
                        })
        }
        addIngredientHandler = async (type)=>{
                const oldCount = this.state.ingredients[type]
                const newCount = oldCount + 1
                const updatedIngredients = {...this.state.ingredients}
                updatedIngredients[type] = newCount      
                const priceAddition = INGREDIENT_PRICES[type]
                const oldPrice = this.state.totalPrice
                const newPrice = (oldPrice + priceAddition)
                await this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
                this.updatePurchaseState()
                
        }
        removeIngredientHandler = async (type)=>{
                const oldCount = this.state.ingredients[type]
                if(oldCount>0){
                        const newCount = oldCount - 1
                        const updatedIngredients = {...this.state.ingredients}
                        updatedIngredients[type] = newCount      
                        const priceDecrease = INGREDIENT_PRICES[type]
                        const oldPrice = this.state.totalPrice
                        const newPrice = (oldPrice - priceDecrease)
                        await this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
                        this.updatePurchaseState()       
                }
        }
        render(){
                let disabledInfo = {...this.state.ingredients}
                for(let key in disabledInfo){
                        disabledInfo[key] = disabledInfo[key]<=0
                }

                
                return(
                        <Aux>
                                
                                <Modal show={this.state.purchasing} modalClose={this.purchaseHandler}>
                                        <OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice.toFixed(2)} continue={this.purchaseContinueHandler} cancel={this.purchaseHandler}></OrderSummary>
                                </Modal>
                                <Burger ingredients = {this.state.ingredients} />
                                <BuildControls 
                                        purchasable={this.state.purchasable}
                                        purchase = {this.purchaseHandler}
                                        disabled = {disabledInfo}
                                        price={this.state.totalPrice.toFixed(2)}
                                        ingredientAdded={this.addIngredientHandler} 
                                        ingredientRemoved={this.removeIngredientHandler} 
                                />

                        </Aux>
                )
        }
} 

export default BurgerBuilder