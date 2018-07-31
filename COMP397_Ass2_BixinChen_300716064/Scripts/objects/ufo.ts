namespace objects {
    export class Ufo extends objects.GameObject {
      // member variables
      private _verticalSpeed: number;
      private _horizontalSpeed: number;
  
      /**
       * Creates an instance of Cloud.
       * @memberof Ufo
       */
      constructor() {
        super("ufo");
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): void {
        // check bottom boundary
        if (this.y >= 350 || this.x>=850 || this.x<=600 || this.y<=50) {
          this.Reset();
        }
      }
  
      // public methods
      public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this._verticalSpeed =  2;
        this._horizontalSpeed = 2;
        this.x=700;
        this.y=200;
        this.Reset();
      }
  
      public Update(): void {
        this.y += this._verticalSpeed;
        this.x += this._horizontalSpeed;
        this._checkBounds();
      }
  
      public Reset(): void {
        this._verticalSpeed =  -Math.floor((Math.random() * 5) -2);
        this._horizontalSpeed = -this._horizontalSpeed // between -2 and 2 ppf     
      }
    }
  }
  