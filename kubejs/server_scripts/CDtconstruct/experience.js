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
        "create_enchantment_industry:compacting/experience_block_from_honeycomb"
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
        .id("create:crafting/materials/experience_block")
    tconstruct(e, "create_sa:heap_of_experience", "cdtconstruct:experience", 1, 1)
    tconstruct(e, 'create:experience_nugget', "cdtconstruct:experience", 1, 9)
    tconstruct(e, 'create:experience_block', "cdtconstruct:experience", 9, 1, 'create_sa:heap_of_experience', 1)
    melting(e, "create:experience_nugget", ["create_enchantment_industry:experience", 10], 1000, 20)
    melting(e, "create_sa:heap_of_experience", ["create_enchantment_industry:experience", 90], 1000, 180)
    melting(e, "create:experience_block", ["create_enchantment_industry:experience", 810], 1000, 1620)
})
