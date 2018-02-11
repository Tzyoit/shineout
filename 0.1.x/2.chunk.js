webpackJsonp([2],{168:function(e,t){e.exports="# Button *按钮*\n\n## API\n\n### Button\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | string \\| ReactElement | 必填 |  |\n| className | string | 无 | 扩展className |\n| href | string | 无 | 如果设置了 href 属性，将会用 &lt;a> 代替 &lt;button> |\n| outline | boolean | false | outline 为 true 时，背景透明 |\n| size | string | 'default' | 可选值 \\['large', 'default', 'small'] |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 'default' | 可选值 \\['default', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link'] |\n\n### Button.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | \\[Button] | 必填 | 由 Button 组成的 array |\n| size | string | 无 | 同 Button；如果 Button 和 Group 同时设置 size，以 Group 为准 |\n| outline | boolean | 无 | 同 Button；如果 Button 未设置，使用此值 |\n| type | string | 无 | 同 BUtton；如果 Button 和 Group 同时设置 type，以 Group 为准 |\n\n<example />"},169:function(e,t){e.exports="# Button\n\n<example />"},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(44),r=n(0),o=n.n(r);t.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(a.a,null,"Default"),o.a.createElement(a.a,{type:"primary"},"Primary"),o.a.createElement(a.a,{type:"secondary"},"Secondary"),o.a.createElement(a.a,{type:"success"},"Success"),o.a.createElement(a.a,{type:"info"},"Info"),o.a.createElement(a.a,{type:"warning"},"Warning"),o.a.createElement(a.a,{type:"danger"},"Danger"),o.a.createElement(a.a,{type:"link"},"Link"))}},171:function(e,t){e.exports='/**\n * cn - 基本用法\n * en - Base\n */\nimport React, { Fragment } from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function () {\n  return (\n    <Fragment>\n      <Button>Default</Button>\n      <Button type="primary">Primary</Button>\n      <Button type="secondary">Secondary</Button>\n      <Button type="success">Success</Button>\n      <Button type="info">Info</Button>\n      <Button type="warning">Warning</Button>\n      <Button type="danger">Danger</Button>\n      <Button type="link">Link</Button>\n    </Fragment>\n  )\n}\n'},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(44),r=n(0),o=n.n(r);t.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(a.a,{outline:!0,type:"primary"},"Primary"),o.a.createElement(a.a,{outline:!0,type:"secondary"},"Secondary"),o.a.createElement(a.a,{outline:!0,type:"success"},"Success"),o.a.createElement(a.a,{outline:!0,type:"info"},"Info"),o.a.createElement(a.a,{outline:!0,type:"warning"},"Warning"),o.a.createElement(a.a,{outline:!0,type:"danger"},"Danger"))}},173:function(e,t){e.exports='/**\n * cn - 透明背景 outline\n * en - Outline\n */\nimport React, { Fragment } from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function () {\n  return (\n    <Fragment>\n      <Button outline type="primary">Primary</Button>\n      <Button outline type="secondary">Secondary</Button>\n      <Button outline type="success">Success</Button>\n      <Button outline type="info">Info</Button>\n      <Button outline type="warning">Warning</Button>\n      <Button outline type="danger">Danger</Button>\n    </Fragment>\n  )\n}\n'},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(44),r=n(0),o=n.n(r);t.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(a.a,{disabled:!0},"Default"),o.a.createElement(a.a,{disabled:!0,type:"primary"},"Primary"),o.a.createElement(a.a,{disabled:!0,type:"secondary"},"Secondary"),o.a.createElement(a.a,{disabled:!0,type:"success"},"Success"),o.a.createElement(a.a,{disabled:!0,type:"info"},"Info"),o.a.createElement(a.a,{disabled:!0,type:"warning"},"Warning"),o.a.createElement(a.a,{disabled:!0,type:"danger"},"Danger"),o.a.createElement(a.a,{disabled:!0,type:"link"},"Link"))}},175:function(e,t){e.exports='/**\n * cn - 不可用 disabled\n * en - Disabled\n */\nimport React, { Fragment } from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function () {\n  return (\n    <Fragment>\n      <Button disabled>Default</Button>\n      <Button disabled type="primary">Primary</Button>\n      <Button disabled type="secondary">Secondary</Button>\n      <Button disabled type="success">Success</Button>\n      <Button disabled type="info">Info</Button>\n      <Button disabled type="warning">Warning</Button>\n      <Button disabled type="danger">Danger</Button>\n      <Button disabled type="link">Link</Button>\n    </Fragment>\n  )\n}\n'},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(44),r=n(0),o=n.n(r);t.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement("div",null,o.a.createElement(a.a,{size:"small"},"Default"),o.a.createElement(a.a,{size:"small",type:"primary"},"Primary"),o.a.createElement(a.a,{size:"small",type:"secondary"},"Secondary"),o.a.createElement(a.a,{size:"small",type:"success"},"Success"),o.a.createElement(a.a,{size:"small",type:"info"},"Info"),o.a.createElement(a.a,{size:"small",type:"warning"},"Warning"),o.a.createElement(a.a,{size:"small",type:"danger"},"Danger"),o.a.createElement(a.a,{size:"small",type:"link"},"Link")),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(a.a,null,"Default"),o.a.createElement(a.a,{type:"primary"},"Primary"),o.a.createElement(a.a,{type:"secondary"},"Secondary"),o.a.createElement(a.a,{type:"success"},"Success"),o.a.createElement(a.a,{type:"info"},"Info"),o.a.createElement(a.a,{type:"warning"},"Warning"),o.a.createElement(a.a,{type:"danger"},"Danger"),o.a.createElement(a.a,{type:"link"},"Link")),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(a.a,{size:"large"},"Default"),o.a.createElement(a.a,{size:"large",type:"primary"},"Primary"),o.a.createElement(a.a,{size:"large",type:"secondary"},"Secondary"),o.a.createElement(a.a,{size:"large",type:"success"},"Success"),o.a.createElement(a.a,{size:"large",type:"info"},"Info"),o.a.createElement(a.a,{size:"large",type:"warning"},"Warning"),o.a.createElement(a.a,{size:"large",type:"danger"},"Danger"),o.a.createElement(a.a,{size:"large",type:"link"},"Link")))}},177:function(e,t){e.exports='/**\n * cn - 大小 size\n * en - Size\n */\nimport React, { Fragment } from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function () {\n  return (\n    <Fragment>\n      <div>\n        <Button size="small">Default</Button>\n        <Button size="small" type="primary">Primary</Button>\n        <Button size="small" type="secondary">Secondary</Button>\n        <Button size="small" type="success">Success</Button>\n        <Button size="small" type="info">Info</Button>\n        <Button size="small" type="warning">Warning</Button>\n        <Button size="small" type="danger">Danger</Button>\n        <Button size="small" type="link">Link</Button>\n      </div>\n      <br />\n      <div>\n        <Button>Default</Button>\n        <Button type="primary">Primary</Button>\n        <Button type="secondary">Secondary</Button>\n        <Button type="success">Success</Button>\n        <Button type="info">Info</Button>\n        <Button type="warning">Warning</Button>\n        <Button type="danger">Danger</Button>\n        <Button type="link">Link</Button>\n      </div>\n      <br />\n      <div>\n        <Button size="large">Default</Button>\n        <Button size="large" type="primary">Primary</Button>\n        <Button size="large" type="secondary">Secondary</Button>\n        <Button size="large" type="success">Success</Button>\n        <Button size="large" type="info">Info</Button>\n        <Button size="large" type="warning">Warning</Button>\n        <Button size="large" type="danger">Danger</Button>\n        <Button size="large" type="link">Link</Button>\n      </div>\n    </Fragment>\n  )\n}\n'},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(44),r=n(0),o=n.n(r);t.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(a.a.Group,null,o.a.createElement(a.a,null,"Left"),o.a.createElement(a.a,null,"Center"),o.a.createElement(a.a,{disabled:!0},"disabled"),o.a.createElement(a.a,null,"Right")),o.a.createElement("br",null),o.a.createElement(a.a.Group,{type:"secondary"},o.a.createElement(a.a,null,"Left"),o.a.createElement(a.a,null,"Center"),o.a.createElement(a.a,null,"Right")),o.a.createElement("br",null),o.a.createElement(a.a.Group,{outline:!0},o.a.createElement(a.a,{type:"primary"},"Left"),o.a.createElement(a.a,{type:"secondary"},"Center"),o.a.createElement(a.a,{type:"danger"},"Right")),o.a.createElement("br",null),o.a.createElement(a.a.Group,{type:"primary",outline:!0,size:"large"},o.a.createElement(a.a,null,"Left"),o.a.createElement(a.a,null,"Center"),o.a.createElement(a.a,null,"Right")))}},179:function(e,t){e.exports='/**\n * cn - 组合 Group\n * en - Group\n */\nimport React, { Fragment } from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function () {\n  return (\n    <Fragment>\n      <Button.Group>\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button disabled>disabled</Button>\n        <Button>Right</Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group type="secondary">\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group outline>\n        <Button type="primary">Left</Button>\n        <Button type="secondary">Center</Button>\n        <Button type="danger">Right</Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group type="primary" outline size="large">\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n    </Fragment>\n  )\n}\n\n'},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(44),r=n(0),o=n.n(r);t.default=function(){return o.a.createElement(a.a,{href:"#/",target:"_blank",type:"primary"},"Home")}},181:function(e,t){e.exports='/**\n * cn - 链接 href\n * en - Link href\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function () {\n  return (\n    <Button href="#/" target="_blank" type="primary">Home</Button>\n  )\n}\n\n'},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(27),u=n(26),l=n(16),i=n(168),c=n.n(i),s=n(169),m=n.n(s),p=Object(l.a)(c.a,m.a),y=[{title:Object(l.a)("基本用法","Base"),component:n(170).default,rawText:n(171)},{title:Object(l.a)("透明背景 outline","Outline"),component:n(172).default,rawText:n(173)},{title:Object(l.a)("不可用 disabled","Disabled"),component:n(174).default,rawText:n(175)},{title:Object(l.a)("大小 size","Size"),component:n(176).default,rawText:n(177)},{title:Object(l.a)("组合 Group","Group"),component:n(178).default,rawText:n(179)},{title:Object(l.a)("链接 href","Link href"),component:n(180).default,rawText:n(181)}];t.default=Object(o.a)(function(e){return r.a.createElement(u.b,Object.assign({},e,{source:p,examples:y}))})}});