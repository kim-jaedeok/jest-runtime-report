There are two commits here.  
The first commit 93477141fd47d2a9f69455112c5ed0d4aca54f67 did some configuration work and made jest-runtime log to the console on esm module import and transform execution.  
In the second commit 6ab27680214e5d6e3b059fb9b7ee10d3723a61e9, we removed `type:"module"` from the package.json of auto-bind.  
If you run checkout, install, and test with the first commit, you'll see "auto-bind: esm module import error!".  
If you run install, test after checking out with the second commit, you'll see "auto-bind: execute transform".  
This confirms that transform is not executed when `type:"module"` is declared in package.json.  
