---
id: tokenomics
title: Tokenomics
---

# Tokenomics

Tokenomics is an integral aspect of a healthy gameFI protocol. Paying as much attention to the design as to the incentives structure that drive human behaviour, is critical for any economy to thrive. A positive reinforcing system is notable for its self-sustaining market equilibrium that scales well with increasing liquidity and engagement. In other words, can we attract and retain market participants in our gameFI protocol, and reward them with $FUN and $YIELD?

Tokenomics models require 2 essential features from the start. 1) A good startup design crafted from many rounds of modeling to critically assess different types of user behaviour. 2) A model that is flexible and configurable to changes in monetary policy, because we can never truly predict system or user behaviours. In this section we will do a deeper dive into the local tokenomics system of SamuRise and its direct integration with Treasure.

## Tokens: Genesis Lost SamuRise ERC-721

The Lost SamuRise genesis token is an ERC-721 that is staked to generate various types of tokens by performing functions in game. 

1. Powering on the Purification Process in Tengoku requires a minimum % of SamuRise to be staked (similar to powering mechanics for Treasure’s Atlas mine). This will incentivize collective behaviours to engage in activity that benefits the community.  
   | Num SamuRise staked      | <40% | >40% | >50% | >60% |
   | ----------- | ----------- | ----------- | ----------- | ----------- |
   | % of emissions      | 0% | 60% | 80% | 100% |
1. Staking will emit Lost Samurise native token $BUSHO
1. Contribution of additional Treasure resources ($Magic and/or #Treasures) will give each SamuRise boosted veSamuRise that will provide direct benefits to gameplay.

## Tokens: Medium of Exchange $BUSHO ERC-20

The utility of $BUSHO is to provide efficient market functions for all in-game assets. This ERC-20 token will be emitted to wallets according to your veSamuRise score, to the vendor function, and to provide liquidity for a Busho/Magic pool. $BUSHO is a medium of exchange backed by our $MAGIC treasury and subject to monetary policy from the core team to maintain market stability.

![$BUSHO](/assets/images/tokenomics-busho.png)

**Values in the diagram represent a theoretical simulation from our model*

$BUSHO will launch with an initial supply and features the following properties:

* The initial supply is tbd, pending additional modeling simulations
* This is a no cap token with a target deflationary rate of 85% for all emissions (see diagram)
* $BUSHO is intended to function as a stable coin to facilitate efficient market functions, and we will adjust key tokenomics variables through monetary policy to maintain the circulating supply within a healthy range
* Daily emissions will be 10k $BUSHO and divided among SamuRise holders according to the Emissions formula above
* Circulating supply will be spread between holder’s wallets, the in-game vendor, and a $BUSHO/$MAGIC liquidity pool in Treasure’s future AMM

## Tokens: Gameplay $CHIKARA $GOHAN (server tokens/ERC-20)

The worker placement game feature allows SamuRise to choose their yield type depending on their broader factional or solo strategy.

* **Farm** Action produces $GOHAN and is used in-game to supply warriors and feed peasants
* **Train** Action produces $CHIKARA which is used to level your SamuRise and increase their combat skills
* In both cases, token yields are modified by their overall boosted veSamuRise value

## Tokens: #Materials ERC-1155

The **Production** worker placement Action of staked SamuRise will yield ingame #Materials that represent different crafting assets required for the Faction **Build** Order. $BUSHO is necessary for the trading function and allows holders to freely swap between materials. An in-game Vendor will provide a SamuRise only marketplace for these transactions.

The known *#Materials* are listed here.

| Material      | Description |
| ----------- | ----------- |
| #wood      | Used for all building recipes       |
| #iron   | Used to boost strength of castles and armour        |
| #copper   | Used for temples and theatres        |
| #gold   | Commodity required for temples and threatres and some rare PFP upgrades        |
| #silver   | Commodity required for temples and theatres and some rare PFP upgrades        |

## Tokens: Quest Items ERC-1155

Unique items can be found in-game by using the **Quest** Action, and are often required to complete rare crafting recipes for armour, swords and other aesthetic upgrades on your SamuRise. This provides an outlet for solo players to experience and benefit from the SamuRise metaverse. Rumor has it that you may find Bridgeworld #Treasures with the **Quest** or the **Production** Actions as well.

## Faucets and Sinks: Creating a Circular Economy

The emission types described above represent the various forms of *faucets* we have planned. However, a healthy market requires an equivalent number of *sinks* to balance supply and demand forces. Underlying this principle of economics is a deeper need to value the utility that a token offers you. All of our designed *sinks* represent in-game actions that must be paid for in order to progress, whether leveling your SamuRise, or paying for actions and crafting recipes.

$BUSHO, or $MAGIC at a discounted rate, is required to pay for worker placement actions and duration. It can also be utilized with an in-game vendor to purchase materials that are required for desired building recipes. These examples create a set of dynamic *sinks* that will help to avoid excessive inflation or deflation and maintain market equilibrium. We will place heavy emphasis on analytics to monitor and adjust market functions.

$CHIKARA, $GOHAN, and #Materials  are intentionally incorporated as *scarce* assets to stimulate active game theory optionality and factional coordination. There will never be enough of these resources, and factions will have to make trade-offs through gameplay to manage the consequences. The *sink* for $GOHAN is employed to feed your troops and peasants, and successful strategies here will also avoid a Winter revolt, The *sink* for $CHIKARA is used to level your SamuRise and their combat skill. Armies with higher boosted $CHIKARA are more effective on the battlefield and will benefit from the Faction’s **Attack** Order.

#Materials must be burned for the Faction to successfully **Build** a castle, temple or theatre. Other #treasures or #materials are similarly burned as crafting items for equipment recipes for the SamuRise PFP. Both will have enough scarcity to place a market premium on their acquisition because of the associated awards. Scarcity levels will be monitored closely, because if too rare, key elements of the game will be inaccessible to the small retail holder and we must guard against inadvertantly disincentivizing them.

More critical to the general strategy of keeping the market tokenomics in balance is the planned configurability that is a core design feature of our tokenomics approach. All faucets and sinks are configurable and can be changed via smart contract function calls. Micro adjustments will be introduced as Lore elements that impact all game players, and Macro adjustments will be introduced via the Seasonal milestones and the gradual incorporation of new game design elements.
