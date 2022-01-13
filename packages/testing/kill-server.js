import { pidsFileName } from './dirs.config.js';
import { kill } from 'process';
import { existsSync, readFileSync } from 'fs';
import fse from 'fs-extra';

const killServers = () => {
    if(!existsSync(pidsFileName)) return;

    const pids = JSON.parse(readFileSync(pidsFileName));

    pids.forEach(pid => {
        try {
            kill(pid);
        } catch(e) {
            console.log(`Unable to kill ${pid}. ${e}`);
        }
    });

    fse.removeSync(pidsFileName);
};

killServers();