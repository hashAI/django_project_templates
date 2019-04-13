//import {$, jQuery} from 'jquery';
// export for others scripts to use
//window.$ = $;

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import ListItems from './App';

var $ = require('jquery');

//var buttons = require( 'datatables.net-buttons' )();
require( 'datatables.net' )

$( document ).ready(function(){
    var ele = document.getElementById("table");
    var items = [
    			{
    				"title": "washing powder",
    				"description": "washing powder Nirma Nirma",
    				"amount": "1231",
    				"creator": "Root"
    			},
    			{
    				"title": "Water",
    				"description": "water water",
    				"amount": "213",
    				"creator": "Root"
    			},
    			{
    				"title": "Adapter",
    				"description": "Adapter",
    				"amount": "163",
    				"creator": "Data"
    			},
    			{
    				"title": "washing powder",
    				"description": "washing powder Nirma Nirma",
    				"amount": "199",
    				"creator": "Root"
    			},
    			{
    				"title": "washing powder",
    				"description": "washing powder Nirma Nirma",
    				"amount": "122",
    				"creator": "Root"
    			}
    		];
    ele.innerHTML = ListItems(items);
    $('#table').DataTable();
});

