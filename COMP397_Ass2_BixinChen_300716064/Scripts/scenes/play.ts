module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _sky: objects.Sky;
        private _plane:objects.Plane;
        private _bullet:objects.Bullet;
        private _bullets:objects.Bullet[];
       // private _lazers:objects.Lazer[];
        private _lazer:objects.Lazer;
        private _ufo:objects.Ufo;

        public windSound:createjs.AbstractSoundInstance;
   
        // constructors
        constructor() {
            super();
            this.Start();
        }

        // private methods


        // public methods
        public Start():void {
            this.windSound = createjs.Sound.play("wind");
            this.windSound.loop = -1;
            this.windSound.volume = 0.5;

            this._sky=new objects.Sky();
            this._plane=new objects.Plane();           
            this._bullets=new Array<objects.Bullet>();
           // this._lazers=new Array<objects.Lazer>();
            this._ufo=new objects.Ufo();
            this._lazer= new objects.Lazer();

           

            this.Main();
        }

        public Update():void {
            
            this._sky.Update();
            this._plane.Update();
            this._ufo.Update();
            this._lazer.Update();

            if(this._lazer.x<0){ 
                var lazerSound = createjs.Sound.play("lazershoot");
                lazerSound.volume = 0.5;
                this._lazer.y=this._ufo.y;
                this._lazer.x=this._ufo.x-50;
            }
            if(managers.Collision.check(this._plane, this._lazer)){
                managers.Game.ScoreBoard.Lives -= 1;
                this._lazer.y=this._ufo.y;
                this._lazer.x=this._ufo.x-50;
            }
            this._bullets.forEach(bullet => {
                bullet.Update();  
                if(managers.Collision.check(this._ufo, bullet)){
                    managers.Game.ScoreBoard.Score += 100;
                    this.removeChild(bullet);
                }
                if(bullet.x>900)
                {
                   this.removeChild(bullet);
                   
                }           
            });
        }

        public Reset():void {

        }

        public Destroy():void { 
            this.windSound.stop();
            this.removeAllChildren();
        }

        public Main():void {

            this.addChild(this._sky);
            this.addChild(this._plane);
            this.addChild(this._ufo);

           this.on("click",function(){
                var bulletSound = createjs.Sound.play("bulletshoot");
                bulletSound.volume = 0.5;
                this._bullet= new objects.Bullet();
                this._bullet.y=this._plane.y;
                this.addChild(this._bullet);
                this._bullets.push(this._bullet);
                console.log(this.children)

            },this);

            this.addChild(this._lazer);
          
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        }     
    }  
}
