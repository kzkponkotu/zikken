/*
    普通のドレミファソラシド
    ドレミファソラシド
*/

function getParameterDefinitions() {
  return [
    //きらきら星
    { name: 'onkai', type: 'text', initial: 'ドドソソララソ休フフミミレレド', caption: '音階' },
    { name: 'dai_hutosa', type: 'float', initial: 6, caption: '台の太さ(mm)' },
    { name: 'ita_hutosa', type: 'float', initial: 2, caption: '鍵盤の板の太さ(mm)' },
    { name: 'ita_sukima', type: 'float', initial: 1, caption: '鍵盤の板の隙間(mm)' },
    ];
}

function main(p) {
    o = [];
    pi=3.141592;
    r=50;
    corner=16;    
    ang=360/corner;

    //木琴の台    
    for(i=0; i<corner; i++){
        p1x=0;
        p1y=0;
        p2x = r * cos(i*ang);
        p2y = r * sin(i*ang);
        p3x = r * cos((i+1)*ang);
        p3y = r * sin((i+1)*ang);
        dai = linear_extrude({ height: p.dai_hutosa },polygon([ [0,0],[p2x,p2y],[p3x,p3y] ]));
        o.push(difference(dai,cylinder({r: 7.5, h: p.dai_hutosa})));
    }

    //木琴の鍵盤
    for(i=0; i<corner; i++){
        p2x = r * cos(i*ang+p.ita_sukima);
        p2y = r * sin(i*ang+p.ita_sukima);
        p3x = r * cos((i+1)*ang-p.ita_sukima);
        p3y = r * sin((i+1)*ang-p.ita_sukima);
        p1x = p2x + p.ita_hutosa * cos(((i)*ang+(180.0/corner)));
        p1y = p2y + p.ita_hutosa * sin(((i)*ang+(180.0/corner)));
        o.push(linear_extrude({ height: onkai_to_suuti(p.onkai,i) },polygon([ [p1x,p1y],[p2x,p2y],[p3x,p3y] ])));        
        p2x = p3x + p.ita_hutosa * cos(((i+1)*ang-(180.0/corner)));
        p2y = p3y + p.ita_hutosa * sin(((i+1)*ang-(180.0/corner)));
        o.push(linear_extrude({ height: onkai_to_suuti(p.onkai,i) },polygon([ [p1x,p1y],[p2x,p2y],[p3x,p3y] ]))); 
    }

    r = 50+p.ita_hutosa+3;

    //木琴の台    
    for(i=0; i<corner; i++){
        p1x=0;
        p1y=0;
        p2x = r * cos(i*ang);
        p2y = r * sin(i*ang);
        p3x = r * cos((i+1)*ang);
        p3y = r * sin((i+1)*ang);
        dai = linear_extrude({ height: p.dai_hutosa },polygon([ [0,0],[p2x,p2y],[p3x,p3y] ]));
        o.push(difference(dai,cylinder({r: 7.5, h: p.dai_hutosa})));
    }

    function onkai_to_suuti(onkai,num){
        hz = [261.6255653005986,293.6647679174076,329.6275569128699,349.2282314330039,391.99543598174927,440,493.8833012561241,523.2511306011972];
        doremi = ["ド","レ","ミ","フ","ソ","ラ","シ","ト"];
        a=619.9193495931551;
        for(j=0; j<doremi.length; j++){
            if(onkai[num] == doremi[j])return (1/sqrt(hz[j]))*a + p.dai_hutosa;
        }

        return 0;
    }
    
    return union(o);
}