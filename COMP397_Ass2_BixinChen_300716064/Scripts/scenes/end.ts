module scenes {
    export class End extends objects.Scene {
        // member variables
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
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
            this._gameOverLabel = new objects.Label("Game Over!", "60px", "Consolas", "#000000", 450, 230, true);
            this._restartButton = new objects.Button("playagain", 450, 320, true);
            this._exitButton = new objects.Button("exittomenu", 450, 360, true);

            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - END SCENE`);

            this.addChild(this._sky);

            this.addChild(this._gameOverLabel);

            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);

            this.addChild(this._restartButton);

            this.addChild(this._exitButton);

            this._restartButton.on("click", function(){
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