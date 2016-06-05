<?php

class Recipe
{
	private $title;
	private $ingredients = array();
	private $instructions = array();
	private $yield;
	private $tag = array();
	private $source = "Alena Holligan";

	private $measurements = array(
		"cup",
		"tsp",
		"tbsp",
		"mg",
		"g",
		"kg",
		"ml",
		"l"
		);

	//instructions setter
	public function addInstruction($string)
	{
		$this->instructions[] = $string;
	}
	
	//instructions getter
	public function getInstructions()
	{
		return $this->instructions;
	}


	//print (echo) the recipe to screen
	public function displayRecipe()
	{
		return $this->title . " by " . $this->source . "\n";
	}

	// set the recipe title attribute to camel case
	public function setTitle($title)
	{
		$this->title = ucwords($title);
	}

	public function getTitle()
	{
		return $this->title;
	}
	// set the recipe source attribute to camel case
	public function setSource($source)
	{
		$this->source = ucwords($source);
	}

	public function getSource()
	{
		return $this->source;
	}


	public function addTag($tag)
	{
		$this->tags[] = strtolower($tag);
	}
	
	public function getTags()
	{
		return $this->tags;
	}

	
	public function setYield($yield)
	{
		$this->yield = $yield;
	}
	
	public function getYield()
	{
		return $this->yield;
	}
	
	public function setSource($source)
	{
		$this->source = ucwords($source);
	}
	
	public function getSource()
	{
		return $this->source;
	}
	
	
	
	//set ingredients via associative array
	public function addIngredient($item, $amount = null, $measure = null)
	{
		//check to ensure only valid measurements entered
		if($measure != null && !in_array(strtolower($measure), $this->measurements))
		{
			exit("Measure must be valid (metric) measurement.  Use one of the following: " . implode(", ", $this->measurements) . "\n");
		}

		//check to ensure only int or float entered for amount
		if($amount != null && !is_float($amount) && !is_int($amount))
		{
			exit("The amount must be a decimal. " . gettype($amount) . " entered.  Please try again.\n");
		}

		$this->ingredients[] = array(
			"item"=>ucwords($item),
			"amount"=>$amount,
			"measure"=>strtolower($measure)
			);
	}

	public function getIngredients()
	{
		return $this->ingredients;
	}


} 


?>