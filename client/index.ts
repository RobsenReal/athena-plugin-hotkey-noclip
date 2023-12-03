import { SYSTEM_EVENTS } from '@AthenaShared/enums/system.js';
import * as alt from 'alt-client';
import { NoClipKeybind } from './src/noClipKeybind.js';

alt.onceServer(SYSTEM_EVENTS.TICKS_START, NoClipKeybind.init);
alt.log(`~ly~Plugin Loaded -- Noclip`);
