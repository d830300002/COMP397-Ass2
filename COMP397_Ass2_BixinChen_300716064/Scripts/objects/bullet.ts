namespace objects {
    export class Bullet extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Plane.
       * @memberof Bullet;
       */
      constructor() {
        super("bullet");
  
        this.Start();
      }
  
      // private methods
   
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._horizontalSpeed = 10;
        this.x = 150;
      
      }
  
      public Update(): void {
        this.x += this._horizontalSpeed;    
      }
  
      public Reset(): void {
             
      }
    }
  }