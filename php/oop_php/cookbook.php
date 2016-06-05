<?php
include "classes/recipes.php";

//testing ...
$recipe1 = new Recipe();
$recipe1->setSource("darrell mayson");
$recipe1->setTitle("my first recipe");
$recipe1->addIngredient("sugar", 1, "tsp");
$recipe1->addIngredient("flour", 2, "cup");
echo $recipe1->displayRecipe();

$recipe2 = new Recipe();
$recipe2->setSource("anthony bordain");
$recipe2->setTitle("my second recipe");
;
foreach ($recipe1->getIngredients() as $ing) {
	// remove unnecessary spaces where no $measure needed for item (eg., egg)
	echo "\n" . $ing["amount"] . " " . $ing["measure"] . " " . $ing["item"];
}


$recipe1->addInstruction("This is my first instruction, yay!!");
$recipe1->addInstruction("This is my second instruction, meh.");
echo implode("\n", $recipe1->getInstructions());

$recipe1->addTag("Breakfast");
$recipe1->addTag("Cheese Dish");

echo implode(",", $recipe1->getTags());

$recipe1->setYield("2");
echo $recipe1->getYield();

?>
