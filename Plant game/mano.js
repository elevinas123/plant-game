



//functions
const newSort = arr => arr.sort((a, b) =>b[1][0]-a[1][0])
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;
const random = (min, max) => (Math.random() * (max - min + 1) ) + min;  
const willMutate = (prob) => randomInt(1, 100)<=prob*100?true: false
const adjustMutations = (variable, mutationProb, whatPercentageToEvolve) => {
  if (willMutate(mutationProb)){
    variable += random(variable*whatPercentageToEvolve*-1+1, height*whatPercentageToEvolve-1)
  }
}
const Grid = (sizeX, sizeY)=>{
    let grid = []
    for (let i=0; i<sizeY; i++){
      grid.push([])
      for (let j=0; j<sizeX; j++){
        grid[i].push(new Tile(i, j))
      }
    }
    return grid
  }
 const Xspread = (y, x, height,tillDie, strength, resistence)=> {
  let n = true
  let b=0
  while (n&&b<10){
    let n = randomInt(spread*-1, spread) 
    let k= randomInt(spread*-1, spread)
    let i = n+y
    let j = k+x
    if (i>=0 && i<__height && j>=0 && j<width && (n !=0 || j!=k)){
      if (grid[i][j].name =="tile") {
        height = adjustMutations(height, heightMutationProb, whatPercentageToEvolve_Height)
        tillDie = adjustMutations(tillDie, deathMutationProb, whatPercentageToEvolve_Height)
        strength = adjustMutations(strength, strengthMutationProb, whatPercentageToEvolve_Strength)
        resistence = adjustMutations(resistence, resistenceMutationProb, whatPercentageToEvolve_Resistence)
        grid[i][j] = new Plant(i, j, height, tillDie, strength, resistence)
        return
      }
      if (grid[y][x].strength > grid[i][j].resistence){
        height = adjustMutations(height, heightMutationProb, whatPercentageToEvolve_Height)
        tillDie = adjustMutations(tillDie, deathMutationProb, whatPercentageToEvolve_Height)
        strength = adjustMutations(strength, strengthMutationProb, whatPercentageToEvolve_Strength)
        resistence = adjustMutations(resistence, resistenceMutationProb, whatPercentageToEvolve_Resistence)
        grid[i][j] = new Plant(i, j, height, tillDie, strength, resistence)
        return
      }
      return
    }
    b++
    }
    
  }
  function mouseClicked() {
    if (mouseX>gridX ||mouseY>gridY){return}
    let x = Math.floor(mouseX/(gridX/width))
    let y = Math.floor(mouseY/(gridY/__height))
    let plant = new Plant(y, x)
    grid[y][x] = plant
    return false
  }
  const int = () => {
    for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid[i].length; j++){
        if(grid[i][j].name=="plant"){
          grid[i][j].setSunAmmount=10
        }
      }
    }
  
  }
  const mousePos =() => {
    if (mouseX>gridX ||mouseY>gridY){return [-1, -1]}
    let x = Math.floor(mouseX/(gridX/width))
    let y = Math.floor(mouseY/(gridY/__height))
    return [x, y]
  }
  const display = () => {
    let visi = Object.entries(dict)
    visi = newSort(visi)
    let u = []
    for(let i =0;i<visi.length&& i<3; i++){u.push(visi[i])}
    console.log(u)
    return u
  }
  //objects
  class Tile{
    constructor(){
      this.name="tile"
    }
  }
  class Plant {
    constructor(y, x,    height =Math.random()*10, tillDie = Math.random()*20-10) {
    this.name = "plant"
    this.y = y
    this.x = x
    this.height = height
    this.heightMult = 1
    this.sunAmmountNeeded = 50
    this.trueSunAmmount = this.sunAmmountNeeded
    this.sunNow = 0
    this.tillDie = tillDie
    this.numTillDie = death + tillDie
    this.sett = false
    this.plantChar  =NaN
    this.strength = null
    this.resistence = null
    }
    set heightSetter(t){
      if (this.height<0){this.height=0}
      let Height = this.heigth
      y = this.y
      x = this.x
      let sun = 100
      for (let i=-1; i<2; i++){
        for(let j=-1; j<2; j++){
            if (i<0||i>height||j<0||j>width||i==y||j==x){continue}
            else{
              if(grid[i][j].name=="tile"){continue}
              if(Height-grid[i][j].height>0){
                sun -=Height-grid[i][j].height
              }
            }
          }
        }
      this.heightMult = sun

    }
    set setSun(a){
      this.heigthSetter = "ok"
      this.death = "ok"
      if (!this.sett){this.plantC = "ok"}
      let sun = this.sunAmmountNeeded
      sun+=this.height*0.01

      sun+=this.tillDie*5
      sun/=this.heightMult
      this.trueSunAmmount= sun
    }
    set setSunAmmount(m){
      
      this.setSun = "ok"
      let s = this.sunNow
      s+=m
      if (s>this.trueSunAmmount){
        s=Math.floor(s-this.trueSunAmmount)
        let z = Math.random()*100
        if (z<=100*mutationProb){
            let t =  Math.random()*100
            switch(true){
                case t<=40:
                    let h1 = Math.random()
                    let g1 = Math.random()*5
                    if (h1>0.5){g1*=-1}
                    let th1 = this.height+this.height*g1
                    if(th1<=0){th1=1}
                    Xspread(this.y, this.x, this.height*th1, this.tillDie)
                    break;
                case t<=80:
                    let h2 = Math.random()
                    let g2 = Math.random()*5
                    if (h2>0.5){g2*=-1}
                    let tT2 =this.tillDie+ this.tillDie*g2
                    if(tT2<=0){tT2=1}
                    Xspread(this.y, this.x, this.height, this.tillDie*tT2)
                    break;
                case t<=100:
                    let h3 = Math.random()
                    let g3 = Math.random()*5
                    let r3 = Math.random()
                    let n3 = Math.random()*5
                    if (h3>0.5){g3*=-1}
                    if (n3>0.5){r3*=-1}
                    let th3 = this.height+this.height*g3
                    let tT3 =this.tillDie+ this.tillDie*r3
                    if(th3<=0){th3=1}
                    if(tT3<=0){tT3=1}
                    Xspread(this.y, this.x,th3,tT3)
                    break;
                
            }
        }
        else {
            Xspread(this.y, this.x, this.height, this.tillDie)
        }
        
      }
      this.sunNow = s
    }
    set death(a) {
        if (this.tillDie<0){this.tillDie=2}
        let count =this.numTillDie
        count--
        if (count<=0){
            grid[this.y][this.x] = new Tile
            if(this.plantChar !=NaN && this.plantChar in dict){
              if (dict[this.plantChar][0]>1){dict[this.plantChar][0] --}
              else(delete dict[this.plantChar])
            }
        }
        
        this.numTillDie = count
    }
    set plantC(n){
      let plantChar1= `${Math.round(this.height).toString()},${Math.round(this.tillDie).toString()}`
      this.plantChar = plantChar1
      if(plantChar1 in dict){dict[plantChar1][0]++}
      else{dict[plantChar1]=[1, [Math.round(this.height), Math.round(this.tillDie)]]}
      this.sett = true
      
    }
  }
  //variables
    //gridVariables
    let gridX = 500
    let gridY = 500
    let width = 20
    let __height = 20
    let grid = Grid(width, __height)
    let canvasX = 800
    let canvasY = 500
    //evolution variables 
    let spread = 1
    //

    //evolving variables
    let death = 20
    let mutationProb = 0.001
    let heightMutationProb = 0.001
    let deathMutationProb = 0.001
    let resistenceMutationProb = 0.001
    let strengthMutationProb = 0.001
    let whatPercentageToEvolve_Height = 0.2
    let whatPercentageToEvolve_TillDie = 0.5
    let whatPercentageToEvolve_Resistence = 0.2
    let whatPercentageToEvolve_Strength= 0.2
   

    //
    let dict = {}
  //setup and drawing
  function setup() {
    createCanvas(canvasX, canvasY);
    background(0);
    let button1 = createButton("1gen");
    button1.position(100);
    button1.mousePressed(change);
    let button2 = createButton('start auto');
    button2.position(200);
    button2.mousePressed(interval1());
  }
let interval1 = () => {
    setInterval(change, 100)
}
/*
let interval2 = () => {
  setInterval(display, 3000)
}
*/
  function change() {
    int()
  }
  
  function draw() {
    for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid[i].length; j++){
        if (grid[i][j].name == "tile") {
          fill(255)
        }
        else {
          fill(grid[i][j].height*20+10, grid[i][j].tillDie*20+10, 10)
        }
        rect(j*gridX/width, i*gridY/__height, gridX/width, gridY/__height)
      }
    }
    let disp = display()
   
    for (let i=0; i<disp.length; i++){
      fill(255)
      rect(500, i*gridY/3,canvasX-gridX,canvasY/3 )
      fill(disp[i][1][1][0]*20+10, disp[i][1][1][1]*20+10, 10)
      rect(520, i*gridY/3+30,(canvasX-gridX)/3,canvasY/5)
      fill(0)
      text(`height = ${disp[i][1][1][0]}`,640,i*gridY/3+50 )
      text(`death = ${disp[i][1][1][1]}`,640,i*gridY/3+80)
    }

  
  }
  
  //everything else
