(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(5),o=n.n(l),i=(n(12),n(6)),u=n(2),c={background:"lightblue",border:"2px solid darkblue",fontSize:"60px",fontWeight:"900",cursor:"pointer",outline:"none",width:"100%",height:"100%",color:"tomato"},d=function(e){var t=e.onClick,n=e.value;return a.a.createElement("div",null," ",a.a.createElement("button",{style:c,onClick:t},n))},p={border:"4px solid white",borderRadius:"10px",width:"550px",height:"500px",margin:"4rem auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},s=function(e){var t=e.squares,n=e.onClick;return a.a.createElement("div",{style:p},t.map((function(e,t){return a.a.createElement(d,{key:t,value:e,onClick:function(){return n(t)}})})))};var f={width:"500px",margin:"5px auto",fontSize:"50px",textAlign:"center"},m=function(){var e=Object(r.useState)(Array(9).fill(null)),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(r.useState)(!0),c=Object(u.a)(o,2),d=c[0],p=c[1],m=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(u.a)(t[n],3),a=r[0],l=r[1],o=r[2];if(e[a]&&e[a]===e[l]&&e[a]===e[o])return e[a]}return null}(n);return a.a.createElement("div",null,a.a.createElement(s,{squares:n,onClick:function(e){var t=Object(i.a)(n);m||t[e]||(t[e]=d?"X":"O",l(t),p(!d))}}),a.a.createElement("div",{style:f},a.a.createElement("p",null," ",m?"Winner is ".concat(m," !"):n.includes(null)?"Next Player: "+(d?"X":"O"):"Phew! It's a tie!"),a.a.createElement("p",null," ",a.a.createElement("button",{style:{fontSize:"32px",borderRadius:"10px",outline:"none",boxShadow:"5px 5px 8px 5px grey",backgroundColor:"gold",border:"1px solid yellow",cursor:"pointer"},onClick:function(){return l(Array(9).fill(null))}},"Start Again"))))};var b=function(){return a.a.createElement("div",null,a.a.createElement(m,null))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.95f08a4e.chunk.js.map