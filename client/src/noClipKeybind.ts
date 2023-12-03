import * as alt from 'alt-client';
import * as AthenaClient from '@AthenaClient/api/index.js';
import { KEY_BINDS } from '@AthenaShared/enums/keyBinds.js';
import { NoClip_Events } from '@AthenaPlugins/athena-plugin-hotkey-noclip/shared/events.js';


export class NoClipKeybind {
    static init() {
        AthenaClient.systems.hotkeys.add({
            key: KEY_BINDS.NOCLIP,
            description: 'Toggle NoClip',
            identifier: 'gpnoclip-toggle',
            keyDown: NoClipKeybind.toggleNoClip,
        });
    }

    static toggleNoClip() {
        alt.emitServer(NoClip_Events.TOGGLE);
    }
}
