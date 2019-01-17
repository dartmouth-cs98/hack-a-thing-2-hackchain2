/**
 * Buy card transaction
 * @param {example.org.TradeCard} trade
 * @transaction
 */

 async function buyCard(trade){
 	if(trade.card.forTrade){
 		trade.card.owner = trade.newOwner;
 		return getAssetRegistry("example.org.TradingCard").then(getAssetRegistry => {
 			return getAssetRegistry.update(trade.card);

 		}).then(()=>{
 			let event = getFactory().newEvent(

 				"example.org",
 				"TradeNotification"

 			);

 			event.card = trade.card;
 			emit(event);

 		});
 	}


 }

 async function Delete(trade){

 	if(trade.card.forTrade){
 		trade.card.owner = null;
 		return getAssetRegistry("example.org.TradingCard").then(getAssetRegistry => {
 			return getAssetRegistry.update(trade.card);

 		}).then(()=>{
 			let event = getFactory().newEvent(

 				"example.org",
 				"TradeNotification"

 			);

 			event.card = trade.card;
 			emit(event);

 		});
 	}


 }