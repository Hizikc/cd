import { input } from './utils/input.js';
import { clear } from './utils/clear.js';
import { t } from './conf/i18n.js';
import { APP_NAME } from './conf/config.js';

export async function download_menu() {
    while (true) {
        console.log(APP_NAME)
        console.log()
        console.log(`1: ${t('audio')}`)
        console.log()
        console.log(`2: ${t('video')}`)
        console.log()
        console.log(`0: ${t('exit')}`)

        const download_menu = await input('>')

        if (download_menu === '1') {
            clear();
            
        }

        else if (download_menu === '2') {
            clear();
            
        }

        else if (download_menu === '0') {
            clear()
            return
        }
        
        else {
            continue;
        }
    }
}