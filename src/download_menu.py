import os
from config import APP_NAME, DEFAULT_LANGUAGE


def download_menu(t):
    while True:
        print(APP_NAME)
        print()
        print(f'1.{t['audio']}')
        print(f'2.{t['video']}')
        print(f'0.{t['exit']}')
        print()
        
        
        download_menu = input(':')
        
        if download_menu == '1':
            pass
        
        elif download_menu == '2':
            pass
        
        elif download_menu == '0':
            os.system('cls')
            return