import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api/index.js';
import { LOCALE_KEYS } from '@AthenaShared/locale/languages/keys.js';
import { LocaleController } from '@AthenaShared/locale/locale.js';
import { NoClip_Events } from '@AthenaPlugins/athena-plugin-hotkey-noclip/shared/events.js';


export class NoClip {
    static init() {
        alt.onClient(NoClip_Events.TOGGLE, NoClip.toggleNoClip);
    }

    static toggleNoClip(player: alt.Player) {
        if (Athena.systems.permission.hasOne('account', player, ['admin'])) {
            const isNoClipping: boolean | null = player.getSyncedMeta('NoClipping') as boolean;
            const data = Athena.document.character.get(player);
            if (typeof data === 'undefined') {
                return;
            }

            if (!isNoClipping && !data.isDead) {
                player.setSyncedMeta('NoClipping', true);
                Athena.player.emit.message(player, `No Clip: ${LocaleController.get(LOCALE_KEYS.LABEL_ON)}`);
                player.visible = false;
                return;
            }

            if (data.isDead) {
                Athena.player.emit.message(player, LocaleController.get(LOCALE_KEYS.CANNOT_PERFORM_WHILE_DEAD));
            }

            player.spawn(player.pos.x, player.pos.y, player.pos.z, 0);
            player.setSyncedMeta('NoClipping', false);
            Athena.player.emit.message(player, `No Clip: ${LocaleController.get(LOCALE_KEYS.LABEL_OFF)}`);
            player.visible = true;
            player.health = 199;
        }
    }
}
