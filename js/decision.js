function setupDecisionTree() {
	$("span.more a").click(function() {
		var questionDiv = $(this).closest("div.node");
		var detail = questionDiv.find("div.detail");
		
		$(detail).toggle();
	});
	
	$("button.pick-answer").click(function() {
		var questionDiv = $(this).closest("div.node");
		var selectedOptions = questionDiv.find("select option:selected");
		var newNodeId = selectedOptions.val();
		
		// Delete all descendants of specified node.
		// If current answer already open, just delete its descendants;
		// if current answer not open, delete starting from this node.
//		var x = $(newNodeId);
//		var y = questionDiv[0].id;
//		var dsi = x || y;
		var deleteStartId = $(newNodeId).length ? newNodeId : questionDiv[0].id;
		deleteDescendantsOf(deleteStartId, false);
		
		answerSelected(newNodeId);
//		var newNode = $("#" + newNodeId);
//		
//		var mainDiv = $("div#main");
//		mainDiv.append(newNode);
//		questionDiv.append(newNode);
//		newNode.show();
	})
	
//	$("#1").show();
}

/**
 * Build the "root," or first-question, node.
 */
function initialize(data) {
	$("body").data("questions", data);
	answerSelected("root");
	setupDecisionTree();
}

/**
 * Delete all descendants of the specified node, and
 * the node itself if specified.
 */
function deleteDescendantsOf(nodeId, deleteThisNode) {
	var nodeData = findNodeData(nodeId);
	if (!nodeData) return;
	
	if (nodeData.nodes) {
		for (var i = 0; i < nodeData.nodes.length; i++) {
			var descendantId = nodeData.nodes[i];
			deleteDescendantsOf(descendantId, true);
		}
	}
	
	if (deleteThisNode) {
		var temp = $("#" + nodeId);
		temp.remove();
//		$(nodeId).remove();
	}
}

/**
 * Build the node for the selected answer, by ID.
 */
function answerSelected(nodeId) {
	var nodeData = findNodeData(nodeId);
	var html = createNode(nodeData);
	var qaNode = $(html);
	var div = $("div#main");
	div.append(qaNode);
	qaNode.show();
}

/**
 * Find the node data for the given node name.
 */
function findNodeData(nodeName) {
	var nodeData = $("body").data("questions");
	
	for (var i = 0; i < nodeData.length; i++) {
		var node = nodeData[i];
		if (node.id == nodeName) {
			return node;
		}
	}
	
	return null;
}

/**
 * Create HTML for the given node data.
 */
function createNode(nodeData) {
	return isQuestion(nodeData) ? questionNode(nodeData) : answerNode(nodeData);
}

function isQuestion(nodeData) {
	return nodeData.question;
}

function questionNode(nodeData) {
	var html = "<div class='node' id='" + nodeData.id + "'>\n" +
		"<span class='question'>" + nodeData.question + "</span>\n" +
		"<span class='answers'>\n" +
		" <select class='answer'>\n" +
		"  <option></option>\n";
	
	if (nodeData.nodes) {
		html += "  <option value='" + nodeData.nodes[0] + "'>Yes</option>\n"
			+ "  <option value='" + nodeData.nodes[1] + "'>No</option>\n";
	} else if (nodeData.answers) {
		for (var i = 0; i < nodeData.answers.length; i++) {
			var answer = nodeData.answers[i];
			var node;
			if (answer.node) {
				node = answer.node;
			} else {
				node = answer.answer.toLowerCase();
			}
			html += "  <option value='" + node + "'>" + answer.answer + "</option>\n";
		}
	}
	
	html += " </select>\n"
		+ "</span>\n"
		+ "<span><button class='pick-answer'>Go</button></span>\n"
	 	+ "</div>\n";
	 	
 	return html;
}

function answerNode(nodeData) {
	var html = "<div class='node' id='" + nodeData.id + "'>\n"
		+ "<span class='answer'>" + nodeData.answer + "</span>\n"
	 	+ "</div>\n";
	 	
 	return html;
}
