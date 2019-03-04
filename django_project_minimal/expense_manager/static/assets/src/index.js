import $ from 'jquery';
// export for others scripts to use
window.$ = $;

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';


$( document ).ready(function(){
    var ele = document.getElementById("root");
    App(ele, "<button type='button' class='btn btn-warning'>Do not go Gentle into that Good Night. Rage Rage againt the dying of light.</button>");
});

