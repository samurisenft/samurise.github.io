---
id: contract-design
title: Contract Design
---

Each component in the system has been architected to ensure technical flexibility and ease of composability.

## Contract Optimizations

The SamuRise minting contract is heavily gas optimized to provide a cost efficient mint. Minters can also opt-in to staking within the same transaction.

## Soulbound Staking

The SamuRise staking contract implements a novel approach. Instead of placing your token into an escrow, when you stake a Samurai, it is soulbound to your wallet until you unstake. This allows you to always be able to interact with your token in your wallet.

* This approach is more secure, as the token never leaves your custody. If our protocol is compromised, your NFT is safe.
* Prevents 

## Contract Diagram

![The Layers](/assets/images/diagram-contract-design.jpg)