//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoard;
    var TextureAtlas;
    var Manifest = [
        { id: "start", src: "/Assets/images/Start.png" },
        { id: "exittomenu", src: "/Assets/images/ExitToMenu.png" },
        { id: "playagain", src: "/Assets/images/PlayAgain.png" },
        { id: "instruction", src: "/Assets/images/Instruction.png" },
        { id: "sky", src: "/Assets/images/Sky.png" },
        { id: "plane", src: "/Assets/images/Plane.png" },
        { id: "bullet", src: "/Assets/images/Bullet.png" },
        { id: "ufo", src: "/Assets/images/UFO.png" },
        { id: "lazer", src: "/Assets/images/Lazer.png" },
        { id: "wind", src: "/Assets/Audio/Wind.mp3" },
        { id: "lazershoot", src: "/Assets/Audio/LazerShoot.mp3" },
        { id: "thunder", src: "/Assets/audio/thunder.ogg" },
        { id: "bulletshoot", src: "Assets/Audio/BulletShoot.mp3" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage;
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        ScoreBoard = new managers.ScoreBoard;
        managers.Game.ScoreBoard = ScoreBoard;
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Main Game Started...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.INS:
                CurrentScene = new scenes.Instruction();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map