/* 
html
<div class="js_cdtimer">
    <p><img src="../../img/num/count.png" alt="" width="33"></p>
    <p class="js_time"></p>
</div>
<script>
var countDown = new pirate.CountDown({
countMsgElm: document.querySelector('.js_cdtimer'),
timeElm: document.querySelector('.js_cdtimer .js_time'),
startTime: new Date('2013/08/13 13:59:55'),
endTime: new Date('2013/08/13 13:59:59'),
cssControl: false,
hmsType: {h:false, m:true, s:true}
});
</script>
*/

window.pirate = {};

(function(win, doc){
    var ns = win.pirate;
    function CountDown(pOption){
        this.countMsgElm = pOption.countMsgElm;
        this.timeElm = pOption.timeElm;
        this.nowTime = pOption.startTime;
        this.endTime = pOption.endTime;
        this.cssControl = pOption.cssControl;
        this.hmsType = pOption.hmsType;
        this.hmsElms = [];
        this.init();
    }
    var fn = CountDown.prototype;
    fn.init = function(){
        var self = this,
            me = self.init,
            tArr = ['h', 'm', 's'],
            tElms = [],
            i,
            il;
        for(i=0, il=tArr.length; i<il; i++){
            if(this.hmsType[tArr[i]]){
                tElms[i] = doc.createElement('span');
                tElms[i].setAttribute('class', tArr[i]);
                self.hmsElms.push(self.timeElm.appendChild(tElms[i]));
            }
        }
        self.count();
    }
    fn.zeroPadding = function(pNum){
        return ('0'+pNum).slice(-2);
    }
    fn.count = function(){
        var self = this,
            i,
            il;
        self.tTime = (self.endTime - self.nowTime) / 1000;
        self.tHour = "" + (self.tTime/36000|0) + (self.tTime/3600%10|0);
        self.tMin = "" + (self.tTime%3600/600|0) + (self.tTime%3600/60%10|0);
        self.tSec = "" + (self.tTime%60/10|0) + (self.tTime%60%10);

        if(self.tTime >= 0){
            for (i=0, il=self.hmsElms.length; i<il; i++) {
                self.writeTime(self.hmsElms[i]);
            }
        }
        if(self.tTime > 0){
            self.nowTime.setTime(self.nowTime.getTime() + 1000);
            setTimeout(function(){self.count();}, 10000);
        }
    }
    fn.writeTime = function(target){
        var self = this,
            hmsType = target.getAttribute('class');
        if(hmsType == 'h'){
            rewrite(self.tHour);
        }else if(hmsType == 'm'){
            rewrite(self.tMin);
        }else if(hmsType == 's'){
            rewrite(self.tSec);
        }
        function rewrite(time){
            var tElm,
                tTimer = self.zeroPadding(time),
                tStrs = tTimer.split(''),
                i,
                il;
            while(target.firstChild){
                target.removeChild(target.firstChild);
            }
            for (i=0, il=tStrs.length; i<il; i++) {
                if(self.cssControl){
                    tElm = doc.createElement('span');
                    tElm.setAttribute('class', 'num');
                    tElm.setAttribute('title', tStrs[i]);
                    target.appendChild(tElm);
                }else{
                    target.innerHTML = target.innerHTML + tStrs[i];
                }
            }
        }
    }
    ns.CountDown = CountDown;
})(this, this.document);
