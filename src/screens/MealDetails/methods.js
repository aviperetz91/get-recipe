export const makeIngredientsArray = (selectedMeal) => {
    let ingredients = [];
    if(selectedMeal.strIngredient1 !== "") { 
        ingredients.push(selectedMeal.strIngredient1);
    }
    if(selectedMeal.strIngredient2 !== "") { 
        ingredients.push(selectedMeal.strIngredient2);
    }
    if(selectedMeal.strIngredient3 !== "") { 
        ingredients.push(selectedMeal.strIngredient3);
    }
    if(selectedMeal.strIngredient4 !== "") { 
        ingredients.push(selectedMeal.strIngredient4);
    }
    if(selectedMeal.strIngredient5 !== "") { 
        ingredients.push(selectedMeal.strIngredient5);
    }
    if(selectedMeal.strIngredient6 !== "") { 
        ingredients.push(selectedMeal.strIngredient6);
    }
    if(selectedMeal.strIngredient7 !== "") { 
        ingredients.push(selectedMeal.strIngredient7);
    }
    if(selectedMeal.strIngredient8 !== "") { 
        ingredients.push(selectedMeal.strIngredient8);
    }
    if(selectedMeal.strIngredient9 !== "") { 
        ingredients.push(selectedMeal.strIngredient9);
    }
    if(selectedMeal.strIngredient10 !== "") { 
        ingredients.push(selectedMeal.strIngredient10);
    }
    if(selectedMeal.strIngredient11 !== "") { 
        ingredients.push(selectedMeal.strIngredient11);
    }
    if(selectedMeal.strIngredient12 !== "") { 
        ingredients.push(selectedMeal.strIngredient12);
    }
    if(selectedMeal.strIngredient13 !== "") { 
        ingredients.push(selectedMeal.strIngredient13);
    }
    if(selectedMeal.strIngredient14 !== "") { 
        ingredients.push(selectedMeal.strIngredient14);
    }
    if(selectedMeal.strIngredient15 !== "") { 
        ingredients.push(selectedMeal.strIngredient15);
    }
    return ingredients;
}

export const makeMeasureArray = (selectedMeal) => {
    let measure = [];
    if(selectedMeal.strMeasure1 !== "") { 
        measure.push(selectedMeal.strMeasure1);
    }
    if(selectedMeal.strMeasure2 !== "") { 
        measure.push(selectedMeal.strMeasure2);
    }
    if(selectedMeal.strMeasure3 !== "") { 
        measure.push(selectedMeal.strMeasure3);
    }
    if(selectedMeal.strMeasure4 !== "") { 
        measure.push(selectedMeal.strMeasure4);
    }
    if(selectedMeal.strMeasure5 !== "") { 
        measure.push(selectedMeal.strMeasure5);
    }
    if(selectedMeal.strMeasure6 !== "") { 
        measure.push(selectedMeal.strMeasure6);
    }
    if(selectedMeal.strMeasure7 !== "") { 
        measure.push(selectedMeal.strMeasure7);
    }
    if(selectedMeal.strMeasure8 !== "") { 
        measure.push(selectedMeal.strMeasure8);
    }
    if(selectedMeal.strMeasure9 !== "") { 
        measure.push(selectedMeal.strMeasure9);
    }
    if(selectedMeal.strMeasure10 !== "") { 
        measure.push(selectedMeal.strMeasure10);
    }
    if(selectedMeal.strMeasure11 !== "") { 
        measure.push(selectedMeal.strMeasure11);
    }
    if(selectedMeal.strMeasure12 !== "") { 
        measure.push(selectedMeal.strIngredient12);
    }
    if(selectedMeal.strMeasure13 !== "") { 
        measure.push(selectedMeal.strMeasure13);
    }
    if(selectedMeal.strMeasure14 !== "") { 
        measure.push(selectedMeal.strIngredient14);
    }
    if(selectedMeal.strMeasure15 !== "") { 
        measure.push(selectedMeal.strMeasure15);
    }
    
    return measure;
}