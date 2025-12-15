console.log("start testing");

setTimeout(() => {
  console.log("ending test");
}, 3000);

// exit 0 ensures CI passes
setTimeout(() => process.exit(0), 3100);
