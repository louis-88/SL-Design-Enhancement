// ==UserScript==
// @name         SL Design
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Make Splinterlands looking nice!
// @author       @louis88, @schneegecko - Legendary Dragons Splinterlands Guild.
// @match        https://splinterlands.com/*
// @icon         https://www.google.com/s2/favicons?domain=splinterlands.com
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
let style = document.createElement("style");
style.innerHTML = `

/* GENERAL IMPROVEMENTS */
.modal-content {
    -webkit-box-shadow: initial;
    box-shadow: initial;
}

/* BATTLE PAGE */

#battle_history_page .history-table {
    background-color: rgba(42,42,42,0.55);
    border-radius: 25px;
    margin-top: 20px;
    margin-bottom: 50px;
    padding-bottom: 20px;
    background: linear-gradient(#00131ca6,#00131c96);
    border-radius: 12px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 20%);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
}




.team__monsters {
    border-radius: 4px;
    list-style: none;
    margin: 0;
    padding: 8px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    background-color: rgba(42,42,42,0.55);
    background: rgb(0 21 25 / 80%);
    border-radius: 12px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 20%);
    }

.team__monster__content {
    background: #313131;
    border: 2px solid hsl(181deg 20% 3% / 64%);
    border-radius: 12px;
}

.team__monster__name {
    background-position: center 12%;
    background-size: 210%;
    display: block;
    height: 100%;
    width: 100%;
    color: transparent;
}


.battle-log-entry__conflict {
    border: 1px solid #656565;
    padding: 8px;
    transform: translateX(-50%) translateY(-100%);
    width: 300px;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 50%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: rgb(0 0 0 / 55%);
    border-radius: 12px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
}

.battle-log-entry__vs .vs {
    background: #001519c2;
}

.battle-log-entry {
    border-bottom: 1px solid #0e444c8a;
}

#battle_history_page .history-header .info {
    background: rgb(101 101 101 / 25%);
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 25%);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 12px;
    border: 1px solid rgb(255 255 255 / 6%);
    background-repeat: no-repeat;
    background-size: contain;
}

.battle-log-entry__time {
    margin-top: 4px;
    color: #72afb9;
    text-align: right;
}

.team__monster__content--gold {
    border-color: #ffcf2e !important;
}

/* BATTLE PAGE*/

.fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
    background: rgb(0 0 0 / 11%);
    backdrop-filter: blur( 7px );
    -webkit-backdrop-filter: blur( 4px );
}


.history-table-header .choose-player input {
    color: white;
    background-color: #461312;
    width: 150px;
    border: 1px solid #ffffff73;
    border-radius: 5px;
    padding-left: 5px;
}

.history-table-header .choose-player .at {
    color: white;
    padding-right: 5px;
}

.noselect {
    background-repeat: repeat;
    background-size: inherit;
    background-position: 50% 56px;
    min-height: inherit;
    display: block;
    overflow: unset;
}

.conflict_rules {
    display: flex;
}


/* TOURNAMENT PAGE */
.tournaments-list .item-container:nth-child(even) {
    background-color: #44444478;
    width: 1170px;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 5px;
}

.tournaments-filters {
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: rgb(0 0 0 / 45%);
    top: 260px;
    z-index: 10;
}

.tournaments-container {
    background-image: url(https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/tournaments/bg_face-off.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    min-height: 700px;
    background-position: 50% 210px;
}

.tournaments-filters {
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: rgb(0 0 0 / 55%);
    top: 260px;
    z-index: 10;
    background: rgb(0 0 0 / 55%);
    backdrop-filter: blur(13px);
    -webkit-backdrop-filter: blur(13px);
}

table.arena-table.body tr:nth-child(even) {
    background: #00c1ff30;
}

.tournaments-container .arena .arena-table-container {
    max-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-top: 20px;
}

.battle-list-row:nth-child(even) {
    background-color: #44444478;
    width: 1170px;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 5px;
}

.tournaments-container.guilds .tournaments-list-item {
    margin-top: 5px;
}

/* TOURNAMENT / GUILD PAGE */

#tournament_info {
    padding-top: 158px;
    margin: auto;
    color: white;
    min-height: calc(100vh - 95px);
}

.tournaments-container .details .description {
    clear: both;
    margin-top: 20px;
    max-height: 300px;
    margin-bottom: 20px;
    overflow: auto;
    min-height: calc(100vh - 20%);
}


/* CARDS DETAILS PAGE */

.card-details-page .details-body {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 50px;
    min-height: 80%;
}

.card-list .scroll-container {
    max-height: 620px;
    overflow: auto;
}

/* OPEN PAGE */

.page-body.mana-well .group {
    margin-top: 40px;
    background-color: rgba(42,42,42,0.55);
    border-radius: 25px;
    margin-top: 20px;
    margin-bottom: 50px;
    padding-bottom: 20px;
    background: linear-gradient(#00131ca6,#00131c96);
    border-radius: 12px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 20%);
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
}

/* MANA WELL */

.page-body.mana-well {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50px;
    min-height: 88%;
    overflow: hidden;
}

/* BRAWL PAGE */

.brawl-sub-header {
    padding-top: 11px;
    height: 90px;
    background: #000000a3 0 0 no-repeat padding-box;
    width: 100%;
    z-index: 990;
}

/* SL FOOTER */

footer {
    background: linear-gradient(#00131c,#00131c);
}

`;
document.body.append(style);
})();
