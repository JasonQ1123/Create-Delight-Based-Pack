/**
 * @param { Internal.RecipesEventJS_ } event 
 * @param { InputItem_ } ingredient
 * @param { number } value
 * @param { number } needed
 * @param { Internal.OutputItem_ } material 
 * @param { Internal.OutputItem_ } leftover
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
 * @param { InputItem_ } input
 * @param { (Internal.OutputFluid_ | number) [] } output 
 * @param { number } temperature  
 * @param { number } time
 * @param { (Internal.OutputFluid_ | number) [] } byproducts
 */


function melting(event, input, output, temperature, time) {
    let melting_reipces = {
        type: "tconstruct:melting",
        ingredient: { item: input },
        result: { amount: output[1], fluid: output[0] },
        temperature: temperature,
        time: time,
    }
    event.custom(melting_reipces).id("cdtconstruct:" + input.split(":")[1] + "_melting")
}