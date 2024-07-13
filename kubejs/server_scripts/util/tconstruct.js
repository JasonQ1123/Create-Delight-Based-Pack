/**
 * @param { Internal.RecipesEventJS_ } event 
 * @param { InputItem_ } nugget
 * @param { InputItem_ } ingot 
 * @param { InputItem_ } block 
 * @param { InputItem_ } material 
 */

function metal_material(event, nugget, ingot, block, material) {
    event.custom({
            type: "tconstruct:material",
            ingredient: { "item": nugget },
            value: 1,
            needed: 9,
            material: material
    })
    event.custom({
            type: "tconstruct:material",
            ingredient: { "item": ingot },
            value: 1,
            needed: 1,
            material: material
    })
    event.custom({
            type: "tconstruct:material",
            ingredient: { "item": block },
            value: 9,
            needed: 1,
            material: material,
            leftover: { count: 1, item: ingot }
    })
}

/**
 * @param { Internal.RecipesEventJS_ } event 
 * @param { InputItem_ } nugget
 * @param { InputItem_ } ingot 
 * @param { InputItem_ } block 
 * @param { Internal.OutputFluid_ } fluid 
 * @param { number } temperature  
 * @param { number } nugget_time
 */


function metal_material_melting(event, nugget, ingot, block, fluid, temperature, nugget_time) {
    event.custom({
        type: "tconstruct:melting",
        ingredient: { item: nugget },
        result: { amount: 10, fluid: fluid },
        temperature: temperature,
        time: nugget_time,
    }).id("cdt:" + nugget.split(":")[1] + "_melting")
    event.custom({
        type: "tconstruct:melting",
        ingredient: { item: ingot },
        result: { amount: 90, fluid: fluid },
        temperature: temperature,
        time: 3 * nugget_time,
    }).id("cdt:" + ingot.split(":")[1] + "_melting")
    event.custom({
        type: "tconstruct:melting",
        ingredient: { item: block },
        result: { amount: 810, fluid: fluid },
        temperature: temperature,
        time: 9 * nugget_time,
    }).id("cdt:" + block.split(":")[1] + "_melting")

}