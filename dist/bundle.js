!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}([function(t,e,i){i(1),t.exports=i(4)},function(t,e){},,,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=i(5),o=n(r);new o.default},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=[{id:"1",title:"This is title",description:"description 1",status:"open",priority:"high"},{id:"2",title:"This is second title",description:"description 2",status:"open",priority:"low"},{id:"3",title:"This is third title",description:"description 3",status:"open",priority:"normal"},{id:"4",title:"This is forth title",description:"description 4",status:"done",priority:"low"}],o=[],d=function(){function t(){i(this,t);var e=this;this.todo_list=document.querySelector("#todo_items"),this.render(),document.querySelector(".btn-add-item").addEventListener("click",this.insertItem.bind(this)),document.querySelector(".btn-update").addEventListener("click",this.updateItem.bind(this)),document.addEventListener("click",function(t){t.target&&(t.target.classList.contains("btn-delete")&&e.removeItem(t),t.target.classList.contains("btn-edit")&&e.renderEditForm(t),t.target.classList.contains("btn-complete")&&e.setTaskComplete(t))}),document.addEventListener("change",function(t){t.target&&t.target.classList.contains("filter")&&e.filterItems()})}return n(t,[{key:"render",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.todo_list.innerHTML="";var i=void 0;i=e?o:r,0===i.length&&(this.todo_list.innerHTML='<div style="margin: 20px 0 0 50px;">nothing to show!</div>'),i.forEach(function(e){t.createItemHtml(e.id,e.title,e.description,e.priority,e.status),t.todo_list.appendChild(t.item_block)})}},{key:"filterItems",value:function(){var t=document.querySelector(".filter-title").value,e=document.querySelector(".filter-status").value,i=document.querySelector(".filter-priority").value,n=function(n){return(n.title.toLowerCase().includes(t.toLowerCase())||""===t)&&(n.priority===i||"all"===i)&&(n.status===e||"all"===e)};o=r.filter(n),this.render(!0)}},{key:"renderEditForm",value:function(t){var e=t.target.getAttribute("data-id");document.querySelector(".btn-update").setAttribute("data-id",e),r.forEach(function(t){t.id===e&&(document.querySelector(".edit_title").value=t.title,document.querySelector(".edit_description").value=t.description,document.querySelector(".edit_priority").value=t.priority)})}},{key:"createItemHtml",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"test",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"test",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"test",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"open";this.item_block=document.createElement("div"),this.item_block.classList.add("item"),this.item_block.innerHTML='<div class="item-inner '+("done"===r?"done":"")+'">\n                <p class="item-title">'+e+'</p>\n                <div class="item-body">'+i+'</div>\n                <div class="item-footer">\n                    <div class="priority">'+n+'</div>\n                    <a href="#" class="control">...</a>\n                    <div class="control-center">\n                        <div class="inner">\n                            <div data-id="'+t+'" class="btn-complete">done</div>\n                            <div><a data-id="'+t+'" class="btn-edit" href="#edit_popup" >edit</a></div>\n                            <div data-id="'+t+'" class="btn-delete">delete</div>\n                        </div>\n                    </div>\n                </div>\n            </div>'}},{key:"insertItem",value:function(){window.location.href="#";var t=document.getElementsByName("create_title")[0].value,e=document.getElementsByName("create_description")[0].value,i=document.getElementsByName("create_priority")[0].value,n={id:Date.now().toString(),title:t||"default title",description:e||"default description",priority:i,status:"open"};r.push(n),document.getElementsByName("create_title")[0].value="",document.getElementsByName("create_description")[0].value="",this.render()}},{key:"removeItem",value:function(t){var e=t.target.getAttribute("data-id");r=r.filter(function(t){if(t.id!==e)return t}),this.render()}},{key:"updateItem",value:function(t){window.location.href="#";var e=t.target.getAttribute("data-id"),i=document.querySelector(".edit_title").value,n=document.querySelector(".edit_description").value,o=document.querySelector(".edit_priority").value;r=r.map(function(t){return t.id===e&&(t.title=i,t.description=n,t.priority=o),t}),this.render()}},{key:"setTaskComplete",value:function(t){var e=t.target.getAttribute("data-id");r=r.map(function(t){return t.id===e&&(t.status="done"),t}),this.render()}}]),t}();e.default=d}]);