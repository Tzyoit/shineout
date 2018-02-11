webpackJsonp([1],{162:function(e,n,t){"use strict";var o=t(0),r=t.n(o),a=(t(1),t(10)),i=t(9);function l(e){return r.a.createElement("svg",{viewBox:"0 0 1024 1024"},r.a.createElement("path",{d:e}))}var s="M512 0C232 0 5 226.64 4.97250989 506.66666667s226.99620754 507.02749011 507.02749011 507.02749011 507.02749011-226.99620754 507.02749011-507.02749011S792.03128257-0.36082344 512-0.36082344zM701.01984777 685.92623566c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0l-96.51268267-96.51268267-96.51268266 96.51268267c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632L439.01339246 506.66666667l-96.53803365-96.51268267c-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632 22.86694019-22.84158802 59.9052983-22.84158802 82.74688632 0l96.51268267 96.51268267 96.51268266-96.51268267c22.86694019-22.84158802 59.9052983-22.86694019 82.74688633 0 22.84158802 22.86694019 22.84158802 59.9052983 0 82.74688632L604.48181413 506.66666667l96.53803364 96.51268267C723.86143696 626.04628952 723.88678795 663.08464763 701.01984777 685.92623566z",c={close:l("M602.512147 511.99738l402.747939-402.747939a63.999673 63.999673 0 0 0-90.509537-90.509537L512.00261 421.487843 109.254671 18.749904a63.999673 63.999673 0 0 0-90.509537 90.509537L421.493073 511.99738 18.755134 914.745319a63.999673 63.999673 0 0 0 90.509537 90.509537L512.00261 602.506917l402.747939 402.747939a63.999673 63.999673 0 0 0 90.509537-90.509537z"),danger:l(s),error:l(s),info:l("M512 1024c282.771 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM432 256c0-44.183 35.817-80 80-80s80 35.817 80 80v31.999c0 44.183-35.817 80-80 80s-80-35.817-80-80v-31.999zM431.999 512c0-44.183 35.817-80 80-80s80 35.817 80 80v256c0 44.183-35.817 80-80 80s-80-35.817-80-80v-256z"),success:l("M874 150C674.09-50 349.91-50 150 150s-200 524.09 0 724 524.09 200 724 0 200-524.09 0-724zM760.57 440.57l-256 256a80 80 0 0 1-113.14 0l-128-128a80 80 0 0 1 113.14-113.14L448 526.86l199.43-199.43a80 80 0 0 1 113.14 113.14z"),warning:l("M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m80 768a80 80 0 0 1-160 0v-32a80 80 0 0 1 160 0v32z m0-256a80 80 0 0 1-160 0V256a80 80 0 0 1 160 0v256z")},u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var p=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={dismiss:0},t.bindRef=t.bindRef.bind(t),t.dismiss=t.dismiss.bind(t),t.handleClose=t.handleClose.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["PureComponent"]),u(n,[{key:"componentWillReceiveProps",value:function(e){this.props.dismiss!==e.dismiss&&e.dismiss&&this.handleClose()}},{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(this.state.dismiss>0)){var n=this.props.duration;n>0?this.setState({dismiss:1},function(){setTimeout(e.dismiss,n)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e=this.props.icon,n=this.props,t=n.type,o=n.iconSize;if("boolean"==typeof e&&(e=c[t]),!e)return null;var a=o>0?{width:o,height:o}:void 0;return r.a.createElement("div",{className:Object(i.a)("icon"),style:a},e)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var n=this.props,t=n.children,o=n.className,a=n.type,l=n.iconSize,s=n.onClose,u=this.renderIcon(),p=this.props.style,d=Object(i.a)("_",a,1===e&&"dismissed",s&&"with-close",u&&"with-icon");return o&&(d+=" "+o),u&&l>0&&(p=Object.assign({},p,{paddingLeft:l+25})),r.a.createElement("div",{ref:this.bindRef,className:d,style:p},s&&r.a.createElement("a",{href:"javascript:;",className:Object(i.a)("close"),onClick:this.handleClose},c.close),u,t)}}]),n}();p.defaultProps=Object.assign({},a.a,{duration:216,iconSize:0,type:"warning"});n.a=p},163:function(e,n,t){"use strict";var o=t(0),r=t.n(o),a=t(17),i=t.n(a),l=t(9),s=(t(1),t(162)),c=t(28),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var p=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={messages:[]},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["PureComponent"]),u(n,[{key:"addMessage",value:function(e){var n=this,t=Object(c.a)();this.setState({messages:[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(this.state.messages),[Object.assign({id:t},e)])}),e.duration>0&&setTimeout(function(){n.setState({messages:n.state.messages.map(function(e){return e.id!==t?e:Object.assign({},e,{dismiss:!0})})})},1e3*e.duration)}},{key:"removeMessage",value:function(e){var n=void 0,t=this.state.messages.filter(function(t){return t.id!==e||(t.onClose&&(n=t.onClose),!1)});0===t.length?this.props.onDestory():this.setState({messages:t}),n&&n()}},{key:"closeEvent",value:function(e,n){if(0===n)return this.removeMessage.bind(this,e)}},{key:"render",value:function(){var e=this;return[this.state.messages.map(function(n){var t=n.id,o=n.type,a=n.content,i=n.dismiss;return r.a.createElement("div",{key:t,className:Object(l.f)("item")},r.a.createElement(s.a,{className:Object(l.f)("msg"),dismiss:i,onClose:e.removeMessage.bind(e,t),icon:!0,type:o},a))})]}}]),n}(),d={},m={};function f(e){m[e]&&delete m[e],d[e]&&(document.body.removeChild(d[e]),delete d[e])}function h(e){var n,t,o=m[e];return o||(o=i.a.render(r.a.createElement(p,{onDestory:f.bind(null,e)}),(n=e,(t=document.createElement("div")).className=Object(l.f)("_",n),document.body.appendChild(t),d[n]=t,t)),m[e]=o),o}var y=function(e){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=o.onClose,a=o.position;h(void 0===a?"top":a).addMessage({content:n,duration:t,type:e,onClose:r})}};n.a={show:y("default"),success:y("success"),info:y("info"),warn:y("warning"),warning:y("warning"),danger:y("danger"),error:y("danger"),close:function(){f("top"),f("middle")}}},182:function(e,n){e.exports="# Dropdown *下拉*\n\n## API\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | array | 必填 | 一组 ReactElement； |\n| className | string | 无 | 扩展className |\n| href | string | 无 | 如果 href 不为空，使用一个 Button 单独处理下拉事件 |\n| hover | boolean | false | 为 true 时，通过 mouseenter 触发选项弹出  |\n| onClick | func | 无 | 如果 onClick 事件不为空，使用一个 Button 单独处理下拉事件 |\n| outline | boolean | false | 同 [Button](#/components/Button) |\n| placeholder | string \\| ReactElement | 必填 | 按钮显示内容 |\n| size | string | 'default' | 同 [Button](#/components/Button) |\n| type | string | 'default' | 可选值 \\['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link'] |\n| width | number | 无 | 弹出选项层的宽度 |\n\n<example />"},183:function(e,n){e.exports="# Dropdown\n\n<example />"},184:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(45),r=t(163),a=t(0),i=t.n(a);n.default=function(){var e=[i.a.createElement("a",{href:"#/",key:1},"Home"),i.a.createElement("a",{href:"http://google.com",target:"_blank",key:2},"Google"),i.a.createElement("hr",{key:3}),i.a.createElement("a",{key:4,href:"javascript:;",onClick:function(){r.a.info("Clicked the dropdown button.")}},"Message")];return i.a.createElement(a.Fragment,null,i.a.createElement(o.a,{placeholder:"Default"},e),i.a.createElement(o.a,{placeholder:"Link",type:"link"},e),i.a.createElement(o.a,{placeholder:"Primary",type:"primary"},e),i.a.createElement(o.a,{placeholder:"Outline",outline:!0,type:"primary"},e),i.a.createElement(o.a,{placeholder:"Small",size:"small"},e))}},185:function(e,n){e.exports='/**\n * cn - 基本用法\n * en - Base\n */\nimport React, { Fragment } from \'react\'\nimport { Dropdown, Message } from \'shineout\'\n\nexport default function () {\n  const menu = [\n    <a href="#/" key={1}>Home</a>,\n    <a href="http://google.com" target="_blank" key={2}>Google</a>,\n    <hr key={3} />,\n    <a\n      key={4}\n      href="javascript:;"\n      onClick={() => { Message.info(\'Clicked the dropdown button.\') }}\n    >\n      Message\n    </a>,\n  ]\n\n  return (\n    <Fragment>\n      <Dropdown placeholder="Default">\n        {menu}\n      </Dropdown>\n\n      <Dropdown placeholder="Link" type="link">\n        {menu}\n      </Dropdown>\n\n      <Dropdown placeholder="Primary" type="primary">\n        {menu}\n      </Dropdown>\n\n      <Dropdown placeholder="Outline" outline type="primary">\n        {menu}\n      </Dropdown>\n\n      <Dropdown placeholder="Small" size="small">\n        {menu}\n      </Dropdown>\n    </Fragment>\n  )\n}\n'},186:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(45),r=t(0),a=t.n(r);n.default=function(){var e=[a.a.createElement("a",{key:1},"Link 1"),a.a.createElement("a",{key:2},"Link 2"),a.a.createElement("hr",{key:3}),a.a.createElement("a",{key:4},"Link 3")];return a.a.createElement(r.Fragment,null,a.a.createElement(o.a,{hover:!0,placeholder:"Hover"},e))}},187:function(e,n){e.exports="/**\n * cn - hover 触发\n * en - Hover\n */\nimport React, { Fragment } from 'react'\nimport { Dropdown } from 'shineout'\n\nexport default function () {\n  const menu = [\n    <a key={1}>Link 1</a>,\n    <a key={2}>Link 2</a>,\n    <hr key={3} />,\n    <a key={4}>Link 3</a>,\n  ]\n\n  return (\n    <Fragment>\n      <Dropdown hover placeholder=\"Hover\">\n        {menu}\n      </Dropdown>\n    </Fragment>\n  )\n}\n\n"},188:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(45),r=t(0),a=t.n(r);n.default=function(){var e=[a.a.createElement("a",{key:1},"Link 1"),a.a.createElement("a",{key:2},"Link 2"),a.a.createElement("hr",{key:3}),a.a.createElement("a",{key:4},"Link 3")];return a.a.createElement(r.Fragment,null,a.a.createElement(o.a,{placeholder:"Left Top",width:160,position:"left-top"},e),a.a.createElement(o.a,{placeholder:"Bottom Left",width:160,position:"bottom-left"},e),a.a.createElement(o.a,{placeholder:"Bottom Right",width:160,position:"bottom-right"},e),a.a.createElement(o.a,{placeholder:"Right Top",width:160,position:"right-top"},e),a.a.createElement("br",null),a.a.createElement(o.a,{placeholder:"Left Bottom",width:160,position:"left-bottom"},e),a.a.createElement(o.a,{placeholder:"Top Left",width:160,position:"top-left"},e),a.a.createElement(o.a,{placeholder:"Top Right",width:160,position:"top-right"},e),a.a.createElement(o.a,{placeholder:"Right Bottom",width:160,position:"right-bottom"},e))}},189:function(e,n){e.exports='/**\n * cn - 弹出位置 position\n * en - Position\n */\nimport React, { Fragment } from \'react\'\nimport { Dropdown } from \'shineout\'\n\nexport default function () {\n  const menu = [\n    <a key={1}>Link 1</a>,\n    <a key={2}>Link 2</a>,\n    <hr key={3} />,\n    <a key={4}>Link 3</a>,\n  ]\n\n  return (\n    <Fragment>\n      <Dropdown placeholder="Left Top" width={160} position="left-top">\n        {menu}\n      </Dropdown>\n\n      <Dropdown placeholder="Bottom Left" width={160} position="bottom-left">\n        {menu}\n      </Dropdown>\n\n      <Dropdown placeholder="Bottom Right" width={160} position="bottom-right">\n        {menu}\n      </Dropdown>\n\n      <Dropdown placeholder="Right Top" width={160} position="right-top">\n        {menu}\n      </Dropdown>\n\n      <br />\n\n      <Dropdown placeholder="Left Bottom" width={160} position="left-bottom">\n        {menu}\n      </Dropdown>\n\n      <Dropdown placeholder="Top Left" width={160} position="top-left">\n        {menu}\n      </Dropdown>\n\n      <Dropdown placeholder="Top Right" width={160} position="top-right">\n        {menu}\n      </Dropdown>\n\n      <Dropdown placeholder="Right Bottom" width={160} position="right-bottom">\n        {menu}\n      </Dropdown>\n    </Fragment>\n  )\n}\n'},190:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(45),r=t(0),a=t.n(r);n.default=function(){for(var e=[],n=1;n<=30;n++)e.push(a.a.createElement("a",{key:n,style:{width:"20%",display:"inline-block"}},"Item ",n));return a.a.createElement(r.Fragment,null,a.a.createElement(o.a,{placeholder:"Dropdown",position:"top-left",width:500},e))}},191:function(e,n){e.exports="/**\n * cn - 选项多列平铺\n * en - Multiple columns\n */\nimport React, { Fragment } from 'react'\nimport { Dropdown } from 'shineout'\n\nexport default function () {\n  const menu = []\n  for (let i = 1; i <= 30; i++) {\n    menu.push((\n      <a key={i} style={{ width: '20%', display: 'inline-block' }}>\n        Item {i}\n      </a>\n    ))\n  }\n\n  return (\n    <Fragment>\n      <Dropdown placeholder=\"Dropdown\" position=\"top-left\" width={500}>\n        {menu}\n      </Dropdown>\n    </Fragment>\n  )\n}\n\n"},192:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(45),r=t(163),a=t(0),i=t.n(a);n.default=function(){var e=[i.a.createElement("a",{key:1},"Link 1"),i.a.createElement("a",{key:2},"Link 2"),i.a.createElement("hr",{key:3}),i.a.createElement("a",{key:4},"Link 3")];return i.a.createElement(a.Fragment,null,i.a.createElement(o.a,{href:"#/",position:"top-left",hover:!0,placeholder:"Link Home"},e),i.a.createElement(o.a,{outline:!0,onClick:function(){return r.a.info("The button clicked.")},position:"top-left",type:"primary",placeholder:"Click me"},e))}},193:function(e,n){e.exports='/**\n * cn - Button事件\n * en - Button event\n */\nimport React, { Fragment } from \'react\'\nimport { Dropdown, Message } from \'shineout\'\n\nexport default function () {\n  const menu = [\n    <a key={1}>Link 1</a>,\n    <a key={2}>Link 2</a>,\n    <hr key={3} />,\n    <a key={4}>Link 3</a>,\n  ]\n\n  return (\n    <Fragment>\n      <Dropdown\n        href="#/"\n        position="top-left"\n        hover\n        placeholder="Link Home"\n      >\n        {menu}\n      </Dropdown>\n\n      <Dropdown\n        outline\n        onClick={() => Message.info(\'The button clicked.\')}\n        position="top-left"\n        type="primary"\n        placeholder="Click me"\n      >\n        {menu}\n      </Dropdown>\n    </Fragment>\n  )\n}\n\n'},250:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(27),i=t(26),l=t(16),s=t(182),c=t.n(s),u=t(183),p=t.n(u),d=Object(l.a)(c.a,p.a),m=[{title:Object(l.a)("基本用法","Base"),component:t(184).default,rawText:t(185)},{title:Object(l.a)("hover 触发","Hover"),component:t(186).default,rawText:t(187)},{title:Object(l.a)("弹出位置 position","Position"),component:t(188).default,rawText:t(189)},{title:Object(l.a)("选项多列平铺","Multiple columns"),component:t(190).default,rawText:t(191)},{title:Object(l.a)("Button事件","Button event"),component:t(192).default,rawText:t(193)}];n.default=Object(a.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{source:d,examples:m}))})}});