[
	{
		"id" : "root",
		"question" : "What category?",
		"questionDetail" : "What category of object are you thinking of?",
		"answers" : [
			{
				"node" : "person",
				"answer" : "Person",
				"detail" : "A person is a human being."
			},
			{
				"node" : "place",
				"answer" : "Place",
				"detail" : "A place is a location in space."
			},
			{
				"node" : "animal",
				"answer" : "Animal",
				"detail" : "An animal is a living creature that moves on its own."
			},
			{
				"node" : "plant",
				"answer" : "Plant",
				"detail" : "Plants are living things that don't move and use photosynthesis for energy."
			},
			{
				"node" : "thing",
				"answer" : "Thing",
				"detail" : "'Things' are inanimate, non-living objects."
			}
		]
	},
	{
		"id" : "person",
		"question" : "Living?",
		"questionDetail" : "Is the person living?",
		"nodes" : [ "living", "dead" ]
	},
	{
		"id" : "living",
		"question" : "Male?",
		"questionDetail" : "Is the person male?",
		"nodes" :  [ "living-male", "living-female" ]
	},
	{
		"id" : "living-male",
		"question" : "U.S. President?",
		"questionDetail" : "Is the person a current or former U.S. President?",
		"nodes" : [ "living-president", "male-entertainer" ]
	},
	{
		"id" : "living-president",
		"answer" : "The person is George Bush."
	},
	{
		"id" : "male-entertainer",
		"answer" : "The person is Brad Pitt."
	},
	{
		"id" : "living-female",
		"question" : "World leader?",
		"questionDetail" : "Is the person a current or former world leader?",
		"nodes" : [ "living-female-leader", "living-female-entertainer" ]
	},
	{
		"id" : "living-female-leader",
		"question" : "English speaker?",
		"questionDetail" : "Does the person speak English natively?",
		"nodes" : [ "iron-lady", "merkel" ]
	},
	{
		"id" : "iron-lady",
		"answer" : "The person is former British Prime Minister Margaret Thatcher."
	},
	{
		"id" : "merkel",
		"answer" : "The person is German Chancellor Angela Merkel."
	},
	{
		"id" : "dead",
		"question" : "Female?",
		"questionDetail" : "Was the person female?",
		"nodes" :  [ "dead-female", "dead-male" ]
	},
	{
		"id" : "dead-female",
		"question" : "Musician?",
		"questionDetail" : "Was the person a musician?",
		"nodes" : [ "james", "anthony"]
	},
	{
		"id" : "james",
		"answer" : "The person is singer Etta James."
	},
	{
		"id" : "anthony",
		"answer" : "The person is noted women's rights advocate Susan B. Anthony."
	},
	{
		"id" : "dead-male",
		"question" : "U.S. President?",
		"questionDetail" : "Is the person a former U.S. President?",
		"nodes" : [ "washington", "grant" ]
	},
	{
		"id" : "grant",
		"answer" : "The person is actor Cary Grant."
	},
	{
		"id" : "washington",
		"answer" : "The person is George Washington."
	},
	{
		"id" : "place",
		"question" : "Within United States?",
		"questionDetail" : "Is the place within the borders of the United States?",
		"nodes" : [ "usa", "non-usa" ]
	},
	{
		"id" : "usa",
		"question" : "West of Mississippi?",
		"questionDetail" : "Is the place west of the Mississippi River?",
		"nodes" :  [ "la", "ny" ]
	},
	{
		"id" : "la",
		"answer" : "The place is Los Angeles."
	},
	{
		"id" : "ny",
		"answer" : "The place is New York."
	},
	{
		"id" : "non-usa",
		"question" : "In Asia?",
		"questionDetail" : "Is the place in Asia?",
		"nodes" :  [ "beijing", "moscow" ]
	},
	{
		"id" : "beijing",
		"answer" : "The place is Beijing, China."
	},
	{
		"id" : "moscow",
		"answer" : "The place is Moscow, Russia."
	},
	{
		"id" : "animal",
		"question" : "Kind of animal?",
		"questionDetail" : "What kind of animal are you thinking of?",
		"answers" : [
			{
				"answer" : "Reptile",
				"detail" : "A reptile has scales and breathes air."
			},
			{
				"answer" : "Mammal",
				"detail" : "Mammals are warm-blooded, have hair, and usually bear live young."
			},
			{
				"answer" : "Fish",
				"detail" : "Fish have a head and tail, and live in the ocean."
			},
			{
				"answer" : "Bird",
				"detail" : "Birds have legs, wings, and feathers. Not all can fly."
			}
		]
	},
	{
		"id" : "reptile",
		"question" : "Extinct?",
		"questionDetail" : "Is the animal extinct?",
		"nodes" :  [ "extinct-reptile", "living-reptile" ]
	},
	{
		"id" : "extinct-reptile",
		"question" : "Predator?",
		"questionDetail" : "Was the animal a predator?",
		"nodes" :  [ "trex", "diplodicus" ]
	},
	{
		"id" : "trex",
		"answer" : "The animal was the king of predators, Tyrannosaurus Rex."
	},
	{
		"id" : "diplodicus",
		"answer" : "The animal is a diplodicus."
	},
	{
		"id" : "mammal",
		"question" : "Category of mammal?",
		"questionDetail" : "Which category does this mammal best fit?",
		"answers" : [
			{
				"answer" : "Canine",
				"detail" : "A dog or dog-like animal (wolf, fox, etc.)."
			},
			{
				"answer" : "Feline",
				"detail" : "A cat or 'great cat' (lion, tiger, etc.)."
			},
			{
				"answer" : "Rodent",
				"detail" : "A mouse, rat, skunk, squirrel, or similar."
			},
			{
				"answer" : "Bear",
				"detail" : "A kind of bear."
			},
			{
				"node" : "horse",
				"answer" : "Horse-like",
				"detail" : "A horse-like animal such as a zebra (or horse!)."
			}
		]
	},
	{
		"id" : "canine",
		"question" : "Domesticated?",
		"questionDetail" : "Is this animal domesticated?",
		"nodes" :  [ "chihuahua", "wolf" ]
	},
	{
		"id" : "chihuahua",
		"answer" : "It is a chihuahua."
	},
	{
		"id" : "wolf",
		"answer" : "It is a wolf."
	},
		"id" : "feline",
		"question" : "Mountain cat?",
		"questionDetail" : "Does this cat live in the mountains?",
		"nodes" :  [ "puma", "tabby" ]
	},
	{
		"id" : "puma",
		"answer" : "This animal is a puma."
	},
	{
		"id" : "tabby",
		"answer" : "The animal is a tabby cat."
	},
	{
		"id" : "rodent",
		"question" : "Swim?",
		"questionDetail" : "Does this animal swim?",
		"nodes" :  [ "beaver", "skunk" ]
	},
	{
		"id" : "beaver",
		"answer" : "The animal is a beaver."
	},
	{
		"id" : "skunk",
		"answer" : "The animal is a skunk."
	},
	{
		"id" : "bear",
		"answer" : "It is a bear."
	},
	{
		"id" : "horse",
		"question" : "Stripes?",
		"questionDetail" : "Does the animal have stripes?",
		"nodes" :  [ "zebra", "unstriped-horse" ]
	},
	{
		"id" : "zebra",
		"answer" : "It is a zebra."
	},
	{
		"id" : "unstriped-horse",
		"question" : "Stubborn?",
		"questionDetail" : "Is the animal stubborn?",
		"nodes" :  [ "stubborn-horse", "easygoing-horse" ]
	},
	{
		"id" : "stubborn-horse",
		"answer" : "The animal is a donkey or mule."
	},
	{
		"id" : "easygoing-horse",
		"answer" : "The animal is a horse."
	},
	{
		"id" : "plant",
		"question" : "Tree?",
		"questionDetail" : "Is the plant a tree?",
		"nodes" :  [ "tree", "flower" ]
	},
	{
		"id" : "tree",
		"answer" : "The plant is a willow tree."
	},
	{
		"id" : "flower",
		"question" : "Color?",
		"questionDetail" : "What is the flower's main color",
		"answers" : [
			{
				"answer" : "Red"
			},
			{
				"answer" : "Blue"
			},
			{
				"answer" : "Yellow"
			},
			{
				"answer" : "White"
			}
	},
	{
		"id" : "red",
		"answer" : "It is a rose."
	},
	{
		"id" : "blue",
		"answer" : "It is a bluebell."
	},
	{
		"id" : "yellow",
		"answer" : "It is a sunflower."
	},
	{
		"id" : "white",
		"answer" : "It is an iris."
	},
	{
		"id" : "thing",
		"answer" : "It is a rock."
	}
]
