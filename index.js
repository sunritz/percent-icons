exports.per = function(idc) {
  var d = document;
  var css = d.createElement('style');
  css.setAttribute('id', 'rbcss');
  var rbcss = '',rhcss = '',rpcss = '';
  for (let i = 0; i <= idc.length - 1; i++) {
    var rbd = d.getElementById(idc[i]);
    if (rbd.getAttribute('type') == 'ball') {
      var val = Number(rbd.dataset.value).toFixed(2);
      val < 0 ? val = 0 : val = val;
      val > 100 ? val = 100 : val = val;
      var siz = rbd.dataset.size;
      var fon = rbd.dataset.font;
      var bgc = rbd.dataset.bgcolor;
      var col = rbd.dataset.color;
      var barcolor = rbd.dataset.barcolor;
      var textcolor = rbd.dataset.textcolor;
      siz <= 100 ? siz = 100 : siz = siz;
      siz >= 200 ? siz = 200 : siz = siz;
      var s3 = parseInt(siz) - 6;
      var color;
      if (val >= 90) {
        color = `<stop offset="10%" stop-color=` +barcolor+ ` stop-opacity="0.4" class="rbcolor"/>
                 <stop offset="80%" stop-color=` +barcolor+ ` stop-opacity="0.8" class="rbcolor"/>`
      } else {
        color = `<stop offset="10%" stop-color=` +col+ ` stop-opacity="0.4" class="rbcolor"/>
                 <stop offset="80%" stop-color=` +col+ ` stop-opacity="0.8" class="rbcolor"/>`}
    rbd.innerHTML = `
    <div class="rate-ball-text">` + val + `%</div>
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 200 210">
        <defs>
        <path id="wave-shape" stroke="rgba(255,255,255,.8)" stroke-width=".5"
      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 58-18 88-18 58 18 88 18 v185h-528z"></path>
        </defs>
        <g class="parallax">
        <use xlink:href="#wave-shape" x="50" y="0" fill="url(#` + idc[i] + `c)"></use>
        <use xlink:href="#wave-shape" x="50" y="3" fill="url(#` + idc[i] + `c)"></use>
        <use xlink:href="#wave-shape" x="50" y="6" fill="url(#` + idc[i] + `c)"></use>
        </g>
        <defs>
        <linearGradient id="` + idc[i] + `c" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(90)">
      ` + color + `
    </linearGradient>
      </defs>
      </svg>`
      rbcss += `#` + idc[i] + `{
        width: ` + siz + `px;
        height: ` + siz + `px;
        background-image: linear-gradient(-180deg, rgba(8, 159, 22, 1) 0%, `+ bgc +` 0%);
        border-radius: 100%;
        overflow: hidden;
        position: relative;
      }`
      rbcss += `#` + idc[i] + `:before {
        width: ` + s3 + `px;
        height: ` + s3 + `px;
        content: '';
        background-image: linear-gradient(180deg, rgba(255, 255, 255, .7) 0%, rgba(125, 255, 137, 0) 50%);
        border-radius: 100%;
        position: absolute;
        left: 3px;
        top: 3px;
      }`
      rbcss += `#` + idc[i] + `:after {
        content: '';
        width: ` + s3 + `px;
        height: ` + s3 + `px;
        background-image: linear-gradient(180deg, rgba(125, 255, 137, 0) 50%, rgba(255, 255, 255, .3) 100%);
        border-radius: 100%;
        position: absolute;
        left: 3px;
        top: 3px;
      }`
      rbcss += `#` + idc[i] + ` .rate-ball-text{
        width:` + siz + `px;
        color:`+ textcolor +`;
      }`
      rbcss += `#` + idc[i] + ` .parallax > use{
        animation: wave-move 1s linear infinite;
        animation-duration: .9s;
      }`
      rbcss += `#` + idc[i] + ` .wave{
        margin-top: ` + (100 - val) + `%;
      }`
      rbcss += `#` + idc[i] + ` .parallax > use {
        animation: wave-move 1s linear infinite;
        animation-duration: .9s;
      }`
      rbcss += `#` + idc[i] + ` .parallax > use:nth-child(1) {
        animation-delay: -.1s;
      }`
      rbcss += `#` + idc[i] + ` .parallax > use:nth-child(2) {
        animation-delay: -.5s;
      }`
      rbcss += `#` + idc[i] + ` .parallax > use:nth-child(3) {
        animation-delay: -.8s;
      }`
      rbcss += `
    .rate-ball-text {
    position: absolute;
    text-align: center;
    top:calc(50% - `+ fon +`/2);
    color:#fff;
    font-size:`+ fon +`;
  }
  @keyframes wave-move {
    0% {
      transform: translate(90px, 0);
    }
    100% {
      transform: translate(-85px, 0);
    }
  }`
} else if (rbd.getAttribute('type') == 'hoop'){
      var rhd = d.getElementById(idc[i]);
      var val = Number(rhd.dataset.value).toFixed(2);
      val < 0 ? val = 0 : val = val;
      val > 100 ? val = 100 : val = val;
      var siz = rhd.dataset.size;
      siz <= 100 ? siz = 100 : siz = siz;
      siz >= 200 ? siz = 200 : siz = siz;
      var fon = rhd.dataset.font;
      var bgc = rhd.dataset.bgcolor;
      var col = rhd.dataset.color;
      var textcolor = rhd.dataset.textcolor;
      rhd.innerHTML = `
    <div class="rate-hoop-wrapper">
        <div class="hoop-wrapper">
        <div class="rate-hoop right-hoop"></div>
        </div>
        <div class="hoop-wrapper">
        <div class="rate-hoop left-hoop"></div>
        </div>
        <div class="rate-hoop-text">` + val + `%</div>
      </div>`
      var rb = val >= 50 ? 225 : 45 + 3.6 * val;
      var lb = val <= 50 ? 45 : 45 + 3.6 * (val - 50);
      rhcss += `#` + idc[i] + ` .rate-hoop-wrapper {
        width: ` + siz + `px;
        height: ` + siz + `px;
        position: relative;
      }`
      rhcss += `#` + idc[i] + ` .rate-hoop-text{
        width: ` + siz + `px;
        top:calc(` + siz + `px / 2 - 15px);
        font-size: ` + fon + `;
        height:30px;
        line-height: 30px;
        position: absolute;
        text-align: center;
        color:`+ textcolor +`;
        }`
      rhcss += `#` + idc[i] + ` .hoop-wrapper{
        width: ` + siz / 2 + `px;
        height: ` + siz + `px;
        position: absolute;
        top:0;
        overflow: hidden;}`
      rhcss += `#` + idc[i] + ` .rate-hoop{
        width: ` + (siz - 20) + `px;
        height: ` + (siz - 20) + `px;
        border:10px solid ` + col + `;
        border-radius: 50%;
        position: absolute;
        top:0;
        transform: rotate(45deg);}`
      rhcss += `#` + idc[i] + ` .right-hoop{
        border-top-color:` + bgc + `;
        border-right-color:` + bgc + `;
        border-left-color:` + col + `;
        border-bottom-color:` + col + `;
        transform: rotate(` + rb + `deg);
        right:0;}`
      rhcss += `#` + idc[i] + ` .left-hoop{
        border-top-color:` + col + `;
        border-right-color:` + col + `;
        border-left-color:` + bgc + `;
        border-bottom-color:` + bgc + `;
        transform: rotate(` + lb + `deg);
        left:0;}`
      rhcss += `
        .hoop-wrapper:first-child{right:0;}
        .hoop-wrapper:last-child{left:0;}`
    }else if (rbd.getAttribute('type') == 'bar'){
      var rba = d.getElementById(idc[i]);
      var val = Number(rba.dataset.value).toFixed(2);
      val < 0 ? val = 0 : val = val;
      val > 100 ? val = 100 : val = val;
      var wid = rba.dataset.width;
      var hig = rba.dataset.height;
      var fon = rba.dataset.font;
      var bgc = rba.dataset.bgcolor;
      var col = rba.dataset.color;
      var bor = rba.dataset.bordercolor;
      var bar = rba.dataset.barcolor;
      var two = rba.dataset.barcolortwo;
      var tbg = rba.dataset.textbg;
      var textcolor = rba.dataset.textcolor;
      wid <= 100 ? wid = 100 : wid = wid;
      wid >= 800 ? wid = 800 : wid = wid;
      hig >= 20 ? hig = 20 : hig = hig;
      hig <= 10 ? hig = 10 : hig = hig;
      rba.innerHTML = `
    <div class="rb-progress-bar">
        <div class="rb-percentage">
        </div>
        <div class="rb-percentage-text">`+val+`%</div>
    </div>`
      rpcss += `#` + idc[i] + ` .rb-percentage:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        border-radius: 10px;
        background-image: linear-gradient(to bottom, `+col+`, `+bgc+` 30%, transparent 70%, `+col+`);
      }`+
      `#` + idc[i] +` .rb-progress-bar {
        width:`+wid+`px;
        height:`+hig+`px;
        position: relative;
        background-color: `+bgc+`;
        border: 1px solid `+bor+`;
        border-radius: 100px;
        display:inline-block;
      }`+
      `#` + idc[i] +` .rb-percentage-text{
        position: absolute;
        padding:4px;
        left:`+val+`%;
        top:`+(parseInt(hig)+7)+`px;
        border-radius: 0px 8px 8px 8px;
        text-align:center;
        font-size:`+fon+`;
        color:`+textcolor+`;
        background:`+tbg+`;
      }`+
      `#` + idc[i] +` .rb-percentage-text::before{
        content: '';
        position: absolute;
        left:-4px;
        transform:rotate(45deg);
        top: -4px;
        border:4px solid yellow;
        border-color:transparent;
        border-top-color:`+tbg+`;
        box-sizing: inherit;
      }`+
      `#` + idc[i] +` .rb-progress-bar .rb-percentage {
        height:`+hig+`px;
        width: `+val+`%;
        border-radius: 100px;
        background-color: `+bar+`;
        background-size: 3em 3em;
        float:left;
        background-image: linear-gradient(-45deg, transparent 0em, transparent 0.8em, `+two+` 0.9em, `+two+` 2.1em, transparent 2.1em, transparent 2.9em, `+two+` 3.1em);
        animation: rb-progress-animation 750ms infinite linear;
      }`+`
      @keyframes rb-progress-animation {
      0% {
          background-position: 0 0;
        }
        100% {
          background-position: 3em 0;
        }
      }`
    }
  }
  var rh = rbcss.concat(rhcss).concat(rpcss).concat("*{box-sizing:inherit;}");
  css.innerHTML = rh;
  d.body.appendChild(css);
}
