import{S as Pa,i as Aa,s as xa,e as p,t,k as u,c as l,a as i,h as e,d as s,m as r,b as w,U as Ha,g as c,R as a,n as Ys}from"../../../chunks/index-a8447449.js";function Ma(da){let h,Ln,j,Rn,Yn,F,In,un,E,Nn,U,Sn,Bn,rn,L,qn,kn,R,Y,Is,dn,I,jn,wn,C,wa=`<code class="language-python"><span class="token keyword">import</span> tukaan

<span class="token comment">#Gives the window name, width, and height</span>
app <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>App<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">"My window"</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">345</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">567</span><span class="token punctuation">)</span>

<span class="token comment">#Runs app</span>
app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,hn,N,Fn,fn,O,ha=`<code class="language-python"><span class="token keyword">import</span> tukaan

app <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>App<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">"My window"</span><span class="token punctuation">)</span>

<span class="token comment"># You can use properties...</span>
app<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">"New title"</span>

app<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">300</span>

<span class="token comment"># ...or methods to modify the attributes</span>
app<span class="token punctuation">.</span>set_title<span class="token punctuation">(</span><span class="token string">"New title"</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span>set_width<span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,mn,z,Un,yn,k,Gn,G,Xn,Jn,X,Kn,Qn,J,Vn,Zn,K,$n,gn,Q,ns,ss,V,as,ts,Z,es,os,_n,D,fa=`<code class="language-python"><span class="token keyword">import</span> tukaan

app <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>App<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">"My window"</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"The current state of the main window is: </span><span class="token interpolation"><span class="token punctuation">&#123;</span>app<span class="token punctuation">.</span>state<span class="token punctuation">&#125;</span></span><span class="token string">."</span></span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,En,y,ps,$,ls,cs,g,is,us,vn,v,rs,nn,ks,ds,bn,P,ma=`<code class="language-python"><span class="token keyword">import</span> tukaan

app <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>App<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">"My window"</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span>minimize<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"The current state of the main window is: </span><span class="token interpolation"><span class="token punctuation">&#123;</span>app<span class="token punctuation">.</span>state<span class="token punctuation">&#125;</span></span><span class="token string">."</span></span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span>restore<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"The current state of the main window is: </span><span class="token interpolation"><span class="token punctuation">&#123;</span>app<span class="token punctuation">.</span>state<span class="token punctuation">&#125;</span></span><span class="token string">."</span></span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,Tn,A,ws,Cn,_,hs,sn,fs,ms,an,ys,_s,On,S,Es,zn,x,ya=`<code class="language-python"><span class="token keyword">import</span> tukaan

app <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>App<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">on_close</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Closing the window..."</span><span class="token punctuation">)</span>
	window<span class="token punctuation">.</span>destroy<span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span>on_close_callback <span class="token operator">=</span> on_close
<span class="token comment"># Note, that it's not on_close(), because it would run the function immediately</span>
<span class="token comment"># Just assign it, like a variable</span>

app<span class="token punctuation">.</span>on_close_callback<span class="token punctuation">.</span>__call__<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># You can query this callback later, and run it explicitly if you want</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,Dn,f,vs,tn,bs,Ts,en,Cs,Os,on,zs,Ds,Pn,H,_a=`<code class="language-python"><span class="token keyword">import</span> tukaan

app <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>App<span class="token punctuation">(</span><span class="token punctuation">)</span>

CAN_BE_CLOSED <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>on_close</span>
<span class="token keyword">def</span> <span class="token function">on_close</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> CAN_BE_CLOSED<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Closing the window..."</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Can't close"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,An,M,Ps,xn,m,As,pn,xs,Hs,ln,Ms,Ws,cn,Ls,Rs,Hn,W,Ea=`<code class="language-python"><span class="token keyword">import</span> tukaan

app <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>App<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">"Main window"</span><span class="token punctuation">)</span>

second_window <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>Window<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">"Second window"</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`;return{c(){h=p("h1"),Ln=t("Working with windows: "),j=p("code"),Rn=t("App"),Yn=t(" and "),F=p("code"),In=t("Window"),un=u(),E=p("p"),Nn=t("Previously you\u2019ve learned how to create a window with "),U=p("code"),Sn=t("tukaan.App"),Bn=t(". Now let\u2019s see what we can do with it."),rn=u(),L=p("p"),qn=t("By default the window looks something like this:"),kn=u(),R=p("p"),Y=p("img"),dn=u(),I=p("p"),jn=t("It\u2019s size is 200 by 200 pixels, and it\u2019s title is \u201CTukaan window\u201D. But of course we can modify it."),wn=u(),C=p("pre"),hn=u(),N=p("p"),Fn=t("And you can set the title and size later in the program"),fn=u(),O=p("pre"),mn=u(),z=p("h2"),Un=t("The state of the window"),yn=u(),k=p("p"),Gn=t("You can query the state of the window with the "),G=p("code"),Xn=t("state"),Jn=t(" property. The possible returned values are: "),X=p("code"),Kn=t("normal"),Qn=t(", "),J=p("code"),Vn=t("maximized"),Zn=t(", "),K=p("code"),$n=t("minimized"),gn=t(", "),Q=p("code"),ns=t("fullscreen"),ss=t(", "),V=p("code"),as=t("hidden"),ts=t(" and "),Z=p("code"),es=t("closed"),os=t("."),_n=u(),D=p("pre"),En=u(),y=p("p"),ps=t("The user can minimize the window by clicking on the "),$=p("code"),ls=t("\u2015"),cs=t(" in the titlebar. However, you can minimize a window in the program as well, by calling the "),g=p("code"),is=t("minimize"),us=t(" method."),vn=u(),v=p("p"),rs=t("With the "),nn=p("code"),ks=t("restore"),ds=t(" method you can restore the window. So if the window was minimized unminimize it, if it was maximized then unmaximize it and so on."),bn=u(),P=p("pre"),Tn=u(),A=p("h2"),ws=t("What to do when closing the window"),Cn=u(),_=p("p"),hs=t("You can set a function to run when the user clicks on the "),sn=p("code"),fs=t("X"),ms=t(" in the corner. If you override the default function, you need to call the "),an=p("code"),ys=t("destroy"),_s=t(" method when you want to close it."),On=u(),S=p("p"),Es=t("The callback should take a single argument, into which the window to be closed will be passed. This way you can easily access the object in the function."),zn=u(),x=p("pre"),Dn=u(),f=p("p"),vs=t("Or, if you like, you can use the "),tn=p("code"),bs=t("on_close"),Ts=t(" decorator, which is a bit simpler. The callback should return "),en=p("code"),Cs=t("True"),Os=t(" if the window can be closed, and "),on=p("code"),zs=t("False"),Ds=t(", if not."),Pn=u(),H=p("pre"),An=u(),M=p("h2"),Ps=t("Using multiple windows"),xn=u(),m=p("p"),As=t("You can\u2019t create multiple "),pn=p("code"),xs=t("tukaan.App"),Hs=t(" instances, if you try it will raise an error. This is because a second Tcl interpreter would confuse the program. Instead we can use the "),ln=p("code"),Ms=t("tukaan.Window"),Ws=t(" class to create more windows. The methods and properties on it are mostly the same as on the "),cn=p("code"),Ls=t("App"),Rs=t(" object."),Hn=u(),W=p("pre"),this.h()},l(n){h=l(n,"H1",{id:!0});var o=i(h);Ln=e(o,"Working with windows: "),j=l(o,"CODE",{});var Ns=i(j);Rn=e(Ns,"App"),Ns.forEach(s),Yn=e(o," and "),F=l(o,"CODE",{});var Ss=i(F);In=e(Ss,"Window"),Ss.forEach(s),o.forEach(s),un=r(n),E=l(n,"P",{});var Mn=i(E);Nn=e(Mn,"Previously you\u2019ve learned how to create a window with "),U=l(Mn,"CODE",{});var Bs=i(U);Sn=e(Bs,"tukaan.App"),Bs.forEach(s),Bn=e(Mn,". Now let\u2019s see what we can do with it."),Mn.forEach(s),rn=r(n),L=l(n,"P",{});var qs=i(L);qn=e(qs,"By default the window looks something like this:"),qs.forEach(s),kn=r(n),R=l(n,"P",{});var js=i(R);Y=l(js,"IMG",{src:!0,alt:!0}),js.forEach(s),dn=r(n),I=l(n,"P",{});var Fs=i(I);jn=e(Fs,"It\u2019s size is 200 by 200 pixels, and it\u2019s title is \u201CTukaan window\u201D. But of course we can modify it."),Fs.forEach(s),wn=r(n),C=l(n,"PRE",{class:!0});var va=i(C);va.forEach(s),hn=r(n),N=l(n,"P",{});var Us=i(N);Fn=e(Us,"And you can set the title and size later in the program"),Us.forEach(s),fn=r(n),O=l(n,"PRE",{class:!0});var ba=i(O);ba.forEach(s),mn=r(n),z=l(n,"H2",{id:!0});var Gs=i(z);Un=e(Gs,"The state of the window"),Gs.forEach(s),yn=r(n),k=l(n,"P",{});var d=i(k);Gn=e(d,"You can query the state of the window with the "),G=l(d,"CODE",{});var Xs=i(G);Xn=e(Xs,"state"),Xs.forEach(s),Jn=e(d," property. The possible returned values are: "),X=l(d,"CODE",{});var Js=i(X);Kn=e(Js,"normal"),Js.forEach(s),Qn=e(d,", "),J=l(d,"CODE",{});var Ks=i(J);Vn=e(Ks,"maximized"),Ks.forEach(s),Zn=e(d,", "),K=l(d,"CODE",{});var Qs=i(K);$n=e(Qs,"minimized"),Qs.forEach(s),gn=e(d,", "),Q=l(d,"CODE",{});var Vs=i(Q);ns=e(Vs,"fullscreen"),Vs.forEach(s),ss=e(d,", "),V=l(d,"CODE",{});var Zs=i(V);as=e(Zs,"hidden"),Zs.forEach(s),ts=e(d," and "),Z=l(d,"CODE",{});var $s=i(Z);es=e($s,"closed"),$s.forEach(s),os=e(d,"."),d.forEach(s),_n=r(n),D=l(n,"PRE",{class:!0});var Ta=i(D);Ta.forEach(s),En=r(n),y=l(n,"P",{});var B=i(y);ps=e(B,"The user can minimize the window by clicking on the "),$=l(B,"CODE",{});var gs=i($);ls=e(gs,"\u2015"),gs.forEach(s),cs=e(B," in the titlebar. However, you can minimize a window in the program as well, by calling the "),g=l(B,"CODE",{});var na=i(g);is=e(na,"minimize"),na.forEach(s),us=e(B," method."),B.forEach(s),vn=r(n),v=l(n,"P",{});var Wn=i(v);rs=e(Wn,"With the "),nn=l(Wn,"CODE",{});var sa=i(nn);ks=e(sa,"restore"),sa.forEach(s),ds=e(Wn," method you can restore the window. So if the window was minimized unminimize it, if it was maximized then unmaximize it and so on."),Wn.forEach(s),bn=r(n),P=l(n,"PRE",{class:!0});var Ca=i(P);Ca.forEach(s),Tn=r(n),A=l(n,"H2",{id:!0});var aa=i(A);ws=e(aa,"What to do when closing the window"),aa.forEach(s),Cn=r(n),_=l(n,"P",{});var q=i(_);hs=e(q,"You can set a function to run when the user clicks on the "),sn=l(q,"CODE",{});var ta=i(sn);fs=e(ta,"X"),ta.forEach(s),ms=e(q," in the corner. If you override the default function, you need to call the "),an=l(q,"CODE",{});var ea=i(an);ys=e(ea,"destroy"),ea.forEach(s),_s=e(q," method when you want to close it."),q.forEach(s),On=r(n),S=l(n,"P",{});var oa=i(S);Es=e(oa,"The callback should take a single argument, into which the window to be closed will be passed. This way you can easily access the object in the function."),oa.forEach(s),zn=r(n),x=l(n,"PRE",{class:!0});var Oa=i(x);Oa.forEach(s),Dn=r(n),f=l(n,"P",{});var b=i(f);vs=e(b,"Or, if you like, you can use the "),tn=l(b,"CODE",{});var pa=i(tn);bs=e(pa,"on_close"),pa.forEach(s),Ts=e(b," decorator, which is a bit simpler. The callback should return "),en=l(b,"CODE",{});var la=i(en);Cs=e(la,"True"),la.forEach(s),Os=e(b," if the window can be closed, and "),on=l(b,"CODE",{});var ca=i(on);zs=e(ca,"False"),ca.forEach(s),Ds=e(b,", if not."),b.forEach(s),Pn=r(n),H=l(n,"PRE",{class:!0});var za=i(H);za.forEach(s),An=r(n),M=l(n,"H2",{id:!0});var ia=i(M);Ps=e(ia,"Using multiple windows"),ia.forEach(s),xn=r(n),m=l(n,"P",{});var T=i(m);As=e(T,"You can\u2019t create multiple "),pn=l(T,"CODE",{});var ua=i(pn);xs=e(ua,"tukaan.App"),ua.forEach(s),Hs=e(T," instances, if you try it will raise an error. This is because a second Tcl interpreter would confuse the program. Instead we can use the "),ln=l(T,"CODE",{});var ra=i(ln);Ms=e(ra,"tukaan.Window"),ra.forEach(s),Ws=e(T," class to create more windows. The methods and properties on it are mostly the same as on the "),cn=l(T,"CODE",{});var ka=i(cn);Ls=e(ka,"App"),ka.forEach(s),Rs=e(T," object."),T.forEach(s),Hn=r(n),W=l(n,"PRE",{class:!0});var Da=i(W);Da.forEach(s),this.h()},h(){w(h,"id","working-with-windows-app-and-window"),Ha(Y.src,Is="/resources/docs/empty_window.png")||w(Y,"src",Is),w(Y,"alt","Empty Tukaan window"),w(C,"class","language-python"),w(O,"class","language-python"),w(z,"id","the-state-of-the-window"),w(D,"class","language-python"),w(P,"class","language-python"),w(A,"id","what-to-do-when-closing-the-window"),w(x,"class","language-python"),w(H,"class","language-python"),w(M,"id","using-multiple-windows"),w(W,"class","language-python")},m(n,o){c(n,h,o),a(h,Ln),a(h,j),a(j,Rn),a(h,Yn),a(h,F),a(F,In),c(n,un,o),c(n,E,o),a(E,Nn),a(E,U),a(U,Sn),a(E,Bn),c(n,rn,o),c(n,L,o),a(L,qn),c(n,kn,o),c(n,R,o),a(R,Y),c(n,dn,o),c(n,I,o),a(I,jn),c(n,wn,o),c(n,C,o),C.innerHTML=wa,c(n,hn,o),c(n,N,o),a(N,Fn),c(n,fn,o),c(n,O,o),O.innerHTML=ha,c(n,mn,o),c(n,z,o),a(z,Un),c(n,yn,o),c(n,k,o),a(k,Gn),a(k,G),a(G,Xn),a(k,Jn),a(k,X),a(X,Kn),a(k,Qn),a(k,J),a(J,Vn),a(k,Zn),a(k,K),a(K,$n),a(k,gn),a(k,Q),a(Q,ns),a(k,ss),a(k,V),a(V,as),a(k,ts),a(k,Z),a(Z,es),a(k,os),c(n,_n,o),c(n,D,o),D.innerHTML=fa,c(n,En,o),c(n,y,o),a(y,ps),a(y,$),a($,ls),a(y,cs),a(y,g),a(g,is),a(y,us),c(n,vn,o),c(n,v,o),a(v,rs),a(v,nn),a(nn,ks),a(v,ds),c(n,bn,o),c(n,P,o),P.innerHTML=ma,c(n,Tn,o),c(n,A,o),a(A,ws),c(n,Cn,o),c(n,_,o),a(_,hs),a(_,sn),a(sn,fs),a(_,ms),a(_,an),a(an,ys),a(_,_s),c(n,On,o),c(n,S,o),a(S,Es),c(n,zn,o),c(n,x,o),x.innerHTML=ya,c(n,Dn,o),c(n,f,o),a(f,vs),a(f,tn),a(tn,bs),a(f,Ts),a(f,en),a(en,Cs),a(f,Os),a(f,on),a(on,zs),a(f,Ds),c(n,Pn,o),c(n,H,o),H.innerHTML=_a,c(n,An,o),c(n,M,o),a(M,Ps),c(n,xn,o),c(n,m,o),a(m,As),a(m,pn),a(pn,xs),a(m,Hs),a(m,ln),a(ln,Ms),a(m,Ws),a(m,cn),a(cn,Ls),a(m,Rs),c(n,Hn,o),c(n,W,o),W.innerHTML=Ea},p:Ys,i:Ys,o:Ys,d(n){n&&s(h),n&&s(un),n&&s(E),n&&s(rn),n&&s(L),n&&s(kn),n&&s(R),n&&s(dn),n&&s(I),n&&s(wn),n&&s(C),n&&s(hn),n&&s(N),n&&s(fn),n&&s(O),n&&s(mn),n&&s(z),n&&s(yn),n&&s(k),n&&s(_n),n&&s(D),n&&s(En),n&&s(y),n&&s(vn),n&&s(v),n&&s(bn),n&&s(P),n&&s(Tn),n&&s(A),n&&s(Cn),n&&s(_),n&&s(On),n&&s(S),n&&s(zn),n&&s(x),n&&s(Dn),n&&s(f),n&&s(Pn),n&&s(H),n&&s(An),n&&s(M),n&&s(xn),n&&s(m),n&&s(Hn),n&&s(W)}}}class La extends Pa{constructor(h){super(),Aa(this,h,null,Ma,xa,{})}}export{La as default};