(function UI(global){
  Rx.Observable.interval(100).subscribe( function(){
    console.log('tick...');
  });
  
	//"use strict";

	//var Ar = ASQ.react, // namespace shortcut

		//$body, $feed_1, $feed_2, $my_feed,
		//$feed_1_content, $feed_2_content,
		//$my_feed_content,

		//// signal sequence(s)
		//toggle_clicks,
		//item_clicks,

		//// promise wrapper(s)
		//rAF,
		//docready;

	//// pubsub hub
	//global.EVT = new EventEmitter2();

	//// run everything!
	//ASQ().runner(setup);


	//// ***********************************

	//function *setup() {
		//// promise-wrapper for requestAnimationFrame event
		//rAF = ASQ.wrap(
			//requestAnimationFrame,
			//{ this: window, simplecb: true }
		//),

		//// promise-wrapper for DOM-ready event
		//docready = ASQ.wrap(
			//$(document).ready,
			//{ simplecb: true }
		//);

		//// reactive sequences for DOM events
		//toggle_clicks = Ar.of().val(toggleFeed);
		//item_clicks = Ar.of().val(selectItem);

		//// wait for DOM-ready
		//yield docready();

		//$body = $(document.body);

		//$feed_1 = $("[rel*=js-feed-1]");
		//$feed_1_content = $feed_1.children("[rel*=js-content]");
		//$feed_1.children("[rel*=js-toggle]")
			//.on("click",seqToEventHandler(toggle_clicks));

		//$feed_2 = $("[rel*=js-feed-2]");
		//$feed_2_content = $feed_2.children("[rel*=js-content]");
		//$feed_2.children("[rel*=js-toggle]")
			//.on("click",seqToEventHandler(toggle_clicks));

		//$my_feed = $("[rel*=js-my-feed]");
		//$my_feed_content = $my_feed.children("[rel*=js-content]");
		//$my_feed_content.on("click","[rel*=js-item]",noop);

		//$feed_1.on("click","[rel*=js-item]",seqToEventHandler(item_clicks));
		//$feed_2.on("click","[rel*=js-item]",seqToEventHandler(item_clicks));

		//EVT.on("feed-insertion",insertFeedItem);
		//EVT.on("my-feed-insertion",
			//ASQ.wrap(insertMyFeedItem,{ gen: true })
		//);
		//EVT.on("feed-kill",
			//ASQ.wrap(killFeedItem,{ gen: true })
		//);

		//// signal the feeds setup to proceed
		//EVT.emit("setup-feeds");
	//}

	//function toggleFeed($btn) {
		//var $feed = $btn.closest("[rel*=js-feed-]");
		//var feed_id = Number( $feed.attr("rel").substr(8) );
		//var running = ($feed.attr("data-paused") !== "true");

		//// currently running feed?
		//if (running) {
			//// pause it
			//$feed.attr({ "data-paused": "true" });
			//$btn.text("resume");
		//}
		//// paused feed
		//else {
			//// resume it
			//$feed.removeAttr("data-paused");
			//$btn.text("pause list");
		//}

		//// signal status message
		//EVT.emit("status-" + feed_id,!running);
	//}

	//function insertFeedItem(feedID,itemText) {
		//var $content;

		//// which feed to insert into?
		//if (feedID == 1) $content = $feed_1_content;
		//else if (feedID == 2) $content = $feed_2_content;

		//var $item = $("<a>")
			//.addClass("item")
			//.attr({ href: "#", rel: "js-item" })
			//.text(itemText);

		//$content.prepend($item);

		//var $items = $content.children("[rel*=js-item]");
		//if ($items.length > 20) {
			//$items.last().remove();
		//}
	//}

	//function selectItem($item) {
		//// item not yet killed?
		//if (!$item.is(".killed")) {
			//var $feed = $item.closest("[rel*=js-feed-]");
			//var feed_id = Number( $feed.attr("rel").substr(8) );

			//// signal item selection
			//EVT.emit("item-selection",feed_id,$item.text(),$item);
		//}
	//}

	//function *insertMyFeedItem(token) {
		//var feed_id = token.messages[0];
		//var $item = token.messages[1];
		//var $floating_item = $item.clone().addClass("floating");

		//if (feed_id == 1) $floating_item.addClass("first-list");
		//else if (feed_id == 2) $floating_item.addClass("second-list");

		//var item_dims = $item.offset();
		//var item_margin_left = parseInt($item.css("margin-left"),10);
		//var item_margin_top = parseInt($item.css("margin-top"),10);

		//$floating_item.css({
				//left: (Math.round(item_dims.left) - item_margin_left) + "px",
				//top: (Math.round(item_dims.top) - item_margin_top) + "px"
			//})
			//.appendTo($body);

		//$item.remove();

		//// wait for the next animation frame (CSS junk)
		//yield rAF();

		//var my_feed_dims = $my_feed_content.offset();

		//$floating_item.css({
			//left: Math.round(my_feed_dims.left) + "px",
			//top: Math.round(my_feed_dims.top) + "px"
		//});

		//// wait for the transition to end
		//yield fromEvent($floating_item,"transitionend");

		//$floating_item
			//.unbind("transitionend")
			//.css({ left: "", top: "" })
			//.removeClass("floating")
			//.prependTo($my_feed_content);
	//}

	//function *killFeedItem(token) {
		//var $item = token.messages[0];

		//$item.addClass("killed");

		//// wait for a second
		//yield ASQ.after(1000);

		//$item.remove();
	//}

	//// bridge DOM events to reactive sequence events
	//function fromEvent($el,evtName) {
		//var rsq = Ar.of();
		//$el.on(evtName,seqToEventHandler(rsq));
		//return rsq;
	//}

	//// wrap reactive sequence event as DOM event handler
	//function seqToEventHandler(rsq) {
		//return function handler(evt) {
			//noop(evt);
			//rsq.push($(evt.target));
		//};
	//}

	//function noop(evt) {
		//evt.preventDefault();
		//evt.stopPropagation();
		//evt.stopImmediatePropagation();
	//}

})(window);
