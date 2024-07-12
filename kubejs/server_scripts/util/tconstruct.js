/**
 * @param { Internal.RecipesEventJS_ } event 
 * @param { InputItem_ } ingredient
 * @param { number } value
 * @param { number } needed
 * @param { OutputItem_ } material 
 * @param { OutputItem_ } leftover
 * @param { number } count  
 */

function tconstruct(event, ingredient, material, value, needed, leftover, count) {
        event.custom(
            {
                type: "tconstruct:material",
                ingredient: { "item": ingredient },
                value: value,
                needed: needed,
                material: material,
                leftover: {
                    count: count,
                    item: leftover
                }
            }
        )
    }

/**
 * @param { Internal.RecipesEventJS_ } event 
 * @param { FluidAmounts_ } fluid
 * @param { number } amount
 * @param { OutputItem_ } output 
 * @param { number } temperature  
 */
    
function pouring_name(event, fluid, amount, output, temperature) {
    event.custom(
        {
            type: "tconstruct:material_fluid",
            fluid: {
                amount: amount,
                name: fluid
            },
            output: output,
            temperature: temperature
        }
    )
}

/**
 * @param { Internal.RecipesEventJS_ } event 
 * @param { InputItem_ } input 
 * @param { FluidAmounts_ } fluid
 * @param { number } amount
 * @param { OutputItem_ } output 
 * @param { number } temperature  
 */

function melting(event, input, fluid, amount, temperature) {
    event.custom(
        {
            type: "tconstruct:material_melting",
            input: input,
            temperature: temperature,
            result: {
                fluid: fluid,
                amount: amount
            }
        }
    )
}