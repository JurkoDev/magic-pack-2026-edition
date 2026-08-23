ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        //cc
        { "output": /computercraft:.*/ },
        { "output": /cc_spatial_projector:.*/ },
        // entangled
        { "output": /entangled:.*/ },

    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
