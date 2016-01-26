function setupDecisionTree() {
	$("span.more a").click(function() {
		var questionDiv = $(this).closest("div.node");
		var detail = questionDiv.find("div.detail");
		
		$(detail).toggle();
	});
	
	$("button.pick-answer").click(function() {
		var questionDiv = $(this).closest("div.node");
		var selectedOptions = questionDiv.find("select option:selected");
		var newNode = selectedOptions.val();
		
		$("#" + newNode).show();
	})
	
	$("#1").show();
}
