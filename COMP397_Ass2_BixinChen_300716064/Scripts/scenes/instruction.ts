module scenes {
    export class Instruction extends objects.Scene {
        // member variables
        private _ruleLabel: objects.Label;
        private _startButton: objects.Button;
        private _exitButton: objects.Button;
        private _sky: objects.Sky;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._sky = new objects.Sky();
            this._ruleLabel = new objects.Label("1. Use the mouse to avoid UFO's laser\n\n2. Use the left mouse button to fire", "20px", "Consolas", "#000000", 450, 200, true);
            this._startButton = new objects.Button("start", 450, 320, true);
            this._exitButton = new objects.Button("exittomenu", 450, 360, true);

            this.Main();
        }

        public Update():void {

            this._sky.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - END SCENE`);

            this.addChild(this._sky);

            this.addChild(this._ruleLabel);

            this.addChild(this._startButton);

            this.addChild(this._exitButton);

            this._startButton.on("click", function(){
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

            this._exitButton.on("click", function(){
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        }
    }
}