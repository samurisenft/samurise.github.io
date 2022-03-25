---
id: game-design
title: Game Design
---

# Game Design

The game design modeled here represents the complete Game Loop that takes place over a year in game terms (4 months in IRL terms). The detail here is purposefully lighter because we are targeting the release of these game mechanics across the 2nd and 3rd phases of our Roadmap.

## Game Purpose

The goal of Lost Samurise is to coordinate among your Faction to outwit your enemies and become the first to purify the lands within your Provinces. Significant awards will be given by the Emperor upon the achievement of Seasonal and Lore-based milestones.

## Logical Architecture

INSERT_IMAGE

The World of Tengoku contains 3 Factions, and each contains 3 Provinces that will exist on a 2D map with borders that place each province adjacent to 2 or more enemy factions. Each Province will have Daimyo Lands (1 per Wallet) assigned to them, and distributed evenly from a snapshot so that exactly 3333 SamuRise are sent to each Faction.

The endgame Purification story arc is attainable when all 3 building types are successfully built on each of the 3 provinces (castle, theatre, temple) for a total of 9 buildings.

One piece of Land (erc-721) is given to each SamuRise at mint. The logic for distribution of Land includes the following:

* A few weeks after Mint, a snapshot is taken and only 1 Land is claimable per wallet
* Land is given a random Faction and Province property to define its location in Tengoku
* Exactly 3333 SamuRise will be distributed to each of the 3 Factions
* All SamuRise within a wallet that had a Faction assigned Land air dropped, will also be ‘assigned’ to that Faction 
* If sold or transferred after the snapshot, displaced SamuRise will retain the Faction originally assigned

## The Core Game Loop

The Lost SamuRise is played over a year in game time, and contains 3 identical seasonal loops (Spring, Summer, Fall), while the final Winter season allocates time for all the end of year revolt calculations and Emperor award actions. Within each non-Winter season there are 4 phases that factional teams and individuals will participate in.

INSERT_IMAGE

### Active Season Loop

1. **Worker Placement**: staking your SamuRise to provide one of several game tokens
   1. **Farm**: plant the fields on your land and harvest rice ($GOHAN)
   1. **Train**: build up the skill of your SamuRise and contribute towards faction army strength ($CHIKARA)
   1. **Production**: produce necessary materials to construct buildings (#Materials)
   1. **Quest**: go on quests to find rare PFP upgrades and possibly #Treasures for exotic crafting recipes
1. **Select Council**: nominate and vote for multi-sig participants who are responsible for formally entering game orders
1. **Faction Orders**: each faction secretly enters encrypted orders that will be revealed at the end of the season
   1. **Attack**: attack an adjacent province to steal their materials and rice, or perhaps set back their build plans
   1. **Sabotage**: sabotage the enemy faction’s production/yield rates, undermine their plans to build a castle, and rumor has it that Onna Mushas will play a critical role here
   1. **Build**: construct buildings in your Province to purify the land (castles, temples, theatres)
   1. **Support**: support neighbouring provinces, whether your own or an ally
1. **Order Resolution**: all faction orders are resolved simultaneously and game state will change for all holders, factions, and provinces

### Winter Season Loop

The Winter Season is a time to return home, recover from the long campaigns, ensure the rice stores are filled, put down peasant revolts if they are not, and attend to the Emperor for awards and ceremonies. 

To incorporate a significant Risk element to gameplay, Onna Mushas may choose to attend court with the Emperor. What devious plans will they hatch through whispered promises into the Emperor’s ear? Will an enemy Onna Musha succumb to the sleeved dagger or an open challenge? Are the awards given to the winning Shogunate truly safe? 

## Episodic and Faction Based Social Coordination

We have chosen an open gaming system that incentivizes social coordination. We expect that formal and informal communication will be effectively leveraged to engage with enemy factions and to coordinate intra and inter-factional strategies.

Due to the openness of the game, outcomes depend more on behavioural emergence than any specific gaming logic. This should help to establish an episodic experience that is created and governed by the storytelling of our community. In this respect, SamuRise is just a narrative protocol with just enough game design to promote an infinite array of possible outcomes. Each season will never play out the same way.
