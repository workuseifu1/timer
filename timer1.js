const args = process.argv.slice(2);
for (let j = 0; j < args.length; j++) {
  if (args[j] > 0) {
    setTimeout(() => {
      process.stdout.write('\x07' + args[j] + ' seconds\n');;
    }, args[j] * 1000)
  }
}