import './App.css';

function ListItems(items){
	var html = '<thead><tr><th>Title</th><th>Description</th><th>Amount</th><th>creator</th></tr></thead><tbody>'
	for (var i=0; i<items.length; i++){
		var element =
			"<tr>" +
			"<td>"+ items[i].title +"</td>" +
			"<td>"+ items[i].description +"</td>" +
			"<td>"+ items[i].amount +"</td>" +
			"<td>"+ items[i].creator +"</td>" +
			"</tr>";
		html += element;
	}
	console.log("</tbody><table>" + html + "</table>");
	return "</tbody><table>" + html + "</table>";
}

export default ListItems;
