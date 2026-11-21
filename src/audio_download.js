import { input } from './utils/input.js';
import { clear } from './utils/clear.js';
import { runDownload } from './utils/runner.js';
import { t } from './conf/i18n.js';
import { APP_NAME } from './conf/config.js';

export async function audio_download() {
    while (true) {
        clear();
        console.log(APP_NAME);
        console.log();
        console.log(`0: ${t('exit')}`);
        console.log();

        const url = await input('>');

        if (url === '0') {
            clear();
            return;
        } else if (!url.trim()) {
            clear();
            continue;
        } else {
            await runDownload(url, 'mp3');
        }
    }
}