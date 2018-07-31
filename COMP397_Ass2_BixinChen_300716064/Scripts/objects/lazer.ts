namespace objects {
    export class Lazer extends objects.GameObject {
      // member variables
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Plane.
       * @memberof Bullet;
       */
      constructor() {
        super("lazer");
  
        this.Start();
      }
  
      // private methods
   
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._horizontalSpeed = 10;
        this.x = 0;
        this.y=250;

      }
  
      public Update(): void {
        this.x -= this._horizontalSpeed;    
      }
  
      public Reset(): void {
             
      }
    }
  }