import os
import sys
import json
from config import APP_NAME, DEFAULT_LANGUAGE
from about import about
from download_menu import download_menu
# from settings import settings

def load_locale(lang):
    with open(f'src/locales/{lang}.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def main():
    
    current_lang = DEFAULT_LANGUAGE
    t = load_locale(current_lang)
    
    while True:
        os.system('cls')
        print(APP_NAME)
        print()
        print(f'1.{t['download']}')
        # print(f'2.{t['settings']}')
        print(f'2.{t['about']}')
        print()
        
        
        main_menu = input(':')

        if main_menu == '1':
            os.system('cls')
            download_menu(t)
        
        #elif main_menu == '2':
        #    settings()
        
        elif main_menu == '2':
            os.system('cls')
            about(t)
        
        elif main_menu == '0':
            os.system('cls')
            sys.exit()     
        
        
if __name__ == '__main__':
    main()