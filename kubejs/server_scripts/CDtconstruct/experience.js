ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "create_sa:experience_pickaxe_recipe",
        "create_sa:experience_shovel_recipe",
        "create_sa:experience_axe_recipe",
        "create_sa:experience_sword_recipe",
        "create_enchantment_industry:disenchanting/experience_nugget",
        "create_enchantment_industry:compat/create_sa/disenchanting/experience_heap",
        "create_enchantment_industry:disenchanting/experience_block",
        "create_enchantment_industry:compacting/experience_block_from_slime_ball",
        "create_enchantment_industry:compacting/experience_block_from_honeycomb",
        "create:crafting/materials/experience_block"
    ])
    e.recipes.minecraft.crafting_shapeless(
        'create_sa:heap_of_experience',
        '9x create:experience_nugget'
    )
        .id("create_sa:heap_of_experience_recipe")
    e.recipes.minecraft.crafting_shapeless(
        'create:experience_block',
        '9x create_sa:heap_of_experience'
    )
    e.recipes.minecraft.crafting_shapeless(
        '9x create:experience_nugget',
        'create_sa:heap_of_experience',
    ).id("create:crafting/materials/experience_nugget_from_block")
    e.recipes.minecraft.crafting_shapeless(
        '9x create_sa:heap_of_experience',
        'create:experience_block'
    )
    metal_material(e, "create:experience_nugget", "create_sa:heap_of_experience", "create:experience_block", "cdt:experience")
    metal_material_melting(e, "create:experience_nugget", "create_sa:heap_of_experience", "create:experience_block", "create_enchantment_industry:experience", 1000, 10)
})
