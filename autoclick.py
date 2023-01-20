import sys
from PyQt5.QtWidgets import *
from PyQt5.QtCore import *
import pyautogui

class MyApp(QWidget):
    def __init__(self):
        super().__init__()
        self.xs, self.y, self.delay, self.num_click, self.num_routine = [0], 0, 0, 0, 0
        self.start_btn_click()
    
    def start_btn_click(self):
        self.timer = QTimer()
        self.xs = [1050, 1600, 1650, 1700, 1750, 1850, 1950, 2000, 2050, 2150]
        self.y = 1950
        self.delay = 1
        self.routine_number = 10

        self.timer.start(self.delay * 1000)
        self.timer.timeout.connect(self.mouse_click)

    def mouse_click(self):
        pyautogui.click(self.xs[self.num_click], self.y)
        pyautogui.click(500, 500, clicks=1)
        self.num_click += 1

        if self.num_click == self.routine_number:
            self.num_click = 0
            self.num_routine += 1
            print(self.num_routine)

if __name__ == '__main__':
    app = QApplication(sys.argv)
    ex = MyApp()
    sys.exit(app.exec_())