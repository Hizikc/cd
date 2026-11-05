import os
from config import APP_NAME, VERSION, DEVELOPER

def about(t):
    while True:
        print(APP_NAME)
        print()
        print(f'{t['developer']}:{DEVELOPER}')
        print()
        print(f'{t['version']}:{VERSION}')
        print()
        print(f'0. {t['exit']}')
        
        about = input(': ')
    
        if about == '0':
            os.system('cls')
            return
        
        os.system('cls')
        