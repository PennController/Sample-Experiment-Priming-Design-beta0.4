var shuffleSequence = seq("trial");
PennController.ResetPrefix(null);
PennController.AddHost("http://files.lab.florianschwarz.net/ibexfiles/PennController/SampleTrials/");

var items = [
    // Picture selection trial
    ["trial", "PennController", PennController(
        defaultImage
            .settings.size(200, 200)
        ,
        newText("test sentence", "Which patch is greener?")
            .print()
        ,
        newCanvas("patches", 500, 200)
            .settings.add(   0, 0, newImage("color1", "green1.png") )   // Embedded image creation
            .settings.add( 300, 0, newImage("color2", "green2.png") )   // Embedded image creation
            .print()
        ,
        newSelector("patch")
            .settings.add( getImage("color1") , getImage("color2") )
            .wait()
    )]
    ,
    // Rating trial
    ["trial", "PennController", PennController(
        newText("green", "To me the color green is...")
        ,
        newScale("judgment",    "cold", "cool", "lukewarm", "warm", "hot")
            .settings.labels("top")
            .settings.before( getText("green") )
            .settings.size("auto")  // Use max width for each cell (here, lukewarm's cell's width)
            .print()
            .wait()
    )]
];
