module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;
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

            this._welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "#000000", 450, 150, true);
            this._startButton = new objects.Button("start", 450, 270, true);
            this._instructionButton = new objects.Button("instruction", 450, 320, true);
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
            console.log(`Starting - START SCENE`);
            this.addChild(this._sky);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

            this._instructionButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INS;
            }, this);
        }
    }
}