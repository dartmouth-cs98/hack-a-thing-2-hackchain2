/**
 * Buy card transaction
 * @param {org.cs98.biznet.TradeCard} trade
 * @transaction
 */
async function buyCard(trade) {
  if (trade.card.forTrade) {
    // If card is available for trade
    trade.card.owner = trade.newOwner;
    return getAssetRegistry("org.cs98.biznet.TradingCard")
      .then(assetRegistry => {
        return assetRegistry.update(trade.card); // Update the network registry
      })
      .then(() => {
        let event = getFactory().newEvent(
          "org.cs98.biznet",
          "TradeNotification"
        ); // Get a reference to the event specified in the modeling language
        event.card = trade.card;
        emit(event); // Fire off the event
      });
  }
}