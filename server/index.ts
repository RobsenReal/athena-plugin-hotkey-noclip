import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api/index.js';
import { NoClip } from './src/noclip.js';

const PLUGIN_NAME = 'NoClip';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, async () => {
    NoClip.init();

    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);
});
