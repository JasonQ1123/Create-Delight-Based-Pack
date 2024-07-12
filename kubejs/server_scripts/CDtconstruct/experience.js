ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "create_sa:experience_pickaxe_recipe",
        "create_sa:experience_shovel_recipe",
        "create_sa:experience_axe_recipe",
        "create_sa:experience_sword_recipe"
    ])
    e.recipes.minecraft.crafting_shapeless(
        'create:experience_block',
        '4x create_sa:heap_of_experience'
    )
        .id("create:crafting/materials/experience_block")
    e.recipes.create.compacting(
        'create:experience_block', [
            Fluid.of("create_enchantment_industry:experience", 48),
            "#forge:slimeballs"
        ]
    )
        .id("create_enchantment_industry:compacting/experience_block_from_slime_ball")
    e.recipes.create.compacting(
        'create:experience_block', [
            Fluid.of("create_enchantment_industry:experience", 48),
            "minecraft:honeycomb"
        ]
    )
        .id("create_enchantment_industry:compacting/experience_block_from_honeycomb")
    tconstruct(e, "create_sa:heap_of_experience", "cdtconstruct:experience", 4, 1)
    tconstruct(e, 'create:experience_nugget', "cdtconstruct:experience", 1/4, 1)
    tconstruct(e, 'create:experience_block', "cdtconstruct:experience", 4, 1, 'create_sa:heap_of_experience', 1)
})