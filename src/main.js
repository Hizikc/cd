import { input, closeInput } from './utils/input.js';
import { t } from './conf/i18n.js';
import { about } from './about.js';
import { APP_NAME } from './conf/config.js';

async function main() {
    while (true) {
        console.clear();
        console.log(APP_NAME)
        console.log()
        console.log(`${1.}: ${t('download')}`)
        console.log()
        console.log(`${2.}: ${t('about')}`)
        console.log()
        console.log(`${0.}: ${t('exit')}`)

        const main_menu = await input('>')

        if (main_menu === '1') {
            console.clear();
            
        }

        else if (main_menu === '2') {
            console.clear();
            await about();
        }

        else if (main_menu === '0') {
            console.clear();
            closeInput();
            process.exit(0);
        }
    }
}

main();