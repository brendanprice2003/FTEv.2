import fs from 'fs';
import chalk from 'chalk';

import config from '../config.js';

export default () => {

    // Check for path
    if (!config.path) {
        console.log(chalk.red('Please provide a relative or absolute path to an image!'));
    };

    // Check autoFormat
    if (config.autoFormat) {

        let path = config.path.split('.');
        console.log(path[path.length-1]);
        
    };
};