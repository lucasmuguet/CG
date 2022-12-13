
function setup() {
    createCanvas(600,600);
}  

function segmento(A,B) {
    line(A.x, A.y, B.x, B.y);
}

function ponto(A) {
    circle(A.x,A.y,10);
}

function combina(A,B,t) {
    return {x:(1-t)*A.x+t*B.x,y:(1-t)*A.y+t*B.y};
}

function draw() {
    let p0,p1, p2, p3;
    background(200);
    p0 = {x:10,y:height/3};
    p1 = {x:width-10,y:height/3};
    p2 = (x::10, height/2);
    p3 = {x:mouseX,y:mouseY};
    //segmento(p1,p3);
    //segmento(p3,p2);
    noFill();
    beginShape();
    for(let t=0; t<=1; t+=0.01)
    {
        A = combina(p0,p3,t);
        B = combina(p3,p1,t);
        C = combina(p1,p2,t);
        D = combina(A,B,t);
        E = combina(B,C,t);
        F = combina(D,E,t);
        //segmento(A,B);
        //ponto(A);
        //ponto(B);
        //ponto(C);
        vertex(F.x,F.y);
    }
    endShape();
}
