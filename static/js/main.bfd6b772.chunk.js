(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){e.exports=a(81)},48:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){e.exports=a.p+"static/media/hooge_05_55_Cyr2.d79b9614.ttf"},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a(4),i=a(34),o=a.n(i),s=a(9),m=a(10),u=a(13),d=a(11),p=a(14),b=a(6),E=a(1),h=a.n(E);a(48);var g,v=function(){var e={backgroundImage:"url('".concat("/bird","/char_150x150px_transparent.gif')"),backgroundSize:"contain"};return r.a.createElement("div",{style:e,id:"bird"})},f=(a(27),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).score=0,a.height=h()(window).height()-100,a.isSpaceBarClicked=!1,a.fallDown=a.fallDown.bind(Object(b.a)(Object(b.a)(a))),a.intervalID=setInterval(a.fallDown,6),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;h()(window).click(function(){return e.handleKeyPress()})}},{key:"handleKeyPress",value:function(){var e=this;this.props.isGameOver||(this.isSpaceBarClicked=!0,h()("#bird").position().top>40?h()("#bird").animate({top:"-=50px"},100,function(){e.isSpaceBarClicked=!1;var t=document.getElementsByClassName("pillar");if(e.collisionOccurred(h()("#bird"),h()(t[0]),h()(t[1])))e.props.handleGameOver(!0);else{var a=t[0].getBoundingClientRect();g!==t[0]&&h()("#bird").position().left>a.left&&(e.score++,console.log("self score",e.score),e.props.handleScore(e.score),g=t[0])}}):(e.props.handleGameOver(!0),this.isSpaceBarClicked=!1))}},{key:"fallDown",value:function(){var e=this;this.isSpaceBarClicked||(h()("#bird").position().top<this.height?(h()("#bird").animate({top:"+=1px"},0,function(){var t=document.getElementsByClassName("pillar");e.collisionOccurred(h()("#bird"),h()(t[0]),h()(t[1]))&&e.props.handleGameOver(!0)}),this.isSpaceBarClicked=!1):(e.props.handleGameOver(!0),clearInterval(this.intervalID)))}},{key:"collisionOccurred",value:function(e,t,a){var n=e.offset().left,r=e.width(),l=e.offset().top,c=l+e.height(),i=n+r,o=t.offset().left,s=t.width(),m=t.offset().top+t.height(),u=o+s,d=a.offset().left,p=a.width(),b=a.offset().top;return!(l>m||i<o||n>u)||!(c<b||l<b||i<d||n>d+p)}},{key:"render",value:function(){return r.a.createElement(v,null)}}]),t}(r.a.Component)),k=a(15);var N=function(e){return e.pillars},O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={pillars:[]},a.leftMargin=300,a.windowHeight=h()(document).height()-h()("body").offset().top-80,a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.updatePillars()},1e3),this.moveLeft()}},{key:"moveLeft",value:function(){var e=this;this.props.isGameOver?h()("[id^=pillar]").stop(!0):h()("[id^=pillar]").animate({left:"-=40px"},250,"linear",function(){e.moveLeft()})}},{key:"updatePillars",value:function(){if(this.props.isGameOver)clearInterval(this.timerID);else{var e=this.state.pillars;if(e.length<=10){var t=Math.floor(250*Math.random())+80,a=this.windowHeight-t-60,n="pillar"+Object(k.v4)(),l="pillar"+Object(k.v4)();e.push(r.a.createElement("div",{style:{position:"absolute",height:t,left:this.leftMargin+"px",width:"50px",backgroundColor:"white"},key:Object(k.v4)(),id:n,className:"pillar"})),e.push(r.a.createElement("div",{style:{position:"absolute",height:a,top:t+128,left:this.leftMargin+"px",width:"50px",backgroundColor:"white"},key:Object(k.v4)(),id:l,className:"pillar"}))}else e.shift(),e.shift();this.setState({pillars:e},function(){})}}},{key:"componentWillMount",value:function(){for(var e=[],t=h()(window).height()-h()("body").offset().top-80,a=0;a<10;a+=2){var n=Math.floor(250*Math.random())+80,l=t-n-60,c="pillar"+a,i="pillar"+(a+1);e.push(r.a.createElement("div",{style:{position:"absolute",height:n,left:this.leftMargin+"px",width:"50px",backgroundColor:"white"},key:a,id:c,className:"pillar"})),e.push(r.a.createElement("div",{style:{position:"absolute",height:l,top:n+128,left:this.leftMargin+"px",width:"50px",backgroundColor:"white"},key:a+1,id:i,className:"pillar"})),a<=8?this.leftMargin+=250:this.leftMargin-=400}this.setState({pillars:e})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return r.a.createElement(N,{pillars:this.state.pillars})}}]),t}(r.a.Component);a(53);var _=function(e){return r.a.createElement("div",{id:"score"},e.score)};a(55);var y=function(e){return r.a.createElement("div",{id:"gameOver"},r.a.createElement("div",null,"Game Over!"),r.a.createElement("button",{onClick:function(){return document.location.reload()}},"Restart"))};a(21);var S=function(){return r.a.createElement("div",{id:"startScreen"},r.a.createElement("div",null,"\u0422\u044b\u043a\u043d\u0438 \u0432 \u044d\u043a\u0440\u0430\u043d \u0438 \u043b\u0430\u0431\u0430\u0439..."))};var j=function(e){var t={backgroundImage:e.background,height:"100vh",backgroundSize:"contain"};return e.isGameStarted?r.a.createElement("div",{style:t},r.a.createElement(f,{isGameOver:e.isGameOver,handleGameOver:e.handleGameOver,handleScore:e.handleScore}),r.a.createElement(O,{isGameOver:e.isGameOver}),r.a.createElement(_,{score:e.score}),e.isGameOver&&r.a.createElement(y,null)):r.a.createElement(S,null)},w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={isGameOver:!1,score:0,isGameStarted:!1},a.handleGameOver=a.handleGameOver.bind(Object(b.a)(Object(b.a)(a))),a.handleScore=a.handleScore.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;h()("body").click(function(){e.setState({isGameStarted:!0})})}},{key:"handleGameOver",value:function(e){this.setState({isGameOver:e})}},{key:"handleScore",value:function(e){this.setState({score:e})}},{key:"render",value:function(){var e=this.state.isGameOver,t=this.state.score,a=this.state.isGameStarted;return r.a.createElement(j,{background:this.props.background,isGameOver:e,isGameStarted:a,score:t,handleGameOver:this.handleGameOver,handleScore:this.handleScore})}}]),t}(r.a.Component),z=(a(30),function(e){var t=e.children;return r.a.createElement("div",{className:"info-container"},t)}),G=a(16),x=a(12),I=a.n(x),C=function(e){var t,a=e.children,n=e.direction,l=e.align,c=e.justify,i=e.className,o=I()("container",(t={},Object(G.a)(t,"container_".concat(n),n),Object(G.a)(t,"container_justify-".concat(c),c),Object(G.a)(t,"container_align-".concat(l),l),Object(G.a)(t,i,i),t));return r.a.createElement("div",{className:o},a)};C.defaultProps={direction:"row",justify:"start",align:"start"};var q=C,M=function(e){var t=e.children,a=e.className;return r.a.createElement("p",{className:a},t)},B=a(18),D=(a(17),function(e){var t=e.children,a=e.to,n=e.className,l={backgroundImage:"url('".concat("/bird","/Button_main.png')")};return r.a.createElement(B.a,{style:l,className:I()("button",n),to:a},t)}),P=function(e){var t=e.children,a=e.className,n={backgroundImage:"url('".concat("/bird","/Button_points-02.png')")};return r.a.createElement("div",{className:I()("button_point-wrapper",a),style:n},r.a.createElement("button",{className:"button_point"},t),r.a.createElement("span",{className:"button_point-point"},"+10"))},X=(a(71),function(){var e={backgroundImage:"url('".concat("/bird","/Prizes_phone.png')")};return r.a.createElement(q,{direction:"column",align:"center"},r.a.createElement(q,{align:"center",justify:"around",className:"prize_common-image_wrapper"},r.a.createElement("div",{className:"prize_common-image",style:e}),r.a.createElement(q,{direction:"column"},r.a.createElement("p",{className:"prize_title"},"\u0413\u043b\u0430\u0432\u043d\u044b\u0439 ",r.a.createElement("br",null)," \u043f\u0440\u0438\u0437"),r.a.createElement("p",{className:"prize_description"},r.a.createElement("strong",null,"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d ",r.a.createElement("br",null)," vivo Y12")))),r.a.createElement("p",{className:"prize_title"},"\u0410 \u0435\u0449\u0435"),r.a.createElement(q,{justify:"around",align:"center",className:"prize_common-image_wrapper"},r.a.createElement(q,{direction:"column"},r.a.createElement("img",{className:"prize_image",src:"".concat("/bird","/Prizes_Nobby.png"),alt:"second prize"}),r.a.createElement("p",{className:"prize_description"},"10 \u043f\u0430\u0440 \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u043e\u0432 ",r.a.createElement("br",null)," Nobby")),r.a.createElement(q,{direction:"column"},r.a.createElement("img",{className:"prize_image",src:"".concat("/bird","/Prizes_Vivo.png"),alt:"second prize"}),r.a.createElement("p",{className:"prize_description"},"10 \u043f\u0430\u0440 \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u043e\u0432 ",r.a.createElement("br",null)," XE 160"))))}),L=(a(73),function(){return r.a.createElement(q,{direction:"column",align:"center"},r.a.createElement("span",{className:"quiz_point"},"XX"),r.a.createElement("span",{className:"quiz_point"},"\u0431\u0430\u043b\u043e\u0432"))}),H=(a(32),function(){return r.a.createElement(n.Fragment,null,r.a.createElement(q,{justify:"between"},r.a.createElement(L,null),r.a.createElement("img",{className:"quiz_image",src:"".concat("/bird","/Logo.png"),alt:"logo"})),r.a.createElement(X,null),r.a.createElement(q,{justify:"center"},r.a.createElement(D,{to:"/buy-ticket",className:"button quiz_button"},"\u041a\u0443\u043f\u0438\u0442\u044c \u0431\u0438\u043b\u0435\u0442")),r.a.createElement(M,{className:"quiz_text quiz_button"},"\u0417\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0441\u043f\u0435\u0446\u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u0432\u0430\u043c ",r.a.createElement("br",null),"\u043d\u0430\u0447\u0438\u0441\u043b\u044f\u044e\u0442 \u0431\u043e\u043d\u0443\u0441\u044b. \u041d\u0430 \u043d\u0438\u0445 \u0432\u044b ",r.a.createElement("br",null)," \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u044c \u0438\u0433\u0440\u043e\u0432\u044b\u0435 ",r.a.createElement("br",null)," \u0431\u0438\u043b\u0435\u0442\u044b. \u0425\u0425 \u043c\u0430\u0440\u0442\u0430 \u043c\u044b \u0440\u0430\u0437\u044b\u0433\u0440\u0430\u0435\u043c ",r.a.createElement("br",null)," \u0441\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445 \u0431\u0438\u043b\u0435\u0442\u043e\u0432 ",r.a.createElement("br",null)," \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d vivo Y12 ",r.a.createElement("br",null),"10 \u043f\u0430\u0440 \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u043e\u0432 Nobby ",r.a.createElement("br",null),"\u0438 10 \u043f\u0430\u0440 \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u043e\u0432 vivo XE 160 ",r.a.createElement("br",null)),r.a.createElement(M,{className:"quiz_text quiz_button"},"\u0410 \u0435\u0449\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ",r.a.createElement("br",null)," \u044d\u043a\u0441\u0442\u0440\u0430 \u0431\u044b\u043b\u043b\u044b:"),r.a.createElement(q,{direction:"column",align:"center"},r.a.createElement(P,{className:"quiz_button"},"\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u044c ",r.a.createElement("br",null)," \u0432 \u0433\u0440\u0443\u043f\u043f\u0443"),r.a.createElement(P,{className:"quiz_button"},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f ",r.a.createElement("br",null)," \u043d\u0430 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0443"),r.a.createElement(D,{to:"/game",className:"button quiz_button"},"\u0418\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0435")))}),V=function(e){var t={backgroundImage:e.background,minHeight:"calc(100vh - 80px)",backgroundSize:"cover",padding:"40px 0 40px 0"};return r.a.createElement("div",{style:t},r.a.createElement(z,null,r.a.createElement(H,null)))},W=(a(76),function(){return r.a.createElement("div",{className:"text_wrapper"},r.a.createElement("div",{className:"startScreen_imageWrapper"},r.a.createElement("img",{className:"startScreen_image",src:"".concat("/bird","/Logo.png"),alt:"logo"})),r.a.createElement(q,{direction:"column",align:"center"},r.a.createElement(D,{className:"button startScreen_mb",to:"/game"},"\u0418\u0433\u0440\u0430\u0442\u044c"),r.a.createElement(D,{className:"button startScreen_mb",to:"/quiz"},"\u0420\u043e\u0437\u044b\u0433\u0440\u044b\u0448")),r.a.createElement(M,{className:"startScreen_paragraph"},"22 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2020 \u0433\u043e\u0434\u0430 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u044b ",r.a.createElement("br",null)," \u043d\u043e\u0441\u043a\u043e\u0432, \u043f\u0435\u043d \u0434\u043b\u044f \u0431\u0440\u0438\u0442\u044c\u044f \u0438 \u0433\u0435\u043b\u0435\u0439 \u0434\u043b\u044f ",r.a.createElement("br",null)," \u0434\u0443\u0448\u0430 \u043f\u0440\u043e\u043d\u0438\u043a\u043b\u0438 \u0432 \u0434\u043e\u043c\u0430 \u043b\u044e\u0434\u0435\u0439 \u043f\u043e\u0434 ",r.a.createElement("br",null)," \u0432\u0438\u0434\u043e\u043c \u043f\u043e\u0434\u0430\u0440\u043a\u043e\u0432."),r.a.createElement(M,{className:"startScreen_paragraph"},"\u0423\u0442\u0440\u043e\u043c 23 \u0444\u0435\u0432\u0440\u0430\u043b\u044f ",r.a.createElement("br",null)," \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u0439 \u043c\u0438\u0440 \u0438\u0441\u0447\u0435\u0437. \u041c\u0443\u0436\u0447\u0438\u043d\u044b, ",r.a.createElement("br",null)," \u043f\u043e\u0433\u0440\u0435\u0431\u0435\u043d\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0438 `\u0442\u0440\u043e\u044f\u043d\u0441\u043a\u0438\u0445` ",r.a.createElement("br",null),"\u0434\u0435\u0437\u043e\u0434\u043e\u0440\u0430\u043d\u0442\u043e\u0432, \u043e\u043a\u0430\u0437\u0430\u043b\u0438\u0441\u044c ",r.a.createElement("br",null)," \u043d\u0435\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0437\u0430\u0445\u0432\u0430\u0442\u0443 ",r.a.createElement("br",null)," \u043c\u0438\u0440\u043e\u0432\u043e\u0439 \u0432\u043b\u0430\u0441\u0442\u0438 \u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u041d\u043e\u0441\u043a\u043e\u0432."),r.a.createElement(M,{className:"startScreen_paragraph"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043e\u043f\u043b\u043e\u0442 \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u043e\u0439 ",r.a.createElement("br",null),"\u0446\u0438\u0432\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0443\u043a\u0440\u044b\u043b\u0441\u044f \u0432 \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u0438 ",r.a.createElement("br",null),"\u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0438\u0438 Vivo, \u0433\u0434\u0435 \u0431\u044b\u043b\u0438 ",r.a.createElement("br",null)," \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b \u0432\u044b - ",r.a.createElement("br",null)," \u0440\u043e\u0431\u043e\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0438\u0441\u043a\u0443\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 ",r.a.createElement("br",null),"\u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442 Vigo."),r.a.createElement(M,{className:"startScreen_paragraph startScreen_mb"},"\u0412\u0430\u0448\u0430 \u0446\u0435\u043b\u044c - \u0434\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0434\u043e \u0414\u043e\u043c\u0430 ",r.a.createElement("br",null),"\u043d\u043e\u0441\u043e\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430. \u0418\u0437\u0431\u0435\u0433\u0430\u0439\u0442\u0435 ",r.a.createElement("br",null)," \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u044f \u0441 \u0432\u0440\u0430\u0436\u0435\u0441\u043a\u0438\u043c\u0438 ",r.a.createElement("br",null),"\u043e\u0431\u044c\u0435\u043a\u0442\u0430\u043c\u0438 \u0438 \u043f\u043e\u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0432\u0435\u0440\u043d\u0443\u0442\u044c ",r.a.createElement("br",null)," \u044d\u0442\u043e\u0442 \u043c\u0438\u0440 \u043b\u044e\u0434\u044f\u043c!"),r.a.createElement(q,{direction:"column",align:"center"},r.a.createElement(D,{className:"button",to:"/game"},"\u0418\u0433\u0440\u0430\u0442\u044c")))}),K=function(e){var t={backgroundImage:e.background,minHeight:"calc(100vh - 80px)",backgroundSize:"cover",padding:"40px 0 40px 0"};return r.a.createElement("div",{className:"",style:t},r.a.createElement(z,null,r.a.createElement(W,null)))},F=(a(78),function(){return r.a.createElement(n.Fragment,null,r.a.createElement(q,{justify:"between"},r.a.createElement(L,null),r.a.createElement("img",{className:"quiz_image",src:"".concat("/bird","/Logo.png"),alt:"logo"})),r.a.createElement(q,{direction:"column",align:"center",className:"ticket_container"},r.a.createElement("p",{className:"ticket_title"},r.a.createElement("strong",null,"\u0431\u0438\u043b\u0435\u0442#")),r.a.createElement("h1",{className:"ticket_title"},"XXX"),r.a.createElement(M,{className:"ticket_paragraph"},"\u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u043e, \u0442\u0435\u0431\u0435",r.a.createElement("br",null),"\u0434\u043e\u0441\u0442\u0430\u043b\u0441\u044f \u0431\u0438\u043b\u0435\u0442 \u0425\u0425\u0425,",r.a.createElement("br",null),"\u0425\u0425 \u043c\u0430\u0440\u0442\u0430 \u043c\u044b \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043c",r.a.createElement("br",null),"\u0442\u0440\u0430\u043d\u0441\u043b\u044f\u0446\u0438\u044e \u0441 \u0440\u043e\u0437\u044b\u0433\u0440\u044b\u0448\u0435\u043c",r.a.createElement("br",null),"\u043f\u0440\u0438\u0437\u043e\u0432 \u043f\u043e \u0438\u0433\u0440\u043e\u0432\u044b\u043c \u0431\u0438\u043b\u0435\u0442\u0430\u043c.",r.a.createElement("br",null),"\u0421\u043b\u0435\u0434\u0438 \u0437\u0430 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c\u0438",r.a.createElement("br",null),"\u0432 \u0433\u0440\u0443\u043f\u043f\u0435.",r.a.createElement("br",null))),r.a.createElement(q,{direction:"column",align:"center"},r.a.createElement(D,{to:"/game",className:"button quiz_button"},"\u041a\u0443\u043f\u0438\u0442\u044c \u0435\u0449\u0435"),r.a.createElement(D,{to:"/game",className:"button quiz_button"},"\u041c\u043e\u0438 \u0431\u0438\u043b\u0435\u0442\u044b"),r.a.createElement(D,{to:"/game",className:"button quiz_button"},"\u0412 \u0438\u0433\u0440\u0443!")))}),J=function(e){var t={backgroundImage:e.background,minHeight:"calc(100vh - 80px)",backgroundSize:"cover",padding:"40px 0 40px 0"};return r.a.createElement("div",{style:t},r.a.createElement(z,null,r.a.createElement(F,null)))},R="url('".concat("/bird","/Background_main.png')"),Y=function(){return r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/"},r.a.createElement(K,{background:R})),r.a.createElement(c.b,{path:"/game"},r.a.createElement(w,{background:R})),r.a.createElement(c.b,{path:"/quiz"},r.a.createElement(V,{background:R})),r.a.createElement(c.b,{path:"/buy-ticket"},r.a.createElement(J,{background:R})))};a(80);o.a.send("VKWebAppInit"),Object(l.render)(r.a.createElement(c.a,null,r.a.createElement(Y,null)),document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.bfd6b772.chunk.js.map