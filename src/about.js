import { input } from './utils/input.js';
import { t } from './conf/i18n.js';
import { APP_NAME, VERSION, DEVELOPER } from './conf/config.js';

export async function about() {
    while (true) {
    console.log(APP_NAME)
    console.log()
    console.log(`${t('developer')}: ${DEVELOPER}`)
    console.log()
    console.log(`${t('version')}: ${VERSION}`)
    console.log()
    console.log(`${0.}: ${t('exit')}`)


        const about = await input ('>')

        if (about === '0') {
        console.clear();
        return;
        }

        else {
            continue;
        }
    }
}