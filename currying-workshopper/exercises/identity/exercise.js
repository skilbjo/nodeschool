var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , path          = require('path')
  , fs = require('fs')


// checks that the submission file actually exists
exercise = filecheck(exercise)

// add setup.
exercise.addSetup(function (mode, callback) {

    this.solutionModule = require(getSolutionPath() + 'solution.js');
    this.submissionModule = require([process.cwd(), this.args[0]].join('/'));
    // console.log ("this.solutionModule", this.solutionModule);  //Solution provided by us
    // console.log ("this.submissionModule", this.submissionModule);  // solution provided by the submitter
    // console.log ("this.submissionArgs", this.submissionArgs);  // aregument for submitter solution
    // console.log ("this.solutionArgs", this.solutionArgs);  // aregument for solution program
    process.nextTick(callback);
});

// add a processor.
exercise.addProcessor(function (mode, callback) {
    var pass = true;
    var random = Math.random();
    //  var idx = this.solutionModule(random);
    var idx = this.submissionModule(random);
    console.log("idx: ", idx);
    console.log("this.submissionModule: ", this.submissionModule);
    if (idx !== random) {
        exercise.emit('fail', 'this.ready was not set to true.');
        pass = false;
    }
    process.nextTick(function () {
        callback(null, pass)
    });
});

// Print out the suggested solution when the student passes. This is copied from
// workshopper-exercise/execute because the rest of execute is not relevant to
// the way this is tested.
exercise.getSolutionFiles = function (callback) {
    var solutionDir = getSolutionPath();

    fs.readdir(solutionDir, function (err, list) {
        if (err) {
            return callback(err);
        }

        list = list
            .filter(function (f) { return (/\.js$/).test(f) })
            .map(function (f) { return path.join(solutionDir, f)});

        callback(null, list);
    });
};

function getSolutionPath() {
    return path.join(exercise.dir, './solution/');
}
// compare stdout of solution and submission
//exercise = comparestdout(exercise)

module.exports = exercise
