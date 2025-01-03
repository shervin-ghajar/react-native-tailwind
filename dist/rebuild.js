#!/usr/bin/env node
import { execSync } from 'child_process';
import require$$0 from 'path';
import { fileURLToPath } from 'url';

try {
    console.log('Regenerating theme...');
    const configPath = require$$0.resolve(fileURLToPath(import.meta.url), '../../rollup.config.mjs');
    // Run the build script defined in package.json
    console.log('Regenerating theme...');
    execSync(`npx rollup -c ${configPath}`, { stdio: 'inherit' });
    console.log('Theme regeneration complete!');
}
catch (error) {
    console.error('Error during theme regeneration:', error);
    process.exit(1);
}
//# sourceMappingURL=rebuild.js.map
