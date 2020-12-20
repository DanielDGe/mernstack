(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{171:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(3),r=a.n(s),c=a(36),i=a.n(c),o=(a(86),a(87),a(21)),l=a(7),u=a(22),d=a(23),h=a(25),j=a(24),p=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-3",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)(o.b,{className:"navbar-brand",to:"/",children:[Object(n.jsx)("i",{className:"material-icons"})," NotesApp"]}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(n.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(n.jsx)("li",{className:"nav-item active",children:Object(n.jsx)(o.b,{to:"/",className:"nav-link",children:"Notes"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{to:"/create",className:"nav-link",children:"Create Note"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{to:"/user",className:"nav-link",children:"Create User"})})]})})]})})}}]),a}(s.Component),b=a(8),m=a.n(b),f=a(13),v=a(14),x=a.n(v),O=a(80),g=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={notes:[]},e.getNotes=Object(f.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://localhost:4000/api/notes");case 2:a=t.sent,e.setState({notes:a.data});case 4:case"end":return t.stop()}}),t)}))),e.deleteNote=function(){var t=Object(f.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("http://localhost:4000/api/notes/"+a);case 2:e.getNotes();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getNotes();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"row",children:this.state.notes.map((function(t){return Object(n.jsx)("div",{className:"col-md-4 p-2",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(n.jsx)("h5",{children:t.title}),Object(n.jsx)(o.b,{to:"/edit/"+t._id,className:"btn btn-secondary",children:Object(n.jsx)("i",{className:"material-icons",children:"Edit"})})]}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("p",{children:t.content}),Object(n.jsxs)("p",{children:["Author: ",t.author]}),Object(n.jsx)("p",{children:Object(O.a)(t.date)})]}),Object(n.jsx)("div",{className:"card-footer",children:Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.deleteNote(t._id)},children:"Delete"})})]})},t._id)}))})}}]),a}(s.Component),N=a(76),y=a(77),w=a.n(y),k=(a(110),function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={title:"",content:"",date:new Date,userSelected:"",users:[],editing:!1,_id:""},e.onSubmit=function(){var t=Object(f.a)(m.a.mark((function t(a){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!e.state.editing){t.next=7;break}return n={title:e.state.title,content:e.state.content,author:e.state.userSelected,date:e.state.date},t.next=5,x.a.put("http://localhost:4000/api/notes/"+e.state._id,n);case 5:t.next=9;break;case 7:s={title:e.state.title,content:e.state.content,author:e.state.userSelected,date:e.state.date},x.a.post("http://localhost:4000/api/notes",s);case 9:window.location.href="/";case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onInputChange=function(t){e.setState(Object(N.a)({},t.target.name,t.target.value))},e.onChangeDate=function(t){e.setState({date:t})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:4000/api/users");case 2:if((t=e.sent).data.length>0&&this.setState({users:t.data.map((function(e){return e.username})),userSelected:t.data[0].username}),!this.props.match.params.id){e.next=11;break}return console.log(this.props.match.params.id),e.next=8,x.a.get("http://localhost:4000/api/notes/"+this.props.match.params.id);case 8:a=e.sent,console.log(a.data),this.setState({title:a.data.title,content:a.data.content,date:new Date(a.data.date),userSelected:a.data.author,_id:a.data._id,editing:!0});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(n.jsxs)("div",{className:"card card-body",children:[Object(n.jsx)("h4",{children:"Create a Note"}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("select",{className:"form-control",value:this.state.userSelected,onChange:this.onInputChange,name:"userSelected",required:!0,children:this.state.users.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Title",onChange:this.onInputChange,name:"title",value:this.state.title,required:!0})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Content",name:"content",onChange:this.onInputChange,value:this.state.content,required:!0})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)(w.a,{className:"form-control",selected:this.state.date,onChange:this.onChangeDate})}),Object(n.jsxs)("button",{className:"btn btn-primary",children:["Save ",Object(n.jsx)("i",{className:"material-icons",children:"assignment"})]})]})]})})}}]),a}(s.Component)),C=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",users:[]},e.getUsers=Object(f.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://localhost:4000/api/users");case 2:a=t.sent,e.setState({users:a.data});case 4:case"end":return t.stop()}}),t)}))),e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onSubmit=function(){var t=Object(f.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,x.a.post("http://localhost:4000/api/users",{username:e.state.username});case 3:e.setState({username:""}),e.getUsers();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteUser=function(){var t=Object(f.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("are you sure you want to delete it?")){t.next=5;break}return t.next=4,x.a.delete("http://localhost:4000/api/users/"+a);case 4:e.getUsers();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsxs)("div",{className:"card card-body",children:[Object(n.jsx)("h3",{children:"Create New User"}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control",value:this.state.username,type:"text",onChange:this.onChangeUsername})}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})}),Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsx)("ul",{className:"list-group",children:this.state.users.map((function(t){return Object(n.jsx)("li",{className:"list-group-item list-group-item-action",onDoubleClick:function(){return e.deleteUser(t._id)},children:t.username},t._id)}))})})]})}}]),a}(s.Component);a(171);var S=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(p,{}),Object(n.jsxs)("div",{className:"container p-4",children:[Object(n.jsx)(l.a,{path:"/",exact:!0,component:g}),Object(n.jsx)(l.a,{path:"/edit/:id",component:k}),Object(n.jsx)(l.a,{path:"/create",component:k}),Object(n.jsx)(l.a,{path:"/user",component:C})]})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))},86:function(e,t,a){}},[[173,1,2]]]);
//# sourceMappingURL=main.32ffeb20.chunk.js.map